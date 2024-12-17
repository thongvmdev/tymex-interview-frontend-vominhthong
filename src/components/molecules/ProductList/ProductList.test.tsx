import { render, screen, fireEvent, mockProduct } from '~/utils/test-utils'
import ProductList from './index'

const mockProductList = [mockProduct]

describe('ProductList Component', () => {
  test('renders loading spinner when loading is true', () => {
    render(<ProductList data={[]} onLoadMore={jest.fn()} loading={true} isLoadMore={false} />)

    const spinElement = screen.getByTestId('spinner-product-list')
    expect(spinElement).toBeInTheDocument()
    expect(spinElement).toHaveClass('ant-spin-spinning')
    expect(screen.queryByTestId('product-card')).not.toBeInTheDocument()
  })

  test('renders empty state when data is empty', () => {
    render(<ProductList data={[]} onLoadMore={jest.fn()} loading={false} isLoadMore={false} />)
    expect(screen.getByTestId('empty-product-list')).toBeInTheDocument()
    expect(screen.queryByTestId('product-card')).not.toBeInTheDocument()
  })

  test('renders product cards when data is not empty', () => {
    render(<ProductList data={mockProductList} onLoadMore={jest.fn()} loading={false} isLoadMore={false} />)
    expect(screen.queryByTestId('product-card')).toBeInTheDocument()
    expect(screen.getByText('Bassbreaker')).toBeInTheDocument()
  })

  test('renders "View More" button and handles click event', () => {
    const onLoadMoreMock = jest.fn()
    render(<ProductList data={mockProductList} onLoadMore={onLoadMoreMock} loading={false} isLoadMore={false} />)
    const button = screen.getByRole('button', { name: /View More/i })

    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(onLoadMoreMock).toHaveBeenCalled()
  })
})
