import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { apiSeReport } from '@/api/graphQLApiList/se'

export function doQueryList(pageSize, pageIndex, dataInfo) { // 查询业务权限设置列表
  const queryobj = {
  // 请求类型&参数 保存mutation 查询query
    type: 'query',
    typeParam:
  '($pageInde:Int,$pageSize:Int,$dataInfo:' + apiSeReport.seRepairReportQueryListFindAll.InputType + ')',
    apiUrl: apiSeReport.seRepairReportQueryListFindAll.APIUrl,
    apiServices: [
      {
      // API服务编码&参数
        apiServiceCode: apiSeReport.seRepairReportQueryListFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
            'repairOrderId',
            'repairOrderCode',
            'carLicense',
            'oemCode',
            'groupCode',
            'oemId',
            'groupId',
            'repairDeliveryDate'
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

export function doQueryListDetail(pageSize, pageIndex, dataInfo) { // 查询业务权限设置列表
  const queryobj = {
  // 请求类型&参数 保存mutation 查询query
    type: 'query',
    typeParam:
  '($pageInde:Int,$pageSize:Int,$dataInfo:' + apiSeReport.seRepairReportQueryListDetail.InputType + ')',
    apiUrl: apiSeReport.seRepairReportQueryListDetail.APIUrl,
    apiServices: [
      {
      // API服务编码&参数
        apiServiceCode: apiSeReport.seRepairReportQueryListDetail.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'repairorderid',
          'repairordercode',
          'carlicense',
          'oemcode',
          'groupcode',
          'oemid',
          'groupid',
          'workbalancedetailwi',
          'workbalancedetailpart'
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