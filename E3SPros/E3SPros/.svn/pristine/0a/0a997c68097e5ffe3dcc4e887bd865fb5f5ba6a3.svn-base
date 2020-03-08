import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

export function doSeChooseWiQuery(pageSize, pageIndex, dataInfo) { // 查询工时备件关联列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
        '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.SeChooseWiQuery.InputType + ')',
    // 请求API
    apiUrl: seApis.SeChooseWiQuery.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.SeChooseWiQuery.ServiceCode,
        apiServiceParam:
            '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'carBrandCode',
          'carTypeCode',
          'createdDate',
          'createdName',
          'creator',
          'dlrCode',
          'dlrId',
          'groupCode',
          'groupId',
          'isEnable',
          'isSystem',
          'lastUpdatedDate',
          'maxSaleWiQty',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'operatePartCode',
          'opratePlaceName',
          'remark',
          'repairName',
          'repairSmallKindCode',
          'repairSmallKindName',
          'repairType',
          'saleWiQty',
          'sdpOrgId',
          'sdpUserId',
          'updateControlId',
          'wiCartypeId',
          'wiCode',
          'wiId',
          'wiKey',
          'wiName',
          'wiRepairQty',
          'wiWorkQty'
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

export function doSeChooseWiSelect(pageSize, pageIndex, dataInfo) { // 返回工时备件关联列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
        '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seChooseWiSelect.InputType + ')',
    // 请求API
    apiUrl: seApis.seChooseWiSelect.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seChooseWiSelect.ServiceCode,
        apiServiceParam:
            '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'carBrandCode',
          'carTypeCode',
          'createdDate',
          'createdName',
          'creator',
          'dlrCode',
          'dlrId',
          'groupCode',
          'groupId',
          'isEnable',
          'isSystem',
          'lastUpdatedDate',
          'maxSaleWiQty',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'operatePartCode',
          'opratePlaceName',
          'remark',
          'repairName',
          'repairSmallKindCode',
          'repairSmallKindName',
          'repairType',
          'saleWiQty',
          'sdpOrgId',
          'sdpUserId',
          'updateControlId',
          'wiCartypeId',
          'wiCode',
          'wiId',
          'wiKey',
          'wiName',
          'wiRepairQty',
          'wiWorkQty'
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
