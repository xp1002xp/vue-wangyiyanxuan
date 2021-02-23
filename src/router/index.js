import Vue from 'vue'
import VueRouter from 'vue-router'
//注册
Vue.use(VueRouter)
import routes from './routes'
//创建路由器对象
const router = new VueRouter({
  routes
})

//暴露router对象
export default router