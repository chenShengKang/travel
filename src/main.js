import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入 移动端 点击延迟300ms的缺陷
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入图标库
import '@/assets/css/iconfont.css'
import 'swiper/css/swiper.css'
//配置到 dom 上
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false
//asdas
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
