// import request from '@/utils/request'
// import config from '@/utils/config'
import { requestGraphQL } from '@/api/commonRequest'
import { seApis } from '@/api/graphQLApiList/se'
import {
  getParams
} from '@/utils/getParamter'
export function doQueryFindAll(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seDbOpratePlaceQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbOpratePlaceQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbOpratePlaceQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'operatePartId',
          'operatePartCode',
          'faultPartCode',
          'faultPartName',
          'opratePlaceName',
          'isBigSystem',
          'isBigSystemName',
          'dlrCode',
          'dlrId',
          'remark',
          'oemId',
          'oemCode',
          'groupId',
          'groupCode',
          'creator',
          'createdDate',
          'modifier',
          'lastUpdatedDate',
          'bigUpdateControlId',
          'isEnable',
          'wiSmallKindId',
          'repairSmallKindCode',
          'repairSmallKindName',
          'isSmallSystem',
          'isSmallSystemName',
          'dlrCodeSmall',
          'dlrIdSmall',
          'oemIdSmall',
          'oemCodeSmall',
          'groupIdSmall',
          'groupCodeSmall',
          'creatorSmall',
          'createdDateSmall',
          'modifierSmall',
          'lastUpdatedDateSmall',
          'isEnableSmall',
          'updateControlIdSmall'
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

export function doQueryFindSmall(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seDbOpratePlaceQueryFindSmalll.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbOpratePlaceQueryFindSmalll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbOpratePlaceQueryFindSmalll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'wiSmallKindId',
          'repairSmallKindCode',
          'operatePartCode',
          'repairSmallKindName',
          'operatePartId',
          'isSystem',
          'dlrCode',
          'dlrId',
          'oemId',
          'oemCode',
          'groupId',
          'groupCode',
          'isEnable',
          'updateControlId'
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

export function doSaveBig(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbOpratePlaceMutationSaveBig.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbOpratePlaceMutationSaveBig.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbOpratePlaceMutationSaveBig.ServiceCode,
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
export function doSaveSmall(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbOpratePlaceMutationSaveSmall.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbOpratePlaceMutationSaveSmall.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbOpratePlaceMutationSaveSmall.ServiceCode,
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

export function doDeleteBig(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbOpratePlaceMutationDeleteBig.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbOpratePlaceMutationDeleteBig.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbOpratePlaceMutationDeleteBig.ServiceCode,
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
export function doDeleteSmall(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbOpratePlaceMutationDeleteSmall.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbOpratePlaceMutationDeleteSmall.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbOpratePlaceMutationDeleteSmall.ServiceCode,
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
