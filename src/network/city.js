import {request} from './request.js'


export function getCity(){
  return request({
    url:'mock/city.json'
  })
}