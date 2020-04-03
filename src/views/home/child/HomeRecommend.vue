<template>
  <div class="home-recommend">
    <home-recommend-item :recommend-item='recommendItem'>

    </home-recommend-item>
  </div>
</template>

<script>
import HomeRecommendItem from '@/components/content/HomeRecommendItem.vue'
export default {
  name:'HomeRecommend',
  data(){
    return {
      recommendItem:[
        
      ]
    }
  },
  components: {
    HomeRecommendItem
  },
  created(){
    this.$bus.$on('recommend',res => {
      this.recommendItem = res
    })
  }

}
</script>

<style scoped>
.home-recommend{
  border-top: 8px solid #eee;
  margin-top: 20px;
}
</style>
