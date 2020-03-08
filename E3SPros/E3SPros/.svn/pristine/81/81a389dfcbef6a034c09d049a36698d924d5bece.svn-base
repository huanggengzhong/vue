import { requestGraphQL } from '@/api/commonRequest'
import { getParams } from '@/utils/getParamter'
import { paApis } from '@/api/graphQLApiList/pa'

export function paBuOemStorageQueryFindAll(pageIndex, pageSize, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '( $dataInfo: ' + paApis.paBuOemStorageQueryFindAll.InputType + ',  $pageIndex: Int, $pageSize: Int)',
    // 请求API
    apiUrl: paApis.paBuOemStorageQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuOemStorageQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'accountQty',
          'carConfigCn',
          'carSeriesCn',
          'createdDate',
          'createdName',
          'creator',
          'dlrOrderSwitchName',
          'dlrPrice',
          'groupCode',
          'groupId',
          'inTransitAccountQty',
          'inTransitQty',
          'isEnable',
          'isHaveQty',
          'isSystem',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'orderNo',
          'partBrandName',
          'partFlowState',
          'partName',
          'partNo',
          'partPlaceName',
          'pubPartCarType',
          'pubPartSeriesCode',
          'remainStorage',
          'sdpOrgId',
          'sdpUserId',
          'storageId',
          'storageLocation',
          'storageUpdatedDate',
          'transStatus',
          'updateControlId',
          'usableStockQty',
          'warehouseId',
          'warehouseName'
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      pageIndex: pageIndex,
      pageSize: pageSize,
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}
