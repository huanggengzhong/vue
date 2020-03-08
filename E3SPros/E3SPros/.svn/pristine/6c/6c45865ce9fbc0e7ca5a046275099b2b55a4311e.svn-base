/*
* description: 获取页面配置化信息
* author: luojx
* createdDate: 2019-09-03
*/
import request from '@/utils/request'
import qs from 'qs'
// import store from '@/store'

// 获取页面配置化数据
export function getPageConfigs(data, token) {
  var tmpToken = 'HRYrhvsHb12oFEYuDoEIGJQL1gmkKuXYHiIEDI9wI9c%3d' // token || store.getters.token
  return request({
    url: 'http://localhost:8008/yzc/eccommon/ilogs/testdypages.do?token=' + tmpToken + '&' + qs.stringify(data),
    method: 'get',
    noHeader: true
  })
}
