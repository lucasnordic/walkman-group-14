import axios from 'axios'

export const Api = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT || 'http://192.168.1.87:3000/api/v1'
})
