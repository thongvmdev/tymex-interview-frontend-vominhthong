import httpClient from './httpClient'
import { GetMarketPlaceParams, IProduct } from '~/interfaces'

const ENDPOINTS = {
  LIST_MARKETPLACE: '/products'
}

const marketplaceService = {
  getList: async (params: GetMarketPlaceParams): Promise<IProduct[]> => {
    return await httpClient.get(ENDPOINTS.LIST_MARKETPLACE, { params })
  }
}

export default marketplaceService
