import axios from 'axios'

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HOST}/api/`,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
