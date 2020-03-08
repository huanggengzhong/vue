import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css
import '@/styles/crm.scss' // crm css
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'
import i18n from './lang'
import '@/styles/theme.scss' // 主题色样式表
import App from './App'
import store from './store'
import router from './router'
import {
  getParams
} from '@/utils/getParamter'
import '@/icons' // icon
import '@/permission' // permission control
import suit from '@/utils/suitConfig'
import utils from '@/utils/index'
import '@/utils/dialogDrop'
import { requestGraphQL, requestGraphQLWithConfig, requestImport } from '@/api/commonRequest'
import '@/utils/filter'
import Sortable from 'sortablejs'
import Print from '@/plugs/print'
import CacheObject from '@/cache/dataCache'
// import { componentsInit } from '@/components/crm'
import crmcf from '@/utils/crm/common'
/**
 * mockXHR()：客户端mock
 * 测试环境staging使用本地mock
 */
// import {
//   mockXHR
// } from '../mock'
// if (process.env.NODE_ENV === 'staging') {
//   mockXHR()
// }

// // 通过环境变量来判断是否需要加载启用
// if (process.env.NODE_ENV === 'development') {
//   // require('./mock')
// }

// if (module.hot) {
//   module.hot.accept()
// }

// set ElementUI lang to EN
Vue.use(ElementUI, {
  size: 'small', zIndex: 3000,
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(Print)
Vue.config.productionTip = false
// 全局方法
Vue.prototype.$getParams = getParams
// 全局标签
Vue.prototype.$suit = suit
// 公共方法
Vue.prototype.$utils = utils
// 请求GraphQL API方法
Vue.prototype.$requestGraphQL = requestGraphQL
Vue.prototype.$requestGraphQLWithConfig = requestGraphQLWithConfig
Vue.prototype.$requestImport = requestImport
// 网格拖拽
Vue.prototype.$Sortable = Sortable
// 缓存数据
Vue.prototype.$OrgCacheData = CacheObject

Vue.prototype.$crmcf = crmcf
// CRM自动注册全局组件
// const componentsContext = require.context('./components/crm', true, /\.vue$/)
// if (componentsContext) {
//   // componentsInit(componentsContext)
// }

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
