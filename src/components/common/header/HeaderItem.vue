<template>
  <div class="header-item">
    <div class="header-left"><slot name="header-left"></slot></div>
    <div class="header-center"><slot name="header-center"></slot></div>
    <div class="header-right"><slot name="header-right"></slot></div>
  </div>  
</template>

<script>
export default {
  name: 'Header'

}
</script>

<style lang="less" scoped>

.header-item{
  display: flex;
  line-height: 86/2px;
  width: 100%;
  background-color: #00bcd4;
  color: #fff;
  
  .header-left{
    width: 64/2px;
    text-align: center;
  }
  .header-right{
    width: 124/2px;
    text-align: center;
  }
  .header-center{
    flex: 1;
  }
}
</style>
