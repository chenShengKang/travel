<template>
  <div class="header-nav-bar">
    <main-header>
      <div class="left" slot="header-left">
        <span class="iconfont">&#xe624;</span>
      </div>
      <div slot="header-center">
        <div class="search">
          <span  class="iconfont icon-search">&#xe632;</span>
          <input type="search" placeholder="输入城市景点主题"> 
        </div>  
      </div>
      <div slot="header-right">
        城市
        <span class="iconfont icon-down">&#xe64a;</span>
        </div>
    </main-header>
  </div>
</template>

<script>
import MainHeader from '@/components/common/header/HeaderItem.vue'
export default {
  name: 'HeaderNavBar',
  components: {
    MainHeader
  }

}
</script>

<style lang="less" scoped>
.header-nav-bar{
  .search{
    position: relative;
    width: 100%;
    .icon-search{
      position: absolute;
      top: 0;
      left: 8px;
      color: #ccc;
    }
    input{
      width: 100%;
      border-radius: 5px;
      margin: 6px 0;
      height: 64/2px;
      padding-left: 30px;
      box-sizing: border-box;
    }
  }
  .icon-down{
    font-size: 12px;
  }
}
</style>
