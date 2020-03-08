import request from '@/utils/request'
import config from '@/utils/config'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

export function doQueryList(pageSize, pageIndex, dataInfo) { // 查询服务参数设置列表
  const queryobj = {
  // 请求类型&参数 保存mutation 查询query
    type: 'query',
    typeParam:
  '($pageIndex:Int,$pageSize:Int,$dataInfo:' + seApis.SeDbParaSetQueryFindAll.InputType + ')',
    apiUrl: seApis.SeDbParaSetQueryFindAll.APIUrl,
    apiServices: [
      {
      // API服务编码&参数
        apiServiceCode: seApis.SeDbParaSetQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'carBrandCode',
          'carBrandCn',
          'createdDate',
          'createdName',
          'creator',
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
          'sdpOrgId',
          'sdpUserId',
          'serviceSysParaCode',
          'serviceSysParaId',
          'serviceSysParaName',
          'serviceSysParaValue',
          'updateControlId'
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      pageSize: pageSize,
      pageIndex: pageIndex,
      // 当前中台使用的名称有datainfo、info,具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryobj)
  return requestGraphQL(paramD)
}

export function doParaSave(dataInfo) { // 保存服务参数
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
        '($dataInfo: ' + seApis.SeDbParaSetMutationSave.InputType + ')',
    // 请求API
    apiUrl: seApis.SeDbParaSetMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.SeDbParaSetMutationSave.ServiceCode,
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

export function getQueryMock(data) {
  var requireQuery = data.query
  // 截取输入类型
  var str1 = requireQuery.substring(data.query.indexOf('{'))
  var inputType = str1.substring(1, str1.indexOf('('))
  // 截取url
  var url = data.apiUrl
  delete data.apiUrl
  return request({
    url: url + config.cH + 'v=' + inputType,
    method: 'post',
    data
  })
}
