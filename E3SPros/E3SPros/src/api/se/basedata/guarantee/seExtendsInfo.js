import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { apiMOrgDlr } from '@/api/graphQLApiList/se'


// 查询
export function mdmOrgDlrExtendInfoQueryList(pageSize=10, pageIndex=1, dataInfo) { 
    const queryObj = {
      // 请求类型&参数 保存mutation  查询query
      type: 'query',
      typeParam:
            '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + apiMOrgDlr.mdmOrgDlrExtendInfoQueryList.InputType + ')',
      // 请求API
      apiUrl: apiMOrgDlr.mdmOrgDlrExtendInfoQueryList.APIUrl,
      // 需要调用的API服务配置
      apiServices: [
        {
          // API服务编码&参数
          apiServiceCode: apiMOrgDlr.mdmOrgDlrExtendInfoQueryList.ServiceCode,
          apiServiceParam:
                '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
          // 表格中台返回网格的字段
          apiQueryRow: [
            // 'extendInfoId',
            // 'smallAreaName',
            // 'cityName',
            // 'provinceName',
            // 'dlrId',
            // 'dlrCode',
            // 'dlrShortName',
            // 'dlrStatus',
            // 'dlrStatusName',
            // 'repairQuotiety',
            // 'preQuotiety',
            // 'mtainQuotiety',
            // 'limitJe',
            // 'squotiety1',
            // 'squotiety2',
            // 'modifyName',
            // 'remark',
            // 'lastUpdatedDate',
            // 'modifydateRef',
            // 'remarkRef',
            // 'updateControlId'
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

  export function mdmOrgDlrExtendInfoMutationSave(dataInfo) { // 保存
    const queryObj = {
      // 请求类型&参数 保存mutation  查询query
      type: 'mutation',
      typeParam:
        '($dataInfo: ' + apiMOrgDlr.mdmOrgDlrExtendInfoMutationSave.InputType + ')',
      // 请求API
      apiUrl: apiMOrgDlr.mdmOrgDlrExtendInfoMutationSave.APIUrl,
      // 需要调用的API服务配置
      apiServices: [
        {
          // API服务编码&参数
          apiServiceCode: apiMOrgDlr.mdmOrgDlrExtendInfoMutationSave.ServiceCode,
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
  
  // 查询
export function mdmOrgDlrAssessCoefficientQueryList(pageSize=10, pageIndex=1, dataInfo) { 
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
          '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + apiMOrgDlr.mdmOrgDlrExtendInfoQueryList.InputType + ')',
    // 请求API
    apiUrl: apiMOrgDlr.mdmOrgDlrAssessCoefficientQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiMOrgDlr.mdmOrgDlrAssessCoefficientQueryList.ServiceCode,
        apiServiceParam:
              '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
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
