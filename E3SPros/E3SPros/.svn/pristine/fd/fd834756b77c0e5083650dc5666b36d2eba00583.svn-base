import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

export function initCarType(dataInfo) { // 初始化服务创新列表
  const queryObj = {
    // api配置
    apiConfig: seApis.ServiceCarType001,
    // 需要调用的API服务配置
    apiServices: [{
      // 表格中台返回网格的字段
      apiQueryRow: ['CAR_BRAND_CODE', 'CAR_BRAND_CN', 'CAR_BRAND_EN', 'OEM_CODE', 'GROUP_CODE', 'OEM_ID', 'GROUP_ID']
    }],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // pageSize: that.listQuery.pageSize,
      // pageIndex: page || that.listQuery.pageIndex,
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

export function doQueryCarType(pageSize, pageIndex, dataInfo) { // 查询服务车系列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
          '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.ServiceCarType002.InputType + ')',
    // 请求API
    apiUrl: seApis.ServiceCarType002.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.ServiceCarType002.ServiceCode,
        apiServiceParam:
              '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'CAR_BRAND_CODE,',
          'CAR_BRAND_CN',
          'CAR_SERIES_CODE',
          'CAR_SERIES_CN',
          'CAR_SERIES_CODES',
          'CAR_SERIES_CNS',
          'SMALL_CAR_TYPE_CODE',
          'SMALL_CAR_TYPE_CN',
          'SERVICE_CAR_TYPE',
          'IS_DUTY_CAR_TYPE',
          'IS_DUTY_CAR_TYPE_CN',
          'SMALL_CAR_TYPE_ID',
          'UPDATE_CONTROL_ID',
          'S_CARSERIES_CODE',
          'CAR_CONFIG_CODE',
          'POWER_TYPE',
          'SUPPLY_STATUS_NAME',
          'SUPPLY_STATUS',
          'CAR_CONFIG_CN',
          'OEM_CODE',
          'GROUP_CODE',
          'OEM_ID',
          'GROUP_ID'
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      pageSize: pageSize,
      pageIndex: pageIndex,
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

export function doImportCarType(dataInfo) { // 导入
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
        '($dataInfo: ' + seApis.ServiceCarType004.InputType + ')',
    // 请求API
    apiUrl: seApis.ServiceCarType004.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.ServiceCarType004.ServiceCode,
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

export function doExprotCarType(pageSize, pageIndex, dataInfo) { // 导出
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
              '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.ServiceCarType003.InputType + ')',
    // 请求API
    apiUrl: seApis.ServiceCarType003.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.ServiceCarType003.ServiceCode,
        apiServiceParam:
                  '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'CAR_BRAND_CODE',
          'CAR_BRAND_CN',
          'CAR_SERIES_CODE',
          'CAR_SERIES_CN',
          'CAR_SERIES_CODES',
          'CAR_SERIES_CNS',
          'SMALL_CAR_TYPE_CODE',
          'SMALL_CAR_TYPE_CN',
          'SERVICE_CAR_TYPE',
          'IS_DUTY_CAR_TYPE',
          'IS_DUTY_CAR_TYPE_CN',
          'SMALL_CAR_TYPE_ID',
          'UPDATE_CONTROL_ID',
          'S_CARSERIES_CODE',
          'CAR_CONFIG_CODE',
          'POWER_TYPE',
          'SUPPLY_STATUS_NAME',
          'SUPPLY_STATUS',
          'CAR_CONFIG_CN',
          'OEM_CODE',
          'GROUP_CODE',
          'OEM_ID',
          'GROUP_ID'
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      pageSize: pageSize,
      pageIndex: pageIndex,
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

export function doSaveCarType(dataInfo) { // 保存
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.ServiceCarType005.InputType + ')',
    // 请求API
    apiUrl: seApis.ServiceCarType005.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.ServiceCarType005.ServiceCode,
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
