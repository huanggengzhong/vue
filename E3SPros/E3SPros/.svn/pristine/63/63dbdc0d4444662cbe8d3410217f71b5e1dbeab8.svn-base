import { requestGraphQL } from '@/api/commonRequest'
import { getParams } from '@/utils/getParamter'
import { paApis } from '@/api/graphQLApiList/pa'

export function paDbOrderCheckConfigQueryFindAll(pageSize, pageIndex, dataInfo) { // 查询工时备件关联列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
    '( $pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.paDbOrderCheckConfigQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbOrderCheckConfigQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbOrderCheckConfigQueryFindAll.ServiceCode,
        apiServiceParam:
        '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'orderCheckConfigId',
          'aduitDateWeekName',
          'aduitDateWeek',
          'purAssignTypeName',
          'purAssignType',
          'aduitDateBegin',
          'aduitDateEnd',
          'aduitDateType',
          'aduitDateQuantum',
          'isEnable',
          'oemId',
          'groupId',
          'oemCode',
          'groupCode',
          'timeType',
          'aduitDateType'
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

export function paDbOrderConfigDQueryFindAll(pageSize, pageIndex, dataInfo) { // 查询工时备件关联列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '( $pageIndex: Int, $pageSize: Int, $dataInfo: ' + paApis.paDbOrderConfigDQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbOrderConfigDQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbOrderConfigDQueryFindAll.ServiceCode,
        apiServiceParam:
        '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'orderCheckCfDId',
          'orderCheckConfigId',
          'aduitDate',
          'isEnable',
          'oemId',
          'groupId',
          'oemCode',
          'groupCode'
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

export function paDbOrderCheckConfigMutationSave(dataInfo, dataInfoD, timeInfo) { // 查询工时备件关联列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: [' + paApis.paDbOrderCheckConfigMutationSave.InputType + '], $timeInfo: [InputPaDbOrderConfigD], $dataInfoD: ' + paApis.paDbOrderCheckConfigMutationSave.InputType + ')',
    // 请求API
    apiUrl: paApis.paDbOrderCheckConfigMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbOrderCheckConfigMutationSave.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, dataInfoD: $dataInfoD, timeInfo: $timeInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [

        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfoD: dataInfoD,
      timeInfo: timeInfo,
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

