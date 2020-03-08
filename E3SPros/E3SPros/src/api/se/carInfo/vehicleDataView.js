import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

export function docarViewCarBaseInfoQueryFindAll(pageSize, pageIndex, dataInfo) { // 车辆基本信息
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
          '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.carViewCarBaseInfoQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.carViewCarBaseInfoQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.carViewCarBaseInfoQueryFindAll.ServiceCode,
        apiServiceParam:
              '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'carBrandCode',
          'carBrandName',
          'vin',
          'carLicenseFirstsect',
          'carLicense',
          'carLicenseNo',
          'carColorId',
          'carColorName',
          'carSeriesCode',
          'carSeriesCn',
          'smallCarTypeCode',
          'smallCarTypeCn',
          'carIncolorId',
          'carIncolorName',
          'cdu',
          'engineCode',
          'batteryNumber',
          'screenNo',
          'carKeyNo',
          'saleDlrCode',
          'saleDlrShortName',
          'invoiceDate',
          'offlineDate',
          'batteryEnduranceMileage',
          'qualifiedCertNo',
          'buyCaruseCode',
          'buyCaruseName'
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

export function docarViewCarPayMsgMapQueryFindAll(pageSize, pageIndex, dataInfo) { // 车辆视图-车辆交付&车联网&上牌信息
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
            '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.carViewCarPayMsgMapQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.carViewCarPayMsgMapQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.carViewCarPayMsgMapQueryFindAll.ServiceCode,
        apiServiceParam:
                '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'deliveryDate',
          'empName',
          'dlrShortName',
          'deliveryEmpEmail',
          'invoiceNo',
          'invoiceDate',
          'invoicePrice',
          'buyerIdentificationNum',
          'dlrFullName',
          'credNo',
          'internetVechleStatus',
          'electricPakegeStatus',
          'licenseLocationProvince',
          'licenseLocationCity',
          'licenseLocationStreet'
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

export function docarViewInsureAndFinanceQueryFindAll(pageSize, pageIndex, dataInfo) { // 车辆视图-车辆交付&车联网&上牌信息
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
              '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.carViewInsureAndFinanceQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.carViewInsureAndFinanceQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.carViewInsureAndFinanceQueryFindAll.ServiceCode,
        apiServiceParam:
                  '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'vin',
          'saleOrderCode',
          'creditStatus',
          'loanIsnstitutionName',
          'payTimes',
          'realAmount',
          'firstPay',
          'discountAmount',
          'creditAmount',
          'jinsureCompCn',
          'jinsureAmount',
          'sinsureCompCn',
          'sinsureAmount',
          'jinsureDate',
          'jinsureExpireDate',
          'sinsureDate',
          'sinsureExpireDate'
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

export function docarViewChooseMsgQueryFindAll(pageSize, pageIndex, dataInfo) { // 车辆视图-车辆选装信息
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
                '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.carViewChooseMsgQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.carViewChooseMsgQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.carViewChooseMsgQueryFindAll.ServiceCode,
        apiServiceParam:
                    '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'chooseType',
          'chooseContent',
          'chooseRemark',
          'price',
          'createdDate',
          'assignDate',
          'assignWorkCode'
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

export function docarViewCarPersonMsgQueryFindAll(pageSize, pageIndex, dataInfo) { // 车辆视图-人车关系
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
                  '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.carViewCarPersonMsgQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.carViewCarPersonMsgQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.carViewCarPersonMsgQueryFindAll.ServiceCode,
        apiServiceParam:
                      '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'custNo',
          'custName',
          'genderName',
          'phone',
          'carowner',
          'carownerType',
          'createdDate'
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

export function docarViewRepairRecordQueryFindAll(pageSize, pageIndex, dataInfo) { // 车辆视图-维修历史记录
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
                    '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.carViewRepairRecordQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.carViewRepairRecordQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.carViewRepairRecordQueryFindAll.ServiceCode,
        apiServiceParam:
                        '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'repairOrderCode',
          'dlrShortName',
          'repairTime',
          'deliveryDate',
          'saName',
          'repairMan',
          'repairTel',
          'remark',
          'mainWorkitem',
          'repairOrderStatus'
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

export function docarViewCarOwnerHistoryQueryFindAll(pageSize, pageIndex, dataInfo) { // 车辆视图-历任车主
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
                      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.carViewCarOwnerHistoryQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.carViewCarOwnerHistoryQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.carViewCarOwnerHistoryQueryFindAll.ServiceCode,
        apiServiceParam:
                          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'vin',
          'custNo',
          'custName',
          'genderName',
          'phone',
          'carOwnerType',
          'createdDate'
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

export function docarViewCharginpoleMsgQueryFindAll(pageSize, pageIndex, dataInfo) { // 车辆视图-充电桩信息
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
                        '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.carViewCharginpoleMsgQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.carViewCharginpoleMsgQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.carViewCharginpoleMsgQueryFindAll.ServiceCode,
        apiServiceParam:
                            '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'chargingpolecode',
          'chargingpolemodel',
          'inspectiondate',
          'constructiondate',
          'addr',
          'acceptcompany',
          'acceptpersonincharge',
          'acceptpersonphone'
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

export function docarViewCarownerChangeLogQueryFindAll(pageSize, pageIndex, dataInfo) { // 车辆视图-车主变更记录
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
                          '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.carViewCarownerChangeLogQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.carViewCarownerChangeLogQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.carViewCarownerChangeLogQueryFindAll.ServiceCode,
        apiServiceParam:
                              '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'olduseruid',
          'oldcustname',
          'oldphone',
          'newolduseruid',
          'newcustname',
          'newphone',
          'remark',
          'createdDate'
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
