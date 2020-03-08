import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'
export function seBuRepairOrderQueryMain(pageSize, pageIndex, dataInfo) { // 查询工时备件关联列表
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
          'repairOrderCode',
          'carLicense',
          'carId',
          'vin',
          'custName',
          'repairOrderStatus',
          'repairStatusName',
          'isGatherName',
          'repairMan',
          'repairTel',
          'repairTime',
          'isCancelBalance',
          'saEmpId',
          'repairOrderId',
          'saName',
          'preGetDate',
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

// 撤销派工
export function seBuWorkOrderMutationCancel(dataInfo) {
  const queryObj = {
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seBuWorkOrderMutationCancel.InputType + ')',
    apiUrl: seApis.seBuWorkOrderMutationCancel.APIUrl,
    apiServices: [
      {
        apiServiceCode: seApis.seBuWorkOrderMutationCancel.ServiceCode,
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

// 派工详情初始化
export function seBuWorkOrderQueryFindAllRD(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seBuWorkOrderQueryFindAllRD.InputType + ')',

    apiUrl: seApis.seBuWorkOrderQueryFindAllRD.APIUrl,

    apiServices: [
      {

        apiServiceCode: seApis.seBuWorkOrderQueryFindAllRD.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',

        apiQueryRow: [
          'repairOrderId',
          'batteryOil',
          'dlrCustNo',
          'dlrId',
          'repairOrderCode',
          'carLicense',
          'carId',
          'vin',
          'carBrandCode',
          'carBrandCn',
          'carColorName',
          // 'carKeyNo',
          'engineNo',
          'carSeriesCn',
          'carSeriesCode',
          'carType',
          'carTypeCn',
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
          // 'custCarRelationCode',
          'mileage',
          'repairOrderStatus',
          // 'repairStatusName',
          'updateControlId',
          'isGather',
          'policyCompanyId',
          'repairBeginDate',
          'repairFinishDate',
          'wiDueAmount',
          'partDueAmount',
          'otherDueAmount',
          'buyDate',
          'oemCode',
          'groupCode',
          'oemId',
          'groupId',
          'dlrCode',
          'remark',
          'seBuRepairWi{repairOrderId repairWiId wiCode wiName repairTypeCode repairTypeName saleWorkQty wiWorkQty repairStatus isAdd  wiRepairQty isAddName repairStatusName repairEmpId repairGroup}',
          'seBuRepairPart{partNo partName partQty outQty returnQty repairTypeName isAdd isAddname}',
          'dthistory{repairOrderCode repairMan repairTime mainWorkitem recommendItem maxBusinessType oemCode groupCode oemId groupId dlrId dlrCode}',
          'cleanGroupList {createdDate createdName creator dlrCode dlrId groupCode groupId groupName isEnable lastUpdatedDate modifier modifyName mycatOpTime oemCode oemId repairGroupId sdpOrgId sdpUserId updateControlId workGroupCode workGroupType }',
          'checkEmployeeList {createdDate createdName creator dlrId empId empName groupCode groupId groupName isEnable lastUpdatedDate modifier modifyName mycatOpTime oemCode oemId remark repairGroupId sdpOrgId sdpUserId updateControlId workshopEmpId}'
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

// 维修派工保存
export function seBuWorkOrderMutationSave(dataInfo, dtwi) {
  const queryObj = {
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seBuWorkOrderMutationSave.InputType + ',' + '$dtwi:' + seApis.seBuWorkOrderMutationSave.InputType2 + ')',
    apiUrl: seApis.seBuWorkOrderMutationSave.APIUrl,
    apiServices: [
      {
        apiServiceCode: seApis.seBuWorkOrderMutationSave.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo,dtwi:$dtwi)',

        apiQueryRow: []
      }
    ],

    variables: {
      dataInfo: dataInfo,
      dtwi: dtwi
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

