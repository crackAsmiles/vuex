import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import 'normalize.css'
// 富文本编辑
import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)



// 请求拦截器
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  console.log('请求错误')
  return Promise.reject(error)
})
// 响应数据拦截器
axios.interceptors.response.use(function (value) {
  return value.data;
}, function (error) {
  return Promise.reject(error)
})

Vue.prototype.axios = axios
Vue.prototype.cookies = VueCookies



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
