// import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import { getParams } from '@/utils/getParamter'
import { paApis } from '@/api/graphQLApiList/pa'
import { orgApis } from '@/api/graphQLApiList/org'

export function doQueryMdsLookupValueByPage(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + orgApis.mdsLookupValueQueryByPage.InputType + ')',
    // 请求API
    apiUrl: orgApis.mdsLookupValueQueryByPage.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: orgApis.mdsLookupValueQueryByPage.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'oemCode', 'groupCode', 'lookupTypeCode', 'lookupValueCode', 'lookupValueName'
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

export function doQueryList(pageSize, pageIndex, dataInfo) { // 订单审核查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.paBuOemAuditGroupDQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: paApis.paBuOemAuditGroupDQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuOemAuditGroupDQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'auditGroupId',
          'auditSequence',
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
          'createdName',
          'creator',
          'dynamicReturn',
          'groupCode',
          'groupDId',
          'groupId',
          'isAutoAudit',
          'isEnable',
          'isLackAudit',
          'isSystem',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'purAssignType',
          'purAssignTypeName',
          'purOrderType',
          'purOrderTypeName',
          'remark',
          'sdpOrgId',
          'sdpUserId',
          'updateControlId'
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

export function doQueryList1(dataInfo) { // 订单审核保存
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paBuOemAuditGroupDMutationSave.InputType + ')',
    // 请求API
    apiUrl: paApis.paBuOemAuditGroupDMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuOemAuditGroupDMutationSave.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)'
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

export function doQueryList2(pageSize, pageIndex, dataInfo) { // 订单审核动态获取表头
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.paDbOemAuditRuleQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbOemAuditRuleQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbOemAuditRuleQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'auditRuleCode',
          'auditRuleId',
          'auditRuleName',
          'auditRuleRemark',
          'auditRuleType',
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
          'createdName',
          'creator',
          'groupCode',
          'groupId',
          'isEnable',
          'isSystem',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemId',
          'orderNo',
          'sdpOrgId',
          'sdpUserId',
          'updateControlId'
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

export function doQueryList3(dataInfo) { // 零件清单维护
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paDbElementMutationSave.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbElementMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbElementMutationSave.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // pageSize: pageSize,
      // pageIndex: pageIndex,
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

// export function doQueryList4(pageSize, pageIndex, dataInfo) { // 零件清单查询
//   const queryObj = {
//     // 请求类型&参数 保存mutation  查询query
//     type: 'query',
//     typeParam:
//       '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.paDbElementQueryList.InputType + ')',
//     // 请求API
//     apiUrl: paApis.paDbElementQueryList.APIUrl,
//     // 需要调用的API服务配置
//     apiServices: [
//       {
//         // API服务编码&参数
//         apiServiceCode: paApis.paDbElementQueryList.ServiceCode,
//         apiServiceParam:
//           '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
//         // 表格中台返回网格的字段
//         apiQueryRow: [
//           'createdDate',
//           'createdName',
//           'creator',
//           'elementCode',
//           'elementId',
//           'elementNameCn',
//           'elementNameEn',
//           'groupCode',
//           'groupId',
//           'isEnable',
//           'isEnableName',
//           'isSystem',
//           'lastUpdatedDate',
//           'modifier',
//           'modifyName',
//           'mycatOpTime',
//           'oemCode',
//           'oemId',
//           'orderNo',
//           'partBrandCode',
//           'partTypeCode',
//           'partTypeId',
//           'partTypeModifyDate',
//           'partTypeName',
//           'remark',
//           'scId',
//           'sdpOrgId',
//           'sdpUserId',
//           'seqId',
//           'unit',
//           'updateControlId'
//         ]
//       }
//     ],
//     // 条件/实体参数（变量），根据typeParam中的定义配置
//     variables: {
//       pageSize: pageSize,
//       pageIndex: pageIndex,
//       // 当前中台使用的名称有dataInfo、info，具体查看API文档
//       dataInfo: dataInfo
//     }
//   }
//   var paramD = getParams(queryObj)
//   return requestGraphQL(paramD)
// }

export function doQueryList4(pageSize, pageIndex, dataInfo, dataType = '', excelName = '', excelSheetName = '', tableColumns = null) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.paDbElementQueryList.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbElementQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbElementQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'createdDate',
          'createdName',
          'creator',
          'elementCode',
          'elementId',
          'elementNameCn',
          'elementNameEn',
          'groupCode',
          'groupId',
          'isEnable',
          'isEnableName',
          'isSystem',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'orderNo',
          'partBrandCode',
          'partTypeCode',
          'partTypeId',
          'partTypeModifyDate',
          'partTypeName',
          'remark',
          'scId',
          'sdpOrgId',
          'sdpUserId',
          'seqId',
          'unit',
          'updateControlId'
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

export function doQueryList5(dataInfo) { // 备件类别维护
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paDbAttrTypeMutationSave.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbAttrTypeMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbAttrTypeMutationSave.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // pageSize: pageSize,
      // pageIndex: pageIndex,
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

// 备件类别查询,供外部调用，不要删除
export function doQueryDbAttrTypeList(pageSize, pageIndex, dataInfo) {
  return doQueryList8(pageSize, pageIndex, dataInfo)
}
export function doQueryList8(pageSize, pageIndex, dataInfo) { // 备件类别查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.paDbAttrTypeQueryList.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbAttrTypeQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbAttrTypeQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'createdDate',
          'createdName',
          'creator',
          'groupCode',
          'groupFlag',
          'groupId',
          'isEnable',
          'isEnableCn',
          'isRefine',
          'isRefineCn',
          'isSystem',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'orderNo',
          'partBrandCode',
          'partPropertyCode',
          'partPropertyName',
          'partTypeCode',
          'partTypeId',
          'partTypeName',
          'partTypeNameShow',
          'remark',
          'safeCoefficient',
          'sdpOrgId',
          'sdpUserId',
          'seriesId',
          'updateControlId'
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

export function doQueryList6(pageSize, pageIndex, dataInfo) { // 销售开关查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.paDbPartListQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbPartListQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbPartListQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'partId',
          'partBrandName',
          'partBrandCode',
          'partNo',
          'partName',
          'partStateName',
          'partTypeCode',
          'partTypeName',
          'stockStateName', // 库存开关名称
          'purStateName', // 采购开关名称
          'saleStateName', // 销售开关名称
          'replacePartNo',
          'replaceCode',
          'lastUpdatedDate',
          'updateControlId',
          'isPvRequiredName',
          'emphasisFlagName',
          'partVarietyName',
          'leastPackOut',
          'leastPackIn',
          'dlrLeastSaleQty',
          'transitLimitName',
          'pubCarTypeName',
          'pubCarTypeCode',
          'leastPackOut',
          'unit',
          'dlrOrderSwitch', // 销售开关
          'storeSwitch', // 库存开关
          'pvPurSwitch'// 采购开关
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

export function doQueryList7(dataInfo) { // 销售开关保存
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paDbPartListMutationSavePartOrderSwitch.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbPartListMutationSavePartOrderSwitch.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbPartListMutationSavePartOrderSwitch.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
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

export function doQueryList9(pageSize, pageIndex, dataInfo) { // 备件车型关系查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.paDbPartCartypeRfQueryCarType.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbPartCartypeRfQueryCarType.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbPartCartypeRfQueryCarType.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'carSeriesCn',
          'carSeriesCode',
          'carTypeCn',
          'carTypeCode'
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

export function doQueryList10(dataInfo) { // 销售开关保存
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paDbPartCartypeRfMutationSaveCarType.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbPartCartypeRfMutationSaveCarType.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbPartCartypeRfMutationSaveCarType.ServiceCode,
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

export function flowDoQueryList(pageSize, pageIndex, dataInfo) { // 备件流动类别查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.flowQueryList.InputType + ')',
    // 请求API
    apiUrl: paApis.flowQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.flowQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'mobileClassId',
          'mobileClassNumber',
          'mobileClassName',
          'upperStandardValue',
          'lowerStandardValue',
          'coefficient',
          'orderModercode',
          'orderModeName',
          'monthlyPurchaseFrequency',
          'availablecode',
          'availableName',
          'systemData',
          'remark',
          'updateControlId'
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

export function supplierDoQueryList(pageSize, pageIndex, dataInfo) { // 备件供应商管理查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.paDbDlrSupplierQueryFindAllWindow.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbDlrSupplierQueryFindAllWindow.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbDlrSupplierQueryFindAllWindow.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'supplierId',
          'supplierCode',
          'supplierShortName',
          'supplierFullName',
          'supplierType',
          'supplierAddr',
          'taxNo',
          'linkMan',
          'linkManTel',
          'modifyName',
          'supplierTel',
          'supplierFax',
          'email',
          'zip',
          'remark',
          'isEnable',
          'isSystem',
          'groupId',
          'updateControlId'
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

export function supplierDoQMutationList(dataInfo) { // 备件供应商管理保存
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paDbDlrSupplierMutationSaveById.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbDlrSupplierMutationSaveById.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbDlrSupplierMutationSaveById.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // pageSize: pageSize,
      // pageIndex: pageIndex,
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

export function agreementUnitDoQueryList(pageSize, pageIndex, dataInfo) { // 备件收款(协议单位 + 调拨销售单)查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.PaBuDlrFlitOrderQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: paApis.PaBuDlrFlitOrderQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.PaBuDlrFlitOrderQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'documentId',
          'documentType',
          'documentCode',
          'agreementUnit',
          'referencePricesAllGold',
          'transfersPricesAllGold',
          'receivedAmount',
          'makeDate',
          'contact',
          'contactPhone',
          'settlementStatus',
          'updateControlId'
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

export function twoServicesDoQueryList(pageSize, pageIndex, dataInfo) { // 备件收款(协议单位 + 服务二网备件需求)查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.twoServicesQueryList.InputType + ')',
    // 请求API
    apiUrl: paApis.twoServicesQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.twoServicesQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'documentId',
          'documentType',
          'documentCode',
          'agreementUnit',
          'referencePricesAllGold',
          'transfersPricesAllGold',
          'receivedAmount',
          'makeDate',
          'contact',
          'contactPhone',
          'settlementStatus',
          'updateControlId'
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

export function internalDoQueryList(pageSize, pageIndex, dataInfo) { // 备件收款(内部 + 全部)查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.internalQueryList.InputType + ')',
    // 请求API
    apiUrl: paApis.internalQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.internalQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'documentId',
          'documentType',
          'documentCode',
          'recipientsDepartment',
          'recipientsPersonnel',
          'totalPrice',
          'makeDate',
          'outboundPersonnel',
          'outboundDate',
          'settlementStatus',
          'updateControlId'
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

export function agreementUnitDetailDoQueryList(pageSize, pageIndex, dataInfo) { // 备件收款(协议单位明细)查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.agreementUnitDetailQueryList.InputType + ')',
    // 请求API
    apiUrl: paApis.agreementUnitDetailQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.agreementUnitDetailQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'sparePartNo',
          'sparePartName',
          'costPrice',
          'unit',
          'number',
          'unitPrice',
          'totalPrice',
          'referenceSalesPrice',
          'sparePartsBrand',
          'sparePartsAttribute',
          'sparePartsCategory',
          'ThreePackagesKeyParts'
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

export function internalDetailDoQueryList(pageSize, pageIndex, dataInfo) { // 备件收款(协议单位明细)查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.internalDetailQueryList.InputType + ')',
    // 请求API
    apiUrl: paApis.internalDetailQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.internalDetailQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'sparePartNo',
          'sparePartName',
          'unit',
          'deliveryNumber',
          'salePrice',
          'saleTotalPrice',
          'excludingTaxPrice',
          'includedTaxPrice',
          'sparePartsBrand',
          'sparePartsAttribute',
          'sparePartsCategory',
          'ThreePackagesKeyParts'
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

export function salesOrdersDoQMutationList(dataInfo) { // 备件(调拨销售单)收款
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.salesOrdersMutationSave.InputType + ')',
    // 请求API
    apiUrl: paApis.salesOrdersMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.salesOrdersMutationSave.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // pageSize: pageSize,
      // pageIndex: pageIndex,
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

export function settlementDoQMutationList(dataInfo) { // 备件(结算)收款
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.settlementMutationSave.InputType + ')',
    // 请求API
    apiUrl: paApis.settlementMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.settlementMutationSave.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // pageSize: pageSize,
      // pageIndex: pageIndex,
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

export function paymentDoQueryList(pageSize, pageIndex, dataInfo) { // 备件挂账结算查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.paymentSettlementQueryList.InputType + ')',
    // 请求API
    apiUrl: paApis.paymentSettlementQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paymentSettlementQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'documentId',
          'documentType',
          'documentCode',
          'settlementStatus',
          'agreementUnit',
          'amountPayment',
          'receivedPayment',
          'differencePayment',
          'differenceReason',
          'paymentTime',
          'affiliatedBranches',
          'updateControlId'
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

export function paymentDoQMutationList(dataInfo) { // 备件(结算)收款
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paymentMutationSave.InputType + ')',
    // 请求API
    apiUrl: paApis.paymentMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paymentMutationSave.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // pageSize: pageSize,
      // pageIndex: pageIndex,
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

export function refundDoQueryList(pageSize, pageIndex, dataInfo) { // 备件退款——服务二网销售备件退款
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.partServicesRefundQueryList.InputType + ')',
    // 请求API
    apiUrl: paApis.partServicesRefundQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.partServicesRefundQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'withdrawingId',
          'withdrawingType',
          'documentCode',
          'agreementUnit',
          'refundPayment',
          'makeDate',
          'contact',
          'contactPhone',
          'refundStatus',
          'updateControlId'
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

export function applyDoQueryList(pageSize, pageIndex, dataInfo) { // 备件退款——网点调拨退货申请
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.partTransfersApplyQueryList.InputType + ')',
    // 请求API
    apiUrl: paApis.partTransfersApplyQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.partTransfersApplyQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'withdrawingId',
          'withdrawingType',
          'documentCode',
          'agreementUnit',
          'refundPayment',
          'makeDate',
          'contact',
          'contactPhone',
          'refundStatus',
          'updateControlId'
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

export function storesDoQueryList(pageSize, pageIndex, dataInfo) { // 备件退款——专营店间调拨取消
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.storesCancelledQueryList.InputType + ')',
    // 请求API
    apiUrl: paApis.storesCancelledQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.storesCancelledQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'withdrawingId',
          'withdrawingType',
          'documentCode',
          'agreementUnit',
          'refundPayment',
          'makeDate',
          'contact',
          'contactPhone',
          'refundStatus',
          'updateControlId'
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

export function recipientsDoQueryList(pageSize, pageIndex, dataInfo) { // 备件退款——领用退货申请
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.recipientsRefundQueryList.InputType + ')',
    // 请求API
    apiUrl: paApis.recipientsRefundQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.recipientsRefundQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'withdrawingId',
          'withdrawingType',
          'documentCode',
          'recipientsDepartment',
          'recipientsPersonnel',
          'refundPayment',
          'makeDate',
          'refundApplicant',
          'withdrawingTime',
          'refundStatus',
          'updateControlId'
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

export function detailDoQueryList(pageSize, pageIndex, dataInfo) { // 备件退款——(全部明细)
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.refundDetailQueryList.InputType + ')',
    // 请求API
    apiUrl: paApis.refundDetailQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.refundDetailQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'partId',
          'partNo',
          'partName',
          'unit',
          'partBrand',
          'partAttribute',
          'partCategory',
          'threePackagesParts',
          'updateControlId'
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

export function startInventoryDoQueryList(pageSize, pageIndex, dataInfo) { // 库存动态盘点---新建盘点单查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.paBuDlrStorageQueryFindAllOne.InputType + ')',
    // 请求API
    apiUrl: paApis.paBuDlrStorageQueryFindAllOne.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuDlrStorageQueryFindAllOne.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'partBrandName',
          'partBrandCode',
          'partNo',
          'partId',
          'partName',
          'partPropertyName',
          'partPropertyCode',
          'partTypeName',
          'partTypeId',
          'unit',
          'warehouseId',
          'warehouseCode',
          'warehouseName',
          'placeId',
          'placeCode',
          'storeQty'
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

export function newInventoryDoSaveList(dataInfo) { // 库存动态盘点---新建盘点单保存
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paBuDlrStoreCheckSaveMutation.InputType + ')',
    // 请求API
    apiUrl: paApis.paBuDlrStoreCheckSaveMutation.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuDlrStoreCheckSaveMutation.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
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

export function delInventoryDoSaveList(dataInfo) { // 库存动态盘点---删除盘点单
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paBuDlrStoreCheckDelMutation.InputType + ')',
    // 请求API
    apiUrl: paApis.paBuDlrStoreCheckDelMutation.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuDlrStoreCheckDelMutation.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
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

export function endInventoryDoSaveList(dataInfo) { // 库存动态盘点---结束盘点
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paBuDlrStoreCheckEndMutation.InputType + ')',
    // 请求API
    apiUrl: paApis.paBuDlrStoreCheckEndMutation.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuDlrStoreCheckEndMutation.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
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

export function inventoryModifiyDoSaveList(dataInfo) { // 库存动态盘点---盘点录入修改
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paBuDlrStoreCheckEditMutation.InputType + ')',
    // 请求API
    apiUrl: paApis.paBuDlrStoreCheckEditMutation.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuDlrStoreCheckEditMutation.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
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

export function approvedDoSaveList(dataInfo) { // 库存动态盘点---财务审核---审核通过
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paBuDlrStoreCheckAuditMutation.InputType + ')',
    // 请求API
    apiUrl: paApis.paBuDlrStoreCheckAuditMutation.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuDlrStoreCheckAuditMutation.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
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

export function rejectedDoSaveList(dataInfo) { // 库存动态盘点---财务审核---驳回
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paBuDlrStoreCheckBoMutation.InputType + ')',
    // 请求API
    apiUrl: paApis.paBuDlrStoreCheckBoMutation.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuDlrStoreCheckBoMutation.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
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

export function applyClaimDoQueryList(pageSize, pageIndex, dataInfo) { // 经销商索赔管理---经销商索赔申请---查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.applyClaimQueryList.InputType + ')',
    // 请求API
    apiUrl: paApis.applyClaimQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.applyClaimQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'A1',
          'A2',
          'A3',
          'A4',
          'A5',
          'A6'
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

export function applyClaimChooseDoQueryList(pageSize, pageIndex, dataInfo) { // 经销商索赔管理---经销商索赔申请---选择
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.applyClaimChooseQueryList.InputType + ')',
    // 请求API
    apiUrl: paApis.applyClaimChooseQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.applyClaimChooseQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'A1',
          'A2',
          'A3',
          'A4',
          'A5',
          'A6',
          'A7',
          'A8',
          'A9',
          'A10',
          'A11'
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

export function applyClaimDoSaveList(dataInfo) { // 经销商索赔管理---经销商索赔申请---保存(审核、驳回)
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.appliyClaimSaveMutation.InputType + ')',
    // 请求API
    apiUrl: paApis.appliyClaimSaveMutation.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.appliyClaimSaveMutation.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
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
