// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 移除移动端点击延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)
//字体图标引入
import './assets/fonts/iconfont.css';
// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/assets/css/index.scss'
// 移动端适配
import 'lib-flexible/flexible.js'
//公共方法utils
import methods from './utils/methods'
Vue.prototype.$methods = methods;
//接口调用
import api from "./api/index"
Vue.prototype.$api = api;

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
