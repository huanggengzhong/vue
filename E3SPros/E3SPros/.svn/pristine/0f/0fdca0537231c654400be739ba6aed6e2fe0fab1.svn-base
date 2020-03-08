import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

export function doFetchPaType(params) {
  return request({
    url: '/ly/mp/busicen/asc/fetchPaType.do',
    method: 'post',
    data: params
  })
}

export function doPaChoosePartQuery(pageSize, pageIndex, dataInfo) { // 查询工时备件关联列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
        '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.paChoosePartQuery.InputType + ')',
    // 请求API
    apiUrl: seApis.paChoosePartQuery.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.paChoosePartQuery.ServiceCode,
        apiServiceParam:
            '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'borrowQty',
          'canUseQtyReal',
          'canUseQtyTheory',
          'createdDate',
          'creator',
          'dlrId',
          'dlrLeastSaleQty',
          'dlrOrderSwitchName',
          'dlrPriceNr',
          'frozenQty',
          'groupCode',
          'groupId',
          'isEnable',
          'isRefine',
          'isSystem',
          'lastUpdatedDate',
          'maxStoreQty',
          'minStoreQty',
          'modifier',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'oemStoreQty',
          'oncePurLimited',
          'orderNo',
          'oweQty',
          'ownerType',
          'partBrandCode',
          'partBrandName',
          'partFlowStateName',
          'partId',
          'partName',
          'partNo',
          'partPropertyCode',
          'partPropertyName',
          'partType',
          'partTypeCode',
          'partTypeId',
          'partTypeName',
          'partVarietyName',
          'planPrice',
          'pubCarTypeCode',
          'pubCarTypeName',
          'purPackQty',
          'remark',
          'safeQty',
          'salePriceNr',
          'sdpOrgId',
          'sdpUserId',
          'storeQty',
          'unit',
          'updateControlId',
          'userPriceNr',
          'warehouseCode',
          'warehouseId',
          'warehouseName',
          'wayQty'
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
