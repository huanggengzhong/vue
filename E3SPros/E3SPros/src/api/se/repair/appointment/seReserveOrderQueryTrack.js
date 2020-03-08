import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

export function seBuReserveOrderQueryViewBoard(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '( $pageIndex: Int, $pageSize: Int,$dataInfo: ' + seApis.seBuReserveOrderQueryViewBoard.InputType + ')',
    // 请求API
    apiUrl: seApis.seBuReserveOrderQueryViewBoard.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuReserveOrderQueryViewBoard.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo,pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'cancelReason',
          'cancelType',
          'carBrandCode',
          'carId',
          'carLicense',
          'carSeriesCode',
          'carTypeCode',
          'contactType',
          'createdDate',
          'createdName',
          'creator',
          'csDesc',
          'custAddress',
          'custName',
          'custTel',
          'dayConfirm',
          'dlrCode',
          'dlrCustNo',
          'dlrId',
          'doorBeginDate',
          'doorEndDate',
          'factComeDate',
          'groupCode',
          'groupId',
          'hourConfirm',
          'isClean',
          'isDoor',
          'isEnable',
          'isFirst',
          'isRemind',
          'isRescue',
          'isWait',
          'lastUpdatedDate',
          'linkDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'otherDueAmount',
          'otherItem',
          'partDueAmount',
          'preComeDate',
          'preGetDate',
          'reserveDueAmount',
          'reserveMan',
          'reserveMileage',
          'reserveOrderCode',
          'reserveOrderId',
          'reserveRepairType',
          'reserveSource',
          'reserveSourceCode',
          'reserveSourceId',
          'reserveState',
          'reserveStateCn',
          'reserveTel',
          'reserveType',
          'saEmpId',
          'saName',
          'sdpOrgId',
          'sdpUserId',
          'updateControlId',
          'vin',
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

export function seBuReserveOrderMutationCancel(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seBuReserveOrderMutationCancel.InputType + ')',
    // 请求API
    apiUrl: seApis.seBuReserveOrderMutationCancel.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuReserveOrderMutationCancel.ServiceCode,
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

export function seBuReserveCanQueryFactQty(dataInfo) {
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
          "canReserveDays",
          "canType",
          "createdDate",
          "createdName",
          "creator",
          "currentDate",
          "dlrCode",
          "dlrId",
          "dlrShortName",
          "fri",
          "groupCode",
          "groupId",
          "isEnable",
          "isReserveCan",
          "lastUpdatedDate",
          "modifier",
          "modifyName",
          "mon",
          "mycatOpTime",
          "oemCode",
          "oemId",
          "reserveCanId",
          "sat",
          "sdpOrgId",
          "sdpUserId",
          "sun",
          "thu",
          "timeQuantum",
          "tue",
          "updateControlId",
          "wed"
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

// 预约追踪_查询预约单_右页签
export function seBuReserveOrderQueryList(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '( $pageIndex: Int, $pageSize: Int,$dataInfo: ' + seApis.seBuReserveOrderQueryList.InputType + ')',
    // 请求API
    apiUrl: seApis.seBuReserveOrderQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuReserveOrderQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo,pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'cancelReason',
          'cancelType',
          'cancelTypeName',
          'carBrandCn',
          'carBrandCode',
          'carId',
          'carLicense',
          'carSeriesCn',
          'carSeriesCode',
          'carTypeCn',
          'carTypeCode',
          'contactType',
          'createdDate',
          'creator',
          'csDesc',
          'custAddress',
          'custName',
          'custTel',
          'dayConfirm',
          'dlrCode',
          'dlrCustNo',
          'dlrId',
          'doorBeginDate',
          'doorEndDate',
          'factComeDate',
          'groupCode',
          'groupId',
          'hourConfirm',
          'isClean',
          'isDoor',
          'isEnable',
          'isFirst',
          'isRemind',
          'isRescue',
          'isWait',
          'lastUpdatedDate',
          'linkDate',
          'modifier',
          'oemCode',
          'oemId',
          'otherDueAmount',
          'otherItem',
          'partDueAmount',
          'payKind',
          'payKindName',
          'preComeDate',
          'preGetDate',
          'reserveDueAmount',
          'reserveMan',
          'reserveMileage',
          'reserveOrderCode',
          'reserveOrderId',
          'reserveRepairType',
          'reserveSource',
          'reserveSourceCode',
          'reserveSourceId',
          'reserveSourceName',
          'reserveState',
          'reserveStateName',
          'reserveTel',
          'reserveType',
          'reserveTypeName',
          'saEmpId',
          'saName',
          'updateControlId',
          'vin',
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