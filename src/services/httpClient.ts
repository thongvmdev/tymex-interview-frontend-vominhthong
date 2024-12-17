import qs from 'querystring'

import axios from 'axios'

export const API_ROOT = 'http://localhost:5005'

const httpClient = axios.create({
  baseURL: API_ROOT,
  paramsSerializer: (params) => {
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([_, value]) => {
        return value !== undefined && value !== ''
      })
    )

    return qs.stringify(filteredParams)
  }
})

httpClient.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

httpClient.interceptors.response.use(
  (response) => {
    return response?.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default httpClient
