import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { apiRepairOrderModel } from '@/api/graphQLApiList/se'
import { orgApis } from '@/api/graphQLApiList/org'

// 查询估价单模板
export function getModelList(dataInfo, pageIndex, pageSize) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int,$dataInfo: ' + apiRepairOrderModel.seDbRepairModeQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: apiRepairOrderModel.seDbRepairModeQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiRepairOrderModel.seDbRepairModeQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'carBrandCode',
          'carBrandCn',
          'createdDate',
          'createdName',
          'creator',
          'dlrId',
          'groupCode',
          'groupId',
          'isCombo',
          'isEnable',
          'isSystem',
          'lastUpdatedDate',
          'modeType',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'payKind',
          'payKindName',
          'repairModeCode',
          'repairModeId',
          'repairModeName',
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

export function doSave(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiRepairOrderModel.seDbRepairModeSave.InputType + ')',
    // 请求API
    apiUrl: apiRepairOrderModel.seDbRepairModeSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiRepairOrderModel.seDbRepairModeSave.ServiceCode,
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

export function seDbRepairModeChooseSave(type, wi, part) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($type: [InputSeDbRepairModeType],$wi: [InputSeDbRepairModeWi],$part: [InputSeDbRepairModePart])',
    // 请求API
    apiUrl: apiRepairOrderModel.seDbRepairModeChooseSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiRepairOrderModel.seDbRepairModeChooseSave.ServiceCode,
        apiServiceParam:
          '(type: $type,wi: $wi,part: $part)',
        // 表格中台返回网格的字段
        apiQueryRow: []
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      type: type,
      wi: wi,
      part: part
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

export function seDbRepairModeCarTypeDelete(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiRepairOrderModel.seDbRepairModeCarTypeDelete.InputType + ')',
    // 请求API
    apiUrl: apiRepairOrderModel.seDbRepairModeCarTypeDelete.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiRepairOrderModel.seDbRepairModeCarTypeDelete.ServiceCode,
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

export function seDbRepairModeCarTypeSave(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiRepairOrderModel.seDbRepairModeCarTypeSave.InputType + ')',
    // 请求API
    apiUrl: apiRepairOrderModel.seDbRepairModeCarTypeSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiRepairOrderModel.seDbRepairModeCarTypeSave.ServiceCode,
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

export function seDbRepairModeWiDelete(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiRepairOrderModel.seDbRepairModeWiDelete.InputType + ')',
    // 请求API
    apiUrl: apiRepairOrderModel.seDbRepairModeWiDelete.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiRepairOrderModel.seDbRepairModeWiDelete.ServiceCode,
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

export function seDbRepairModeWiSave(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiRepairOrderModel.seDbRepairModeWiSave.InputType + ')',
    // 请求API
    apiUrl: apiRepairOrderModel.seDbRepairModeWiSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiRepairOrderModel.seDbRepairModeWiSave.ServiceCode,
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

export function seDbRepairModePartDelete(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiRepairOrderModel.seDbRepairModePartDelete.InputType + ')',
    // 请求API
    apiUrl: apiRepairOrderModel.seDbRepairModePartDelete.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiRepairOrderModel.seDbRepairModePartDelete.ServiceCode,
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

export function seDbRepairModePartSave(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiRepairOrderModel.seDbRepairModePartSave.InputType + ')',
    // 请求API
    apiUrl: apiRepairOrderModel.seDbRepairModePartSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiRepairOrderModel.seDbRepairModePartSave.ServiceCode,
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

export function seDbRepairModeCarTypeQuery(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int,$dataInfo: ' + apiRepairOrderModel.seDbRepairModeCarTypeQuery.InputType + ')',
    // 请求API
    apiUrl: apiRepairOrderModel.seDbRepairModeCarTypeQuery.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiRepairOrderModel.seDbRepairModeCarTypeQuery.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'carBrandCode',
          'carSeriesCode',
          'carTypeCode',
          'createdDate',
          'createdName',
          'creator',
          'fixedAmount',
          'groupCode',
          'groupId',
          'isEnable',
          'isSystem',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'partAmount',
          'repairModeCartypeId',
          'repairModeId',
          'sdpOrgId',
          'sdpUserId',
          'updateControlId',
          'wiAmount'
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

export function weDbRepairModeWiQuery(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int,$dataInfo: ' + apiRepairOrderModel.weDbRepairModeWiQuery.InputType + ')',
    // 请求API
    apiUrl: apiRepairOrderModel.weDbRepairModeWiQuery.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiRepairOrderModel.weDbRepairModeWiQuery.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'businessType',
          'carTypeCode',
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
          'oemCode',
          'oemId',
          'repairModeId',
          'repairModeWiId',
          'sdpOrgId',
          'sdpUserId',
          'updateControlId',
          'wiCode',
          'wiName',
          'wiQty'
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

export function seDbRepairModePartQuery(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int,$dataInfo: ' + apiRepairOrderModel.seDbRepairModePartQuery.InputType + ')',
    // 请求API
    apiUrl: apiRepairOrderModel.seDbRepairModePartQuery.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiRepairOrderModel.seDbRepairModePartQuery.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'businessType',
          'carTypeCode',
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
          'oemCode',
          'oemId',
          'partName',
          'partNo',
          'partPrice',
          'partQty',
          'partTotalFee',
          'repairModeId',
          'repairModePartId',
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

export function doBrandQuery(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int,$dataInfo: ' + orgApis.mdmCarBrandQueryByPage.InputType + ')',
    // 请求API
    apiUrl: orgApis.mdmCarBrandQueryByPage.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: orgApis.mdmCarBrandQueryByPage.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'carBrandCn',
          'carBrandCode',
          'carBrandEn',
          'isEnable',
          'updateControlId'
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      pageSize: 100,
      pageIndex: 1,
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: {
        isEnable: '1'
      }
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}
