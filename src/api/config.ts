import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.alcoholic.ml',
  withCredentials: true,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
})

export default instance
