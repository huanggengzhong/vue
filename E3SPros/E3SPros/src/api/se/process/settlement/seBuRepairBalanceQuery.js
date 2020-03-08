// import request from '@/utils/request'
// import config from '@/utils/config'
import { requestGraphQL } from '@/api/commonRequest'
import { apiSeBalance, seApis } from '@/api/graphQLApiList/se'
import { getParams } from '@/utils/getParamter'

export function doQueryList(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      apiSeBalance.seBuRepairBalanceQueryFind.InputType +
      ')',
    // 请求API
    apiUrl: apiSeBalance.seBuRepairBalanceQueryFind.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeBalance.seBuRepairBalanceQueryFind.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'repairOrderId',
          'repairOrderCode',
          'carLicense',
          'vin',
          'repairMan',
          'repairTel',
          'repairTime',
          'preGetDate',
          'isGather',
          'isGatherName',
          'repairOrderStatus',
          'repairStatusName',
          'isAccident',
          'saName',
          'updateControlId',
          'repairGatheringId',
          'balanceOrderCode',
          'wiAmount',
          'partAmount',
          'otherAmount',
          'totalAmount',
          'isCancel',
          'dlrCustNo',
          'gatheringEmpName',
          'carBrandCode',
          'policyCompanyId',
          'custName',
          'custTel',
          'mileage',
          'carId',
          'maxBusinessType'
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

export function doInit(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      apiSeBalance.fiBuRepairGatheringQueryFindAllReceivablesRD.InputType +
      ')',
    // 请求API
    apiUrl: apiSeBalance.fiBuRepairGatheringQueryFindAllReceivablesRD.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode:
          apiSeBalance.fiBuRepairGatheringQueryFindAllReceivablesRD.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'seBuRepairWi{wiCode payKindName saleWorkQty wiPrice wiAmount businessTypeName businessType wiDiscountRate dutyMan dutyEmpId}',
          'seBuRepairPart{partNo partName payKindName outQty partPrice priceAmount businessTypeName partDiscount businessType }',
          'seBuRepairOther{otherAmountType payKindName businessTypeName otherAmount remark}',
          'balanceDate',
          'balanceEmpId',
          'balanceOrderCode',
          'balanceTimes',
          'bankAmount',
          'batteryOil',
          'billType',
          'buyDate',
          'cancelBalanceReason',
          'cancelDate',
          'cancelEmpId',
          'cancelEmpName',
          'cancelReason',
          'cancelState',
          'carBrandCn',
          'carBrandCode',
          'carColorName',
          'carId',
          'carLicense',
          'carOwnerId',
          'carSaleOrder',
          'carSeriesCn',
          'carSeriesCode',
          'carType',
          'carTypeCn',
          'carTypeCode',
          'cardAmount',
          'cardNo',
          'cashAmount',
          'collectAmount',
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
          'csDesc',
          'custName',
          'custTel',
          'dealRelustDesc',
          'discountAmount',
          'disposeInfo',
          'dlrCode',
          'dlrCustNo',
          'dlrId',
          'dueInsureAmount',
          'dueOtherAmount',
          'duePartAmount',
          'dueWiAmount',
          'dutyEmpId',
          'engineNo',
          'factAmount',
          'factoyrRunupAmount',
          'fastRepairType',
          'gatheringEmpId',
          'gatheringEmpName',
          'gatheringState',
          'groupCode',
          'groupId',
          'guaranteeApplyCode',
          'ifsEcaseStatus',
          'insureRunupAmount',
          'isAccident',
          'isArtCase',
          'isCancelBalance',
          'isClean',
          'isCombo',
          'isComeQty',
          'isEnable',
          'isEnableName',
          'isFirst',
          'isGather',
          'isMessage',
          'isRemaintain',
          'isRescue',
          'isSendRepair',
          'isWait',
          'lastUpdatedDate',
          'mainPartitem',
          'mainWorkitem',
          'maxBusinessType',
          'maxRepairTypeCode',
          'mileage',
          'mobilePay',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'oil',
          'otherAmount',
          'otherDueAmount',
          'pactRunupAmount',
          'partAmount',
          'partDueAmount',
          'policyCompanyCode',
          'policyCompanyId',
          'preGetDate',
          'receiptsAmount',
          'receptionTime',
          'recommendItem',
          'remark',
          'remindState',
          'repairAmount',
          'repairDeliveryDate',
          'repairDesc',
          'repairDueAmount',
          'repairGatheringId',
          'repairMan',
          'repairOrderCode',
          'repairOrderId',
          'repairOrderStatus',
          'repairTel',
          'repairTime',
          'reserveOrderCode',
          'reserveOrderId',
          'retRepairCode',
          'runupAmount',
          'saEmpId',
          'saEmpName',
          'saName',
          'sdpOrgId',
          'sdpUserId',
          'sendRepairBillCode',
          'sendRepairShop',
          'sendRepairShopSa',
          'sendRepairStatus',
          'serviceLine',
          'submitBalanceDate',
          'trunRepairDate',
          'updateControlId',
          'vin',
          'wiAmount',
          'wiDueAmount'
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

//结算收款保存
export function saveBalance(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiSeBalance.seBuRepairBalanceSave.InputType + ')',
    // 请求API
    apiUrl: apiSeBalance.seBuRepairBalanceSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeBalance.seBuRepairBalanceSave.ServiceCode,
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

//查询值列表
export function doQueryValueList(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      seApis.mdsLookupValueQueryByPage.InputType +
      ')',
    // 请求API
    apiUrl: seApis.mdsLookupValueQueryByPage.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.mdsLookupValueQueryByPage.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'lookupTypeCode',
          'lookupTypeName',
          'lookupValueCode',
          'lookupValueName'
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

//查询打印信息
export function queryPrint(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      apiSeBalance.seBuRepairBalancePrint.InputType +
      ')',
    // 请求API
    apiUrl: apiSeBalance.seBuRepairBalancePrint.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeBalance.seBuRepairBalancePrint.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'repairOrderCode',
          'isFirst',
          'saName',
          'custName',
          'addr',
          'custTelphone',
          'carSeriesCode',
          'carTypeCode',
          'vin',
          'carLicense',
          'engineNo',
          'deliveryDate',
          'carColorName',
          'submitBalanceDate',
          'mileage',
          'invoiceDate',
          'repairTime',
          'preGetDate',
          'trunRepairDate',
          'repairFinishDate',
          'csDesc',
          'disposeInfo',
          'recommendItem',
          'wiAmount',
          'partAmount',
          'otherAmount',
          'amountTotal',
          'wiDueAmount',
          'partDueFee',
          'sumOtherDueAmount',
          'dueAmountTotal',
          'receiptsAmount',
          'pactRunupAmount',
          'discountAmount',
          'amountTotal',
          'repairMan',
          'repairTel',
          'storesinformation',
          'otherexpenses',
          'maintenancerepairparts',
          'maintenancework'
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
