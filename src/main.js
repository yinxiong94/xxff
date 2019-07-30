import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css'
// import { fetchGet, fetchPost} from './http'
// Vue.prototype.$get = fetchGet
// Vue.prototype.$post = fetchPost

import axios from 'axios'
Vue.prototype.axios = axios


Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.qs = qs
//main.js
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
