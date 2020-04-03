<template>
  <div>
    <city-head></city-head>
    <header-search></header-search>
  </div>
</template>

<script>
import CityHead from './child/CityHead.vue'
import headerSearch from './child/CitySearch'
export default {
  name:'City',
  components: {
    CityHead,
    headerSearch
  }

}
</script>

<style scoped>

</style>
