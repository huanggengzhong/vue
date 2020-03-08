import { requestGraphQL } from '@/api/commonRequest'
import { getParams } from '@/utils/getParamter'
import { paApis } from '@/api/graphQLApiList/pa'

export function RepaiOutService001(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '( $dataInfo: ' + paApis.RepaiOutService001.InputType + ')',
    // 请求API
    apiUrl: paApis.RepaiOutService001.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.RepaiOutService001.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
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

//维修出库查询主表
export function seBuRepairOrderQueryFindAll(pageIndex, pageSize, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '( $dataInfo: ' + paApis.seBuRepairOrderQueryFindAll.InputType + ',$pageIndex:Int,$pageSize:Int)',
    // 请求API
    apiUrl: paApis.seBuRepairOrderQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.seBuRepairOrderQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'balanceTimes',
          'batteryCode',
          'billType',
          'businessType',
          'businessTypeName',
          'canUseQtyReal',
          'canUseQtyTheory',
          'cancelDate',
          'cancelEmpId',
          'cancelReason',
          'carBrandCode',
          'carColorName',
          'carId',
          'carLicense',
          'carOwnerId',
          'carSaleOrder',
          'carSeriesCode',
          'carType',
          'carTypeCode',
          'cardNo',
          'createdDate',
          'createdName',
          'creator',
          'csDesc',
          'custName',
          'custTel',
          'dealRelustDesc',
          'discountAmount',
          'disposeInfo',
          'dlrCode',
          'dlrCustNo',
          'dlrId',
          //'dlrLeastSaleQty',
          'dutyEmpId',
          'engineNo',
          'factAmount',
          'fastRepairType',
          'groupCode',
          'groupId',
          'guaranteeApplyCode',
          'haveOutStoreQty',
          'ifsEcaseStatus',
          'isAccident',
          'isArtCase',
          'isClean',
          'isCombo',
          'isEnable',
          'isFirst',
          'isGather',
          'isMessage',
          'isRemaintain',
          'isRescue',
          'isRetrospectPart',
          'isSendRepair',
          'isWait',
          'lastUpdatedDate',
          'mainPartitem',
          'mainWorkitem',
          'maxBusinessType',
          'maxRepairTypeCode',
          'mileage',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'oil',
          'otherAmount',
          'otherDueAmount',
          //'outStoreQty',//本次出库数量
          'partAmount',
          //'partBrandCode',
          'partBrandName',
          'partDiscount',
          'partDueAmount',
          'partName',
          'partNo',
          'partQty',
          'placeCode',
          'placeId',
          'policyCompanyCode',
          'policyCompanyId',
          'preGetDate',
          'receptionTime',
          'recommendItem',
          'remark',
          'remindState',
          'repairAmount',
          'repairDeliveryDate',
          'repairDesc',
          'repairDueAmount',
          'repairMan',
          'repairOrderCode',
          'repairOrderId',
          'repairOrderStatus',
          'repairTel',
          'repairTime',
          'repairTypeCode',
          'repairTypeName',
          'reserveOrderCode',
          'retRepairCode',
          'runupAmount',
          'saEmpId',
          'saName',
          //'saleAmount',//销售金额
          'salePrice',
          'sdpOrgId',
          'sdpUserId',
          'sendRepairBillCode',
          'sendRepairShop',
          'sendRepairShopSa',
          'sendRepairStatus',
          'serviceLine',
          'storeQty',
          'trunRepairDate',
          //'unit',//单位
          'updateControlId',
          'vin',
          'warehouseCode',
          'warehouseId',
          'warehouseName',
          'wiAmount',
          'wiDueAmount',
          //'billBigType',
          'relateOrderId'
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

//查询施工单明细
export function seBuRepairOrderDQueryFindAll(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '( $dataInfo: ' + paApis.seBuRepairOrderDQueryFindAll.InputType + ',$pageIndex:Int,$pageSize:Int)',
    // 请求API
    apiUrl: paApis.seBuRepairOrderDQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.seBuRepairOrderDQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo,pageIndex:$pageIndex,pageSize:$pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'balanceTimes',
          'batteryCode',
          'billType',
          'businessType',
          'businessTypeName',
          'canUseQtyReal',
          'canUseQtyTheory',
          'cancelDate',
          'cancelEmpId',
          'cancelReason',
          'carBrandCode',
          'carColorName',
          'carId',
          'carLicense',
          'carOwnerId',
          'carSaleOrder',
          'carSeriesCode',
          'carType',
          'carTypeCode',
          'cardNo',
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
          'csDesc',
          'custName',
          'custTel',
          'dealRelustDesc',
          'discountAmount',
          'disposeInfo',
          'dlrCode',
          'dlrCustNo',
          'dlrId',
          'dlrLeastSaleQty1',
          'dutyEmpId',
          'engineNo',
          'factAmount',
          'fastRepairType',
          'groupCode',
          'groupId',
          'guaranteeApplyCode',
          'haveOutStoreQty',
          'ifsEcaseStatus',
          'isAccident',
          'isArtCase',
          'isClean',
          'isCombo',
          'isEnable',
          'isFirst',
          'isGather',
          'isMessage',
          'isRemaintain',
          'isRescue',
          'isRetrospectPart',
          'isSendRepair',
          'isWait',
          'lastUpdatedDate',
          'linkDId',
          'mainPartitem',
          'mainWorkitem',
          'maxBusinessType',
          'maxRepairTypeCode',
          'mileage',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'oil',
          'otherAmount',
          'otherDueAmount',
          'outStoreQty1',
          'partAmount',
          'partBrandCode1',
          'partBrandName',
          'partDiscount',
          'partDueAmount',
          'partName',
          'partNo',
          'partQty',
          'placeCode',
          'placeId',
          'policyCompanyCode',
          'policyCompanyId',
          'preGetDate',
          'receptionTime',
          'recommendItem',
          'remark',
          'remindState',
          'repairAmount',
          'repairDeliveryDate',
          'repairDesc',
          'repairDueAmount',
          'repairMan',
          'repairOrderCode',
          'repairOrderId',
          'repairOrderStatus',
          'repairTel',
          'repairTime',
          'repairTypeCode',
          'repairTypeName',
          'reserveOrderCode',
          'retRepairCode',
          'runupAmount',
          'saEmpId',
          'saName',
          'saleAmount1',
          'salePrice',
          'sdpOrgId',
          'sdpUserId',
          'sendRepairBillCode',
          'sendRepairShop',
          'sendRepairShopSa',
          'sendRepairStatus',
          'serviceLine',
          'storeQty',
          'trunRepairDate',
          'unit1',
          'updateControlId',
          'vin',
          'warehouseCode',
          'warehouseId',
          'warehouseName',
          'wiAmount',
          'wiDueAmount',
          'storeCostAmount',
          'storePriceAmount',
          'partId1'
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

//施工单明细保存
export function paBuDlrOutStoreMutationSave(dataInfo,dataInfo2) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + paApis.paBuDlrOutStoreMutationSave.InputType1 + ',' + '$dataInfo2: ' + paApis.paBuDlrOutStoreMutationSave.InputType2 + ')',
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

export function RepaiOutService005(dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '( $dataInfo: ' + paApis.RepaiOutService005.InputType + ')',
    // 请求API
    apiUrl: paApis.RepaiOutService005.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.RepaiOutService005.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'DLR_SHORT_NAME',
          'BILL_TYPE_NAME',
          'OUT_STORE_CODE',
          'RELATE_ORDER_CODE',
          'OLD_OUT_STORE_CODE',
          'RepairOLD_OUT_STORE_CODE',
          'CUST_NAME',
          'OUT_STORE_DATE',
          'PART_VARIETY',
          'OUT_STORE_QTY',
          'SALE_AMOUNT',
          'STORE_COST_AMOUNT',
          'STORE_PRICE_AMOUNT',
          'PART_PROFIT',
          'REMARK',
          'VIN',
          'CAR_LICENSE',
          'Detail',
          'PART_NO',
          'PART_NAME',
          'UNIT',
          'OUT_STORE_QTY',
          'SALE_PRICE',
          'SALE_AMOUNT',
          'RETAIL_PRICE',
          'DLR_PRICE',
          'USER_PRICE',
          'PUB_SERIES_NAME',
          'STORE_COST_AMOUNT',
          'STORE_COST',
          'STORE_PRICE',
          'STORE_PRICE_AMOUNT',
          'PART_PROFIT',
          'WAREHOUSE_NAME',
          'PLACE_CODE',
          'PART_BRAND_NAME',
          'PART_PROPERTY_NAME',
          'PART_TYPE_NAME',
          'CAR_BRAND_NAME',
          'OUT_STORE_CODE',
          'OUT_STORE_DATE',
          'USE_DEPT_NAME',
          'PICKING_PERSON_NAME',
          'BILL_TYPE_NAME',
          'BILL_TYPE',
          'REMARK'

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
