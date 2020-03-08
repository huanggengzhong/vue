import request from '@/utils/request'
import config from '@/utils/config'
import { requestGraphQL } from '@/api/commonRequest'
import {getParams} from '@/utils/getParamter'
import { apiSeDbWiPriceModel } from '@/api/graphQLApiList/se'

export function seDbWiPriceModelMQueryFindAll(dataInfo) { //维修工时价格模板查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($dataInfo: ' + apiSeDbWiPriceModel.seDbWiPriceModelMQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiPriceModel.seDbWiPriceModelMQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiPriceModel.seDbWiPriceModelMQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'wiModelId    ',
          'wiModelCode    ',
          'wiModelName    ',
          'remark    ',
          'dlrId    ',
          'dlrCode    ',
          'oemId    ',
          'oemCode    ',
          'groupId    ',
          'groupCode    ',
          'creator    ',
          'createdDate    ',
          'modifier    ',
          'lastUpdatedDate    ',
          'isEnable    ',
          'updateControlId    '
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

export function seDbWiPriceModelDQueryFindAll(dataInfo) { //模板对应业务类别和车系查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($dataInfo: ' + apiSeDbWiPriceModel.seDbWiPriceModelDQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiPriceModel.seDbWiPriceModelDQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiPriceModel.seDbWiPriceModelDQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'wiModelId    ',
          'wiModelCode    ',
          'wiModelName    ',
          'businessType    ',
          'businessTypeName    ',
          'carBrandCode    ',
          'carBrandCn    ',
          'carSeriesCode    ',
          'carSeriesCn    ',
          'repairPrice    ',
          'dlrCode    ',
          'dlrId    ',
          'remark    ',
          'oemId    ',
          'oemCode    ',
          'groupId    ',
          'groupCode    ',
          'creator    ',
          'createdDate    ',
          'modifier    ',
          'lastUpdatedDate    ',
          'isEnable    ',
          'updateControlId    '
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

export function seDbWiPriceModelDlrQueryFindAll(dataInfo) { //工时价格模板与门店关系查询
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($dataInfo: ' + apiSeDbWiPriceModel.seDbWiPriceModelDlrQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiPriceModel.seDbWiPriceModelDlrQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiPriceModel.seDbWiPriceModelDlrQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'wiPriceDlrId    ',
          'wiModelId    ',
          'wiModelCode    ',
          'wiModelName    ',
          'areaId    ',
          'areaname    ',
          'bigAreaId    ',
          'bigAreaame    ',
          'smallAreaId    ',
          'smallAreaname    ',
          'dlrCode    ',
          'dlrId    ',
          'dlrShortname    ',
          'oemId    ',
          'oemCode    ',
          'groupId    ',
          'groupCode    ',
          'creator    ',
          'createdDate    ',
          'modifier    ',
          'lastUpdatedDate    ',
          'isEnable    ',
          'updateControlId    '
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

//维修工时价格模板设置保存
export function doSaveWiModel(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiSeDbWiPriceModel.seDbWiPriceModelMMutationSave.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiPriceModel.seDbWiPriceModelMMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiPriceModel.seDbWiPriceModelMMutationSave.ServiceCode,
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

//工时价格模板明细信息保存
export function seDbWiPriceModelSaveDetail(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiSeDbWiPriceModel.seDbWiPriceModelSaveDetail.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiPriceModel.seDbWiPriceModelSaveDetail.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiPriceModel.seDbWiPriceModelSaveDetail.ServiceCode,
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

//工时价格模板明细删除
export function seDbWiPriceModelDMutationDelete(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiSeDbWiPriceModel.seDbWiPriceModelDMutationDelete.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiPriceModel.seDbWiPriceModelDMutationDelete.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiPriceModel.seDbWiPriceModelDMutationDelete.ServiceCode,
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

//工时价格模板与门店关系删除
export function seDbWiPriceModelDlrMutationDelete(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiSeDbWiPriceModel.seDbWiPriceModelDlrMutationDelete.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiPriceModel.seDbWiPriceModelDlrMutationDelete.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiPriceModel.seDbWiPriceModelDlrMutationDelete.ServiceCode,
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

// 工时价格模板与门店关系保存
export function InputSeDbWiPriceModelDlr(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiSeDbWiPriceModel.seDbWiPriceModelDlrMutationSave.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiPriceModel.seDbWiPriceModelDlrMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiPriceModel.seDbWiPriceModelDlrMutationSave.ServiceCode,
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

export function doResolve(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiSeDbWiPriceModel.seDbWiPriceModelMMutationImportDlr.InputType + ')',
    // 请求API
    apiUrl: apiSeDbWiPriceModel.seDbWiPriceModelMMutationImportDlr.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeDbWiPriceModel.seDbWiPriceModelMMutationImportDlr.ServiceCode,
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

//获取业务类别
export function getBusinessType(data) {
  return request({
    url: '/ly/mp/busicen/asc/graphql.do'+config.cH+'getBusinessType',
    method: 'get',
    data
  })
}

