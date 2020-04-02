<template>
  <div class="home">
   <header-nav-bar></header-nav-bar>
   <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeSwiper from './child/HomeSwiper.vue'
import HeaderNavBar from './child/HeaderNavBar.vue'
import HomeIcons from './child/HomeIcons.vue'
export default {
  name:'Home',
  components: {
    HomeSwiper,
    HeaderNavBar,
    HomeIcons
  }
}
</script>

<style lang='less' scoped>

</style>
