import { FormInstance } from 'antd'
import { useCallback, useEffect, useReducer, useRef } from 'react'
import { GetMarketPlaceParams, IProduct, MarketPlacePaging } from '~/interfaces'
import marketplaceService from '~/services/marketplace.service'

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

const useActions = (form: FormInstance) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const latestState = useRef<IState>(state)
  const { data, loading, pagination, isLoadMore } = state

  const setLoading = (loading: boolean) => dispatch({ type: 'SET_LOADING', payload: loading })
  const setData = (data: IProduct[]) => dispatch({ type: 'SET_DATA', payload: data })
  const setLoadMore = (loading: boolean) => dispatch({ type: 'SET_LOAD_MORE', payload: loading })
  const setState = (payload: Pick<IState, 'data' | 'pagination'>) => dispatch({ type: 'BATCH_UPDATE', payload })

  const prepareParams = (): GetMarketPlaceParams => {
    const formData = form.getFieldsValue()
    const supportSortFields = ['price', 'createdAt']

    const params = {
      q: formData.title,
      tier: formData.tier,
      theme: formData.theme,
      _sort: supportSortFields[0], // TODO Check support multiple sort with jason-server
      _order: formData.priceSortOrder,
      price_gte: formData.price[0],
      price_lte: formData.price[1]
    }

    return params
  }

  const getList = useCallback(
    async (category?: string) => {
      try {
        setLoading(true)
        const params = prepareParams()

        const response = await marketplaceService.getList({ ...initialState.pagination, ...params, category })
        setState({ data: response, pagination: initialState.pagination })
      } catch (error) {
        console.log('🚀 ~ getList ~ error:', error)
      } finally {
        setLoading(false)
      }
    },
    [pagination]
  )

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
      const currentTotalItems = _latestState.pagination._page! * _latestState.pagination._limit!

      const response = await marketplaceService.getList({ ...params, _page: 1, _limit: currentTotalItems })
      setData(response)
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    getList()
  }, [])

  return { data, loading, form, handleLoadMore, isLoadMore, getList }
}

export default useActions
