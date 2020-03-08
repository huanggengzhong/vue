import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

export function seBuReserveOrderQueryInfo(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '( $pageIndex: Int, $pageSize: Int,$dataInfo: ' + seApis.seBuReserveOrderQueryInfo.InputType + ')',
    // 请求API
    apiUrl: seApis.seBuReserveOrderQueryInfo.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuReserveOrderQueryInfo.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo,pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'reserveOrderId',
          'reserveOrderCode',
          'dlrCustNo',
          'custTel',
          'carLicense',
          'dlrCode',
          'carTypeCode',
          'carTypeCn',
          'reserveState',
          'preGetDate',
          'factComeDate',
          'reserveType',
          'isFirst',
          'reserveTel',
          'saName',
          'preComeDate',
          'carBrandCode',
          'carBrandCn',
          'vin',
          'csDesc',
          'custName',
          'isRemind',
          'reserveMan',
          'carSeriesCode',
          'carSeriesCn',
          'isWait',
          'reserveSource',
          'carId',
          'isClean',
          'dlrId',
          'cancelType',
          'cancelReason',
          'saEmpId',
          'reserveSourceId',
          'isRescue',
          'linkDate',
          'contactType',
          'otherItem',
          'dayConfirm',
          'hourConfirm',
          'reserveRepairType',
          'oemId',
          'groupId',
          'oemCode',
          'groupCode',
          'creator',
          'createdDate',
          'modifier',
          'lastUpdatedDate',
          'isEnable',
          'reserveMileage',
          'reserveDueAmount',
          'wiDueAmount',
          'partDueAmount',
          'otherDueAmount',
          'reserveSourceCode',
          'updateControlId',
          'payKind',
          'isDoor',
          'custAddress',
          'doorBeginDate',
          'doorEndDate'

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

export function seBuReserveOrderMutationSave(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '( $main: ' + seApis.seBuReserveOrderMutationSave.InputType1 +
      ',$other:' + seApis.seBuReserveOrderMutationSave.InputType2 +
      ',$part:' + seApis.seBuReserveOrderMutationSave.InputType3 +
      ',$wi:' + seApis.seBuReserveOrderMutationSave.InputType4 +
      ')',
    // 请求API
    apiUrl: seApis.seBuReserveOrderMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuReserveOrderMutationSave.ServiceCode,
        apiServiceParam:
          '(main:$main,other:$other,part:$part,wi:$wi)',
        // 表格中台返回网格的字段
        apiQueryRow: [
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      main: dataInfo.main,
      wi: dataInfo.wi,
      part: dataInfo.part,
      other: dataInfo.other
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

export function seReserveCanQueryFactQty(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($dataInfo: ' + seApis.seReserveCanQueryFactQty.InputType + ')',
    // 请求API
    apiUrl: seApis.seReserveCanQueryFactQty.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seReserveCanQueryFactQty.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'preComeDate',
          'timeQuantum',
          'reserveCanQty',
          'dlrId',
          'oemId',
          'groupId',
          'oemCode',
          'groupCode',
          'isReserveCan'

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

// 预约登记_查询该车辆是否预约或查询预约状态
export function seBuReserveOrderQueryStatus(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '( $pageIndex: Int, $pageSize: Int,$dataInfo: ' + seApis.seBuReserveOrderQueryStatus.InputType + ')',
    // 请求API
    apiUrl: seApis.seBuReserveOrderQueryStatus.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuReserveOrderQueryStatus.ServiceCode,
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