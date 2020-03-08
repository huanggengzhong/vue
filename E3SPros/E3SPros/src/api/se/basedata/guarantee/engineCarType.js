import request from '@/utils/request'
import {
  requestGraphQL
} from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import {
  apiGuarantee
} from '@/api/graphQLApiList/se'
//  发动机公告车型维护查询
export function seDbEngineCarTypeQueryFindAll(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam: '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + apiGuarantee.seDbEngineCarTypeQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: apiGuarantee.seDbEngineCarTypeQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [{
      // API服务编码&参数
      apiServiceCode: apiGuarantee.seDbEngineCarTypeQueryFindAll.ServiceCode,
      apiServiceParam: '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
      // 表格中台返回网格的字段
      apiQueryRow: [
        'engineCarTypeId',
        'carSeriesCode',
        'carSeriesCn',
        'carTypeCode',
        'engineType',
        'engineTypeCn',
        'createdName',
        'createdDate',
        'modifier',
        'lastUpdatedDate',
        'oemCode',
        'groupCode',
        'updateControlId'

      ]
    }],
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
  //  发动机公告车型维护保存
export function SeDbEngineCarTypeMutationSave(dataInfo) {
  const queryObj = {
      // 请求类型&参数 保存mutation  查询query
      type: 'mutation',
      typeParam:
          '($dataInfo: ' + apiGuarantee.SeDbEngineCarTypeMutationSave.InputType + ')',
      // 请求API
      apiUrl: apiGuarantee.SeDbEngineCarTypeMutationSave.APIUrl,
      // 需要调用的API服务配置
      apiServices: [
          {
              // API服务编码&参数
              apiServiceCode: apiGuarantee.SeDbEngineCarTypeMutationSave.ServiceCode,
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

  //发动公告车型维护删除
export function seDbEngineCarTypeMutationDelete(dataInfo) {
  const queryObj = {
      // 请求类型&参数 保存mutation  查询query
      type: 'mutation',
      typeParam:
          '($dataInfo: ' + apiGuarantee.seDbEngineCarTypeMutationDelete.InputType + ')',
      // 请求API
      apiUrl: apiGuarantee.seDbEngineCarTypeMutationDelete.APIUrl,
      // 需要调用的API服务配置
      apiServices: [
          {
              // API服务编码&参数
              apiServiceCode: apiGuarantee.seDbEngineCarTypeMutationDelete.ServiceCode,
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






