import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

/* export function seBuReserveCanQueryFactQty(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '( $dataInfo: ' + seApis.seBuReserveCanQueryFactQty.InputType + ')',
    // 请求API
    apiUrl: seApis.seBuReserveCanQueryFactQty.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuReserveCanQueryFactQty.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'currentDate',
          'dlrCode',
          'dlrId',
          'dlrShotName',
          'fri',
          'groupCode',
          'groupId',
          'mon',
          'oemCode',
          'oemId',
          'reserveCanId',
          'sat',
          'sun',
          'thu',
          'timeQuantum',
          'tue',
          'wed'
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
} */

export function seBuReserveCanMutationSave(dataInfo) { // 取消关联接口
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seBuReserveCanMutationSave.InputType + ')',
    // 请求API
    apiUrl: seApis.seBuReserveCanMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuReserveCanMutationSave.ServiceCode,
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
