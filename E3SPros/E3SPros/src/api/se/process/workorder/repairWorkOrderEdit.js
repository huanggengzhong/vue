// import request from '@/utils/request'
// import config from '@/utils/config'
import { requestGraphQL } from '@/api/commonRequest'
import { seApis } from '@/api/graphQLApiList/se'
import { orgApis } from '@/api/graphQLApiList/org'
import {
  getParams
} from '@/utils/getParamter'
export function doQueryCarCustInfo(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seCommonQueryCarCustInfo.InputType + ')',
    // 请求API
    apiUrl: seApis.seCommonQueryCarCustInfo.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seCommonQueryCarCustInfo.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'carOwnerId',
          'carId',
          'modifyScenceFlag',
          'dlrCustNo',
          'vin',
          'isEnable',
          'custName',
          'custClassCode',
          'custClassName',
          'genderName',
          'genderCode',
          'phone',
          'addrProvince',
          'addrCity',
          'addrCounty',
          'addrStreet',
          'addr',
          'credTypeCode',
          'credTypeName',
          'credNo',
          'birthDate',
          'dlrId',
          'dlrCode',
          'carUserNo',
          'saName',
          'saempid'
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
export function queryLookupValue(lookupTypeCodes) {
  let apiServices = []
  let typeParam = ''
  let variables = {}
  lookupTypeCodes.forEach(function(item, i){
    apiServices.push({
      // API服务编码&参数
      apiServiceCode: orgApis.mdsLookupValueQueryByPage.ServiceCode,
      apiServiceParam:
        '(dataInfo: $dataInfo'+ String.fromCharCode(65 + i) +', pageIndex: $pageIndex, pageSize: $pageSize)',
      // 表格中台返回网格的字段
      apiQueryRow: [
        'lookupTypeCode', 'lookupValueCode', 'lookupValueName'
      ]
    })
    typeParam += "$dataInfo"+ (String.fromCharCode(65 + i)) + ": " + orgApis.mdsLookupValueQueryByPage.InputType + ","
    variables['dataInfo' + String.fromCharCode(65 + i)] = { isEnable: '1', lookupTypeCode: item}
  })
  variables.pageSize = -1
  variables.pageIndex = 1
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, ' + typeParam + ')',
    // 请求API
    apiUrl: orgApis.mdsLookupValueQueryByPage.APIUrl,
    // 需要调用的API服务配置
    apiServices: apiServices,
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}
// 付费性质和业务类别关系查询
export function doQueryPayBusiness(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seDbPayBusinessQuery.InputType + ')',
    // 请求API
    apiUrl: seApis.seDbPayBusinessQuery.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seDbPayBusinessQuery.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'payBusinessId',
          'payKind',
          'payKindName',
          'businessType',
          'businessTypeName',
          'isSystem',
          'dlrCode',
          'carBrandCode',
          // 'dlrId',
          // 'oemId',
          // 'groupId',
          // 'oemCode',
          // 'groupCode',
          // 'creator',
          // 'createdDate',
          // 'createdName',
          // 'modifier',
          // 'modifierName',
          // 'lastUpdatedDate',
          'isEnable',
          'updateControlId'
          // 'isDefault'
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
export function doQueryRepairReserverDetail(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seBuRepairReserverImport.InputType + ')',
    // 请求API
    apiUrl: seApis.seBuRepairReserverImport.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuRepairReserverImport.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'reserveOrderCode',
          'reserveOrderId',
          'reserveMan',
          'reserveTel',
          'reserveState',
          'saName',
          'preComeDate',
          'csDesc',
          'isClean',
          'wiCode',
          'wiName',
          'saleWorkQty',
          'wiWorkQty',
          'wiPrice',
          'wiPreAmount',
          'businessType',
          'wiDiscountRate',
          'wiTypeCode',
          'wiId',
          'partNo',
          'partName',
          'partQty',
          'partPrice',
          'partDiscountRate',
          'prePartAmount',
          'businessType',
          'dlrPrice',
          'dlrLeastSaleQty',
          'otherAmount',
          'costTypeCode',
          'costTypeName',
          'businessType',
          'payKind',
          'costTypeId'
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
export function doQueryCommonWiPrice(pageSize, pageIndex, dataInfo) { // 查询工时单价
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seCommonWiPrice.InputType + ')',
    // 请求API
    apiUrl: seApis.seCommonWiPrice.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seCommonWiPrice.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'dlrId',
          'carTypeCode',
          'businessType',
          'wiPrice'
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
export function doQueryRealteWiData(dataInfo, pageSize, pageIndex) { // 查询工时单价
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seBuSelectWiBackQueryFind.InputType + ')',
    // 请求API
    apiUrl: seApis.seBuSelectWiBackQueryFind.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuSelectWiBackQueryFind.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'seDbWiRelations',
          'seDbWiRelations.carBrandCode',
          'seDbWiRelations.carTypeCode',
          'seDbWiRelations.wiId',
          'seDbWiRelations.wiCode',
          'seDbWiRelations.wiKey',
          'seDbWiRelations.wiName',
          'seDbWiRelations.wiRepairQty',
          'seDbWiRelations.wiWorkQty',
          'seDbWiRelations.operatePartCode',
          'seDbWiRelations.opratePlaceName',
          'seDbWiRelations.repairName',
          'seDbWiRelations.repairSmallKindCode',
          'seDbWiRelations.repairSmallKindName',
          'seDbWiRelations.repairType',
          'seDbWiRelations.saleWiQty',
          'seDbWiRelations.sdpOrgId',
          'seDbWiRelations.sdpUserId',
          'seDbWiRelations.wiCartypeId',
          'seDbWiRelations.updateControlId',
          'seDbWiRelations.isSystem',
          'seDbWiParts',
          'seDbWiParts.wiPartId',
          'seDbWiParts.wiId',
          'seDbWiParts.wiCode',
          'seDbWiParts.wiName',
          'seDbWiParts.partNo',
          'seDbWiParts.partName',
          'seDbWiParts.partQty',
          'seDbWiParts.partTypeCode',
          'seDbWiParts.partPropertyCode',
          'carBrandCode',
          'carTypeCode',
          'isEnable',
          'isSystem',
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
export function doQueryRepairPartPrice(pageSize, pageIndex, dataInfo) { // 查询备件单价
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.SeBuRepairOrderPartPriceRate.InputType + ')',
    // 请求API
    apiUrl: seApis.SeBuRepairOrderPartPriceRate.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.SeBuRepairOrderPartPriceRate.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'partPrice',
          'partDiscount',
          'discountChange',
          'partAmount',
          'prePartAmount',
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
export function doQueryRealtePartData(dataInfo, pageSize, pageIndex) { // 查询工时单价
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.paChoosePartImport.InputType + ')',
    // 请求API
    apiUrl: seApis.paChoosePartImport.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.paChoosePartImport.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'seDbWiParts.wiPartId',
          'seDbWiParts.wiId',
          'seDbWiParts.wiCode',
          'seDbWiParts.wiName',
          'seDbWiParts.partNo',
          'seDbWiParts.partName',
          'seDbWiParts.partQty',
          'seDbWiParts.multiCarTypeCode',
          'seDbWiParts.isSystem',
          'seDbWiParts.dlrCode',
          'seDbWiParts.dlrId',
          'seDbWiParts.oemId',
          'seDbWiParts.groupId',
          'seDbWiParts.oemCode',
          'seDbWiParts.groupCode',
          'seDbWiParts.isEnable',
          'seDbWiParts.partTypeCode',
          'seDbWiParts.partPropertyCode'
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

export function doSaveRepairOrder(dataInfo) { // 施工单信息保存
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.sebuRepairOrderMutationSave.InputType + ')',
    // 请求API
    apiUrl: seApis.sebuRepairOrderMutationSave.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.sebuRepairOrderMutationSave.ServiceCode,
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

export function doQueryRepairOrderDetail(pageSize, pageIndex, dataInfo) { // 查询施工单明细信息
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seBuRepairOrderQueryFindAll.InputType + ')',
    // 请求API
    apiUrl: seApis.seBuRepairOrderQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuRepairOrderQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'repairOrderId', // 施工单号ID
          'repairOrderCode', // 施工单号
          'billType', // 单据类型
          'guaranteeApplyCode', // 保修申请单
          'reserveOrderCode', // 预约单号
          'isRemaintain', // 是否返修
          'retRepairCode', // 返修单号
          'isCombo', // 是否定保套餐
          'fastRepairType', // 快保类型
          'carSaleOrder', // 销售单号
          'carOwnerId', // 人车关联ID
          'dlrCustNo', // 经销商客户编码
          'custTel', // 客户电话
          'custName', // 客户名称
          'repairMan', // 报修人
          'repairTel', // 报修人电话
          'carId', // 车辆id
          'vin', // VIN码
          'carLicense', // 车牌号
          'carBrandCode', // 品牌编码
          'carBrandCn', // 品牌名称
          'carSeriesCn', // 车系名称
          'carSeriesCode', // 车系编码
          'carTypeCode', // 车型编码
          'carTypeCn', // 车型名称
          'carColorName', // 车身颜色
          'engineNo', // 发动机号
          'mileage', // 行驶里程
          'oil', // 油量
          'isAccident', // 是否事故车
          'policyCompanyId', // 协议单位ID
          'policyCompanyCode', // 协议单位编码
          'saEmpId', // 服务顾问ID
          'saName', // 服务顾问
          'dutyEmpId', // 制单责任人ID
          'repairTime', // 报修时间
          'preGetDate', // 预计交车日期
          'trunRepairDate', // 送修日期
          'isMessage', // 是否发送短信
          'isFirst', // 是否优先派工
          'isWait', // 是否在店等待
          'remindState', // 交车提醒状态
          'csDesc', // 故障现象描述
          'repairDesc', // 维修说明
          'repairDeliveryDate', // 维修交车日期
          'disposeInfo', // 处理方法
          'recommendItem', // 推荐项目
          'mainWorkitem', // 主要维修项目
          'dealRelustDesc', // 处理结果
          'repairOrderStatus', // 施工单状态编码
          'isClean', // 是否洗车
          'isRescue', // 是否救援
          'wiDueAmount', // 工时预估费用
          'partDueAmount', // 备件预估费用
          'otherDueAmount', // 其它预估费用
          'discountAmount', // 折扣费用
          'repairDueAmount', // 维修预估费用
          'wiAmount', // 工时费用
          'partAmount', // 备件费用
          'otherAmount', // 其它费用
          'repairAmount', // 维修费用
          'factAmount', // 实收费用
          'runupAmount', // 挂账费用
          'isGather', // 结算标志编码
          'balanceTimes', // 结算次数
          'remark', // 备注
          'dlrCode', // 经销商编码
          'dlrId', // 经销商ID
          'cancelDate', // 作废日期
          'cancelReason', // 作废原因
          'cancelEmpId', // 作废人
          'maxBusinessType', // 最大业务类别
          'mainPartitem', // 维修主要备件
          'maxRepairTypeCode', // 最大维修类别
          'sendRepairStatus', // 送修状态
          'isSendRepair', // 是否送修
          'sendRepairShop', // 送修经销商
          'sendRepairBillCode', // 送修单号
          'sendRepairShopSa', // 送修店SA
          'receptionTime', // 接待时间
          'ifsEcaseStatus', // 是否发送国家电子档案
          'serviceLine', // 服务快线
          'isArtCase', // 是否技术方案转入
          'oemId', // 厂商标识ID
          'groupId', // 集团标识ID
          'oemCode', // 厂商编码
          'groupCode', // 集团编码
          'creator', // 创建人
          'createdDate', // 创建日期
          'modifier', // 修改人
          'lastUpdatedDate', // 最后更新日期
          'isEnable', // 是否可用
          'updateControlId', // 并发控制ID
          'cardNo', // 会员单号
          'carType', // 保修类别
          'repairWiId', // 维修项目ID
          'repairOrderId', // 维修工单ID
          'repairOrderCode', // 维修估价单
          'isCanEdit', // 是否可编辑
          'isAdd', // 是否追加
          'recallCaseType', // 召回专案类型
          'recallCaseCode', // 召回专案编码
          'comboSaleCode', // 定保套餐编码
          'actionCode', // 活动编码
          'reserveOrderCode', // 预约单编码
          'wiCode', // 工时编码
          'wiName', // 工时名称
          'saleWorkQty', // 销售工时数
          'wiWorkQty', // 派工工时数
          'wiRepairQty', // 作业工时数
          'wiPrice', // 工时单价
          'wiAmount', // 工时费用
          'wiDiscountRate', // 工时折扣率
          'wiCoef', // 保修加价率
          'wiDueAmount', // 工时预估费用
          'isShare', // 是否分摊
          'payKind', // 付费性质编码
          'payKindName', // 付费性质
          'businessType', // 业务类别编码
          'businessTypeName', // 业务类别
          'repairTypeCode', // 维修类别编码
          'repairTypeName', // 维修类别
          'dutyEmpId', // 制单责任人ID
          'repairEmpId', // 维修技师ID
          'checkEmpId', // 质检技师ID
          'acceCode', // 精品编码
          'acceQty', // 精品数量
          'assignWorkDate', // 派工日期
          'repairGroup', // 维修班组
          'repairStatus', // 施工状态
          'qcDoubleDate', // 质检复核时间
          'isBackRepair', // 是否反修
          'isBackWi', // 返修工时
          'retRepairType', // 返修维修类型
          'note', // 备注
          'adaptCarTypeCode', // 适用车型
          'isCustPay', // 是否客户付费
          'parentWiCode', // 父工时
          'wiTypeCode', // 工时小类
          'wiId', // 工时编码
          'dutyMan', // 制单责任人
          'checkResult', // 质检结果
          'checkResons', // 质检不通过原因
          'orderNo', // 排序
          'isCombo', // 是否定保套餐
          'dlrId', // 经销商ID
          'repairTime', // 报修时间
          'oemId', // 厂商标识ID
          'groupId', // 集团标识ID
          'oemCode', // 厂商标识
          'groupCode', // 集团标识
          'creator', // 创建人
          'createdDate', // 创建日期
          'modifier', // 修改人
          'lastUpdatedDate', // 最后更新日期
          'isEnable', // 是否可用
          'updateControlId', // 并发控制ID
          'repairPartId', // 维修备件ID
          'repairOrderId', // 施工单号ID
          'repairOrderCode', // 施工单号
          'reserveOrderCode', // 预约单号
          'recallCaseType', // 召回专案类型
          'recallCaseCode', // 召回专案编码
          'comboSaleCode', // 定保套餐编码
          'actionCode', // 活动编码
          'partNo', // 备件编码
          'partName', // 备件名称
          'partQty', // 备件数量
          'partPrice', // 备件价格
          'dlrPrice', // 网点价
          'partDiscount', // 备件折扣率
          'priceAmount', // 含税成本
          'partAmount', // 备件费用
          'costAmount', // 不含税成本
          'isNeedOut', // 是否需要出库
          'outQty', // 出库数量
          'dlrLeastSaleQty', // 最小销售数量
          'applyReturnQty', // 申请退货数量
          'returnQty', // 退货数量
          'partCoef', // 备件加价率
          'partDueAmount', // 备件预估费用
          'isShare', // 是否分摊
          'payKind', // 付费性质编码
          'payKindName', // 付费性质
          'businessType', // 业务类别编码
          'businessTypeName', // 业务类别
          'repairTypeCode', // 维修类别编码
          'repairTypeName', // 维修类别
          'dutyMan', // 制单责任人
          'isCanEdit', // 是否可编辑
          'isAdd', // 是否追加
          'acceCode', // 精品编码
          'acceQty', // 精品数量
          'isBackRepair', // 是否返修
          'isBackPart', // 返修备件
          'retRepairType', // 返修维修类型
          'partBackRepiarQty', // 备件返修数量
          'relatePartCode', // 关联备件编码
          'note', // 说明
          'isCustPay', // 是否客户付费
          'parentWiCode', // 父工时编码
          'wiTypeCode', // 维修类别名称
          'pickingPersonCode', // 领料人
          'dutyEmpId', // 制单责任人ID
          'unit', // 单位
          'orderNo', // 排序
          'isCombo', // 是否基础保养套餐
          'dlrId', // 经销商ID
          'accountCostId', // 核算类别ID
          'maintainParttype', // 备件类别
          'oemId', // 厂商标识ID
          'groupId', // 集团标识ID
          'oemCode', // 厂商标识
          'groupCode', // 集团标识
          'creator', // 创建人
          'createdDate', // 创建日期
          'modifier', // 修改人
          'lastUpdatedDate', // 最后更新日期
          'isEnable', // 是否可用
          'updateControlId', // 并发控制ID
          'repairOtherId', // 维修其它费用ID
          'repairOrderId', // 施工单ID
          'repairOrderCode', // 施工单号
          'recallCaseType', // 召回专案类型
          'recallCaseCode', // 召回专案编码
          'servicePackageCode', // 服务套餐编码
          'otherAmountId', // 其它费用ID
          'otherAmountType', // 其它费用类别
          'otherAmount', // 其它费用
          'payKind', // 付费性质编码
          'payKindName', // 付费性质
          'businessType', // 业务类别编码
          'businessTypeName', // 业务类别
          'dutyMan', // 制单责任人
          'dutyEmpId', // 制单责任人ID
          'otherItem', // 附加项目
          'remark', // 备件
          'oemId', // 厂商标识ID
          'groupId', // 集团标识ID
          'oemCode', // 厂商标识
          'groupCode', // 集团标识
          'creator', // 创建人
          'createdDate', // 创建日期
          'modifier', // 修改人
          'lastUpdatedDate', // 最后更新日期
          'isEnable', // 是否可用
          'updateControlId', // 并发控制ID
          'repairPartShareId', // 费用分摊ID
          'repairOrderCode', // 施工单号
          'partNo', // 备件编码
          'partName', // 备件名称
          'partQty', // 备件数量
          'custAmount', // 客户付费金额
          'custDiscount', // 客户分摊比例
          'custDueAmount', // 客户承担金额
          'custPrice', // 客户付费单价
          'otherPrice', // 厂家付费单价
          'otherAmount', // 厂家付费金额
          'otherDiscount', // 厂家承担比例
          'otherDueAmount', // 厂家承担金额
          'dueAmount', // 应付金额
          'businessType', // 业务类别
          'payKind', // 付费性质
          'dutyEmpId', // 制单责任人ID
          'carBrandCode', // 车辆品牌
          'dlrId', // 经销商ID
          'repairPartId', // 维修备件ID
          'oemId', // 厂商标识ID
          'groupId', // 集团标识ID
          'oemCode', // 厂商标识
          'groupCode', // 集团标识
          'creator', // 创建人
          'createdDate', // 创建日期
          'modifier', // 修改人
          'lastUpdatedDate', // 最后更新日期
          'isEnable', // 是否可用
          'updateControlId', // 并发控制ID
          'repairOrderId', // 施工单ID
          'shareType', // 分摊类型
          'remark', // 备注
          'repairPresentId', // 维修礼品表
          'repairOrderId', // 施工单ID
          'partNo', // 礼品编码
          'partName', // 礼品名称
          'presentQty', // 礼品数量
          'actionCode', // 活动编码
          'oemId', // 厂商标识ID
          'groupId', // 集团标识ID
          'oemCode', // 厂商标识
          'groupCode', // 集团标识
          'creator', // 创建人
          'createdDate', // 创建日期
          'modifier', // 修改人
          'lastUpdatedDate', // 最后更新日期
          'isEnable', // 是否可用
          'updateControlId' // 并发控制ID
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
