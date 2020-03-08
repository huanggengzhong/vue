import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

// 协议公司查询
export function seDbMaintainConfigQueryFindAll(pageSize, pageIndex, dataInfo) { // 查询工时备件关联列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
            '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seDbMaintainConfigQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbMaintainConfigQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbMaintainConfigQueryFindAll.ServiceCode,
        apiServiceParam:
                    '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'maintainConfigId',
          'carTypeCode',
          //'carTypeCn',
          'nextMaintainType',
          'maxMile',
          'maxTime',
          'remark',
          'maintainCode',
          'maintainType',
          'carSeriesCode',
          'carBrandCode',
          'carBrandCn',
          'minTime',
          'minMile',
          'oemId',
          'groupId',
          'oemCode',
          'groupCode',
          'dlrId',
          'dlrCode',
          'creator',
          'createdName',
          'createdDate',
          'modifier',
          'modifyName',
          'lastUpdatedDate',
          'isEnable',
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

export function seDbMaintainConfigMutationSave(dataInfo) {
  const queryObj = {
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbMaintainConfigMutationSave.InputType + ')',
    apiUrl: seApis.seDbMaintainConfigMutationSave.APIUrl,
    apiServices: [
      {
        apiServiceCode: seApis.seDbMaintainConfigMutationSave.ServiceCode,
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

export function seDbMaintainConfigMutationRemove(dataInfo) {
  const queryObj = {
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbMaintainConfigMutationRemove.InputType + ')',
    apiUrl: seApis.seDbMaintainConfigMutationRemove.APIUrl,
    apiServices: [
      {
        apiServiceCode: seApis.seDbMaintainConfigMutationRemove.ServiceCode,
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
