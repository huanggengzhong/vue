import request from '@/utils/request'
import config from '@/utils/config'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

export function doQueryList(pageSize, pageIndex, dataInfo) { // 精品销售结算_销售单列表查询
  const queryobj = {
    // 请求类型&参数 保存mutation 查询query
    type: 'query',
    typeParam:
    '($pageIndex:Int,$pageSize:Int,$dataInfo:' + seApis.seBuAcceOrderQueryFindAll.InputType + ')',
    apiUrl: seApis.seBuAcceOrderQueryFindAll.APIUrl,
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuAcceOrderQueryFindAll.ServiceCode,
        apiServiceParam:
            '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'carBrandCode',	// 车辆品牌
          'carBrandCn',	// 车辆品牌中文
          'acceOrderCode',	// 销售单号
          'carLicense',	// 车牌号
          'custName',	// 客户名称
          'buyDate',	// 销售时间
          'vin',	// VIN码
          'jsdh',	// 结算单号
          'saleEmp',	// 销售人员
          'acceOrderStateName',	// 销售单状态
          'acceOrderId',	// 精品销售单id
          'dlrCustNo',	// 经销商客户编码
          'updateControlId'	// 并发id

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

export function doSave(dataInfo, dataInfo2) { // 精品销售结算_结算
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
        '($dataInfo: ' + seApis.fiBuGatheringOrderMutationSave.InputType + ',' + '$dataInfo2: ' + seApis.fiBuGatheringOrderMutationSave.InputType2 + ')',
    // 请求API
    apiUrl: seApis.fiBuGatheringOrderMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.fiBuGatheringOrderMutationSave.ServiceCode,
        apiServiceParam:
            '(dataInfo: $dataInfo,dataInfo2: $dataInfo2)',
        // 表格中台返回网格的字段
        apiQueryRow: []
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo,
      dataInfo2: dataInfo2
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

export function doQueryListDetail(pageSize, pageIndex, dataInfo) { // 精品销售结算_精品明细查询
  const queryobj = {
    // 请求类型&参数 保存mutation 查询query
    type: 'query',
    typeParam:
      '($pageIndex:Int,$pageSize:Int,$dataInfo:' + seApis.seBuAccePartQueryFindAll.InputType + ')',
    apiUrl: seApis.seBuAccePartQueryFindAll.APIUrl,
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuAccePartQueryFindAll.ServiceCode,
        apiServiceParam:
              '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'partNo',	// 备件编码
          'partName',	// 备件名称
          'partPrice',	// 单价
          'outQty',	// 出库数量
          'returnQty',	// 退货数量
          'partAmount',	// 备件费用
          'partDiscount',	// 折扣率
          'preAmount'	// 预估费用
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

export function getQueryMock(data) {
  var requireQuery = data.query
  // 截取输入类型
  var str1 = requireQuery.substring(data.query.indexOf('{'))
  var inputType = str1.substring(1, str1.indexOf('('))
  // 截取url
  var url = data.apiUrl
  delete data.apiUrl
  return request({
    url: url + config.cH + 'v=' + inputType,
    method: 'post',
    data
  })
}
