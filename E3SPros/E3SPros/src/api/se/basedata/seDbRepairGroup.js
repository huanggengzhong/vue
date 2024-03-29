import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

export function doSeDbRepairGroupQuery(pageSize, pageIndex, dataInfo) { // 查询班组列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
          '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.SeDbRepairGroupQuery.InputType + ')',
    // 请求API
    apiUrl: seApis.SeDbRepairGroupQuery.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.SeDbRepairGroupQuery.ServiceCode,
        apiServiceParam:
              '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'createdDate',
          'createdName',
          'creator',
          'workGroupTypeName',
          'dlrCode',
          'dlrId',
          'groupCode',
          'groupId',
          'groupName',
          'isEnable',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'repairGroupId',
          'sdpOrgId',
          'sdpUserId',
          'updateControlId',
          'workGroupCode',
          'workGroupType'
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

export function doSeDbRepairGroupTechQuery(pageSize, pageIndex, dataInfo) { // 查询技师列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
          '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.SeDbRepairGroupTechQuery.InputType + ')',
    // 请求API
    apiUrl: seApis.SeDbRepairGroupTechQuery.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.SeDbRepairGroupTechQuery.ServiceCode,
        apiServiceParam:
              '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'createdDate',
          'createdName',
          'creator',
          'deptName',
          'dlrId',
          'empCode',
          'empId',
          'empName',
          'genderCode',
          'groupCode',
          'groupId',
          'isEnable',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'remark',
          'repairGroupId',
          'sdpOrgId',
          'sdpUserId',
          'stationName',
          'updateControlId',
          'workshopEmpId'
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

export function doSeDbRepairGroupInsert(dataInfo) { // 新增班组
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
        '($dataInfo: ' + seApis.SeDbRepairGroupInsert.InputType + ')',
    // 请求API
    apiUrl: seApis.SeDbRepairGroupInsert.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.SeDbRepairGroupInsert.ServiceCode,
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

export function doSeDbRepairGroupUpdate(dataInfo) { // 修改班组
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
        '($dataInfo: ' + seApis.SeDbRepairGroupUpdate.InputType + ')',
    // 请求API
    apiUrl: seApis.SeDbRepairGroupUpdate.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.SeDbRepairGroupUpdate.ServiceCode,
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

export function doSeDbRepairGroupDelete(dataInfo) { // 删除班组
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
        '($dataInfo: ' + seApis.SeDbRepairGroupDelete.InputType + ')',
    // 请求API
    apiUrl: seApis.SeDbRepairGroupDelete.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.SeDbRepairGroupDelete.ServiceCode,
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

export function doseDbRepairGroupEnable(dataInfo) { // 停启班组
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
        '($dataInfo: ' + seApis.seDbRepairGroupEnable.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbRepairGroupEnable.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbRepairGroupEnable.ServiceCode,
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

export function doSeDbRepairGroupTechInsert(dataInfo) { // 新增技师
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.SeDbRepairGroupTechInsert.InputType + ')',
    // 请求API
    apiUrl: seApis.SeDbRepairGroupTechInsert.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.SeDbRepairGroupTechInsert.ServiceCode,
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

export function doSeDbRepairGroupTechDelete(dataInfo) { // 删除技师
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.SeDbRepairGroupTechDelete.InputType + ')',
    // 请求API
    apiUrl: seApis.SeDbRepairGroupTechDelete.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.SeDbRepairGroupTechDelete.ServiceCode,
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


export function doSeDbFavoPowerQueryFindAll(pageSize, pageIndex, dataInfo) { // 查询员工
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
          '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seDbFavoPowerQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbFavoPowerQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbFavoPowerQueryFindAll.ServiceCode,
        apiServiceParam:
              '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'addr',
               'cancelRepairOrder',
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
               'deptName',
               'dlrCode',
               'dlrId',
               'dlrShortName',
               'empCode',
               'empName',
               'empid',
               'favoPowerId',
               'favoType',
               'genderCode',
               'groupCode',
               'groupId',
               'isEnable',
               'isPayTypeEdit',
               'lastUpdatedDate',
               'mobile',
               'modifier',
               'modifyName',
               'mycatOpTime',
               'oemCode',
               'oemId',
               'paCostPrice',
               'paNetPrice',
               'paSalePrice',
               'paUsePrice',
               'partRate',
               'sdpOrgId',
               'sdpUserId',
               'serviceScope',
               'stationName',
               'status',
               'statusCode',
               'updateControlId',
               'wiPower',
               'wiRate'
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
