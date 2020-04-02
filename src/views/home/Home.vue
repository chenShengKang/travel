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
    HomeIcons,

  },
  data(){
    return {
      iconList:[
        {id:'001',desc:'景点门票', imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
        {id:'002',desc:'踏青赏花', imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png'},
        {id:'003',desc:'文字动物园', imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/4c8956a3f5cf0a90f3c6801115fb9fb3.png'},
        {id:'004',desc:'温州必游', imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'},
        {id:'005',desc:'云顶草上世界', imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png'},
        {id:'006',desc:'雁荡山', imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'},
        {id:'007',desc:'温州乐园', imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'},
        {id:'008',desc:'动植物园', imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png'},
        {id:'009',desc:'白丈祭', imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/811d606236784ca9617fb81a058dee3f.png'},
        {id:'010',desc:'永嘉书院', imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png'},
      ]
      
    }
  },
  mounted(){
    this.$bus.$emit('iconList',this.iconList)
  }
}
</script>

<style lang='less' scoped>

</style>
