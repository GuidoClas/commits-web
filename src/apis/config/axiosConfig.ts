import axios from "axios"

const BASE_URL = process.env.BASE_URL;

export const api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
})

const errorHandler = (error: any) => {
  const statusCode = error.response?.status

  if (statusCode && statusCode !== 401) {
    console.error(error)
  }

  return Promise.reject(error)
}

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error)
})