<template>
     <div>
        <div class="my-area " >
          <p class="title bg-f1" >你的位置</p>
          <div class="city  mr">
            <span class="ct active">北京</span>
          </div>
        </div>
        <div class="hot-city ">
          <p class="title bg-f1">热门城市</p>
          <div class="hot-city-content">
            <span class="h-c" v-for="item of cityList.hotCities" :key="item.id">{{item.name}}</span>
          </div>
        </div>
        <div class="other-city" ref="other-city">
          <div v-for="(key,value) of cityList.cities" :key="value" :ref="value">
            <p class="title bg-f1">{{value}}</p>
            <div class="content" v-for="item of key" :key="item.id">
              {{item.name}}
            </div>
          </div>
        </div>
     </div>

</template>

<script>

export default {
  name: 'CityContent',
  data(){
    return {
      letter:'',
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
  components: {
    
  },
  created(){
    this.$bus.$on('change',res => {
      this.letter = res
    })
  },
  watch:{
    letter(){
      this.$bus.$emit('scroll',this.$refs[this.letter])
    }
  }

}
</script>

<style scoped>
.bg-f1{
  background-color: #f1f1f1;
  padding: 5px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.city{
  display: flex;
  flex-wrap:  wrap;
  /* justify-content:space-around; */
  padding: 10px;
  background-color: #fff;

  
}
.mr{
  justify-content: flex-start;
}
.ax{
  margin-right: auto;
}
.ct{
  width: 28%;
  padding: 2px 0 ;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.h-c{
  width: 28%;
  padding: 2px 0 ;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
.active{
  border: 1px solid #00bcd4;
  font-weight: 600;
  color: #00bcd4;
}
.hot-city-content{
  display: flex;
  flex-wrap:  wrap;
  padding: 10px 10px 0 10px;
  justify-content: space-between;
}
.content{


  border-bottom: 1px solid #ccc;
  text-indent: 10px;
}

</style>
