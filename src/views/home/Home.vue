<template>
  <div class="home">
   <header-nav-bar  path="/city"></header-nav-bar>
   <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>

import {
  getHomeIndex,
  getHomeCity,
  getHomeDetail
} from '@/network/home.js'
// import axios from 'axios'

import HomeSwiper from './child/HomeSwiper.vue'
import HeaderNavBar from './child/HeaderNavBar.vue'
import HomeIcons from './child/HomeIcons.vue'
import HomeRecommend from './child/HomeRecommend.vue'
import HomeWeekend from './child/HomeWeekend.vue'

import { mapState } from 'vuex'
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
      lastCity:'',
      recommendItem:[
        // {id:'001',title:'云顶草上世界',city:'瓯海区',desc:'这里最近很火哦，好多人都在点评他呢!',price:'172',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/1809/4d/4d4afebae213d6a5a3.img.jpg_200x200_ad7de07d.jpg'},
        // {id:'002',title:'温州乐园',city:'瓯海区',desc:'让每一个游客亲身融入主题文化中',price:'125',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/1601/6c/6c40693ccf30a590.water.jpg_200x200_555edf99.jpg'},
        // {id:'003',title:'永嘉书院',city:'瓯海区',desc:'',price:'50',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/1607/f2/f2d99468a0871d69b4.water.jpg_200x200_547c9886.jpg'},
        // {id:'004',title:'雁荡山',city:'瓯海区',desc:'帅的任都去过',price:'23',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/1604/70/7094d064511234be90.img.jpg_200x200_97db698d.jpg'},
        // {id:'005',title:'刘伯温故里旅游景区-白丈祭',city:'瓯海区',desc:'',price:'55',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/1809/a0/a08f0b44aa5ffd9fa3.water.jpg_200x200_0d946f85.jpg'},
        // {id:'006',title:'文字动物园',city:'瓯海区',desc:'',price:'30',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/1508/34/4734408329e141b40bc2f2f6d1b5c4da.water.jpg_200x200_23715037.jpg'},
        // {id:'007',title:'龙湾国家森林公园',city:'瓯海区',desc:'园址峰峦环绕，松柏苍翠，竹林繁茂',price:'59',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/201301/15/3a5b3d27b59a888393835fbb.jpg_200x200_865f00c1.jpg'},
        // {id:'008',title:'楠溪江',city:'瓯海区',desc:'龙湫山高势绝天，一线瀑走兜罗棉',price:'45',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/1603/20/20e0961e888e8db790.water.jpg_200x200_d36ad485.jpg'},
        // {id:'010',title:'大龙湫',city:'瓯海区',desc:'这里特别受欢迎哟(๑‾ ꇴ ‾๑)',price:'319',num:654,imgUrl:'http://img1.qunarzz.com/sight/p0/201405/20/2d7f19b34f7a6064e9bb8dc0d531e4b1.jpg_200x200_63f2d336.jpg'},
      ],
      swiperList:[],
      iconList:[],
      weekendList:[]
    }
  },
  methods: {
    getHomeInfo(city) {
      // axios.get('http://localhost:8080/mock/index.json')
      // .then(res => {
      //   console.log(res);
      // })
      // request({url:'mock/index.json'})
      // .then(res => {
      //   console.log(res);
      // })
      getHomeIndex(city).then(res => {
        console.log(city);
        if(res.ret && res.data){
          this.swiperList = res.data.swiperList
          this.iconList = res.data.iconList
          this.recommendItem = res.data.recommendList
          this.weekendList = res.data.weekendList
        }
      })
      .then(res => {
        this.$bus.$emit('recommend',this.recommendItem)
        this.$bus.$emit('weenkend',this.weekendList)
      })
     
      
    }
  },
  computed:{
    ...mapState(['city'])
  },
  created() {
    this.getHomeInfo(this.city)
    this.lastCity = this.city
    
  },
  activated(){
    if(this.lastCity !== this.city){
      this.getHomeInfo(this.city) 
      this.lastCity = this.city
      
    }
  }
}
</script>

<style lang='less' scoped>

</style>
