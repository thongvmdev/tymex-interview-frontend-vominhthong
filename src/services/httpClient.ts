import qs from 'querystring'

import axios from 'axios'

export const API_ROOT = import.meta.env.VITE_API_ROOT

const httpClient = axios.create({
  baseURL: API_ROOT,
  paramsSerializer: (params) => {
    return qs.stringify(params)
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
