import {request} from './request.js'

export function getHomeIndex(city){
  return request({
    url:'mock/index.json',
    params: {
      city
    }
  })
}
export function getHomeCity(){
  return request({
    url:'mock/city.json'
  })
}
