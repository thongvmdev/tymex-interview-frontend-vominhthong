import { render, screen, fireEvent, waitFor, mockProduct } from '~/utils/test-utils'
import Marketplace from './index'
import useActions from './hooks/useActions'

jest.mock('./hooks/useActions')
jest.mock('~/assets/images/cover-image.jpg', () => 'test-file-stub')

describe('Marketplace Component', () => {
  const mockUseActions = useActions as jest.Mock

  beforeEach(() => {
    mockUseActions.mockReturnValue({
      data: [mockProduct],
      loading: false,
      handleLoadMore: jest.fn(),
      isLoadMore: false,
      getList: jest.fn()
    })
  })

  test('renders CoverImage component', () => {
    render(<Marketplace />)
    expect(screen.getByTestId('cover-image')).toBeInTheDocument()
  })

  test('renders FormFilter component', () => {
    render(<Marketplace />)
    expect(screen.getByPlaceholderText('Quick Search')).toBeInTheDocument()
  })

  test('renders ProductCategory component', () => {
    render(<Marketplace />)
    expect(screen.getByTestId('product-category')).toBeInTheDocument()
  })

  test('renders ProductList component', () => {
    render(<Marketplace />)
    expect(screen.getByTestId('product-list')).toBeInTheDocument()
  })

  test('calls getList when FormFilter is submitted', async () => {
    const { getList } = mockUseActions()
    render(<Marketplace />)
    fireEvent.click(screen.getByText('Search'))
    await waitFor(() => expect(getList).toHaveBeenCalled())
  })

  test('calls handleLoadMore when "View More" button is clicked', async () => {
    const { handleLoadMore } = mockUseActions()
    render(<Marketplace />)
    fireEvent.click(screen.getByTestId('view-more-btn'))
    await waitFor(() => expect(handleLoadMore).toHaveBeenCalled())
  })
})
