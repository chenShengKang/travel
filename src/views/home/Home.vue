<template>
  <div class="home">
   <header-nav-bar></header-nav-bar>
   <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeSwiper from './child/HomeSwiper.vue'
import HeaderNavBar from './child/HeaderNavBar.vue'
import HomeIcons from './child/HomeIcons.vue'
import HomeRecommend from './child/HomeRecommend.vue'
export default {
  name:'Home',
  components: {
    HomeSwiper,
    HeaderNavBar,
    HomeIcons,
    HomeRecommend
  }
}
</script>

<style lang='less' scoped>

</style>
