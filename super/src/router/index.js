import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import('../page/home/home')
const category = () => import('../page/category/category')
const cart = () => import('../page/cart/cart')
const profile = () => import('../page/profile/profile')
const detail = () => import('../page/detail/detail')


//1.安装插件
Vue.use(VueRouter)


//2.创建路由对象

const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:home
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/category',
    component:category
  },
  {
    path: '/profile',
    component:profile
  },
  {
    path: '/detail/:iid',
    component:detail
  },

]
const router = new  VueRouter({
  routes,
  mode:'history'
})

export default  router
