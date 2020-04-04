<template>
  <div class="recommend-item" >
    <div class="recommend-header">热销推荐</div>
    <div class="recommend-center" v-for="item of recommendItem" :key="item.id" @click="itemClick(item.id)">
      <div class="img">
        <img :src="item.imgUrl" alt="">
      </div>
      <div class="content">
        <p class="title">{{item.title}}</p>
        <div class="commoned-wrap">
          <span class="commend">{{item.num}}评论</span>
        </div>
        <div class="price-wrap">
          <span class="dollor">￥</span>
          <span class="price">
            {{item.price}}
            </span>
            <span class="othor">起</span>
          <span class="city">{{item.city}}</span>
        </div>
        <p class="desc">{{item.desc}}</p>
      </div>
    </div>
    <div class="more">
      查看更多
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendItem",
  props: {
    recommendItem: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(id){
      this.$emit('recommendChange',id)
    }
  },
  filters:{
    price(value){
      return '￥'+value
    }
  }
};
</script>

<style lang="less" scoped>
.recommend-header{
  padding: 12px 0;
  font-size: 18px;
  text-indent: 30px;
}
.more{
  text-align: center;
  color: #00afc7;
  border-top: 1px solid #f5f5f5;
  padding: 5px 0;
}
.recommend-center {
  position: relative;
  margin: 10px 0;
  display: flex;
  .content{
    flex: 1;
    
    padding: 10px;
    .commoned-wrap{
      margin-top: 10px;
    }
    .price-wrap{
      display: flex;
      margin-top: 10px;
      .city{
        margin-left: auto;
      }
      .dollor{
        color: #ff8300;
        vertical-align: bottom;
      }
      .price{
        font-size: 20px;
        color: #ff8300;
        vertical-align: middle;
      }
      .othor{
        vertical-align: 10px;
      }
    }
    .title{
      font-size: 16px;
    }
    .desc{
      margin-top: 10px;
      color: #ff5555;
    }
  }
  .img{
    width: 100px;
    height: 100px;
    img{
      width: 100%;
    }
  }
}
</style>
