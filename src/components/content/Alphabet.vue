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
      touchStart:''
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
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY 
        const index = Math.floor((touchY - startY) / 20)
        
        if(index >= 0 && index < this.letters.length){
          this.$bus.$emit('change',this.letters[index])
        }


      }
    },
    handleTouchEnd(){
      console.log('3');
    }
  },
  created(){

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
