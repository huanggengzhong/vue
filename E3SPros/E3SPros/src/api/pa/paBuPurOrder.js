import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import { paApis } from '@/api/graphQLApiList/pa'
import { getParams } from '@/utils/getParamter'

// 订单类型
export function getOrderType(params) {
  return request({
    url: '/getOrderType/list',
    method: 'get',
    params
  })
}
// 运输方式
export function getTransport(params) {
  return request({
    url: '/getTransport/list',
    method: 'get',
    params
  })
}
// 主表网格
export function getList(params) {
  return request({
    url: '/orderSearch/list',
    method: 'post',
    data: params
  })
}
// 订单号弹出框主表网格
export function getCarType(params) {
  return request({
    url: '/getOrderNo/list',
    method: 'post',
    params
  })
}
// 品牌
export function getTradeMark(params) {
  return request({
    url: '/getTradeMark/list',
    method: 'get',
    params
  })
}
// 大区
export function getRegion(params) {
  return request({
    url: '/getRegion/list',
    method: 'get',
    params
  })
}
// 省份
export function getProvince(params) {
  return request({
    url: '/getProvince/list',
    method: 'get',
    params
  })
}
// 配件订单制作修改保存
export function editSave(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam: '($dataInfo: ' + paApis.sparepartsordermakeSave.InputType + ')',
    // 请求API
    apiUrl: paApis.sparepartsordermakeSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.sparepartsordermakeSave.ServiceCode,
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

// 配件订单制作提交
export function selectSubmit(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.sparepartsordermakeSubmit.InputType + ')',
    // 请求API
    apiUrl: paApis.sparepartsordermakeSubmit.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.sparepartsordermakeSubmit.ServiceCode,
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
// 配件订单审核
export function orderReview(dataInfo, operationFlag) {
  const queryObj = {
    //保存需要传 type="mutation"
    type: 'mutation',
    typeParam: '($dataInfo:[InputPaBuPurOrder],$operationFlag:String)',
    // api配置
    apiConfig: paApis.paBuPurOrderMutationDlrAudit,
    //条件/实体参数（变量），根据typeParam中的定义配置
    apiServices: [
      {
        apiServiceParam: '(dataInfo:$dataInfo,operationFlag:$operationFlag)'
        //表格中台返回网格的字段
      }
    ],
    variables: {
      //当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo,
      operationFlag: operationFlag
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}
// 配件订单驳回
export function orderReject(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam: '($dataInfo: ' + paApis.sparepartsorderReject.InputType + ')',
    // 请求API
    apiUrl: paApis.sparepartsorderReject.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.sparepartsorderReject.ServiceCode,
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
// 备件订单制作 主表查询
export function paBuPurOrderQueryFindAll(
  pageSize,
  pageIndex,
  dataInfo,
  dataType = '',
  excelName = '',
  excelSheetName = '',
  tableColumns = null
) {
  // 查询服务车系列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      paApis.paBuPurOrderQueryFindAll.InputType +
      ')',
    // 请求API
    apiUrl: paApis.paBuPurOrderQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuPurOrderQueryFindAll.ServiceCode,
        apiServiceParam:
          '( pageIndex: $pageIndex, pageSize: $pageSize,dataInfo:$dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'billBrandCode',
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
          'dlrAuditDate',
          'dlrAuditor',
          'dlrId',
          'groupCode',
          'groupId',
          'inStoreStatus',
          'instoreStateName',
          'isAutoAudit',
          'isEnable',
          'isSystem',
          'lastUpdatedDate',
          'logisticsFlag',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemAuditDate',
          'oemAuditor',
          'oemCode',
          'oemDealFlag',
          'oemId',
          'orderNo',
          'orderSource',
          'orderStatus',
          'orderVariety',
          'partBrandCode',
          'purAmount',
          'purDate',
          'purEmpId',
          'purOrderCode',
          'purOrderType',
          'purOrderTypeName',
          'purchaseOrderId',
          'rejectReason',
          'remark',
          'sdpOrgId',
          'sdpUserId',
          'supplierId',
          'transportTypeCode',
          'transportTypeName',
          'updateControlId',
          'urgentFlag'
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
        actionName: queryObj.apiServices[0].apiServiceCode,
        // excel列
        columns: excelCols
      }
    ]
  }

  return requestGraphQL(paramD)
}

// 备件订单制作_订单明细查询
export function paBuPurOrderDQueryFindAll(
  pageSize,
  pageIndex,
  dataInfo,
  dataType = '',
  excelName = '',
  excelSheetName = '',
  tableColumns = null
) {
  // 查询服务车系列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      paApis.paBuPurOrderDQueryFindAll.InputType +
      ')',
    // 请求API
    apiUrl: paApis.paBuPurOrderDQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuPurOrderDQueryFindAll.ServiceCode,
        apiServiceParam:
          '(pageIndex: $pageIndex, pageSize: $pageSize,dataInfo:$dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'applyDirDeliverType',
          'assignWorkCode',
          'auditQty',
          'businessType',
          'carConfigCode',
          'carLicense',
          'checkResult',
          'createdDate',
          'createdName',
          'creator',
          'custName',
          'custTel',
          'dayMaxQty',
          'directDeliveryQty',
          'dlrId',
          'engineNo',
          'groupCode',
          'groupId',
          'inStoreQty',
          'inStoreStatus',
          'invalidLackQty',
          'isCanLack',
          'isEnable',
          'isSystem',
          'lackQty',
          'lastUpdatedDate',
          'maxQty',
          'mayOrderQty',
          'minQty',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemAcceptQty',
          'oemCode',
          'oemId',
          'oldPartNo',
          'orderNo',
          'partBrandCode',
          'partFlowState',
          'partNo',
          'partPlace',
          'purAmount',
          'purOrderCode',
          'purPackQty',
          'purPrice',
          'purQty',
          'purchaseOrderDId',
          'purchaseOrderId',
          'rejectReason',
          'requiredType',
          'saleOneBuyOneQty',
          'sdpOrgId',
          'sdpUserId',
          'unit',
          'updateControlId',
          'validLackQty',
          'vin'
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      pageSize: pageSize,
      pageIndex: pageIndex,
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
        actionName: queryObj.apiServices[0].apiServiceCode,
        // excel列
        columns: excelCols
      }
    ]
  }
  return requestGraphQL(paramD)
}
// 新建订单_备件选择后查询订单明细
export function paBuPurOrderDQueryAfterSelectParts(
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
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      paApis.paBuPurOrderDQueryAfterSelectParts.InputType +
      ')',
    // 请求API
    apiUrl: paApis.paBuPurOrderDQueryAfterSelectParts.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuPurOrderDQueryAfterSelectParts.ServiceCode,
        apiServiceParam:
          '(pageIndex: $pageIndex, pageSize: $pageSize,dataInfo:$dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'applyDirDeliverType',
          'assignWorkCode',
          'auditQty',
          'businessType',
          'canUseQtyTheory',
          'carConfigCode',
          'carLicense',
          'checkResult',
          'createdDate',
          'createdName',
          'creator',
          'custName',
          'custTel',
          'dayMaxQty',
          'directDeliveryQty',
          'dlrAmount',
          'dlrCode',
          'dlrId',
          'dlrOrderSwitch',
          'dlrPrice',
          'dlrShortName',
          'engineNo',
          'factQty',
          'freeQty',
          'groupCode',
          'groupId',
          'inStoreQty',
          'inStoreStatus',
          'invalidLackQty',
          'invalidOweQty',
          'isCanLack',
          'isEnable',
          'isSystem',
          'lackAmount',
          'lackNum',
          'lackQty',
          'lastUpdatedDate',
          'logisticsType',
          'maxQty',
          'mayOrderQty',
          'minQty',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemAcceptQty',
          'oemAuditDate',
          'oemCode',
          'oemId',
          'oldPartNo',
          'orderNo',
          'orderStatusName',
          'oweQty',
          'partBrandCode',
          'partBrandName',
          'partFlowState',
          'partName',
          'partNo',
          'partPlace',
          'partPlaceName',
          'partProperty',
          'partStateName',
          'partTypeId',
          'partTypeName',
          'pubOrderCode',
          'pubTypeName',
          'purAmount',
          'purDate',
          'purOrderCode',
          'purOrderType',
          'purPackQty',
          'purPrice',
          'purQty',
          'purchaseOrderDId',
          'purchaseOrderId',
          'purchaseStateName',
          'rejectReason',
          'requiredType',
          'saleOneBuyOneQty',
          'sdpOrgId',
          'sdpUserId',
          'storeQty',
          'storeSwitch',
          'supplierId',
          'supplierShortName',
          'unit',
          'updateControlId',
          'validLackQty',
          'vin',
          'wayQty'
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      pageSize: pageSize,
      pageIndex: pageIndex,
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
        actionName: queryObj.apiServices[0].apiServiceCode,
        // excel列
        columns: excelCols
      }
    ]
  }

  return requestGraphQL(paramD)
}

