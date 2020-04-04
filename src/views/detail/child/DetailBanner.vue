<template>
  <div >
    <div class="detail-banner-swiper" @click="bannerClick">
      <!-- //img1.qunarzz.com/sight/p0/1809/4d/4d4afebae213d6a5a3.img.jpg_600x330_b4db1235.jpg" alt=" -->
      <img :src="bannerImg">
      <div class="detail-banner-info">
        <div class="detail-banner-title">
         {{sightName}}
        </div>
        <div class="detail-banner-number">
          <span class="iconfont banner-icon">&#xe665;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <gallary :imgs="gallaryImgs" v-show="gallaryShow" @swiperClick="swiperClick" ></gallary>
    </fade-animation>
  </div>
</template>

<script>
import Gallary from '@/components/common/gallary/Gallary.vue'
import FadeAnimation from '@/components/common/fade/FadeAnimation.vue'

export default {
  name: 'DetailBanner',
  props:['sightName','bannerImg','gallaryImgs'],
  components: {
    Gallary,
    FadeAnimation
  },
  data(){
    return {

      gallaryShow:false
    }
  },
  methods: {
    bannerClick(){
      this.gallaryShow = true;
    },
    swiperClick(){
      this.gallaryShow = false;
    }
  },
  mounted(){

  }
  
}
</script>

<style lang="less" scoped>
  .detail-banner-swiper{
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 55%;
    >img{
      width: 100%;
    }
    .detail-banner-info{
      display: flex;
      justify-content: space-between;

      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      color: rgba(255,255,255,.9);
      background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
        .detail-banner-title{
          // flex:1;
          line-height: 30px;
          text-indent: 20px;
          font-size: 16px;
          margin-bottom: 2px;
        }
        .detail-banner-number{
          // flex: 1;
          padding:0 15px;
          background-color: rgba(0,0,0,.6);
          border-radius: 10px;
          height: 24px;
          line-height: 24px;
          font-size: 12px;
          .banner-icon{
            font-size: 12px;
          }
        }  
    }
  }
</style>
