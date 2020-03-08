import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式
import { getToken } from '@/utils/auth' // 从Cookie中读取token
import getPageTitle from '@/utils/get-page-title'
import config from '@/utils/config'

NProgress.configure({ showSpinner: false }) // 进度条配置

const whiteList = ['/login'] // 不重定向的白名单

router.beforeEach(async(to, from, next) => {
  // 进度条开始
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // 如果已经登陆，重定向到首页
      next({ path: '/' })
      store.dispatch('tagsView/delAllViews')
      NProgress.done()
    } else {
      const hasMenuInfo = store.getters.menu
      if (hasMenuInfo && hasMenuInfo.length > 0) {
        if (store.state.tagsView.cachedViews.length < store.state.tagsView.maxCacheCount ||
            store.state.tagsView.cachedViews.includes(to.name)) {
          // 处理IFrame嵌套页面
          handleIFrameUrl(to.path, '1')
          next()
        } else {
          document.title = getPageTitle(from.meta.title)
          NProgress.done()
          alert('您打开的窗口过多，请关闭其中一些再试')
        }
      } else {
        try {
          // 获取用户菜单
          // const accessRoutes =
          await store.dispatch('user/getMenu')
          // router.addRoutes(accessRoutes)
          // 处理IFrame嵌套页面      （获取菜单后不需要处理）
          // handleIFrameUrl(to.path, '2')
          // 解决动态路由刷新页面空白、404问题
          next({ ...to, replace: true })
        } catch (error) {
          // 删除token并跳转到登陆页面
          await store.dispatch('user/resetToken')
          Message.error(error || '系统错误')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* 没有Token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // 在白名单中不需要登陆
      next()
    } else {
      // 不在白名单需要跳转到登陆
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 进度条完成
  NProgress.done()
})

// 处理IFrame嵌套页面
function handleIFrameUrl(path, type) {
  // 嵌套页面，保存iframeUrl到store，供IFrame组件读取展示
  var url = path
  var length = store.state.iframe.iframeUrls.length
  // console.info(url + ' start-' + type)
  for (let i = 0; i < length; i++) {
    var iframe = store.state.iframe.iframeUrls[i]
    // console.info(url + ' - ' + iframe.path)
    if (path != null && path.endsWith(iframe.path)) {
      url = iframe.url
      // 针对MP2链接的处理
      var urls = url.split('@')
      if (urls.length > 1) {
        url = config.mp2HostUrl + '/#home?menuid=' + urls[1] // urls[1]值如：menuid
      }
      // console.info(url + ' ok')
      store.commit('setIFrameUrl', url)
      break
    }
  }
}
