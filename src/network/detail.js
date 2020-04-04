import { request } from './request.js'

export  function getDetailData(id){
  return request({
    url:'/mock/detail.json',
    params: {
      id
    }
  })
}

export class DetailDate{
  constructor(sighName,bannerImg,gallaryImgs,categoryList){
    this.sighName = sighName
    this.bannerImg = bannerImg
    this.categoryList = categoryList
    this.gallaryImgs = gallaryImgs
  }


}