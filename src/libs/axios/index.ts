import axios from 'axios'
import { LocalStorageKey } from '../local-storage'

export interface ErrorResponse {
  error: string
  message: string
  statusCode: number
  timestamp: Date
  path: string
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 60000,
  timeoutErrorMessage: 'Thời gian chờ kết nối quá lâu',
  headers: { 'Content-Type': 'application/json' },
})

// Interceptor trước khi gửi request
api.interceptors.request.use(
  async (config) => {
    // Kiểm tra nếu headers đã có token và id-device thì không làm gì thêm
    if (config.headers['Authorization'] && config.headers['ip-device']) {
      return config
    }

    // Lấy token và idDevice từ localStorage
    const token = localStorage.getItem(LocalStorageKey.TOKEN)

    // Nếu có token, gán cả token và idDevice vào headers
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error),
)

// Interceptor xử lý lỗi
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject(error)
    }

    const errorResponse: ErrorResponse = error.response.data

    if (errorResponse.statusCode === 401) {
      localStorage.removeItem(LocalStorageKey.TOKEN)
      window.location.href = '/login'
    }

    return Promise.reject(errorResponse)
  },
)
