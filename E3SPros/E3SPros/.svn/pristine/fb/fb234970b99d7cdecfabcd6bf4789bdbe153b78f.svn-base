// import request from '@/utils/request'
// import config from '@/utils/config'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

export function doQueryList(pageSize, pageIndex, dataInfo) { // 查询工时备件关联列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.SeDbWiPartQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.SeDbWiPartQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.SeDbWiPartQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'wiPartId',
          'wiId',
          'wiCode',
          'wiName',
          'partNo',
          'partName',
          'partQty',
          'multiCarTypeCode',
          'isSystem',
          'dlrCode',
          'dlrId',
          'oemId',
          'groupId',
          'oemCode',
          'groupCode',
          'creator',
          'createdDate',
          'modifier',
          'lastUpdatedDate',
          'isEnable',
          'updateControlId',
          'partTypeCode',
          'partPropertyCode',
          'partTypeName',
          'partPropertyName'
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

export function doLinkRemove(dataInfo) { // 取消关联接口
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.SeDbWiPartMutationRemove.InputType + ')',
    // 请求API
    apiUrl: seApis.SeDbWiPartMutationRemove.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.SeDbWiPartMutationRemove.ServiceCode,
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

export function doLinkSave(dataInfo) { // 保存关联接口
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.SeDbWiPartMutationSave.InputType + ')',
    // 请求API
    apiUrl: seApis.SeDbWiPartMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.SeDbWiPartMutationSave.ServiceCode,
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
