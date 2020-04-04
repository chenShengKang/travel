<template>
  <div class="scroll"> 
    <div class="wrap" ref="wrap">
        <div class="content">
          <slot></slot>
       </div>
    </div>  
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props:{
    probeType: {
      type: Number,
      default:0
    },
    pullUp: {
      type: Boolean,
      dafault:false
    }
  },
  data(){
    return {
      scroll:null,
      letter:''
    }
  },
  methods: {
    scrollToElement(ele){
      this.scroll.scrollToElement(ele)
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrap,{
      click:true,
      probeType: this.probeType,
      pullUpLoad: this.pullUp
    })

  },
  

}
</script>

<style scoped>
.scroll{
  height: 100%;
}
.wrap{
  height: 100%;
}
</style>
