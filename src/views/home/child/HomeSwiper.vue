<template>
 <div class="wrapper">
    <swiper  :options="swiperOption" >
    <!-- :not-next-tick="notNextTick" ref="mySwiper" -->
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-item" :src="item.imgUrl" :alt="item.alt">
    </swiper-slide>
   
    
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
  
 </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props:{
    list:{
      type:Array,
      dafault(){
        return []
      }
    }
  },
  data(){
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      // swiperList: [
      //   {id:'001',imgUrl:'//img1.qunarzz.com/sight/p0/201402/24/0b725e8cd5bb14af0a634e7dc7057e15.jpg_600x330_a1af1f44.jpg',alt:'动物园'},
      //   {id:'002',imgUrl:'//img1.qunarzz.com/sight/p0/1508/34/4734408329e141b40bc2f2f6d1b5c4da.water.jpg_600x330_7360ba88.jpg',alt:'江心屿'}
      // ]
    }
  }

}
</script>

<style lang="less" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active {
  background-color: #fff;
}
.wrapper{
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  .swiper-item{
    width: 100%;
    height: 31.25vw;

  }
}

</style>
