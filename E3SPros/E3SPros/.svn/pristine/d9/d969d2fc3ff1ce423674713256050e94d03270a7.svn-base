/**
 * 获取GraphQL参数
 * queryObj.type
 * queryObj.typeParam
 *    请求类型&参数 保存时：type=mutation  查询时：type=query
 * queryObj.apiServices
 *    需要调用的API服务配置
 * queryObj.apiServices.serviceFields
 *    自定义字段
 * queryObj.apiServices.apiServiceCode
 *    API服务编码
 * queryObj.apiServices.apiServiceParam
 *    API服务参数
 * queryObj.apiServices.apiQueryRow
 *    表格中台返回网格的字段
 * queryObj.variables
 *    条件/实体参数（变量），根据typeParam中的定义配置
 * queryObj.apiConfig
 *    api配置（参考：src/api/graphQLApiList/*.js）
*/
import { isEmpty, getArrayFromArray } from '@/utils/index'
export function getParams(queryObj) {
  // API请求类型与参数
  var queryStr = queryObj.type || 'query'
  if (queryObj.typeParam) {
    queryStr += queryObj.typeParam
  } else if (queryObj.variables.dataInfo && queryObj.apiConfig) {
    if (queryObj.type === 'mutation') {
      // mutationAPI不需要pageIndex/pageSize
      if (!isEmpty(queryObj.apiConfig.InputType)) {
        queryStr += '($dataInfo: ' + queryObj.apiConfig.InputType + ')'
      }
    } else {
      queryStr += '($pageIndex: Int, $pageSize: Int'
      if (!isEmpty(queryObj.apiConfig.InputType)) {
        queryStr += ', $dataInfo: ' + queryObj.apiConfig.InputType
      }
      queryStr += ')'
    }
  }

  queryStr += '{'

  if (!queryObj.apiServices) {
    queryObj.apiServices = [{}]
  }

  // API请求URL
  if (!queryObj.apiUrl && queryObj.apiConfig) {
    if (typeof queryObj.apiConfig === 'object' && queryObj.apiConfig instanceof Array) {
      queryObj.apiUrl = queryObj.apiConfig[0].APIUrl
    } else {
      queryObj.apiUrl = queryObj.apiConfig.APIUrl
      queryObj.specailCode = queryObj.apiConfig.SpecailCode || ''
    }
  }
  // 模拟请求url标识
  if (queryObj.apiServices.length > 1) {
    var tmpSCode = ''
    for (var j = 0; j < queryObj.apiServices.length; j++) {
      tmpSCode += queryObj.apiServices[j].apiServiceCode + ','
    }
    queryObj.serviceCode = tmpSCode
  } else {
    queryObj.serviceCode = queryObj.apiServices[0].apiServiceCode || queryObj.apiConfig.ServiceCode
  }

  // 合并多个请求
  // 注：如果是合并请求，必须为每个apiServices.apiServiceParam设置值，否则判断apiConfig.InputType不为空后统一使用dataInfo
  for (var x = 0; x < queryObj.apiServices.length; x++) {
    // API服务编码与参数
    queryStr += (queryObj.apiServices.length > 1 ? (String.fromCharCode(65 + x) + ':') : '') + (queryObj.apiServices[x].apiServiceCode || queryObj.apiConfig.ServiceCode)
    if (queryObj.apiServices[x].apiServiceParam) {
      queryStr += queryObj.apiServices[x].apiServiceParam
    } else {
      if (queryObj.type === 'mutation') {
        if (!isEmpty(queryObj.apiConfig.InputType)) {
          queryStr += '(dataInfo: $dataInfo)'
        }
      } else {
        queryStr += '('
        if (!isEmpty(queryObj.apiConfig.InputType)) {
          queryStr += 'dataInfo: $dataInfo, '
        }
        queryStr += 'pageIndex: $pageIndex, pageSize: $pageSize'
        queryStr += ')'
      }
    }
    queryStr += '{'

    // 排除rows外的其它字段（当为null时默认根据query/mutation返回对应字段）
    if (queryObj.apiServices[x].serviceFields === undefined || queryObj.apiServices[x].serviceFields === null) {
      if (queryObj.type === 'mutation') {
        queryObj.apiServices[x].serviceFields = 'msg result'
      } else {
        queryObj.apiServices[x].serviceFields = 'msg pageindex pages records result'
      }
    }
    queryStr += queryObj.apiServices[x].serviceFields

    // rows
    if (queryObj.apiServices[x].apiQueryRow && queryObj.apiServices[x].apiQueryRow.length > 0) {
      var needConvert = false
      for (var i = 0; i < queryObj.apiServices[x].apiQueryRow.length; i++) {
        if (queryObj.apiServices[x].apiQueryRow[i].indexOf('.') > 0) {
          needConvert = true
          break
        }
      }
      // 自动转换参数结构
      if (needConvert) queryObj.apiServices[x].apiQueryRow = getArrayFromArray(queryObj.apiServices[x].apiQueryRow)
      if(queryObj.apiServices[x].apiQueryRow.length !==0){
        queryStr += ' rows{'
        for (var i = 0; i < queryObj.apiServices[x].apiQueryRow.length; i++) {
          queryStr += queryObj.apiServices[x].apiQueryRow[i] + ' '
        }
        queryStr = queryStr.substr(0, queryStr.length - 1)
        queryStr = queryStr + '}'
      }
    }

    // 当前请求结束
    queryStr = queryStr + '}'
  }
  queryStr = queryStr + '}'

  // 设置分页参数默认值
  if (queryObj.variables) {
    if (!queryObj.variables.pageIndex && queryStr.indexOf('$pageIndex') > -1) {
      queryObj.variables.pageIndex = 1
      queryObj.variables.pageSize = 1000
    }

    if (!queryObj.variables.dataInfo && queryStr.indexOf('$dataInfo') > -1) {
      queryObj.variables.dataInfo = {}
    }
  }
  var finalParam = {
    query: queryStr,
    variables: queryObj.variables,
    apiUrl: queryObj.apiUrl,
    serviceCode: queryObj.serviceCode,
    specailCode: queryObj.specailCode || ''
  }
  return finalParam
}
