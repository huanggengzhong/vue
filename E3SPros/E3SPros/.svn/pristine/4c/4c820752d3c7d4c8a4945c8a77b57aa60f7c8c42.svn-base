import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import { paApis } from '@/api/graphQLApiList/pa'
import {
  getParams
} from '@/utils/getParamter'

// 账户余额_主表查询
export function paBuOemDlrAccountQueryPriceFindAll(pageSize, pageIndex, dataInfo, dataType = '', excelName = '', excelSheetName = '', tableColumns = null) {
  // 查询服务车系列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.paBuOemDlrAccountQueryPriceFindAll.InputType + ')',
    // 请求API
    apiUrl: paApis.paBuOemDlrAccountQueryPriceFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuOemDlrAccountQueryPriceFindAll.ServiceCode,
        apiServiceParam:
          '( pageIndex: $pageIndex, pageSize: $pageSize,dataInfo:$dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'adding',
          'amountSource',
          'balanceMoney',
          'carBrandCode',
          'column1',
          'column10',
          'column2',
          'column3',
          'column4',
          'column5',
          'column6',
          'column7',
          'column8',
          'column9',
          'createdDate',
          'creator',
          'creditQuota',
          'dlrAccount',
          'dlrAccountCode',
          'dlrAccountId',
          'dlrBalance',
          'dlrBalanceInit',
          'dlrCode',
          'dlrId',
          'dlrShortName',
          'frozenMoney',
          'groupCode',
          'groupId',
          'isEnable',
          'isGreat',
          'isSystem',
          'lastUpdatedDate',
          'modifier',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'operType',
          'partBrandCode',
          'remark',
          'remit',
          'sdpOrgId',
          'sdpUserId',
          'subtract',
          'updateControlId',
          'useAmount'
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
      actionName: queryObj.apiServices[0].apiServiceCode,
      // excel列
      columns: excelCols
    }]
  }

  return requestGraphQL(paramD)
}