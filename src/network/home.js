import {request} from './request.js'

export function getHomeIndex(){
  return request({
    url:'mock/index.json'
  })
}
export function getHomeCity(){
  return request({
    url:'mock/city.json'
  })
}
export function getHomeDetail(){
  return request({
    url:'mock/detail.json'
  })
}