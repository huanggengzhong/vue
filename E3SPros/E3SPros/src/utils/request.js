/**
 * description: 请求方法（封装axios）
 * author: luojx
 * createdDate: 2019-07-27
 * logs:
 *   2019-08-16 加入blob下载方式 luojx
 */
import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 300000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (!config.noHeader || config.noHeader === false) {
      if (store.getters.token) {
        config.headers['Authorization'] = store.getters.token
      }
      // 根据dataType判断是否excel导出
      if (config.data && config.data.dataType) {
        config.headers['dataType'] = config.data.dataType
        if (config.data.dataType === 'excel') {
          // excel导出：设置responseType
          config.responseType = 'blob'
        } else if (config.data.dataType === 'stream') {
          // 导入文件流：设置Content-Type
          config.headers['Content-Type'] = 'application/octet-stream'
        }
        delete config.data.dataType
      }
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom result
   * Here is just an example
   * You can also judge the status by HTTP Status result
   */
  response => {
    // const res = response.data
    // if (response.config && response.config.headers && response.config.headers.dataType)
    //     && response.config.headers.dataType === 'excel') {
    // }
    if (response.data.result) {
      if (response.data.result === '0') {
        if (response.data.msg === 'l9900000001') {
          // Message({
          //   message: '用户过期，请重新登录',
          //   type: 'warning',
          //   duration: 5 * 1000
          // })
          MessageBox({
            message: '用户过期，请重新登录',
            type: 'warning',
            confirmButtonText: '确定',
            callback: function() {
              const param = location.href.indexOf('#') > -1 ? location.href.split('#')[1] : ''
              location.href = '/#/login?redirect=' + param + '&u=' + store.getters.userId
              location.reload()
            }
          })
          return Promise.reject('用户过期，请重新登录')
        } else if (response.data.errors && response.data.msg === 'fail') {
          Message({
            message: '查询失败',
            type: 'error',
            duration: 5 * 1000
          })
          Promise.reject(response.data.errors)
        }
      }
    }
    return response.data
  },
  error => {
    console.log('err:' + error) // for debug
    // Message({
    //   message: error.msg,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
