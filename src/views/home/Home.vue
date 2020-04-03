<template>
  <div class="home">
   <header-nav-bar></header-nav-bar>
   <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeSwiper from './child/HomeSwiper.vue'
import HeaderNavBar from './child/HeaderNavBar.vue'
import HomeIcons from './child/HomeIcons.vue'
import HomeRecommend from './child/HomeRecommend.vue'
import HomeWeekend from './child/HomeWeekend.vue'
export default {
  name:'Home',
  components: {
    HomeSwiper,
    HeaderNavBar,
    HomeIcons,
    HomeRecommend,
    HomeWeekend

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
      ],
       recommendItem:[
        {id:'001',title:'云顶草上世界',city:'瓯海区',desc:'这里最近很火哦，好多人都在点评他呢!',price:'172',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/1809/4d/4d4afebae213d6a5a3.img.jpg_200x200_ad7de07d.jpg'},
        {id:'002',title:'温州乐园',city:'瓯海区',desc:'让每一个游客亲身融入主题文化中',price:'125',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/1601/6c/6c40693ccf30a590.water.jpg_200x200_555edf99.jpg'},
        {id:'003',title:'永嘉书院',city:'瓯海区',desc:'',price:'50',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/1607/f2/f2d99468a0871d69b4.water.jpg_200x200_547c9886.jpg'},
        {id:'004',title:'雁荡山',city:'瓯海区',desc:'帅的任都去过',price:'23',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/1604/70/7094d064511234be90.img.jpg_200x200_97db698d.jpg'},
        {id:'005',title:'刘伯温故里旅游景区-白丈祭',city:'瓯海区',desc:'',price:'55',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/1809/a0/a08f0b44aa5ffd9fa3.water.jpg_200x200_0d946f85.jpg'},
        {id:'006',title:'文字动物园',city:'瓯海区',desc:'',price:'30',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/1508/34/4734408329e141b40bc2f2f6d1b5c4da.water.jpg_200x200_23715037.jpg'},
        {id:'007',title:'龙湾国家森林公园',city:'瓯海区',desc:'园址峰峦环绕，松柏苍翠，竹林繁茂',price:'59',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/201301/15/3a5b3d27b59a888393835fbb.jpg_200x200_865f00c1.jpg'},
        {id:'008',title:'楠溪江',city:'瓯海区',desc:'龙湫山高势绝天，一线瀑走兜罗棉',price:'45',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/1603/20/20e0961e888e8db790.water.jpg_200x200_d36ad485.jpg'},
        {id:'010',title:'大龙湫',city:'瓯海区',desc:'龙湫山高势绝天，一线瀑走兜罗棉',price:'45',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/1603/20/20e0961e888e8db790.water.jpg_200x200_d36ad485.jpg'}
       ],
      weenkend:[
        {id:'001',title:'美丽的普陀山',desc:'人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化',imgUrl:'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg'},
        {id:'002',title:'温州必打卡',desc:'除了小商品，还有这些美景也在等你',imgUrl:'http://img1.qunarzz.com/sight/source/1505/da/2d9fbf88a7ed69.jpg_r_640x214_504a958c.jpg'},
        {id:'003',title:'享受生活',desc:'周末可以欣赏溪水潺潺，鸟语花香，品茗闲聊，细想芳华的淡雅之情，也可以野战密室漂流',imgUrl:'http://img1.qunarzz.com/sight/source/1505/6d/6cd359fbf0d713.jpg_r_640x214_fa3f0f11.jpg'},
        {id:'004',title:'水光十色',desc:'山水江海交融是这里的特色！',imgUrl:'http://img1.qunarzz.com/sight/source/1812/8e/7eb9675d610874.jpg_r_640x214_411fa7e0.jpg'},
      ]
    }
  },
  mounted(){
    this.$bus.$emit('recommend',this.recommendItem)
    this.$bus.$emit('iconList',this.iconList)
    this.$bus.$emit('weenkend',this.weenkend)
    
  }
}
</script>

<style lang='less' scoped>

</style>
