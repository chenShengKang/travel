<template>
  <div>
    <div class="search-wrap">
      <input v-model="keyWord" type="search" name="city" id="city" placeholder="请输入城市或拼音">
    </div>
    <div v-show="keyWord" class="search-content">
      <b-scroll>
        <ul>
          <li v-for="item of list" :key="item.id">{{item.name}}</li>
          <li v-show="hasNoDate"> 暂时无匹配数据</li>
        </ul>
      </b-Scroll>
    </div>
  </div>
</template>

<script>
import BScroll from '@/components/common/scroll/Scroll.vue'
export default {
  name: 'CitySearch',
  components: {
    BScroll
  },
  props:{
    cityList:Object
  },
  data(){
    return {
      keyWord:'',
      list:[],
      timer:null
    }
  },
  computed: {
    hasNoDate(){
      return this.list.length <= 0
    }
  },
  watch: {
    keyWord() {
      if(this.timer){
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        if(!this.keyWord){
          this.list = []
          return
        }
        for (let i in this.cityList.cities){
          this.cityList.cities[i].forEach((value) => {
            if(value.spell.includes(this.keyWord) || value.name.includes(this.keyWord)){
              result.push(value)
            }
          })
        }
        this.list = result
      },100)
    }
  }

}
</script>

<style lang="less" scoped>
.search-wrap{
  height: 40px;
  padding: 6px;
  box-sizing: border-box;
  background-color: #00bcd4;
  >input{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    text-indent: 20px;
    margin-top: 2px;
    text-align: center;
    padding: 0 25px;
    box-sizing: border-box;
  }
}
.search-content{
  position: absolute;
  overflow: hidden;
  top: 86px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  z-index: 10;
  li{
    line-height: 30px;
    background-color: #fff;
    border-bottom: 1px solid #ccc
  }
}
</style>
