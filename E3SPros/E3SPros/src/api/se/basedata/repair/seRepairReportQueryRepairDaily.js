import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { apiSeReport } from '@/api/graphQLApiList/se'

export function doQueryList(pageSize, pageIndex, dataInfo, dataType = '', excelName = '', excelSheetName = '', tableColumns = null) { // 查询业务权限设置列表
  const queryobj = {
    // 请求类型&参数 保存mutation 查询query
    type: 'query',
    typeParam:
    '($pageInde:Int,$pageSize:Int,$dataInfo:' + apiSeReport.seRepairReportQueryRepairDailyFindAll.InputType + ')',
    apiUrl: apiSeReport.seRepairReportQueryRepairDailyFindAll.APIUrl,
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeReport.seRepairReportQueryRepairDailyFindAll.ServiceCode,
        apiServiceParam:
            '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'repairOrderId',
          'dlrShortName',
          'repairOrderCode',
          'saName',
          'repairTime',
          'deliveryDate',
          'vin',
          'carLicense',
          'carTypeCode',
          'mileage',
          'custName',
          'custTel',
          'workitemAmount',
          'partAmount',
          'otherAmount',
          'feeAmount',
          'workitemFee',
          'partFee',
          'otherFee',
          'shouldCost',
          'realfear',
          'realrebatefare',
          'paymoney',
          'payinside',
          'hostaccount',
          'mobilePay',
          'treasurePay',
          'payblack',
          'transfer',
          'dlraccount',
          'sjsf',
          'couponAmount',
          'reserveAmount',
          'pvPoint',
          'pvRealPoint',
          'pvVirtualPoint',
          'dlrPoint',
          'cardAmount',
          'priceAmount',
          'costAmount',
          'mlhj',
          'remark',
          'sWorkitemAmount',
          'sPartAmount',
          'sOtherAmount',
          'sFeeAmount',
          'sWorkitemFee',
          'sPartFee',
          'sOtherFee',
          'sShouldCost',
          'sRealrebatefare',
          'sRealfear',
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
      // 当前中台使用的名称有datainfo、info,具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryobj)
  if (dataType === 'excel') {
    if (tableColumns == null) tableColumns = []
    var tmpCols = tableColumns// .filter(o => o.hidden !== true)
    // 网格列对象转为excel列对象
    var excelCols = {}
    for (var i = 0; i < tmpCols.length; i++) {
      if (tmpCols[i].property != null) excelCols[tmpCols[i].property] = tmpCols[i].label
    }
    // 数据类型
    paramD.dataType = 'excel'
    // excel文件名称
    paramD.excelName = excelName
    // 根据请求API描述excel数据对象
    paramD.excels = [{
      // excel sheet名称
      title: excelSheetName,
      // 对应API服务编码
      actionName: queryObj.apiServices.apiServiceCode,
      // excel列
      columns: excelCols
    }]
  }
  return requestGraphQL(paramD)
}

