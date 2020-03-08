/**
* description: 公共GraphQL请求方法
* author: luojx
* createdDate: 2019-07-20
* logs：
*  20190720 修改：引入config配置 luojx
*/
import request from '@/utils/request'
import config from '@/utils/config'
import store from '@/store'
import { getParams } from '@/utils/getParamter'

// 请求GraphQL API
export function requestGraphQL(data) {
  // 截取url
  var url = data.apiUrl
  var serviceCode = data.serviceCode
  var specailCode = data.specailCode || ''
  delete data.apiUrl
  delete data.serviceCode
  delete data.specailCode
  return request({
    url: url + config.cH + 'v=' + serviceCode + specailCode,
    method: 'post',
    data
  })
}

// 请求GraphQL API（含默认条件）
export function requestGraphQLWithConfig(apiConfig, apiQueryRow, listQuery) {
  const queryObj = {
    // api配置
    apiConfig: apiConfig,
    // 需要调用的API服务配置
    apiServices: [{
      // 表格中台返回网格的字段
      apiQueryRow: apiQueryRow
    }],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      pageSize: listQuery && listQuery.pageSize ? listQuery.pageSize : 100,
      pageIndex: listQuery && listQuery.pageIndex ? listQuery.pageIndex : 1,
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: listQuery || { isEnable: '1' }
    }
  }
  return requestGraphQLWithQueryObj(queryObj)
}

// 请求GraphQL API（含查询对象）
export function requestGraphQLWithQueryObj(queryObj) {
  // 转换了中台请求格式数据
  var paramD = getParams(queryObj)
  // 调用中台API方法（可复用）
  return requestGraphQL(paramD)
}

// 请求导入 API
// url如：/ly/mp/busicen/scc/excel/netToStoreMutationImport.do
// param: 参数对象（包含文件）：param.file(el-upload)/param.target.files[0](input[file])
// cb：回调函数（callback）
// queryString：url查询条件
export function requestImport(url, param, cb, queryStr) {
  var file
  if (param.file) {
    file = param.file
  } else {
    file = param.target.files[0]
  }

  var fullUrl = url
  if (fullUrl.indexOf('http://') !== 0 && fullUrl.indexOf('https://') !== 0) {
    fullUrl = process.env.VUE_APP_BASE_API + fullUrl
  }

  var xhr = new XMLHttpRequest()
  xhr.open('POST', fullUrl + (queryStr || ''))
  xhr.setRequestHeader('Authorization', store.getters.token)
  xhr.setRequestHeader('Cookie', '')
  xhr.overrideMimeType('application/octet-stream')
  var chunks = file.slice(0, file.size)
  this.$utils.getFileBinary(chunks, function(binary) {
    if (xhr.sendAsBinary) {
      xhr.sendAsBinary(binary)
    } else {
      xhr.send(binary)
    }
  })

  xhr.onreadystatechange = function(e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var resp = JSON.parse(xhr.responseText)
        if (typeof cb === 'function') {
          cb.call(this, resp)
        }
      }
    }
  }
}
