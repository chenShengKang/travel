<template>
  <div class="weekend">
    <h2 class="header">周末去哪儿</h2>
    <div class="weenkend-wrap" v-for="item of weekend" :key="item.id">
      <div class="img">
        <img :src="item.imgUrl" :alt="item.desc">
      </div>
      <div class="info">
        <p class="title">{{item.title}}</p>
        <p class="desc">{{item.desc}}</p>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data(){
    return {
      weekend:[]
    }
  },
  created(){
    this.$bus.$on('weenkend',res => {
      this.weekend = res
    })
  }

}
</script>

<style lang="less" scoped>
.weenkend-wrap{
  margin-bottom: 10px;
  .info{
    padding-left: 10px;
    .title{
      padding: 5px 0;
    }
    .desc{
      padding-right: 60px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow:ellipsis;
    }
  }
  .img{
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 37.43%;
  img{
    width: 100%;
  }
 
}
}
.header{
  padding: 10px 0;
  text-indent: 20px;
  background-color: #eeee;
}

</style>
