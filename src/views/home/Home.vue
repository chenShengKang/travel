<template>
  <div class="home">
   <header-nav-bar></header-nav-bar>
   <home-swiper></home-swiper>

  </div>
</template>

<script>
import HomeSwiper from './child/HomeSwiper.vue'
import HeaderNavBar from './child/HeaderNavBar.vue'
export default {
  name:'Home',
  components: {
    HomeSwiper,
    HeaderNavBar
  }
}
</script>

<style lang='less' scoped>

</style>
