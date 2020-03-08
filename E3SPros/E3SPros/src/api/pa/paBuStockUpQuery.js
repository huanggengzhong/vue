// import request from '@/utils/request'
// import config from '@/utils/config'
import { requestGraphQL } from '@/api/commonRequest'
import { getParams } from '@/utils/getParamter'
import { paApis } from '@/api/graphQLApiList/pa'

export function doQueryList(pageSize, pageIndex, dataInfo) {
  // 查询工时备件关联列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      paApis.paBuStockUpQueryFindAll.InputType +
      ')',
    // 请求API
    apiUrl: paApis.paBuStockUpQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuStockUpQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'dlrCode',
          'purOrderTypeName',
          'dlrShortName',
          'warehouseName',
          'stockUpCode',
          'stockUpVariety',
          'auditDate',
          'purOrderCode',
          'enoughCapital',
          'stockUpQty',
          'stockUpAmount',
          'oemId',
          'groupId',
          'oemCode',
          'groupCode'
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
