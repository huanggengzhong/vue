import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

export function initChooseCarSeries(dataInfo) { // 初始化服务创新列表
  const queryObj = {
    // api配置
    apiConfig: seApis.ServiceCarSeries001,
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

export function doQueryServiceCarSeries(dataInfo) { // 查询服务车系列表
  const queryObj = {
    // api配置
    apiConfig: seApis.ServiceCarSeries002,
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

export function doSaveServiceCarSeries(dataInfo) { // 保存
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.ServiceCarSeries004.InputType + ')',
    // 请求API
    apiUrl: seApis.ServiceCarSeries004.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.ServiceCarSeries004.ServiceCode,
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