// 新建订单保存
export function newOrderSave() {
  // 查询服务车系列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo1:InputPaBuPurOrder,$dataInfo2:[InputPaBuPurOrderD],$oprationFlag:String,$accountCount:String)',
    // 请求API
    apiUrl: paApis.newOrderSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.newOrderSave.ServiceCode,
        apiServiceParam:
          '(dataInfo:$dataInfo1,dataInfo2:$dataInfo2,operationFlag:$oprationFlag,accountCount:$accountCount)',
        // 表格中台返回网格的字段
        apiQueryRow: []
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      accountCount: '0',
      oprationFlag: '0',
      dataInfo1: {
        transportTypeCode: 'ys_0002',
        purOrderType: '212',
        purDate: '2019-08-15 00:00:00',
        dlrId: '212'
      },
      dataInfo2: [
        {
          partNo: '0145600451-999',
          purQty: 2,
          isCanLack: '1'
        }
      ]
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

// 新建订单 主机厂库存查询
export function paBuOemStorageQuery(pageSize, pageIndex, dataInfo) {
  // 查询服务车系列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $InputPaBuOemAuditGroupD: ' +
      paApis.paOrderBuOemStorageQueryFindAll.InputType +
      ')',
    // 请求API
    apiUrl: paApis.paOrderBuOemStorageQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paOrderBuOemStorageQueryFindAll.ServiceCode,
        apiServiceParam:
          '( pageIndex: $pageIndex, pageSize: $pageSize,InputDate:$InputPaBuOemAuditGroupD)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          {
            paBuOemAuditRuleextend: ['auditRuleId', 'configValue'] // [object Object]??
          },
          'purOrderCode',
          'purOrderType',
          'orderStatus',
          'purDate',
          'purAmount',
          'orderVariety',
          'transportTypeCode',
          'supplierId',
          'leastPackOut',
          'supplierShortName',
          'dlrId',
          'dlrCode',
          'dlrShortName',
          'dlrAuditor',
          'dlrAuditDate',
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
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      InputPaBuOemAuditGroupD: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

// 新建订单 销售历史查询
export function paBuDlrOutStoreQuerySaleHis(pageSize, pageIndex, dataInfo) {
  // 查询服务车系列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      paApis.paBuDlrOutStoreQuerySaleHis.InputType +
      ')',
    // 请求API
    apiUrl: paApis.paBuDlrOutStoreQuerySaleHis.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuDlrOutStoreQuerySaleHis.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          't1',
          't2',
          't3',
          't4',
          't5',
          't6',
          't7',
          't8',
          't9',
          't10',
          't11',
          't12',
          't13',
          'applierId',
          'applierName',
          'auditFlag',
          'balanceDate',
          'balanceFlag',
          'balanceMonth',
          'billBigType',
          'billType',
          'carBrandCode',
          'carLicense',
          'carSeriesCode',
          'carTypeCode',
          'createdDate',
          'creator',
          'custId',
          'custName',
          'dlrCode',
          'dlrId',
          'dlrShortName',
          'drawTypeCode',
          'groupCode',
          'groupId',
          'isAccountCheck',
          'isArchived',
          'isEnable',
          'isNewCarAcceOut',
          'lastUpdatedDate',
          'modifier',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'outStoreCode',
          'outStoreDate',
          'outStoreId',
          'outStoreStatus',
          'partProfit',
          'partVariety',
          'pickingPersonId',
          'pickingPersonName',
          'relateOrderCode',
          'relateOrderId',
          'relateOutStoreCode',
          'relateOutStoreId',
          'relateOutStoreLinkCode',
          'relateOutStoreLinkId',
          'remark',
          'saleAmountNotax',
          'saleOrderCode',
          'salePriceNotax',
          'sdpOrgId',
          'sdpUserId',
          'taxRate',
          'transferInDlrId',
          'updateControlId',
          'useDeptId',
          'vin'
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
// 新建订单 关联订单查询
export function paBuPurOrderQueryRelate(pageSize, pageIndex, dataInfo) {
  // 查询服务车系列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      paApis.paBuPurOrderQueryRelate.InputType +
      ')',
    // 请求API
    apiUrl: paApis.paBuPurOrderQueryRelate.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuPurOrderQueryRelate.ServiceCode,
        apiServiceParam:
          '(dataInfo:$dataInfo,pageIndex:$pageIndex,pageSize:$pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'billBrandCode',
          'carBrandCn',
          'carBrandCode',
          'checkQty',
          'createdDate',
          'createdName',
          'creator',
          'dlrAuditDate',
          'dlrAuditor',
          'dlrCode',
          'dlrId',
          'dlrShortName',
          'groupCode',
          'groupId',
          'inStoreStatus',
          'instoreStateName',
          'instoreStateQty',
          'invalidLackQty',
          'isAutoAudit',
          'isEnable',
          'isSystem',
          'lastUpdatedDate',
          'logisticsFlag',
          'logisticsFlagName',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemAuditDate',
          'oemAuditor',
          'oemCode',
          'oemDealFlag',
          'oemId',
          'orderNo',
          'orderSource',
          'orderStatus',
          'orderVariety',
          'partBrandCode',
          'partName',
          'purAmount',
          'purDate',
          'purEmpId',
          'purOrderCode',
          'purOrderType',
          'purOrderTypeName',
          'purQty',
          'purType',
          'purchaseOrderId',
          'rejectReason',
          'remark',
          'sdpOrgId',
          'sdpUserId',
          'supplierId',
          'supplierShortName',
          'transportTypeCode',
          'transportTypeName',
          'updateControlId',
          'urgentFlag',
          'validLackQty',
          'wayQty'
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
// 新建订单 替换件库存查询
export function paDbReplaceListQueryStorage(pageSize, pageIndex, dataInfo) {
  // 查询服务车系列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      paApis.paDbReplaceListQueryStorage.InputType +
      ')',
    // 请求API
    apiUrl: paApis.paDbReplaceListQueryStorage.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbReplaceListQueryStorage.ServiceCode,
        apiServiceParam:
          '(dataInfo:$dataInfo,pageSize:$pageSize,pageIndex:$pageIndex)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'createdDate',
          'createdName',
          'creator',
          'csPartId',
          'csPartNo',
          'dlrOrderSwitch',
          'factQty',
          'freeQty',
          'groupCode',
          'groupId',
          'isEnable',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'oemStorageStatus',
          'orderNo',
          'partBrandCode',
          'partBrandName',
          'partFlowState',
          'partId',
          'partName',
          'partNo',
          'partPlaceName',
          'partStateName',
          'partTechSummary',
          'purchaseState',
          'pvPurSwitch',
          'remark',
          'replaceChainCode',
          'replaceCode',
          'replaceCondCode',
          'replaceListId',
          'replaceListSeqId',
          'replaceName',
          'replaceOrderNo',
          'sdpOrgId',
          'sdpUserId',
          'storeSwitch',
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
  return requestGraphQL(paramD)
}
// 新建订单 数据验证结果查询
export function paBudataVerification(pageSize, pageIndex, dataInfo) {
  // 查询服务车系列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $InputPaBuOemAuditGroupD: ' +
      paApis.paBudataVerification.InputType +
      ')',
    // 请求API
    apiUrl: paApis.paBudataVerification.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBudataVerification.ServiceCode,
        apiServiceParam:
          '( pageIndex: $pageIndex, pageSize: $pageSize,InputDate:$InputPaBuOemAuditGroupD)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          {
            paBuOemAuditRuleextend: ['auditRuleId', 'configValue'] // [object Object]??
          },
          'purOrderCode',
          'purOrderType',
          'orderStatus',
          'purDate',
          'purAmount',
          'orderVariety',
          'transportTypeCode',
          'supplierId',
          'leastPackOut',
          'supplierShortName',
          'dlrId',
          'dlrCode',
          'dlrShortName',
          'dlrAuditor',
          'dlrAuditDate',
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
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      InputPaBuOemAuditGroupD: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}
// 新建订单_备件选择弹框_查询
export function paDbDlrPartListQueryList(pageSize, pageIndex, dataInfo) {
  // 查询服务车系列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      paApis.paDbDlrPartListQueryList.InputType +
      ')',
    // 请求API
    apiUrl: paApis.paDbDlrPartListQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbDlrPartListQueryList.ServiceCode,
        apiServiceParam:
          '(pageIndex: $pageIndex, pageSize: $pageSize,dataInfo:$dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'createdDate',
          'creator',
          'dlrId',
          'dlrLeastSaleQty',
          'dlrOrderSwitchName',
          'dlrPriceNr',
          'groupCode',
          'groupId',
          'isEnable',
          'isRefine',
          'isSystem',
          'lastUpdatedDate',
          'maxStoreQty',
          'minStoreQty',
          'modifier',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'oncePurLimited',
          'orderNo',
          'partBrandCode',
          'partBrandName',
          'partFlowStateName',
          'partId',
          'partName',
          'partNo',
          'partPropertyCode',
          'partPropertyName',
          'partType',
          'partTypeCode',
          'partTypeId',
          'partTypeName',
          'partVarietyName',
          'planPrice',
          'purPackQty',
          'remark',
          'safeQty',
          'salePriceNr',
          'sdpOrgId',
          'sdpUserId',
          'unit',
          'updateControlId',
          'userPriceNr'
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      pageSize: pageSize,
      pageIndex: pageIndex,
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      InputPaBuOemAuditGroupD: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}
// 新建订单_经销商选择弹框_查询
export function mdmOrgdlrQueryByPage(pageSize, pageIndex, dataInfo) {
  // 查询服务车系列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      paApis.mdmOrgdlrQueryByPage.InputType +
      ')',
    // 请求API
    apiUrl: paApis.mdmOrgdlrQueryByPage.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.mdmOrgdlrQueryByPage.ServiceCode,
        apiServiceParam:
          '(pageIndex: $pageIndex, pageSize: $pageSize,dataInfo:$dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'aiDlrCode',
          'areaId',
          'areaName',
          'balanceCertificate',
          'balanceDate',
          'belongModule',
          'bigAreaId',
          'bigAreaName',
          'capDlrCode',
          'carBrandCn',
          'carBrandCode',
          'ceo',
          'ceoConn',
          'certificateFlag',
          'cityId',
          'cityName',
          'climateStatus',
          'compName',
          'compNameOld',
          'compSpell',
          'compType',
          'companyAreaCode',
          'companyName',
          'companyUniqueCode',
          'countyId',
          'countyName',
          'coverAcreage',
          'createdDate',
          'createdName',
          'creator',
          'deptModelId',
          'dlr4sLevel',
          'dlrAnswerCode',
          'dlrBussDate',
          'dlrCode',
          'dlrDebutTime',
          'dlrEnName',
          'dlrFullName',
          'dlrHardwareClass',
          'dlrId',
          'dlrLevel',
          'dlrNameOld',
          'dlrReleation',
          'dlrShortName',
          'dlrSort',
          'dlrStatus',
          'dlrStatusName',
          'dlrSymbol',
          'dlrType',
          'doqdFlag',
          'dpOrgid',
          'email',
          'emissionStandard',
          'factoryAcreage',
          'fareRange',
          'fax',
          'groupCode',
          'groupId',
          'guno',
          'initDate',
          'initFlag',
          'isEnable',
          'isOkCare',
          'isSecurity',
          'isSend',
          'isSsaFalf',
          'isSsaFast',
          'isSsaSelf',
          'isSsaSpray',
          'isSynchronous',
          'lastUpdatedDate',
          'lat',
          'legalPerson',
          'legalPersonCard',
          'legalPersonCardType',
          'linkAddr',
          'linkDlrId',
          'lng',
          'maintainCertDate',
          'maintainCertificate',
          'managerName',
          'managerTel',
          'mdsBigAreaId',
          'mobile',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'netId',
          'oemCode',
          'oemId',
          'oldDlrId',
          'onLineName',
          'onlineFlag',
          'onlineTime',
          'orderNo',
          'orgType',
          'orgTypeName',
          'pDlrCode',
          'parentDlrId',
          'phone',
          'printTemplet',
          'provinceId',
          'provinceName',
          'pvCompCode',
          'registerMoney',
          'releationStatus',
          'remark',
          'roleId',
          'sAddr',
          'sDlrCode',
          'sMaster',
          'sMasterConn',
          'sRegisterMoney',
          'saleEmail',
          'saleFax',
          'saleTel',
          'sapDlrId',
          'sdpOrgId',
          'sdpUserId',
          'serviceEmail',
          'serviceFax',
          'serviceTel',
          'showAcreage',
          'smallAreaId',
          'smallAreaName',
          'spFlag',
          'tatolAcreage',
          'transportLicense',
          'ucDlrCode',
          'updateControlId',
          'urgSosTel',
          'userName',
          'vDlrCode',
          'wechat',
          'zip'
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
