<template>
  <div>
    <header-item>
      <div class="left" slot="header-left" @click="itemClick">
        <span class="iconfont">&#xe624;</span>
      </div>
      <div slot="header-center">
        <p  class="content"> 城市选择</p>
      </div>
    </header-item>
  </div>
</template>

<script>
import headerItem from '@/components/common/header/HeaderItem.vue'


export default {
  name: 'CityHeader',
  components: {
    headerItem
  },
  methods :{
    itemClick(){
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped>
.content{
  text-align: center;
}
</style>
