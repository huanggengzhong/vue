import request from '@/utils/request'
// import config from '@/utils/config'

import { requestGraphQL } from '@/api/commonRequest'
import { paApis } from '@/api/graphQLApiList/pa'
import { getParams } from '@/utils/getParamter'

// 公共弹窗-供应商选择（经销商）
export function paDbOemSupplierQueryFindAllWindow(
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
      paApis.paDbOemSupplierQueryFindAllWindow.InputType +
      ')',
    // 请求API
    apiUrl: paApis.paDbOemSupplierQueryFindAllWindow.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbOemSupplierQueryFindAllWindow.ServiceCode,
        apiServiceParam:
          '(pageIndex: $pageIndex, pageSize: $pageSize,dataInfo:$dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'accountNo',
          'addrCity',
          'addrCounty',
          'addrProvince',
          'addrStreet',
          'bankName',
          'compWebsite',
          'createdDate',
          'createdName',
          'creator',
          'email',
          'groupCode',
          'groupId',
          'isDirectDelivery',
          'isEnable',
          'isHomemade',
          'isHomemadeFactory',
          'isHostSupplier',
          'isSpPurOrder',
          'isSystem',
          'lastUpdatedDate',
          'legalPerson',
          'linkMan',
          'linkManTel',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'orderNo',
          'partBrandCode',
          'remark',
          'sdpOrgId',
          'sdpUserId',
          'supplierAddr',
          'supplierCode',
          'supplierFax',
          'supplierFullName',
          'supplierId',
          'supplierPlace',
          'supplierSeqId',
          'supplierShortName',
          'supplierTel',
          'supplierType',
          'taxNo',
          'transStatus',
          'updateControlId',
          'zip'
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
