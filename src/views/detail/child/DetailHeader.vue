<template>
  <div>
    <div 
      class="header-abs" 
      @click="backToHome"
      v-show="isShow"
    >
        <span class="iconfont">&#xe624;</span>      
    </div>
    <div class="header-fixed" v-show="!isShow" :style="opacityHead">
      <header-item>
        <div slot="header-left" @click="backToHome">
          <span class="iconfont">&#xe624;</span>        
        </div>
        <div slot="header-center">
          景点详情
        </div>
      </header-item>
    </div>
  </div>
</template>

<script>
import headerItem from '@/components/common/header/HeaderItem.vue'
export default {
  name: 'DetailHeader',
  
  components:{
    headerItem
  },
  data(){
    return {
      isShow:true,
      opacityHead:{
        opacity:0
      }
    }
  },
  methods: {
    backToHome() {
      this.$router.push('/')
    },
    handleScroll(){
      const top = document.documentElement.scrollTop
      console.log('aaa');
      if( top > 50){
        let opacity = top/140
        opacity = opacity > 1 ? 1 :opacity
        this.opacityHead = {
          opacity
        }
        this.isShow = false
      }else{
        this.isShow = true
        
      }
    }
  },
  activated(){
    window.addEventListener('scroll',this.handleScroll)
  },
  deactivated(){
    window.removeEventListener('scroll', this.handleScroll)
  } 
  

}
</script>

<style scoped>
  .header-abs{
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background-color: rgba(0,0,0,.5);
    border-radius: 20px;
    color: #fff;
    text-align: center;
  }
  .header-fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;;
  }
</style>
