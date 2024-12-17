import { mockProduct, render, screen } from '~/utils/test-utils'
import ProductCard from './index'

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />)

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument()
    expect(screen.getByText(`${mockProduct.price} ETH`)).toBeInTheDocument()
    expect(screen.getByText(`${mockProduct.author.firstName} ${mockProduct.author.lastName}`)).toBeInTheDocument()
  })
})
