import request from '@/utils/request'
import config from '@/utils/config'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

export function doQueryList(pageSize, pageIndex, dataInfo) { // 查询业务权限设置列表
  const queryobj = {
  // 请求类型&参数 保存mutation 查询query
    type: 'query',
    typeParam:
  '($pageIndex:Int,$pageSize:Int,$dataInfo:' + seApis.seDbFavoPowerQueryFindAll.InputType + ')',
    apiUrl: seApis.seDbFavoPowerQueryFindAll.APIUrl,
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
      // 当前中台使用的名称有datainfo、info,具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryobj)
  return requestGraphQL(paramD)
}

export function doPowerSave(dataInfo) { // 保存员工权限
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbFavoPowerMutationSave.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbFavoPowerMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbFavoPowerMutationSave.ServiceCode,
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
