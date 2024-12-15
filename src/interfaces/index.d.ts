export type SortOrder = 'asc' | 'desc'

export interface MarketPlacePaging {
  _page?: number
  _limit?: number
}

export interface GetMarketPlaceParams extends MarketPlacePaging {
  q?: string
  title_like?: string
  category?: string
  tier?: string
  theme?: string
  price?: number
  _sort?: string
  price_gte?: number
  price_lte?: number
  _order?: SortOrder
}

type AuthorStatus = 'online' | 'offline' | 'busy' | 'idle'

export interface IAuthor {
  firstName: string
  lastName: string
  email: string
  gender: string
  avatar: string
  onlineStatus: AuthorStatus
}

export interface IProduct {
  id: number
  title: string
  category: 'Upper Body' | 'Lower Body' | 'Hat' | 'Shoes' | 'Accessory' | 'Legendary' | 'Mythic' | 'Epic' | 'Rare'
  price: number
  isFavorite: boolean
  createdAt: number
  theme: 'Dark' | 'Light' | 'Colorful' | 'Halloween'
  tier: 'Basic' | 'Premium' | 'Deluxe'
  imageId: number // 1 -> 20 (integer)
  author: IAuthor
  backgroundColor: string
  ethPath: string
}

export interface FieldType {
  title: string
  price: [number, number]
  tier: string
  theme: string
  createAtOrder: SortOrder
  priceSortOrder: SortOrder
}
