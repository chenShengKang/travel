import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home.vue')
const City = () => import('@/views/city/City.vue')
const Detail = () => import('@/views/detail/Detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name:'City',
    component: City
  },
  {
    path:'/detail/:id',
    name: 'detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from ,savedPosition) {
    return {x:0,y:0}
  }
})

export default router
