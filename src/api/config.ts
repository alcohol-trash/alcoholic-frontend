import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.alcoholic.ml',
  withCredentials: true,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
})

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error.response)
  },
)

export default instance
