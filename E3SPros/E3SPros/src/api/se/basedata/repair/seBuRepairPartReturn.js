import { requestGraphQL } from '@/api/commonRequest'
import { apiSeProcess } from '@/api/graphQLApiList/se'
import { getParams } from '@/utils/getParamter'

export function doQueryFindAll(pageIndex, pageSize, dataInfo) {
    const queryObj = {
      // 请求类型&参数 保存mutation  查询query
      type: 'query',
      typeParam:
        '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + apiSeProcess.seBuReturnApplyOrderQueryFindList.InputType + ')',
      // 请求API
      apiUrl: apiSeProcess.seBuReturnApplyOrderQueryFindList.APIUrl,
      // 需要调用的API服务配置
      apiServices: [
        {
          // API服务编码&参数
          apiServiceCode: apiSeProcess.seBuReturnApplyOrderQueryFindList.ServiceCode,
          apiServiceParam:
            '(pageIndex: $pageIndex, pageSize: $pageSize, dataInfo: $dataInfo)',
          // 表格中台返回网格的字段
          apiQueryRow: [
            'returnApplyOrderId',
            'returnApplyOrderCode',
            'billType',
            'sourceCode',
            'sourceOrderId',
            'outStoreCode',
            'carId',
            'vin',
            'carLicense',
            'custName',
            'applyEmpId',
            'applyEmpName',
            'applyDate',
            'partNo',
            'partName',
            'returnApplyQty',
            'returnInQty',
            'returnState',
            'returnStateName',
            'updateControlId',
            'oemCode',
            'groupCode',
            'oemId',
            'groupId',
            //'repairPartId'
            'sourcePartId'
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

  //维修退料申请查询出库单
  export function doQueryStock(pageIndex, pageSize, dataInfo) {  
      const queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: 'query',
        typeParam:
          '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + apiSeProcess.seBuReturnApplyOrderQueryFindStock.InputType + ')',
        // 请求API
        apiUrl: apiSeProcess.seBuReturnApplyOrderQueryFindStock.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: apiSeProcess.seBuReturnApplyOrderQueryFindStock.ServiceCode,
            apiServiceParam:
              '(pageIndex: $pageIndex, pageSize: $pageSize, dataInfo: $dataInfo)',
            // 表格中台返回网格的字段
            apiQueryRow: [
              'repairOrderCode',
              'outStoreCode',
              'dlrCustNo',
              'custName',
              'vin',
              'carId',
              'carBrandCode',
              'carLicense',
              'repairOrderId',
              'updateControlId',
              'saEmpId',
              'saName',
              'dlrId',
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


//维修退料申请查询出库单明细
export function doQueryStockDetail(pageSize, pageIndex, dataInfo) {  
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + apiSeProcess.seBuReturnApplyOrderQueryFindStockD.InputType + ')',
    // 请求API
    apiUrl: apiSeProcess.seBuReturnApplyOrderQueryFindStockD.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeProcess.seBuReturnApplyOrderQueryFindStockD.ServiceCode,
        apiServiceParam:
          '(pageIndex: $pageIndex, pageSize: $pageSize, dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'outStoreCode',
          'outPartId',
          'sourcePartId',
          'partNo',
          'partName',
          //'partSource',
          'partQty',
          'outStoreQty',
          'hasApplyReturnQty',
          'returnApplyQty',
          'costAmount',
          'priceAmount',
          'partPrice',
          'partAmount',
          'unit',
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

//维修退料申请保存
export function doSave(dataInfo) {   
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + apiSeProcess.seBuRepairPartReturnSave.InputType + ')',
    // 请求API
    apiUrl: apiSeProcess.seBuRepairPartReturnSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeProcess.seBuRepairPartReturnSave.ServiceCode,
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

//退料作废
  export function doCancel(dataInfo) {   
    const queryObj = {
      // 请求类型&参数 保存mutation  查询query
      type: 'mutation',
      typeParam:
        '($dataInfo: ' + apiSeProcess.seBuReturnApplyOrderMutationCancel.InputType + ')',
      // 请求API
      apiUrl: apiSeProcess.seBuReturnApplyOrderMutationCancel.APIUrl,
      // 需要调用的API服务配置
      apiServices: [
        {
          // API服务编码&参数
          apiServiceCode: apiSeProcess.seBuReturnApplyOrderMutationCancel.ServiceCode,
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