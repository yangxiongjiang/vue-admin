import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import { message } from '@/utils/resetMessage'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(ElementUI)

Vue.config.productionTip = false
/* 去除多次弹出提示，挂载自定义的message必须放在Vue.use(ElementUI)后面，才能覆盖element-ui默认的message */
Vue.prototype.$message = message

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
