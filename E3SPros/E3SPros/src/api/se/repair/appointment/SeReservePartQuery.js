import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

export function seReservePartQueryMain(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
    '( $dataInfo: ' + seApis.seReservePartQueryMain.InputType + ')',
    // 请求API
    apiUrl: seApis.seReservePartQueryMain.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seReservePartQueryMain.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [

          'partNo',
          'partName',
          'purPackQty',
          'dlrLeastSaleQty',
          'partQty',
          'partPrice',
          'storeQty',
          'canUseQty',
          'oweQty',
          'wayQty',
          'saEmpId',
          'saName',
          'dlrId',
          'oemCode',
          'groupCode',
          'oemId',
          'groupId'

        ]
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

export function seReservePartQueryDetail(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
    '( $dataInfo: ' + seApis.seReservePartQueryDetail.InputType + ')',
    // 请求API
    apiUrl: seApis.seReservePartQueryDetail.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seReservePartQueryDetail.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [

          'custName',
          'saName',
          'carSeriesCn',
          'carTypeCn',
          'preComeDate',
          'partNo',
          'partName',
          'purPackQty',
          'dlrLeastSaleQty',
          'partQty',
          'reserveOrderId',
          'reserveOrderCode',
          'carSeriesCode',
          'carTypeCode',
          'dlrId',
          'oemCode',
          'groupCode',
          'oemId',
          'groupId'

        ]
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
