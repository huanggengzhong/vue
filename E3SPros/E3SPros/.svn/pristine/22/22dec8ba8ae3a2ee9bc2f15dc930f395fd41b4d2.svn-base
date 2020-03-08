import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

// 协议公司查询
export function queryCompanyList(pageSize, pageIndex, dataInfo) { // 查询工时备件关联列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seDbPolicyCompanyQuery.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbPolicyCompanyQuery.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbPolicyCompanyQuery.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'accountBank',
          'accountNo',
          'accountPeriod',
          'addr',
          'addrZip',
          'amountNum',
          'createdDate',
          'createdName',
          'creator',
          'credNo',
          'custFullName',
          'custName',
          'cycleValue',
          'dlrCode',
          'dlrCustNo',
          'dlrId',
          'favoType',
          'favoTypeName',
          'fax',
          'groupCode',
          'groupId',
          'isEnable',
          'isEnableName',
          'lastUpdatedDate',
          'linkMan',
          'mobile',
          'modifier',
          'modifyName',
          'monthNum',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'partAddRate',
          'partDiscountRate',
          'phone',
          'policyBegDate',
          'policyBillCode',
          'policyCompanyId',
          'policyEndDate',
          'sdpOrgId',
          'sdpUserId',
          'u8Code',
          'u8Name',
          'updateControlId',
          'wiAddRate',
          'wiDiscountRate'
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

// 协议公司维护
export function changeCompanySave(dataInfo) { // 保存关联接口
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbPolicyCompanySave.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbPolicyCompanySave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbPolicyCompanySave.ServiceCode,
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

// 协议公司启用禁用
export function changeCompanyEnable(dataInfo) {
  const queryObj = {

    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbPolicyCompanyEnable.InputType + ')',

    apiUrl: seApis.seDbPolicyCompanyEnable.APIUrl,

    apiServices: [
      {

        apiServiceCode: seApis.seDbPolicyCompanyEnable.ServiceCode,
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

// 协议公司车辆查询
export function carQueryList(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seDbPolicyCarQuery.InputType + ')',

    apiUrl: seApis.seDbPolicyCarQuery.APIUrl,

    apiServices: [
      {

        apiServiceCode: seApis.seDbPolicyCarQuery.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        apiQueryRow: [
          'backPayAmount',
          'carId',
          'carLicenseNo',
          'carSeriesCode',
          'carSeriesId',
          'carSeriesName',
          'carTypeCode',
          'carTypeId',
          'carTypeName',
          'comCustName',
          'comeTimes',
          'createdDate',
          'createdName',
          'creator',
          'creditAmount',
          'custName',
          'custRelatetionCode',
          'dlrCode',
          'dlrId',
          'groupCode',
          'groupId',
          'isEnable',
          'lastMileage',
          'lastRepairDate',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'phone',
          'policyCarId',
          'policyCompanyId',
          'sdpOrgId',
          'sdpUserId',
          'totalAmount',
          'updateControlId',
          'vin'
        ]
      }
    ],
    variables: {
      pageSize: pageSize,
      pageIndex: pageIndex,

      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}
// 协议车辆删除
export function policyCarDelet(dataInfo) {
  const queryObj = {

    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbPolicyCarMutationDelete.InputType + ')',

    apiUrl: seApis.seDbPolicyCarMutationDelete.APIUrl,

    apiServices: [
      {

        apiServiceCode: seApis.seDbPolicyCarMutationDelete.ServiceCode,
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
// 协议车辆新增
export function seDbPolicyCarSave(dataInfo) {
  const queryObj = {

    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbPolicyCarMutationSave.InputType + ')',

    apiUrl: seApis.seDbPolicyCarMutationSave.APIUrl,

    apiServices: [
      {

        apiServiceCode: seApis.seDbPolicyCarMutationSave.ServiceCode,
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
