import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'
// 维修复核查询
export function seBuRepairOrderQueryMain(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seBuRepairOrderQueryMain.InputType + ')',
    // 请求API
    apiUrl: seApis.seBuRepairOrderQueryMain.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuRepairOrderQueryMain.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'balanceEmpId',
          'balanceTimes',
          'batteryOil',
          'billType',
          'buyDate',
          'cancelBalanceReason',
          'cancelDate',
          'cancelEmpId',
          'cancelReason',
          'carBrandCode',
          'carColorName',
          'carId',
          'carLicense',
          'carOwnerId',
          'carSaleOrder',
          'carSeriesCode',
          'carType',
          'carTypeCode',
          'cardNo',
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
          'dutyEmpId',
          'engineNo',
          'factAmount',
          'fastRepairType',
          'groupCode',
          'groupId',
          'guaranteeApplyCode',
          'ifsEcaseStatus',
          'isAccident',
          'isArtCase',
          'isCancelBalance',
          'isClean',
          'isCombo',
          'isComeQty',
          'isEnable',
          'isFirst',
          'isGather',
          'isGatherName',
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
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'oil',
          'otherAmount',
          'otherDueAmount',
          'partAmount',
          'partDueAmount',
          'policyCompanyCode',
          'policyCompanyId',
          'preGetDate',
          'receptionTime',
          'recommendItem',
          'remark',
          'remindState',
          'repairAmount',
          'repairDeliveryDate',
          'repairDesc',
          'repairDueAmount',
          'repairMan',
          'repairOrderCode',
          'repairOrderId',
          'repairOrderStatus',
          'repairStatusName',
          'repairTel',
          'repairTime',
          'reserveOrderCode',
          'retRepairCode',
          'runupAmount',
          'saEmpId',
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

// 维修复核详情初始化
export function seBuRepairCheckQueryAll(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seBuRepairCheckQueryAll.InputType + ')',
    // 请求API
    apiUrl: seApis.seBuRepairCheckQueryAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuRepairCheckQueryAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'repairOrderId',
          'dlrCustNo',
          'dlrId',
          'repairOrderCode',
          'carLicense',
          'carId',
          'vin',
          'carBrandCode',
          'carBrandCn',
          'carColorName',
          'carKeyNo',
          'engineNo',
          'carSeriesCn',
          'carTypeCode',
          'repairMan',
          'repairTel',
          'custName',
          'custTel',
          'saName',
          'repairTime',
          'preGetDate',
          'isWait',
          'isFirst',
          'isClean',
          'isAccident',
          'oil',
          'fastRepairType',
          'csDesc',
          'disposeInfo',
          'repairDesc',
          'dealRelustDesc',
          'recommendItem',
          'dthistory{repairOrderCode repairMan repairTime mainWorkitem recommendItem maxBusinessType oemCode groupCode oemId groupId dlrId dlrCode}'

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

// 撤销复核
export function seBuRepairCheckCancel(dataInfo) {
  const queryObj = {
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seBuRepairCheckCancel.InputType + ')',
    apiUrl: seApis.seBuRepairCheckCancel.APIUrl,
    apiServices: [
      {
        apiServiceCode: seApis.seBuRepairCheckCancel.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',

        apiQueryRow: []
      }
    ],

    variables: {
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

// 维修复核校验
export function seBuWorkOrderQueryCheckVerifier(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seBuWorkOrderQueryCheckVerifier.InputType + ')',

    apiUrl: seApis.seBuWorkOrderQueryCheckVerifier.APIUrl,

    apiServices: [
      {

        apiServiceCode: seApis.seBuWorkOrderQueryCheckVerifier.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',

        apiQueryRow: [
          [
            'repairOrderId',
            'repairOrderStatus',
            'repairOrderStatusName',
            'isGather',
            'isGatherName',
            'oemCode',
            'groupCode',
            'oemId',
            'groupId',
            'dlrId'
          ],
          [
            'repairOrderId',
            'partNo',
            'partName',
            'partQty',
            'outQty',
            'notoutpart',
            'oemCode',
            'groupCode',
            'oemId',
            'groupId',
            'dlrId'

          ]
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

// 维修复核保存
export function seBuRepairCheckMutationSave(dataInfo) {
  const queryObj = {
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seBuRepairCheckMutationSave.InputType + ')',
    apiUrl: seApis.seBuRepairCheckMutationSave.APIUrl,
    apiServices: [
      {
        apiServiceCode: seApis.seBuRepairCheckMutationSave.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',

        apiQueryRow: []
      }
    ],

    variables: {
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}
