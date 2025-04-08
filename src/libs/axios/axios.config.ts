import axios from "axios"

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  validateStatus: (status) => status >= 200 && status <= 302,
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


api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.data?.status === 401) {

      originalRequest._retry = true;
      localStorage.clear();
      window.location.href = '/auth/login';
    }
    return Promise.reject(error?.response?.data);
  }
);

export default api