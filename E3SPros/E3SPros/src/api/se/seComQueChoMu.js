import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

// export function doseCommonQueryChooseDlr(pageSize, pageIndex, dataInfo) { // 查询模板明细
//   const queryObj = {
//     // 请求类型&参数 保存mutation  查询query
//     type: 'query',
//     typeParam:
//           '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seCommonQueryChooseDlr.InputType + ')',
//     // 请求API
//     apiUrl: seApis.seCommonQueryChooseDlr.APIUrl,
//     // 需要调用的API服务配置
//     apiServices: [
//       {
//         // API服务编码&参数
//         apiServiceCode: seApis.seCommonQueryChooseDlr.ServiceCode,
//         apiServiceParam:
//               '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
//         // 表格中台返回网格的字段
//         apiQueryRow: [
//           'isSelect',
//           'dlrId',
//           'dlrCode',
//           'dlrShortName',
//           'dlrFullName',
//           'areaId',
//           'areaName',
//           'bigAreaId',
//           'bigAreaName',
//           'smallAreaId',
//           'smallAreaName',
//           'carBrandCode',
//           'carBrandCn',
//           'orgType',
//           'orgTypeName',
//           'parentDlrId',
//           'parentDlrCode',
//           'parentDlrName',
//           'oemCode',
//           'groupCode',
//           'oemId',
//           'groupId'
//         ]
//       }
//     ],
//     // 条件/实体参数（变量），根据typeParam中的定义配置
//     variables: {
//       pageSize: pageSize,
//       pageIndex: pageIndex,
//       // 当前中台使用的名称有dataInfo、info，具体查看API文档
//       dataInfo: dataInfo
//     }
//   }
//   var paramD = getParams(queryObj)
//   return requestGraphQL(paramD)
// }

// export function doseBuRepairModeImport(pageSize, pageIndex, dataInfo) { // 导入模板
//   const queryObj = {
//     // 请求类型&参数 保存mutation  查询query
//     type: 'query',
//     typeParam:
//             '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seBuRepairModeImport.InputType + ')',
//     // 请求API
//     apiUrl: seApis.seBuRepairModeImport.APIUrl,
//     // 需要调用的API服务配置
//     apiServices: [
//       {
//         // API服务编码&参数
//         apiServiceCode: seApis.seBuRepairModeImport.ServiceCode,
//         apiServiceParam:
//                 '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
//         // 表格中台返回网格的字段
//         apiQueryRow: [
//           'seDbRepairMode'
//         ]
//       }
//     ],
//     // 条件/实体参数（变量），根据typeParam中的定义配置
//     variables: {
//       pageSize: pageSize,
//       pageIndex: pageIndex,
//       // 当前中台使用的名称有dataInfo、info，具体查看API文档
//       dataInfo: dataInfo
//     }
//   }
//   var paramD = getParams(queryObj)
//   return requestGraphQL(paramD)
// }

export function doseComQueChoMuQuery(dataInfo) { // 经销商查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
        '($dataInfo: ' + seApis.seComQueChoMuQuery.InputType + ')',
    // 请求API
    apiUrl: seApis.seComQueChoMuQuery.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seComQueChoMuQuery.ServiceCode,
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

export function doseStoreTypeQuery(dataInfo) { // 门店类型查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
        '($dataInfo: ' + seApis.seStoreType.InputType + ')',
    // 请求API
    apiUrl: seApis.seStoreType.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seStoreType.ServiceCode,
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

