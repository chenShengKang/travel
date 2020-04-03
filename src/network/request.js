import axios from 'axios'

export function request(config){
  let instance = axios.create({
    baseURl:'http://localhost:8080',
    timeout: 5000
  })
  instance.interceptors.response.use(res => {
    return res.data
  })
  
  return instance(config)
}