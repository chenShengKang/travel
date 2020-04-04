<template>
  <div class="side">
    <div class="item " 
      @click="itemClick(item)" 
      v-for="(item) of letters" 
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{item}}
    </div>
  
  </div>
</template>

<script>

export default {
  name: 'Alphabet',
  data(){
    return {
      list:[],
      touchStatus: false,
      touchStart:'',
      startY:'',
      timer:''
    }
  },
  props: {
    cityList:{
      type:Object,
      dafault(){
        return {}
      }
    }
  },
  computed: {
    letters(){
      const letters = []
      for(let i in this.cityList.cities){
        letters.push(i)
      }
      return letters
    }
  },
  methods:{
    itemClick(key){
      this.$bus.$emit('change',key)
    },
    handleTouchStart(){
      this.touchStatus =true

    },
    handleTouchMove(e){
      if(this.touchStatus){
        if(this.timer){
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
           const touchY = e.touches[0].clientY 
          const index = Math.floor((touchY - this.startY) / 20)
          
          if(index >= 0 && index < this.letters.length){
            this.$bus.$emit('change',this.letters[index])
          }
        },16)
       


      }
    },
    handleTouchEnd(){
      console.log('3');
    }
  },
  created(){

  },
  updated(){
    this.startY = this.$refs['A'][0].offsetTop
  }
 

}
</script>

<style scoped>
.side{
  position: relative;
  height: 100%;
}
.item{
  height: 20px;
  line-height: 20px;
  text-align: center;

}
/* .side-bar{
  display: flex;
  flex-direction:column;
  justify-content: center;
  position: absolute;
  z-index: 9;
  
  font-size: 16px;
  top: -40px;
  bottom: 0;
  right: 5px;
  color: #00bcd4;
} */
</style>
