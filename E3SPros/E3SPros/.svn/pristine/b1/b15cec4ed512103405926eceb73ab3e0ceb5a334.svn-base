import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import { paApis } from '@/api/graphQLApiList/pa'
import {
  getParams
} from '@/utils/getParamter'

//  备件价格业务审核_主表查询
export function paDbPriceTraceQueryListForPage(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.paDbPriceTraceQueryListForPage.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbPriceTraceQueryListForPage.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbPriceTraceQueryListForPage.ServiceCode,
        apiServiceParam:
          '( pageIndex: $pageIndex, pageSize: $pageSize,dataInfo:$dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'auditStatus',
          'auditStatusCn',
          'beforeDlrPrice',
          'beforeUserPrice',
          'bsAduitPersonName',
          'businessAduitPerson',
          'businessAuditDate',
          'column1',
          'column10',
          'column2',
          'column3',
          'column4',
          'column5',
          'column6',
          'column7',
          'column8',
          'column9',
          'createdDate',
          'createdName',
          'creator',
          'dlrPrice',
          'fiAduitDate',
          'fiAduitPerson',
          'fiAduitPersonName',
          'groupCode',
          'groupId',
          'isEnable',
          'isPrePrice',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'partBrandCode',
          'partBrandName',
          'partFlowState',
          'partId',
          'partName',
          'partNo',
          'partSourceName',
          'partStatus',
          'partTypeName',
          'priceTraceId',
          'remark',
          'sdpOrgId',
          'sdpUserId',
          'startPerson',
          'startPersonName',
          'startTime',
          'supplierShortName',
          'updateControlId',
          'userPrice'
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

//  备件价格业务审核_审核
export function paDbPriceTraceMutationBsAuditSave(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paDbPriceTraceMutationBsAuditSave.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbPriceTraceMutationBsAuditSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbPriceTraceMutationBsAuditSave.ServiceCode,
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

//  备件价格财务审核_审核
export function paDbPriceTraceMutationFiAuditSave(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paDbPriceTraceMutationFiAuditSave.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbPriceTraceMutationFiAuditSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbPriceTraceMutationFiAuditSave.ServiceCode,
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

//  备件价格业务审核_驳回、备件价格财务审核_驳回
export function paDbPriceTraceMutationRebackSave(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paDbPriceTraceMutationRebackSave.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbPriceTraceMutationRebackSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbPriceTraceMutationRebackSave.ServiceCode,
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

//  车系编码弹框_主表查询
export function seChooseCarSeriesQueryFind(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.seChooseCarSeriesQueryFind.InputType + ')',
    // 请求API
    apiUrl: paApis.seChooseCarSeriesQueryFind.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.seChooseCarSeriesQueryFind.ServiceCode,
        apiServiceParam:
          '( pageIndex: $pageIndex, pageSize: $pageSize,dataInfo:$dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'beginDate',
          'brandType',
          'carBrandCode',
          'carSeriesCn',
          'carSeriesCode',
          'carSeriesEn',
          'carSeriesId',
          'createdDate',
          'createdName',
          'creator',
          'endDate',
          'gdsname',
          'groupCode',
          'groupId',
          'isEnable',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'orderNo',
          'partBrandCode',
          'partSeriesCode',
          'partSeriesId',
          'sCarseriesCode',
          'sCarseriesDesc',
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
