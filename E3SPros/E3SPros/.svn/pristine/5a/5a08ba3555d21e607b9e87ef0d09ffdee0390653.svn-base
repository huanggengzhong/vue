import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

// 保养参数查询
export function seDbMaintainQueryFindAll(pageSize, pageIndex, dataInfo) { // 查询工时备件关联列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
            '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seDbMaintainQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbMaintainQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbMaintainQueryFindAll.ServiceCode,
        apiServiceParam:
                    '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'carBrandCode',
          'carBrandCn',
          'carSeriesCode',
          'carSeriesId',
          'carSeriesCn',
          'carTypeCode',
          'carTypeCn',
          'createdDate',
          'createdName',
          'creator',
          'delManHourFee',
          'groupCode',
          'groupId',
          'isEnable',
          'lastUpdatedDate',
          'maintainCode',
          'maintainId',
          'maintainType',
          'maxMile',
          'maxTime',
          'minMile',
          'minTime',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'nextMaintainType',
          'oemCode',
          'oemId',
          'partFee,',
          'remark',
          'sdpOrgId',
          'sdpUserId',
          'totalFee',
          'updateControlId',
          'wiFee'
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

// 保养费用设置查询
export function seDbMaintainLevelQueryFindAll(pageSize, pageIndex, dataInfo, dataType = '', excelName = '', excelSheetName = '', tableColumns = null) {
  const queryObj = {
    type: 'query',
    typeParam:
            '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seDbMaintainLevelQueryFindAll.InputType + ')',
    apiUrl: seApis.seDbMaintainLevelQueryFindAll.APIUrl,
    apiServices: [
      {
        apiServiceCode: seApis.seDbMaintainLevelQueryFindAll.ServiceCode,
        apiServiceParam:
                    '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        apiQueryRow: [
          'createdDate',
          'createdName',
          'creator',
          'disableDate',
          'dlrLevel',
          'enableTime',
          'groupCode',
          'groupId',
          'isEnable',
          'lastUpdatedDate',
          'maintainFee',
          'maintainLevelId',
          'maitainId',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'remark',
          'sdpOrgId',
          'sdpUserId',
          'updateControlId',
          'carBrandCode'
        ]
      }
    ],
    variables: {
      pageSize: pageSize,
      pageIndex: pageIndex,
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  if (dataType === 'excel') {
    if (tableColumns == null) tableColumns = []
    var tmpCols = tableColumns// .filter(o => o.hidden !== true)
    // 网格列对象转为excel列对象
    var excelCols = {}
    for (var i = 0; i < tmpCols.length; i++) {
      if (tmpCols[i].property != null) excelCols[tmpCols[i].property] = tmpCols[i].label
    }
    // 数据类型
    paramD.dataType = 'excel'
    // excel文件名称
    paramD.excelName = excelName
    // 根据请求API描述excel数据对象
    paramD.excels = [{
      // excel sheet名称
      title: excelSheetName,
      // 对应API服务编码
      actionName: queryObj.apiServices.apiServiceCode,
      // excel列
      columns: excelCols
    }]
  }
  return requestGraphQL(paramD)
}

// 保养参数设置保存
export function seDbMaintainMutationSave(dataInfo) {
  const queryObj = {
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbMaintainMutationSave.InputType + ')',
    apiUrl: seApis.seDbMaintainMutationSave.APIUrl,
    apiServices: [
      {
        apiServiceCode: seApis.seDbMaintainMutationSave.ServiceCode,
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

// 保养参数设置删除
export function seDbMaintainMutationDelete(dataInfo) {
  const queryObj = {
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbMaintainMutationDelete.InputType + ')',
    apiUrl: seApis.seDbMaintainMutationDelete.APIUrl,
    apiServices: [
      {
        apiServiceCode: seApis.seDbMaintainMutationDelete.ServiceCode,
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

// 保养费用保存
export function SeDbMaintainLevelMutationSave(dataInfo) {
  const queryObj = {
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.SeDbMaintainLevelMutationSave.InputType + ')',
    apiUrl: seApis.SeDbMaintainLevelMutationSave.APIUrl,
    apiServices: [
      {
        apiServiceCode: seApis.SeDbMaintainLevelMutationSave.ServiceCode,
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

// 保养费用删除
export function seDbMaintainMutationDeleteFee(dataInfo) {
  const queryObj = {
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbMaintainMutationDeleteFee.InputType + ')',
    apiUrl: seApis.seDbMaintainMutationDeleteFee.APIUrl,
    apiServices: [
      {
        apiServiceCode: seApis.seDbMaintainMutationDeleteFee.ServiceCode,
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
