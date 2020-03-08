import { requestGraphQL } from '@/api/commonRequest'
import { getParams } from '@/utils/getParamter'
import { paApis } from '@/api/graphQLApiList/pa'

export function seBuReturnApplyOrderQueryFindAll(pageIndex, pageSize, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '( $dataInfo: ' + paApis.seBuReturnApplyOrderQueryFindAll.InputType + ',$pageIndex:Int,$pageSize:Int)',
    // 请求API
    apiUrl: paApis.seBuReturnApplyOrderQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.seBuReturnApplyOrderQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'applyDate',
          'applyEmpId',
          'applyEmpName',
          'billType',
          'carBrandCode',
          'carId',
          'carLicense',
          'carSeriesCn',
          'carSeriesCode',
          'carTypeCn',
          'carTypeCode',
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
          'costAmount',
          'createdDate',
          'createdName',
          'creator',
          'custName',
          'custTel',
          'dlrCustNo',
          'dlrId',
          'groupCode',
          'groupId',
          'hasApplyReturnQty',
          'isEnable',
          'isNewCarAcceOut',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'outPartId',
          'outStoreCode',
          'outStoreQty',
          'partAmount',
          'partName',
          'partNo',
          'partPrice',
          'partQty',
          'priceAmount',
          'repairOrderCode',
          'repairOrderId',
          'returnApplyOrderCode',
          'returnApplyOrderId',
          'returnApplyQty',
          'returnInQty',
          'returnState',
          'returnStateName',
          'saEmpId',
          'saName',
          'sdpOrgId',
          'sdpUserId',
          'sourceCode',
          'sourceOrderId',
          'sourcePartId',
          'taxRate',
          'unit',
          'updateControlId',
          'vin'
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

export function seBuReturnApplyOrderDQueryFindAll(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '( $dataInfo: ' + paApis.seBuReturnApplyOrderDQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: paApis.seBuReturnApplyOrderDQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.seBuReturnApplyOrderDQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'partNo',
          'partName',
          'unit',
          'outStoreQty',
          'salePrice',
          'saleAmount',
          'warehouseName',
          'placeCode',
          'repairTypeName',
          'businessTypeName',
          'partBrandName',
          'returnApplyPartId',
          'returnApplyOrderId',
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

      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

export function paBuDlrOutStoreMutationSave(dataInfo, dataInfo2) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paBuDlrOutStoreMutationSave.InputType1 + ',$dataInfo2:' + paApis.paBuDlrOutStoreMutationSave.InputType2 + ')',
    // 请求API
    apiUrl: paApis.paBuDlrOutStoreMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paBuDlrOutStoreMutationSave.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo,dataInfo2: $dataInfo2)',
        // 表格中台返回网格的字段
        apiQueryRow: [

        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo,
      dataInfo2: dataInfo2
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

export function RepairOutReturnService004(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '( $dataInfo: ' + paApis.RepairOutReturnService004.InputType + ')',
    // 请求API
    apiUrl: paApis.RepairOutReturnService004.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.RepairOutReturnService004.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'OUT_STORE_CODE',
          'PART_NO',
          'PART_NAME',
          'UNIT',
          'SALE_PRICE',
          'OUT_STORE_QTY',
          'SALE_AMOUNT',
          'PAY_KIND_NAME',
          'WAREHOUSE_NAME',
          'PLACE_CODE',
          'REMARK',
          'BILL_TYPE',
          'CUST_NAME',
          'VIN',
          'OUT_STORE_DATE',
          'WAREHOUSE_USER',
          'CAR_LICENSE',
          'RELATE_ORDER_CODE',
          'PICKING_PERSON_NAME',
          'OEM_ID',
          'GROUP_ID',
          'OEM_CODE',
          'GROUP_CODE'

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
