import { IProduct } from '~/interfaces/products'
import httpClient from './httpClient'

const ENDPOINTS = {
  LIST_MARKETPLACE: '/products'
}

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
  _order?: 'asc' | 'desc'
}

const marketplaceService = {
  getList: async (params: GetMarketPlaceParams): Promise<IProduct[]> => {
    return await httpClient.get(ENDPOINTS.LIST_MARKETPLACE, { params })
  }
}

export default marketplaceService
