import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入 移动端 点击延迟300ms的缺陷
import fastClick from 'fastclick'
//配置到 dom 上
fastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
