import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import './mock/mockServer'
import * as API from '@/api'
import store from './store'
import './plugins/swiper' // 引入加载swiper组件插件

import '../public/css/iconfont/iconfont.css'


Vue.prototype.$API = API
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
