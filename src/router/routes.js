//注册路由
import Home from '@/pages/Home/home.vue'
import Category from '@/pages/Category/category.vue'
import Shop from '@/pages/Shop/shop.vue'
import ShopCart from '@/pages/ShopCart/shopCart.vue'
import Login from '@/pages/Login/login.vue'
import Search from '@/pages/Search/search.vue'

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component:Category,
  },
  {
    path: '/shop',
    component:Shop,
  },
  {
    path: '/shopCart',
    component:ShopCart,
  },
  {
    path: '/login',
    component:Login,
  },
  {
    path: '/search',
    component:Search,
  },
  {
    path: '',
    redirect: '/home'
  }


]

//暴露路由
export default routes