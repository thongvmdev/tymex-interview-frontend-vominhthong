import { RenderOptions, render as rtlRender } from '@testing-library/react'
import { ReactElement } from 'react'
import { IProduct } from '~/interfaces'

function render(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return rtlRender(ui, {
    ...options
  })
}

export const mockProduct = {
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

export * from '@testing-library/react'
export { render }
