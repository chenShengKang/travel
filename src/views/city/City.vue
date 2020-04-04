<template>
  <div class="city">
    <Alphabet :cityList="city" class="side-bar"></Alphabet>
    
    <city-head></city-head>
    <header-search></header-search>
    <scroll class="city-scroll" :probe-type="2" ref="cityScroll" >
      <city-content :cityList="city" ></city-content>
    </scroll>
  
  </div>
</template>

<script>
import CityHead from './child/CityHead.vue'
import headerSearch from './child/CitySearch'
import CityContent from './child/CityContent'
import Scroll from '@/components/common/scroll/Scroll.vue'
import Alphabet from '@/components/content/Alphabet.vue'

import {getCity} from '@/network/city.js'

export default {
  name:'City',
  data(){
    return {
      city:{

      },
      ele:''
    }
  },
  components: {
    CityHead,
    headerSearch,
    CityContent,
    Scroll,
    Alphabet
    
    
  },
  methods: {
    getCity(){
      getCity().then(res => {
        console.log(res);
        if(res.ret && res.data){
          this.city  = res.data
          // this.city.HotCity = res.data.hotCities
          // this.city.cities = res.data.cities
          console.log(this.city);
        }
      
      })
    }
  },
  created(){
    this.getCity()
    this.$bus.$on('scroll',res => {
      this.ele = res
    })
  },
  watch:{
    ele(){
      // console.log(this.ele);
      // console.log(this.$refs.cityScroll);
      // if(this.ele){
      //   // this.$refs.scroll.scrollToElement(this.ele)
      //   console.log(this.$res.scroll);
      // }
      if(this.ele){
        this.$refs.cityScroll.scrollToElement(this.ele[0])
      }
    }
  }

}
</script>

<style scoped>
.city{
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.city-scroll{
  position: absolute;
  overflow: hidden;
  top: 85px;
  left: 0;
  right: 0;
  bottom: 0;
}
.side-bar{
  position: fixed;
  display: flex;
  flex-direction:column;
  justify-content: center;
  z-index: 9;
  font-size: 16px;
  top: 0;
  right: 0;
  bottom: 0;
  color: #00bcd4;
}


</style>
