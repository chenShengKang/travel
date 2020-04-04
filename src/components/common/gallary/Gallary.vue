<template>
  <div class="container" v-on:click="itemClick">
    <div class="wrapper" >
       <swiper  :options="swiperOption" >
        <swiper-slide v-for="(item, index) of imgs" :key="index" >
          <img class="swiper-item" :src="item">
        </swiper-slide>
       

        <div class="swiper-pagination"  slot="pagination"></div>

      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props:['imgs'],
  data(){
    return {
      swiperOption:{
        pagination:".swiper-pagination",
        paginationType: 'fraction',
        observeParents: true,
        observer: true //页面发生改变时刷新
      }
    }
  },
  methods:{
    itemClick(){

      this.$emit('swiperClick')
    }
  }

}
</script>

<style lang="less" scoped>
  .wrapper /deep/ .swiper-pagination-fraction{
    bottom: -30px;
    color: #fff;
  }
  .wrapper /deep/ .swiper-container{
    overflow:inherit;
  }
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: #000;
  }
  .wrapper{
    height: 0;
    padding-bottom: 80%;
   
  }
  .container img{
    width: 100%;
  }
</style>
