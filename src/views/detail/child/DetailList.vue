<template>
  <div>
    <div class="list" v-for="(item,index) of list " :key="index"> 
      <div class="item-title">
         {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'DetailList',
   props: {
    list:{
      type:Array,
     
    }
  },

}
</script>

<style scoped>
.item-title{
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
}
.item-children{
  padding-left: 10px;
}
</style>
