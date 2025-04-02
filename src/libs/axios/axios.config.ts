import axios from 'axios'
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  const parseToken: {
    token: string
    expiry: number
  } = token ? JSON.parse(token) : null
  if (token) {
    config.headers.Authorization = `Bearer ${parseToken.token}`
  }
  return config
})

export default api
