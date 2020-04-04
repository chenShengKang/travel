<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <Detail-List :list="list"></Detail-List>
    <div class="s"></div>
  </div>
</template>

<script>
import DetailBanner from './child/DetailBanner.vue'
import DetailHeader from './child/DetailHeader.vue'
import DetailList from './child/DetailList.vue'

import { getDetailData } from '@/network/detail.js'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data(){
    return {
      list:[
        // {title:'成人票',children:[{
        //   title:'成人三级标题',
        //   children:[{
        //     title:'成人三级标题'
        //   }]
        // }]},{title:'儿童票'},{title:'学生票'}
      ],
     sightName:'',
     bannerImg:'',
     gallaryImgs:'',
      
    }
  },
  methods: {
    getDetailData(id){
      getDetailData(id).then(res => {
        res = res.data
        // this.detailDate = new DetailDate(res.sightName,res.bannerImg,res.gallaryImgs,res.categoryList)
        this.sightName = res.sightName
        this.bannerImg = res.bannerImg
        this.gallaryImgs = res.gallaryImgs
        this.list = res.categoryList

      })
    }
  },
  created(){
    this.getDetailData(this.$route.params.id)
  },


}
</script>

<style scoped>
.s{
  height: 5000px;
}
</style>
