import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

export function seCommonQueryRepairModeDetail(pageSize, pageIndex, dataInfo) { // 查询模板明细
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seCommonQueryRepairModeDetail.InputType + ')',
    // 请求API
    apiUrl: seApis.seCommonQueryRepairModeDetail.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seCommonQueryRepairModeDetail.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'repairModeWi { businessType businessTypeName carTypeCode createdDate createdName creator groupCode groupId isEnable isSystem lastUpdatedDate modifier modifyName mycatOpTime oemCode oemId repairModeId repairModeWiId sdpOrgId sdpUserId updateControlId wiCode wiName }',
          'repairModePart { businessType businessTypeName carTypeCode createdDate createdName creator groupCode groupId isEnable isSystem lastUpdatedDate modifier modifyName mycatOpTime oemCode oemId partName partNo partPrice partQty partTotalFee repairModeId repairModePartId sdpOrgId sdpUserId updateControlId }',
          'carBrandCode',
          'carSeriesCode',
          'carTypeCode',
          'createdDate',
          'createdName',
          'creator',
          'fixedAmount',
          'groupCode',
          'groupId',
          'isEnable',
          'isSystem',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'partAmount',
          'repairModeCartypeId',
          'repairModeId',
          'sdpOrgId',
          'sdpUserId',
          'updateControlId',
          'wiAmount'
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

export function seDbRepairModeQueryFindAll(pageSize, pageIndex, dataInfo) { // 导入模板
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seDbRepairModeQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbRepairModeQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbRepairModeQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'carBrandCn',
          'carBrandCode',
          'createdDate',
          'createdName',
          'creator',
          'dlrId',
          'groupCode',
          'groupId',
          'isCombo',
          'isEnable',
          'isSystem',
          'lastUpdatedDate',
          'modeType',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'payKind',
          'payKindName',
          'repairModeCode',
          'repairModeId',
          'repairModeName',
          'sdpOrgId',
          'sdpUserId',
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

export function doAdapType(dataInfo) { // 适用车型
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($dataInfo: ' + seApis.AdapType.InputType + ')',
    // 请求API
    apiUrl: seApis.AdapType.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.AdapType.ServiceCode,
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
