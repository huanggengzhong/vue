import request from '@/utils/request'
import config from '@/utils/config'
import { requestGraphQL } from '@/api/commonRequest'
import {getParams} from '@/utils/getParamter'
import { apiSeDbWiQuery } from '@/api/graphQLApiList/se'

export function seDbWiQueryFindAll(dataInfo) { 
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($dataInfo: ' + apiSeDbWiQuery.seDbWiQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiQuery.seDbWiQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiQuery.seDbWiQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'wiCode    ',
          'wiName    ',
          'isSystem    ',
          'isSystemName    ',
          'dlrCode    ',
          'isEnable    ',
          'operatePartCode    ',
          'opratePlaceName    ',
          'repairSmallKindCode    ',
          'repairSmallKindName    ',
          'repairType    ',
          'repairName    ',
          'wiKey    ',
          'remark    '
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

export function seDbWiCartypeQueryFind(dataInfo) { 
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($dataInfo: ' + apiSeDbWiQuery.seDbWiCartypeQueryFind.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiQuery.seDbWiCartypeQueryFind.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiQuery.seDbWiCartypeQueryFind.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'carBrandCode    ',
          'carTypeCn    ',
          'saleWiQty    ',
          'workWiQty    ',
          'repairWiQty    '
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

export function seDbWiRelationQueryFind(dataInfo) { 
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($dataInfo: ' + apiSeDbWiQuery.seDbWiRelationQueryFind.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiQuery.seDbWiRelationQueryFind.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiQuery.seDbWiRelationQueryFind.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'isSystem    ',
          'operatePartCode    ',
          'opratePlaceName    ',
          'repairSmallKindCode    ',
          'repairSmallKindName    ',
          'wiCode    ',
          'wiName    '
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

//维修工时标准-保存
export function seDbWiMutationSaveWi(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiSeDbWiQuery.seDbWiMutationSaveWi.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiQuery.seDbWiMutationSaveWi.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiQuery.seDbWiMutationSaveWi.ServiceCode,
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

//维修工时标准-删除
export function seDbWiMutationRemoveWi(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiSeDbWiQuery.seDbWiMutationRemoveWi.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiQuery.seDbWiMutationRemoveWi.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiQuery.seDbWiMutationRemoveWi.ServiceCode,
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

//车型工时对应关系-保存
export function seDbWiCarTypeMutationSave(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiSeDbWiQuery.seDbWiCarTypeMutationSave.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiQuery.seDbWiCarTypeMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiQuery.seDbWiCarTypeMutationSave.ServiceCode,
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

连带工时设置-保存
export function seDbWiRelationMutationSave(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiSeDbWiQuery.seDbWiRelationMutationSave.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiQuery.seDbWiRelationMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiQuery.seDbWiRelationMutationSave.ServiceCode,
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

//导入
export function doResolve(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiSeDbWiQuery.seDbWiMutationImportWi.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiQuery.seDbWiMutationImportWi.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiQuery.seDbWiMutationImportWi.ServiceCode,
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
