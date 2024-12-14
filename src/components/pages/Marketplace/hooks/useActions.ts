import { Form } from 'antd'
import { useCallback, useEffect, useReducer, useRef } from 'react'
import { FieldType } from '~/interfaces/formFilter'
import { IProduct } from '~/interfaces/products'
import marketplaceService, { type GetMarketPlaceParams, type MarketPlacePaging } from '~/services/marketplace.service'

const initialState = {
  data: [] as IProduct[],
  loading: false,
  isLoadMore: false,
  pagination: {
    _page: 1,
    _limit: 20
  } as MarketPlacePaging
}

type IState = typeof initialState

type Action =
  | { type: 'SET_DATA'; payload: IProduct[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_LOAD_MORE'; payload: boolean }
  | { type: 'SET_PAGINATION'; payload: MarketPlacePaging }
  | { type: 'BATCH_UPDATE'; payload: Pick<IState, 'data' | 'pagination'> }

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload
      }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_LOAD_MORE':
      return { ...state, isLoadMore: action.payload }
    case 'SET_PAGINATION':
      return {
        ...state,
        pagination: action.payload
      }
    case 'BATCH_UPDATE':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

const useActions = () => {
  const [form] = Form.useForm<FieldType>()
  const [state, dispatch] = useReducer(reducer, initialState)
  const { data, loading, pagination, isLoadMore } = state
  const latestState = useRef<IState>(state)

  const setLoading = (loading: boolean) => dispatch({ type: 'SET_LOADING', payload: loading })
  const setData = (data: IProduct[]) => dispatch({ type: 'SET_DATA', payload: data })
  const setLoadMore = (loading: boolean) => dispatch({ type: 'SET_LOAD_MORE', payload: loading })
  const setState = (payload: Pick<IState, 'data' | 'pagination'>) => dispatch({ type: 'BATCH_UPDATE', payload })

  const prepareParams = (): GetMarketPlaceParams => {
    const formData = form.getFieldsValue()
    const params = {
      q: formData.title
    }
    return params
  }

  const getList = useCallback(async () => {
    try {
      setLoading(true)
      const params = prepareParams()

      const response = await marketplaceService.getList({ ...initialState.pagination, ...params })
      setState({ data: response, pagination: initialState.pagination })
    } catch (error) {
      console.log('🚀 ~ getList ~ error:', error)
    } finally {
      setLoading(false)
    }
  }, [pagination])

  const handleLoadMore = useCallback(async () => {
    try {
      setLoadMore(true)
      const params = prepareParams()
      const newPage = pagination._page! + 1
      const response = await marketplaceService.getList({ ...pagination, _page: newPage, ...params })

      setState({ data: [...data, ...response], pagination: { ...pagination, _page: newPage } })
    } catch (error) {
      console.log('🚀 ~ loadMore ~ error:', error)
    } finally {
      setLoadMore(false)
    }
  }, [pagination, data])

  useEffect(() => {
    latestState.current = state
  }, [state])

  useEffect(() => {
    const interval = setInterval(async () => {
      const params = prepareParams()
      const _latestState = latestState.current
      const _newLimit = _latestState.pagination._page! * _latestState.pagination._limit!

      const response = await marketplaceService.getList({ ...params, _page: 1, _limit: _newLimit })
      setData(response)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    getList()
  }, [])

  return { data, loading, form, handleLoadMore, isLoadMore, getList }
}

export default useActions
