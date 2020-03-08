import request from '@/utils/request'
import config from '@/utils/config'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

export function doTimeQuery(pageSize, pageIndex, dataInfo) { // 查询经销商级别时间段
  const queryobj = {
  // 请求类型&参数 保存mutation 查询query
    type: 'query',
    typeParam:
  '($pageSize:Int,$pageIndex:Int,$dataInfo:' + seApis.seDbNetLevleTimeQueryFindAll.InputType + ')',
    apiUrl: seApis.seDbNetLevleTimeQueryFindAll.APIUrl,
    apiServices: [
      {
      // API服务编码&参数
        apiServiceCode: seApis.seDbNetLevleTimeQueryFindAll.ServiceCode,
        apiServiceParam:
          '(pageSize: $pageSize,pageIndex: $pageIndex,dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'netLevleTimeId',
          'updateControlId',
          'beginDate',
          'endDate'
          // 'column1',
          // 'column2',
          // 'column3',
          // 'column4',
          // 'column5',
          // 'column6',
          // 'column7',
          // 'column8',
          // 'column9',
          // 'column10'
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // 当前中台使用的名称有datainfo、info,具体查看API文档
      pageSize: pageSize,
      pageIndex: pageIndex,
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryobj)
  return requestGraphQL(paramD)
}

export function doTimeSave(dataInfo) { // 保存经销商级别时间段
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.SeDbNetLevleTimeMutationSave.InputType + ')',
    // 请求API
    apiUrl: seApis.SeDbNetLevleTimeMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.SeDbNetLevleTimeMutationSave.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: []
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

export function doLevleQuery(pageSize, pageIndex, dataInfo) { // 查询经销商级别
  const queryobj = {
    // 请求类型&参数 保存mutation 查询query
    type: 'query',
    typeParam:
    '($pageIndex:Int,$pageSize:Int,$dataInfo:' + seApis.seDbNetLevleQueryFindAll.InputType + ')',
    apiUrl: seApis.seDbNetLevleQueryFindAll.APIUrl,
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbNetLevleQueryFindAll.ServiceCode,
        apiServiceParam:
            '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'netLevleTimeId',
          'dlrLevelId',
          'dlrLevelCode',
          'beginDate',
          'disableDate',
          'dlrId',
          'dlrCode',
          'dlrShortName',
          'carBrandCode',
          'isEnable',
          'updateControlId',
          'bigAreaCode',
          'smallAreaCode',
          'bigAreaName',
          'smallAreaName'

        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      pageSize: pageSize,
      pageIndex: pageIndex,
      // 当前中台使用的名称有datainfo、info,具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryobj)
  return requestGraphQL(paramD)
}

export function doLevleSave(dataInfo) { // 保存经销商级别
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
        '($dataInfo: ' + seApis.SeDbNetLevleMutationSave.InputType + ')',
    // 请求API
    apiUrl: seApis.SeDbNetLevleMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.SeDbNetLevleMutationSave.ServiceCode,
        apiServiceParam:
            '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: []
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

export function doLevleImp(dataInfo) { // 导入经销商级别
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
        '($dataInfo: [' + seApis.seDbNetLevleMutationImport.InputType + '])',
    // 请求API
    apiUrl: seApis.seDbNetLevleMutationImport.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbNetLevleMutationImport.ServiceCode,
        apiServiceParam:
            '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: []
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

export function doresolve(dataInfo) { // 导入经销商级别EXCEL解析
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
        '($dataInfo: ' + seApis.resolve.InputType + ')',
    // 请求API
    apiUrl: seApis.resolve.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.resolve.ServiceCode,
        apiServiceParam:
            '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}
export function getQueryMock(data) {
  var requireQuery = data.query
  // 截取输入类型
  var str1 = requireQuery.substring(data.query.indexOf('{'))
  var inputType = str1.substring(1, str1.indexOf('('))
  // 截取url
  var url = data.apiUrl
  delete data.apiUrl
  return request({
    url: url + config.cH + 'v=' + inputType,
    method: 'post',
    data
  })
}
