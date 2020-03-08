import { requestGraphQL } from '@/api/commonRequest'
import { getParams } from '@/utils/getParamter'
import { paApis } from '@/api/graphQLApiList/pa'

export function paBuDlrOutStoreDQueryFindAll(pageSize, pageIndex, dataInfo, dataType = '', excelName = '', excelSheetName = '', tableColumns = null) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
    '( $dataInfo: ' + paApis.paBuDlrOutStoreDQueryFindAll.InputType + ',$pageIndex:Int,$pageSize:Int)',
    // 请求API
    apiUrl: paApis.paBuDlrOutStoreDQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuDlrOutStoreDQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'balanceStatusName',
          'batchno',
          'billType',
          'billTypeName',
          'businessType',
          'businessTypeName',
          'carBrandCode',
          'carLicense',
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
          'costTypeId',
          'createdDate',
          'creator',
          'custName',
          'dlrId',
          'dlrShortName',
          'drawTypeName',
          'groupCode',
          'groupId',
          'isAccountCheck',
          'isAdd',
          'isEnable',
          'lastUpdatedDate',
          'leastSaleQty',
          'linkDId',
          'modifier',
          'mycatOpTime',
          'noPriceQty',
          'oemCode',
          'oemId',
          'operatorUser',
          'outStoreCode',
          'outStoreDId',
          'outStoreDate',
          'outStoreId',
          'outStoreQty',
          'outStoreQtyBad',
          'outStoreQtyGood',
          'partBrandCode',
          'partBrandName',
          'partId',
          'partName',
          'partNo',
          'partPrice',
          'partProfit',
          'partPropertyCode',
          'partPropertyName',
          'partTypeCode',
          'partTypeName',
          'partVarietyName',
          'payKind',
          'payKindName',
          'pickingPersonName',
          'placeCode',
          'placeId',
          'registeDate',
          'registeStatus',
          'registeUser',
          'relateOrderCode',
          'relateOutStoreDId',
          'relateOutStoreLinkDId',
          'remark',
          'repairType',
          'repairTypeName',
          'returnQty',
          'saleAmount',
          'saleAmountNotax',
          'salePrice',
          'salePriceNotax',
          'sdpOrgId',
          'sdpUserId',
          'storeCost',
          'storeCostAmount',
          'storePrice',
          'storePriceAmount',
          'unit',
          'updateControlId',
          'usePersonId',
          'vin',
          'warehouseCode',
          'warehouseId',
          'warehouseName'
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      pageSize: pageSize,
      pageIndex: pageIndex,
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
