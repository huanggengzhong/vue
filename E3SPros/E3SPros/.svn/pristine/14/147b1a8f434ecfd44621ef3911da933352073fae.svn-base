import request from '@/utils/request'
// import config from '@/utils/config'

import { requestGraphQL } from '@/api/commonRequest'
import { paApis } from '@/api/graphQLApiList/pa'
import { getParams } from '@/utils/getParamter'

// 属性查询
export function paDbVarietyMutation_attribute(params) {
  return request({
    url: '/paDbVarietyMutation_attributeData/list',
    method: 'post',
    params
  })
}

// 手动维护导入
export function paDbPartListQueryExportPartNo(params) {
  return request({
    url: '/paDbPartListQueryExportPartNo/list',
    method: 'post',
    params
  })
}

// 选择备件

// export function paDbPartListQuerySelectPartNo(pageSize, pageIndex, dataInfo) {
//     const queryObj = {
//       // 请求类型&参数 保存mutation  查询query
//       type: 'query',
//       typeParam:
//         '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.paDbPartListQuerySelectPartNo.InputType + ')',
//       // 请求API
//       apiUrl: paApis.paDbPartListQuerySelectPartNo.APIUrl,
//       // 需要调用的API服务配置
//       apiServices: [
//         {
//           // API服务编码&参数
//           apiServiceCode: paApis.paDbPartListQuerySelectPartNo.ServiceCode,
//           apiServiceParam:
//             '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
//           // 表格中台返回网格的字段
//           apiQueryRow: [
//             'id',
//             'brandName',
//             'carSeries',
//             'catType',
//             'carTypeConfig',
//             'isEnable',
//             'status'
//           ]
//         }
//       ],
//       // 条件/实体参数（变量），根据typeParam中的定义配置
//       variables: {
//         pageSize: pageSize,
//         pageIndex: pageIndex,
//         // 当前中台使用的名称有dataInfo、info，具体查看API文档
//         dataInfo: dataInfo
//       }
//     }
//     var paramD = getParams(queryObj)
//     return requestGraphQL(paramD)
//   }
export function paDbPartListQuerySelectPartNo(params) {
  return request({
    url: '/paDbPartListQuerySelectPartNo/list',
    method: 'post',
    params
  })
}

//手动维护删除备件
export function paDbPartListMutationDeletePartNo(params) {
  return request({
    url: '/paDbPartListMutationDeletePartNo/list',
    method: 'post',
    params
  })
}

//手动维护保存修改
export function paDbPartListMutationSavePartAttributel(params) {
  return request({
    url: '/paDbPartListMutationSavePartAttributel/list',
    method: 'post',
    params
  })
}

//备件价格维护-查询
export function paDbPriceQueryList(params) {
  return request({
    url: '/paDbPriceQueryList/list',
    method: 'post',
    params
  })
}

//备件价格维护-保存
export function paDbPriceMutationSave(params) {
  return request({
    url: '/paDbPriceMutationSave/list',
    method: 'post',
    params
  })
}

//备件价格启用-查询
export function paDbPriceQueryPriceStart(params) {
  return request({
    url: '/paDbPriceQueryPriceStart/list',
    method: 'post',
    params
  })
}

//备件价格启用-启用
export function PaDbPriceMutation(params) {
  return request({
    url: '/PaDbPriceMutation/list',
    method: 'post',
    params
  })
}

//公共弹窗-供应商简称
export function getChooseSupplier(params) {
  return request({
    url: '/chooseSupplier/list',
    method: 'post',
    params
  })
}

//公共弹窗-供应商编码
export function chooseSupplier(params) {
  return request({
    url: '/chooseSupplier/list',
    method: 'post',
    params
  })
}

// 公共弹窗-供应商选择（经销商）
export function paDbDlrSupplierQueryFindAllWindow(
  pageSize,
  pageIndex,
  dataInfo
) {
  // 查询服务车系列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      paApis.paDbDlrSupplierQueryFindAllWindow.InputType +
      ')',
    // 请求API
    apiUrl: paApis.paDbDlrSupplierQueryFindAllWindow.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbDlrSupplierQueryFindAllWindow.ServiceCode,
        apiServiceParam:
          '(pageIndex: $pageIndex, pageSize: $pageSize,dataInfo:$dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'dlrShortName',
          'supplierCode',
          'supplierShortName',
          'supplierAddr',
          'zip',
          'supplierFax',
          'supplierTel',
          'linkMan',
          'linkManTel',
          'email',
          'remark',
          'oemCode',
          'groupCode',
          'oemId',
          'groupId'
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
