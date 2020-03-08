import { requestGraphQL } from '@/api/commonRequest'
import { apiRepairBalanceApply } from '@/api/graphQLApiList/se'
import { apiSeBalance } from '@/api/graphQLApiList/se'
import { getParams } from '@/utils/getParamter'

//维修反结算-查询
export function doQueryList(
  pageSize,
  pageIndex,
  dataInfo,
  dataType = '',
  excelName = '',
  excelSheetName = '',
  tableColumns = null
) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int,$dataInfo: ' +
      apiSeBalance.seBuRepairBalanceQueryMain.InputType +
      ')',
    // 请求API
    apiUrl: apiSeBalance.seBuRepairBalanceQueryMain.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeBalance.seBuRepairBalanceQueryMain.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'repairOrderId',
          'repairOrderCode',
          'repairGatheringId',
          'balanceOrderCode',
          'balanceDate',
          'totalAmount',
          'carLicense',
          'cancelEmpName',
          'vin',
          'repairMan',
          'repairTel',
          'repairTime',
          'isGather',
          'repairOrderStatus',
          'saName',
          'updateControlId',
          'wiAmount',
          'partAmount',
          'otherAmount',
          'dlrCustNo',
          'cancelDate',
          'cancelReason'
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
  if (dataType === 'excel') {
    if (tableColumns == null) tableColumns = []
    var tmpCols = tableColumns // .filter(o => o.hidden !== true)
    // 网格列对象转为excel列对象
    var excelCols = {}
    for (var i = 0; i < tmpCols.length; i++) {
      if (tmpCols[i].property != null)
        excelCols[tmpCols[i].property] = tmpCols[i].label
    }
    // 数据类型
    paramD.dataType = 'excel'
    // excel文件名称
    paramD.excelName = excelName
    // 根据请求API描述excel数据对象
    paramD.excels = [
      {
        // excel sheet名称
        title: excelSheetName,
        // 对应API服务编码
        actionName: queryObj.apiServices.apiServiceCode,
        // excel列
        columns: excelCols
      }
    ]
  }
  return requestGraphQL(paramD)
}

//维修反结算-反结算保存
export function doSave(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' +
      apiRepairBalanceApply.fiBuRepairGatheringMutationAntiSave.InputType +
      ')',
    // 请求API
    apiUrl: apiRepairBalanceApply.fiBuRepairGatheringMutationAntiSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode:
          apiRepairBalanceApply.fiBuRepairGatheringMutationAntiSave.ServiceCode,
        apiServiceParam: '(dataInfo: $dataInfo)',
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
