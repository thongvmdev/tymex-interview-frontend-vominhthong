import { renderHook, act, mockProduct, mockProduct2 } from '~/utils/test-utils'
import { waitFor } from '@testing-library/react'
import useActions from '~/components/pages/Marketplace/hooks/useActions'
import marketplaceService from '~/services/marketplace.service'
import { FormInstance } from 'antd'

jest.mock('~/services/marketplace.service')

describe('useActions', () => {
  let form: FormInstance
  const mockMarketplaceService = marketplaceService as jest.Mocked<typeof marketplaceService>

  beforeEach(() => {
    form = {
      getFieldsValue: jest.fn(() => ({
        title: 'Test',
        tier: 'basic',
        theme: 'test',
        priceSortOrder: 'asc',
        price: [10, 100]
      })),
      scrollToField: jest.fn(),
      focusField: jest.fn(),
      getFieldInstance: jest.fn(),
      getFieldValue: jest.fn(),
      getFieldsError: jest.fn(),
      getFieldError: jest.fn(),
      isFieldTouched: jest.fn(),
      isFieldValidating: jest.fn(),
      isFieldsTouched: jest.fn(),
      resetFields: jest.fn(),
      setFields: jest.fn(),
      setFieldsValue: jest.fn(),
      validateFields: jest.fn()
    } as unknown as FormInstance

    jest.clearAllMocks()
  })

  test('should fetch the list of products on mount', async () => {
    mockMarketplaceService.getList.mockResolvedValue([mockProduct])

    const { result } = renderHook(() => useActions(form))

    expect(result.current.loading).toBe(true)

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
      expect(result.current.data).toEqual([mockProduct])
      expect(mockMarketplaceService.getList).toHaveBeenCalledTimes(1)
    })
  })

  test('should handle load more functionality', async () => {
    mockMarketplaceService.getList.mockResolvedValueOnce([mockProduct]).mockResolvedValueOnce([mockProduct2])

    const { result } = renderHook(() => useActions(form))

    await waitFor(() => {
      expect(result.current.data).toEqual([mockProduct])
    })

    await act(async () => {
      await result.current.handleLoadMore()
    })

    expect(result.current.data).toEqual([mockProduct, mockProduct2])
  })

  test('should call marketplaceService.getList after interval', async () => {
    jest.useFakeTimers()
    mockMarketplaceService.getList.mockResolvedValue([mockProduct])

    const { result } = renderHook(() => useActions(form))
    expect(result.current.data).toEqual([])

    act(() => {
      jest.advanceTimersByTime(60000)
    })

    await waitFor(() => {
      expect(marketplaceService.getList).toHaveBeenCalledTimes(2)
      expect(result.current.data).toEqual([mockProduct])
    })
    jest.useRealTimers()
  })
})
