import { requestGraphQL } from '@/api/commonRequest'
import { getParams } from '@/utils/getParamter'
import { paApis } from '@/api/graphQLApiList/pa'

export function paBuDlrStorageQueryFindAll(pageSize, pageIndex, dataInfo) {
  // 查询工时备件关联列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      paApis.paBuDlrStorageQueryFindAll.InputType +
      ')',
    // 请求API
    apiUrl: paApis.paBuDlrStorageQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuDlrStorageQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'partNo',
          'partName',
          'unit',
          'warehouseName',
          'placeCode',
          'storeQty',
          'borrowQty',
          'canUseQtyReal',
          'canUseQtyTheory',
          'wayQty',
          'oweQty',
          'salePrice',
          'lastOutDate',
          'overStoreMonths',
          'maxStoreQty',
          'minStoreQty',
          'safeQty',
          'partBrandCode',
          'partTypeName',
          'partPropertyName',
          'partVariety',
          'ownerTypeName',
          'isEnableName',
          'updateControlId',
          'oemId',
          'groupId',
          'oemCode',
          'groupCode'
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      pageIndex: pageIndex,
      pageSize: pageSize,
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

export function paBuDlrStorageMutationSave(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paBuDlrStorageMutationSave.InputType + ')',
    // api配置
    apiConfig: paApis.paBuDlrStorageMutationSave,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
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
