import { checkin } from "./checkin.service"
import axios from 'axios'


export const api = {
  checkin,
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

export const $http = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

