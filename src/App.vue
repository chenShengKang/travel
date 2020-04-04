<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view> 
    </keep-alive>
  </div>
</template>

<style lang="less">
@import '~@/assets/css/base.css';
</style>
