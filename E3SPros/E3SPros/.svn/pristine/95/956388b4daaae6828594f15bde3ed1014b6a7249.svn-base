
// import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

export function seDbFaultPartQuery(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
    '($pageIndex:Int,$pageSize:Int, $dataInfo: ' + seApis.seDbFaultPartQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbFaultPartQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbFaultPartQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo,pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [

          'faultPlaceId',
          'faultPartCode',
          'faultPartName',
          'remark',
          'isEnable',
          'updateControlId',
          'oemCode',
          'groupCode',
          'oemId',
          'groupId'
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

export function seDbFaultPartSave(dataInfo) { // 取消关联接口
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbFaultPartMutationSave.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbFaultPartMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbFaultPartMutationSave.ServiceCode,
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
