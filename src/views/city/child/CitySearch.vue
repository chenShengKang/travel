<template>
  <div>
    <div class="search-wrap">
      <input type="search" name="city" id="city" placeholder="请输入城市或拼音">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch'

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
</style>
