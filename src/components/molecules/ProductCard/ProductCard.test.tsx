import { render, screen } from '~/utils/test-utils'
import ProductCard from './index'
import { IProduct } from '~/interfaces'

const mockProduct = {
  id: 6,
  title: 'Bassbreaker',
  category: 'Lower Body',
  price: 161.04,
  isFavorite: true,
  createdAt: 1715002382000,
  theme: 'Dark',
  tier: 'Premium',
  imageId: 6,
  author: {
    firstName: 'Mead',
    lastName: 'Niccols',
    email: 'mniccols5@ameblo.jp',
    gender: 'Male',
    avatar: 'https://robohash.org/quoindolore.png?size=100x100&set=set1',
    onlineStatus: 'idle'
  },
  backgroundColor: 'linear-gradient(90deg, #43a6f6 50%, #5868f3 100%)',
  ethPath: '/images/eth-avatar/image-three.png'
} as IProduct

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />)

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument()
    expect(screen.getByText(`${mockProduct.price} ETH`)).toBeInTheDocument()
    expect(screen.getByText(`${mockProduct.author.firstName} ${mockProduct.author.lastName}`)).toBeInTheDocument()
  })
})
