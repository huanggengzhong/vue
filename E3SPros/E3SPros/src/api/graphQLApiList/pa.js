/**
 * description: 备件API清单（服务编码，输入类型）
 * author: luojx
 * createdDate: 2019-07-22
 * logs：
 *  20190722 创建 luojx
 */
import config from '../../utils/config'

const PA_ASC_API_URL = config.localUrl + '/ly/mp/busicen/asc/graphql.do'
const PA_ORC_API_URL = config.localUrl + '/ly/mp/busicen/orc/graphql.do'
const PA_SCC_API_URL = config.localUrl + '/ly/mp/busicen/scc/graphql.do'
const PA_PRC_API_URL = config.localUrl + '/ly/mp/busicen/prc/graphql.do'
const PA_FIC_API_URL = config.localUrl + '/ly/mp/busicen/fic/graphql.do'
const PA_USC_API_URL = config.localUrl + '/ly/mp/busicen/usc/graphql.do'

export const paApis = {
  // 日历查看
  calendarEditorparameters: {
    ServiceCode: 'calendarEditorparameters',
    InputType: 'InputPaDbOemWarehouse',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商备件参数查询
  dealerSparepartsparameters: {
    ServiceCode: 'dealerSparepartsparameters',
    InputType: 'InputPaDbOemWarehouse',
    APIUrl: PA_SCC_API_URL
  },
  // 备件客户维护查询
  paDbDlrCustQueryFindAll: {
    ServiceCode: 'paDbDlrCustQueryFindAll',
    InputType: 'InputPaDbDlrCustExt',
    APIUrl: PA_USC_API_URL
  },
  // 工作日历查询
  paDbPurCalendModuleQueryFindAll: {
    ServiceCode: 'paDbPurCalendModuleQueryFindAll',
    InputType: 'InputPaDbPurCalendModule',
    APIUrl: PA_USC_API_URL
  },
  // 备件订单制作主表查询
  paBuPurOrderQueryFindAll: {
    ServiceCode: 'paBuPurOrderQueryFindAll',
    InputType: 'InputPaBuPurOrderExt',
    APIUrl: PA_ORC_API_URL
  },
  // 账户余额
  paBuOemDlrAccountQueryPriceFindAll: {
    ServiceCode: 'paBuOemDlrAccountQueryPriceFindAll',
    InputType: 'InputPaBuOemDlrAccount',
    APIUrl: PA_FIC_API_URL
  },
  // 备件订单制作订单明细查询
  paBuPurOrderDQueryFindAll: {
    ServiceCode: 'paBuPurOrderDQueryFindAll',
    InputType: 'InputPaBuPurOrderDExt',
    APIUrl: PA_ORC_API_URL
  },
  // 新建订单 主机厂库存查询
  paOrderBuOemStorageQueryFindAll: {
    ServiceCode: 'paOrderBuOemStorageQueryFindAll',
    InputType: 'InputPaBuOemStorageExt',
    APIUrl: PA_PRC_API_URL
  },
  // 备件订单制作-修改保存
  sparepartsordermakeSave: {
    ServiceCode: 'sparepartsordermakeSave',
    InputType: 'paInputType',
    APIUrl: '/ly/mp/spareParts/orderMake/editSave.do'
  },
  // 备件订单制作-提交
  sparepartsordermakeSubmit: {
    ServiceCode: 'sparepartsordermakeSubmit',
    InputType: 'paInputType',
    APIUrl: '/ly/mp/spareParts/orderMake/submit.do'
  },
  // 备件订单审核-审核/驳回
  paBuPurOrderMutationOemAudit: {
    ServiceCode: 'paBuPurOrderMutationOemAudit',
    InputType: '[InputPaBuPurOrder],String',
    APIUrl: PA_ORC_API_URL
  },
  // 备件订单审核-驳回
  sparepartsorderReject: {
    ServiceCode: 'sparepartsorderReject',
    InputType: 'paInputType',
    APIUrl: '/ly/mp/spareParts/sparePartsOrder/reject.do'
  },
  // 新建订单保存
  newOrderSave: {
    ServiceCode: 'paBuPurOrderMutationSave',
    InputType: 'InputPaDbDlrUseOrderType',
    APIUrl: PA_ORC_API_URL
  },
  // 新建订单_销售历史查询
  paBuDlrOutStoreQuerySaleHis: {
    ServiceCode: 'paBuDlrOutStoreQuerySaleHis',
    InputType: 'InputPaBuDlrOutStoreExt',
    APIUrl: PA_SCC_API_URL
  },
  // 新建订单_关联订单查询
  paBuPurOrderQueryRelate: {
    ServiceCode: 'paBuPurOrderQueryRelate',
    InputType: 'InputPaBuPurOrderExt',
    APIUrl: PA_ORC_API_URL
  },
  // 新建订单_替换件库存查询
  paDbReplaceListQueryStorage: {
    ServiceCode: 'paDbReplaceListQueryStorage',
    InputType: 'InputExPaDbReplaceList',
    APIUrl: PA_PRC_API_URL
  },
  // 新建订单_数据验证结果
  paBudataVerification: {
    ServiceCode: 'paBudataVerification',
    InputType: 'InputPaBuPurOrderExt',
    APIUrl: PA_PRC_API_URL
  },
  // 新建订单_excel导入解析
  resolve: {
    ServiceCode: 'resolve',
    InputType: 'file',
    APIUrl: '/ly/mp/busicen/asc/excel/resolve.do'
  },
  // 新建订单_从缺件生成订单
  paBuLackPartOrderQueryFindAll: {
    ServiceCode: 'paBuLackPartOrderQueryFindAll',
    InputType: 'InputPaBuLackPartOrderExt',
    APIUrl: PA_SCC_API_URL
  },
  // 新建订单_从缺件生成订单(新版)
  paBuPurOrderQueryLackGenerateOrder: {
    ServiceCode: 'paBuPurOrderQueryLackGenerateOrder',
    InputType: 'InputPaBuLackPartOrderExt',
    APIUrl: PA_SCC_API_URL
  },
  // 备件价格业务审核_主表查询 同备件价格启用
  paDbPriceTraceQueryListForPage: {
    ServiceCode: 'paDbPriceTraceQueryListForPage',
    InputType: 'InputPaDbPriceTraceExt',
    APIUrl: PA_PRC_API_URL
  },
  // 备件价格业务审核_审核 同备件价格启用
  paDbPriceTraceMutationBsAuditSave: {
    ServiceCode: 'paDbPriceTraceMutationBsAuditSave',
    InputType: '[InputPaDbPriceTrace]',
    APIUrl: PA_PRC_API_URL
  },
  // 备件价格财务审核_审核 同备件价格启用
  paDbPriceTraceMutationFiAuditSave: {
    ServiceCode: 'paDbPriceTraceMutationFiAuditSave',
    InputType: '[InputPaDbPriceTrace]',
    APIUrl: PA_PRC_API_URL
  },
  // 备件价格业务审核_驳回、备件价格财务审核_驳回 同备件价格启用  备件价格维护驳回
  paDbPriceTraceMutationRebackSave: {
    ServiceCode: 'paDbPriceTraceMutationRebackSave',
    InputType: '[InputPaDbPriceTrace]',
    APIUrl: PA_PRC_API_URL
  },
  // 备件价格业务审核_车系编码弹框_查询、备件价格财务审核_车系编码弹框_查询 同备件价格启用
  seChooseCarSeriesQueryFind: {
    ServiceCode: 'seChooseCarSeriesQueryFind',
    InputType: 'InputSeChooseCarSeries',
    APIUrl: PA_ASC_API_URL
  },
  // 新建订单_备件选择弹框_查询
  paDbDlrPartListQueryList: {
    ServiceCode: 'paDbDlrPartListQueryList',
    InputType: 'InputExPaDbDlrPartList',
    APIUrl: PA_PRC_API_URL
  },
  // 新建订单_经销商选择弹框_查询
  mdmOrgdlrQueryByPage: {
    ServiceCode: 'mdmOrgdlrQueryByPage',
    InputType: 'InputExMdmOrgDlr',
    APIUrl: PA_USC_API_URL
  },
  // 新建订单_备件选择后查询订单明细
  paBuPurOrderDQueryAfterSelectParts: {
    ServiceCode: 'paBuPurOrderDQueryAfterSelectParts',
    InputType: 'InputPaBuPurOrderDExt',
    APIUrl: PA_ORC_API_URL
  },
  // 公共弹窗-供应商选择（经销商）
  paDbDlrSupplierQueryFindAllWindow: {
    ServiceCode: 'paDbDlrSupplierQueryFindAllWindow',
    InputType: 'InputPaDbDlrSupplier',
    APIUrl: PA_USC_API_URL
  },
  // 公共弹窗-供应商选择（主机厂）
  paDbOemSupplierQueryFindAllWindow: {
    ServiceCode: 'paDbOemSupplierQueryFindAllWindow',
    InputType: 'InputPaDbOemSupplier',
    APIUrl: PA_USC_API_URL
  },

  // 订单审核时机设置_查询主表
  paDbOrderCheckConfigQueryFindAll: {
    ServiceCode: 'paDbOrderCheckConfigQueryFindAll',
    InputType: 'InputPaDbOrderCheckConfig',
    APIUrl: PA_ORC_API_URL
  },
  // 订单审核时机设置_查询明细表
  paDbOrderConfigDQueryFindAll: {
    ServiceCode: 'paDbOrderConfigDQueryFindAll',
    InputType: 'InputPaDbOrderConfigD',
    APIUrl: PA_ORC_API_URL
  },
  // 订单审核时机设置_保存
  paDbOrderCheckConfigMutationSave: {
    ServiceCode: 'paDbOrderCheckConfigMutationSave',
    InputType: 'InputPaDbOrderCheckConfig',
    APIUrl: PA_ORC_API_URL
  },
  // 经销商不可用订单类型维护_查询
  paDbDlrUseOrderTypeQueryFindAll: {
    ServiceCode: 'paDbDlrUseOrderTypeQueryFindAll',
    InputType: 'InputPaDbDlrUseOrderTypeExt',
    APIUrl: PA_ORC_API_URL
  },
  // 经销商不可用订单类型维护_保存
  paDbDlrUseOrderTypeMutationSave: {
    ServiceCode: 'paDbDlrUseOrderTypeMutationSave',
    InputType: 'InputPaDbDlrUseOrderType',
    APIUrl: PA_ORC_API_URL
  },
  // 运输方式与订单类型关系维护_查询
  paDbTransitRelationQueryFindAll: {
    ServiceCode: 'paDbTransitRelationQueryFindAll',
    InputType: 'InputPaDbTransitRelation',
    APIUrl: PA_ORC_API_URL
  },

  // 运输方式与订单类型关系维护_保存
  paDbTransitRelationMutationSave: {
    ServiceCode: 'paDbTransitRelationMutationSave',
    InputType: 'InputPaDbTransitRelation',
    APIUrl: PA_ORC_API_URL
  },
  // 订单审核配置项-动态获取表头
  paDbOemAuditRuleQueryFindAll: {
    ServiceCode: 'paDbOemAuditRuleQueryFindAll',
    InputType: 'InputPaDbOemAuditRule',
    APIUrl: PA_ORC_API_URL
  },
  // 订单审核配置项-查询
  paBuOemAuditGroupDQueryFindAll: {
    ServiceCode: 'paBuOemAuditGroupDQueryFindAll',
    InputType: 'InputPaBuOemAuditGroupD',
    APIUrl: PA_ORC_API_URL
  },
  // 订单审核配置项-保存
  paBuOemAuditGroupDMutationSave: {
    ServiceCode: 'paBuOemAuditGroupDMutationSave',
    InputType: '[InputPaBuOemAuditRule]',
    APIUrl: PA_ORC_API_URL
  },
  // 零件清单维护
  paDbElementMutationSave: {
    ServiceCode: 'paDbElementMutationSave',
    InputType: 'InputPaDbElement',
    APIUrl: PA_PRC_API_URL
  },
  // 备件类别维护
  paDbAttrTypeMutationSave: {
    ServiceCode: 'paDbAttrTypeMutationSave',
    InputType: 'InputPaDbAttrType',
    APIUrl: PA_PRC_API_URL
  },
  // 零件清单查询
  paDbElementQueryList: {
    ServiceCode: 'paDbElementQueryList',
    InputType: 'InputPaDbElement',
    APIUrl: PA_PRC_API_URL
  },
  // DLR备件清单查询
  paDbDlrPartListQueryList: {
    ServiceCode: 'paDbDlrPartListQueryList',
    InputType: 'InputExPaDbDlrPartList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件类别查询
  paDbAttrTypeQueryList: {
    ServiceCode: 'paDbAttrTypeQueryList',
    InputType: 'InputPaDbAttrType',
    APIUrl: PA_PRC_API_URL
  },
  // 销售开关查询
  paDbPartListQueryFindAll: {
    ServiceCode: 'paDbPartListQueryFindAll',
    InputType: 'InputExFindAllPaDbPartList',
    APIUrl: PA_PRC_API_URL
  },
  // 销售开关保存
  paDbPartListMutationSavePartOrderSwitch: {
    ServiceCode: 'paDbPartListMutationSavePartOrderSwitch',
    InputType: 'InputPaDbPartList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件流动类别
  flowQueryList: {
    ServiceCode: 'flowQueryList',
    InputType: 'flowQueryList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件供应商管理查询
  // paDbDlrSupplierQueryFindAllWindow: {
  //   ServiceCode: 'paDbDlrSupplierQueryFindAllWindow',
  //   InputType: 'InputPaDbDlrSupplier',
  //   APIUrl: PA_USC_API_URL
  // },
  // 备件供应商管理保存
  paDbDlrSupplierMutationSaveById: {
    ServiceCode: 'paDbDlrSupplierMutationSaveById',
    InputType: 'InputPaDbDlrSupplier',
    APIUrl: PA_USC_API_URL
  },
  // 备件收款(协议单位 + 调拨销售单)查询
  PaBuDlrFlitOrderQueryFindAll: {
    ServiceCode: 'PaBuDlrFlitOrderQueryFindAll',
    InputType: 'InputPaBuDlrFlitOrder',
    APIUrl: PA_ORC_API_URL
  },
  // 备件收款(协议单位 + 服务二网备件需求)查询
  twoServicesQueryList: {
    ServiceCode: 'twoServicesQueryList',
    InputType: 'twoServicesQueryList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件收款(内部 + 全部)查询
  internalQueryList: {
    ServiceCode: 'internalQueryList',
    InputType: 'internalQueryList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件收款(协议单位明细)查询
  agreementUnitDetailQueryList: {
    ServiceCode: 'agreementUnitDetailQueryList',
    InputType: 'agreementUnitDetailQueryList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件收款(内部明细)查询
  internalDetailQueryList: {
    ServiceCode: 'internalDetailQueryList',
    InputType: 'internalDetailQueryList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件(调拨销售单)收款
  salesOrdersMutationSave: {
    ServiceCode: 'salesOrdersMutationSave',
    InputType: 'salesOrdersMutationSave',
    APIUrl: PA_PRC_API_URL
  },
  // 备件(结算)收款
  settlementMutationSave: {
    ServiceCode: 'settlementMutationSave',
    InputType: 'settlementMutationSave',
    APIUrl: PA_PRC_API_URL
  },
  // 备件挂账结算查询
  paymentSettlementQueryList: {
    ServiceCode: 'paymentSettlementQueryList',
    InputType: 'paymentSettlementQueryList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件挂账结算收款
  paymentMutationSave: {
    ServiceCode: 'paymentMutationSave',
    InputType: 'paymentMutationSave',
    APIUrl: PA_PRC_API_URL
  },
  // 备件退款——服务二网销售备件退款
  partServicesRefundQueryList: {
    ServiceCode: 'partServicesRefundQueryList',
    InputType: 'partServicesRefundQueryList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件退款——网点调拨退货申请
  partTransfersApplyQueryList: {
    ServiceCode: 'partTransfersApplyQueryList',
    InputType: 'partTransfersApplyQueryList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件退款——专营店间调拨取消
  storesCancelledQueryList: {
    ServiceCode: 'storesCancelledQueryList',
    InputType: 'storesCancelledQueryList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件退款——领用退货申请
  recipientsRefundQueryList: {
    ServiceCode: 'recipientsRefundQueryList',
    InputType: 'recipientsRefundQueryList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件退款——(全部明细)
  refundDetailQueryList: {
    ServiceCode: 'refundDetailQueryList',
    InputType: 'refundDetailQueryList',
    APIUrl: PA_PRC_API_URL
  },
  // 库存动态盘点---新建盘点单查询
  paBuDlrStorageQueryFindAllOne: {
    ServiceCode: 'paBuDlrStorageQueryFindAllOne',
    InputType: 'InputPaBuDlrStorage',
    APIUrl: PA_SCC_API_URL
  },
  // 库存动态盘点---新建盘点单保存
  paBuDlrStoreCheckSaveMutation: {
    ServiceCode: 'paBuDlrStoreCheckSaveMutation',
    InputType: 'InputpaBuDlrStoreCheck',
    APIUrl: PA_SCC_API_URL
  },
  // 库存动态盘点---删除盘点单
  paBuDlrStoreCheckDelMutation: {
    ServiceCode: 'paBuDlrStoreCheckDelMutation',
    InputType: 'InputpaBuDlrStoreCheck',
    APIUrl: PA_SCC_API_URL
  },
  // 库存动态盘点---结束盘点单
  paBuDlrStoreCheckEndMutation: {
    ServiceCode: 'paBuDlrStoreCheckEndMutation',
    InputType: 'InputpaBuDlrStoreCheck',
    APIUrl: PA_SCC_API_URL
  },
  // 库存动态盘点---盘点录入修改
  paBuDlrStoreCheckEditMutation: {
    ServiceCode: 'paBuDlrStoreCheckEditMutation',
    InputType: 'InputpaBuDlrStoreCheck,[InputpaBuDlrStoreCheckD]',
    APIUrl: PA_SCC_API_URL
  },
  // 库存动态盘点---财务审核---审核通过
  paBuDlrStoreCheckAuditMutation: {
    ServiceCode: 'paBuDlrStoreCheckAuditMutation',
    InputType:
      'InputpaBuDlrStoreCheck,[InputpaBuDlrStoreCheckIn],[InputpaBuDlrStoreCheckOut]',
    APIUrl: PA_SCC_API_URL
  },
  // 库存动态盘点---财务审核---驳回
  paBuDlrStoreCheckBoMutation: {
    ServiceCode: 'paBuDlrStoreCheckBoMutation',
    InputType: 'InputpaBuDlrStoreCheck',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商索赔管理---经销商索赔申请---查询
  applyClaimQueryList: {
    ServiceCode: 'applyClaimQueryList',
    InputType: 'applyClaimQueryList',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商索赔管理---经销商索赔申请---选择
  applyClaimChooseQueryList: {
    ServiceCode: 'applyClaimChooseQueryList',
    InputType: 'applyClaimChooseQueryList',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商索赔管理---经销商索赔申请---保存(审核、驳回)
  appliyClaimSaveMutation: {
    ServiceCode: 'appliyClaimSaveMutation',
    InputType: 'appliyClaimSaveMutation',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商索赔管理---经销商索赔申请---索赔单号查询
  applyClaimNumberQueryList: {
    ServiceCode: 'applyClaimNumberQueryList',
    InputType: 'applyClaimNumberQueryList',
    APIUrl: PA_SCC_API_URL
  },
  // 备件车型关系查询
  paDbPartCartypeRfQueryCarType: {
    ServiceCode: 'paDbPartCartypeRfQueryCarType',
    InputType: 'InputExPaDbPartCartypeRf',
    APIUrl: PA_PRC_API_URL
  },
  paDbPartCartypeRfMutationSaveCarType: {
    ServiceCode: 'paDbPartCartypeRfMutationSaveCarType',
    InputType: 'InputExPaDbPartCartypeRf',
    APIUrl: PA_PRC_API_URL
  },
  // 网点对应仓库_查询
  netToStoreQueryFindAll: {
    ServiceCode: 'netToStoreQueryFindAll',
    InputType: 'InputPaDbNetToStoreExt',
    APIUrl: PA_SCC_API_URL
  },
  // 网点对应仓库_保存
  netToStoreMutationSave: {
    ServiceCode: 'netToStoreMutationSave',
    InputType: 'InputPaDbNetToStore',
    APIUrl: PA_SCC_API_URL
  },
  // 主机厂库存查询
  paBuOemStorageQueryFindAll: {
    ServiceCode: 'paBuOemStorageQueryFindAll',
    InputType: 'InputPaBuOemStorageExt',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商库存查询_查询
  paBuDlrStorageQueryFindAll: {
    ServiceCode: 'paBuDlrStorageQueryFindAll',
    InputType: 'InputPaBuDlrStorageExt',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商库存查询_启用/停用
  paBuDlrStorageMutationSave: {
    ServiceCode: 'paBuDlrStorageMutationSave',
    InputType: 'InputPaBuDlrStorage',
    APIUrl: PA_SCC_API_URL
  },
  // 选择备件公共弹窗_查询
  paDbPartListQueryFindAll: {
    ServiceCode: 'paDbPartListQueryFindAll',
    InputType: 'InputExFindAllPaDbPartList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件其他属性手动维护_删除
  paDbPartListMutationDeletePartNo: {
    ServiceCode: 'paDbPartListMutationDeletePartNo',
    InputType: 'InputPaDbPartList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件其他属性维护_导入备件号
  paDbPartListMutationExportPartNo: {
    ServiceCode: 'paDbPartListMutationExportPartNo',
    InputType: 'excel文件',
    APIUrl: '/ly/mp/busicen/prc/excel.do'
  },
  // 备件其他属性维护_保存修改
  paDbPartListMutationSavePartAttributel: {
    ServiceCode: 'paDbPartListMutationSavePartAttributel',
    InputType: 'InputExPaDbPartList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件其他属性维护_批量导入
  paDbPartListMutationBatchImportPartAttributel: {
    ServiceCode: 'paDbPartListMutationBatchImportPartAttributel',
    InputType: 'excel文件',
    APIUrl: '/ly/mp/busicen/prc/excel.do'
  },
  // 备件其他属性维护_批量导入-删除
  paDbPartListMutationImportDeletePartNo: {
    ServiceCode: 'paDbPartListMutationImportDeletePartNo',
    InputType: 'InputPaDbPartList',
    APIUrl: '/ly/mp/busicen/prc/graphql.do'
  },
  // 备件其他属性维护_批量导入-提交
  paDbPartListMutationImportSubmitPartNo: {
    ServiceCode: 'paDbPartListMutationBatchSubmitPartAttributel',
    InputType: '[InputExPartAttributel]',
    APIUrl: '/ly/mp/busicen/prc/graphql.do'
  },
  // 备件其他属性下拉值
  paDbPartListMutationAttribute: {
    ServiceCode: 'paDbPartColConfigQueryList',
    InputType: 'InputPaDbPartColConfig',
    APIUrl: PA_PRC_API_URL
  },
  // 备件价格维护_查询
  paDbPriceQueryListForPage: {
    ServiceCode: 'paDbPriceQueryListForPage',
    InputType: 'InputPaDbPriceExt',
    APIUrl: PA_PRC_API_URL
  },
  // 备件价格维护_保存
  paDbPriceMutationSave: {
    ServiceCode: 'paDbPriceMutationSave',
    InputType: '[InputPaDbPrice]',
    APIUrl: PA_PRC_API_URL
  },
  // 备件价格维护_导入
  paDbPriceMutationImport: {
    ServiceCode: 'paDbPriceMutationImport',
    InputType: 'excel文件',
    APIUrl: '/ly/mp/busicen/prc/excel.do'
  },
  // 备件价格启用_查询
  paDbPriceTraceQueryListForPage: {
    ServiceCode: 'paDbPriceTraceQueryListForPage',
    InputType: 'InputPaDbPriceTraceExt',
    APIUrl: PA_PRC_API_URL
  },
  // 备件价格启用_启用
  paDbPriceTraceMutationStartSave: {
    ServiceCode: 'paDbPriceTraceMutationStartSave',
    InputType: '[InputPaDbPriceTrace]',
    APIUrl: PA_PRC_API_URL
  },
  // 订货日历_查询
  paDbPurCalendarQueryFindAll: {
    ServiceCode: 'paDbPurCalendarQueryFindAll',
    InputType: 'InputPaDbPurCalendarExt',
    APIUrl: PA_ORC_API_URL
  },
  // 订货日历_保存
  paDbPurCalendarMutationSave: {
    ServiceCode: 'paDbPurCalendarMutationSave',
    InputType: 'InputPaDbPurCalendar',
    APIUrl: PA_ORC_API_URL
  },
  // 订货日历分组_查询
  paDbPurCalendModuleQueryFindAll: {
    ServiceCode: 'paDbPurCalendModuleQueryFindAll',
    InputType: 'InputPaDbPurCalendModule',
    APIUrl: PA_ORC_API_URL
  },
  // 订货日历分组_保存
  paDbPurCalendModuleMutationSave: {
    ServiceCode: 'paDbPurCalendModuleMutationSave',
    InputType: 'InputPaDbPurCalendModule',
    APIUrl: PA_ORC_API_URL
  },
  // 订货日历分组使用店清单
  paDbCalendDlrQueryFindAll: {
    ServiceCode: 'paDbCalendDlrQueryFindAll',
    InputType: 'InputPaDbCalendDlr',
    APIUrl: PA_ORC_API_URL
  },
  // 备件状态开关日志查询_查询
  paDbPartLogQueryList: {
    ServiceCode: 'paDbPartLogQueryList',
    InputType: 'InputExPaDbPartLog',
    APIUrl: PA_PRC_API_URL
  },
  // 备件目录_查询
  paDbPartCartypeRfQueryList: {
    ServiceCode: 'paDbDlrPartListQueryList',
    InputType: 'InputExPaDbDlrPartList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件目录_查询价格调整历史_查询
  paDbDlrPartPriceHisQueryList: {
    ServiceCode: 'paDbDlrPartPriceHisQueryList',
    InputType: 'InputExPaDbDlrPartPriceHis',
    APIUrl: PA_PRC_API_URL
  },
  // 备件目录_保存
  paDbDlrPartListMutationUpdateSalePrice: {
    ServiceCode: 'paDbDlrPartListMutationUpdateSalePrice',
    InputType: 'InputExUspPaDbDlrPartList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件目录_保存 //修改，新增弹窗保存
  paDbDlrPartListMutationSave: {
    ServiceCode: 'paDbDlrPartListMutationSave',
    InputType: 'InputExSavePaDbDlrPartList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件目录_导入零售价格
  paDbDlrPartListMutationImportSalePrice: {
    ServiceCode: 'paDbDlrPartListMutationImportSalePrice',
    InputType: 'excel文件',
    APIUrl: '/ly/mp/busicen/prc/excel.do'
  },
  // 备件清单维护备件信息查询_查询
  paDbPartListQueryList: {
    ServiceCode: 'paDbPartListQueryFindAll',
    InputType: 'InputExFindAllPaDbPartList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件清单维护备件信息查询_备件替换链信息
  paDbReplaceListQueryFindAll: {
    ServiceCode: 'paDbReplaceListQueryFindAll',
    InputType: 'InputExPaDbReplaceList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件清单维护备件信息查询_保存
  paDbPartListMutationSave: {
    ServiceCode: 'paDbPartListMutationSave',
    InputType: 'InputExAllPaDbPartList',
    APIUrl: PA_PRC_API_URL
  },
  // 备件清单维护备件信息查询_保存替换
  paDbReplaceMutationSave: {
    ServiceCode: 'paDbReplaceMutationSave',
    InputType: 'InputPaDbReplace',
    APIUrl: PA_PRC_API_URL
  },
  // 备件仓库维护_查询
  partsOemWareHouseQueryFindAll: {
    ServiceCode: 'partsOemWareHouseQueryFindAll',
    InputType: 'InputPaDbOemWarehouse',
    APIUrl: PA_SCC_API_URL
  },
  // 备件仓库维护_保存
  partsOemWareHouseMutationSave: {
    ServiceCode: 'partsOemWareHouseMutationSave',
    InputType: 'InputPaDbOemWarehouse',
    APIUrl: PA_SCC_API_URL
  },
  // 备件仓库仓位维护_仓库查询
  partsDlrWareHouseQueryFindAll: {
    ServiceCode: 'partsDlrWareHouseQueryFindAll',
    InputType: 'InputPaDbDlrWarehouse',
    APIUrl: PA_SCC_API_URL
  },
  // 备件仓库仓位维护_仓位查询
  partsDlrPlaceQueryFindAll: {
    ServiceCode: 'partsDlrPlaceQueryFindAll',
    InputType: 'InputPaDbDlrPlace',
    APIUrl: PA_SCC_API_URL
  },
  // 备件仓库仓位维护_仓库保存
  partsDlrWareHouseMutationSave: {
    ServiceCode: 'partsDlrWareHouseMutationSave',
    InputType: 'InputPaDbDlrWarehouse',
    APIUrl: PA_SCC_API_URL
  },
  // 备件仓库仓位维护_仓位保存
  partsDlrPlaceMutationSave: {
    ServiceCode: 'partsDlrPlaceMutationSave',
    InputType: 'InputPaDbDlrPlace',
    APIUrl: PA_SCC_API_URL
  },
  // 备件仓库仓位维护_删除
  partsDlrPlaceMutationDelete: {
    ServiceCode: 'partsDlrPlaceMutationDelete',
    InputType: '[InputPaDbDlrPlace]',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商资金作业_记录查询
  veBuDlrAccountRInfoQueryWorkFindAll: {
    ServiceCode: 'veBuDlrAccountRInfoQueryWorkFindAll',
    InputType: 'InputVeBuDlrAccountRInfoAuditExt',
    APIUrl: PA_FIC_API_URL
  },
  // 经销商资金作业_账户查询
  paBuOemDlrAccountQueryWorkFindAll: {
    ServiceCode: 'paBuOemDlrAccountQueryWorkFindAll',
    InputType: 'InputPaBuOemDlrAccount',
    APIUrl: PA_FIC_API_URL
  },
  // 经销商资金作业_记录删除
  veBuDlrAccountRInfoMutationWorkDelete: {
    ServiceCode: 'veBuDlrAccountRInfoMutationWorkDelete',
    InputType: 'InputVeBuDlrAccountRInfo',
    APIUrl: PA_FIC_API_URL
  },
  // 经销商资金作业_添加保存
  veBuDlrAccountRInfoMutationWorkSave: {
    ServiceCode: 'veBuDlrAccountRInfoMutationWorkSave',
    InputType: 'InputVeBuDlrAccountRInfo',
    APIUrl: PA_FIC_API_URL
  },
  // 经销商资金作业_导入保存
  veBuDlrAccountRInfoMutationWorkBatchSave: {
    ServiceCode: 'veBuDlrAccountRInfoMutationWorkBatchSave',
    InputType: '[InputVeBuDlrAccountRInfo]',
    APIUrl: PA_FIC_API_URL
  },
  // 财务审核_记录总数查询
  veBuDlrAccountRInfoQueryAuditFindCount: {
    ServiceCode: 'veBuDlrAccountRInfoQueryAuditFindCount',
    InputType: 'InputVeBuDlrAccountRInfoAuditExt',
    APIUrl: PA_FIC_API_URL
  },
  // 财务审核_主查询查询
  veBuDlrAccountRInfoQueryFindAll: {
    ServiceCode: 'veBuDlrAccountRInfoQueryFindAll',
    InputType: 'InputVeBuDlrAccountRInfoAuditExt',
    APIUrl: PA_FIC_API_URL
  },
  // 财务审核_审核提交
  veBuDlrAccountRInfoMutationAuditBatchPass: {
    ServiceCode: 'veBuDlrAccountRInfoMutationAuditBatchPass',
    InputType: '[InputVeBuDlrAccountRInfo]',
    APIUrl: PA_FIC_API_URL
  },
  // 财务审核_驳回提交
  veBuDlrAccountRInfoMutationAuditBatchReject: {
    ServiceCode: 'veBuDlrAccountRInfoMutationAuditBatchReject',
    InputType: '[InputVeBuDlrAccountRInfo]',
    APIUrl: PA_FIC_API_URL
  },
  // 专营店备件出库查询_查询主表
  paBuDlrOutStoreQueryFindAll: {
    ServiceCode: 'paBuDlrOutStoreQueryFindAll',
    InputType: 'InputPaBuDlrOutStoreExt',
    APIUrl: PA_SCC_API_URL
  },
  // 专营店备件出库查询_查询明细
  paBuDlrOutStoreDQueryFindAll: {
    ServiceCode: 'paBuDlrOutStoreDQueryFindAll',
    InputType: 'InputPaBuDlrOutStoreDExt',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商资金账户管理
  paBuOemDlrAccountQueryPriceFindAll: {
    ServiceCode: 'paBuOemDlrAccountQueryPriceFindAll',
    InputType: 'InputPaBuOemDlrAccountPriceExt',
    APIUrl: PA_FIC_API_URL
  },
  // 经销商资金账户管理_预扣明细查询
  veBuDlrAccountRLogQueryFrozenFindAll: {
    ServiceCode: 'veBuDlrAccountRLogQueryFrozenFindAll',
    InputType: 'InputVeBuDlrAccountRLogExt',
    APIUrl: PA_FIC_API_URL
  },
  // 经销商资金账户管理_转款明细查询
  veBuDlrAccountRLogQueryInFindAll: {
    ServiceCode: 'veBuDlrAccountRLogQueryInFindAll',
    InputType: 'InputVeBuDlrAccountRLogExt',
    APIUrl: PA_FIC_API_URL
  },
  // 经销商资金账户管理_扣款明细查询
  veBuDlrAccountRLogQueryOutFindAll: {
    ServiceCode: 'veBuDlrAccountRLogQueryOutFindAll',
    InputType: 'InputVeBuDlrAccountRLogExt',
    APIUrl: PA_FIC_API_URL
  },
  // 经销商资金账户管理_结算金额明细查询
  veBuDlrAccountRLogQuerySettlementFindAll: {
    ServiceCode: 'veBuDlrAccountRLogQuerySettlementFindAll',
    InputType: 'InputVeBuDlrAccountRLogExt',
    APIUrl: PA_FIC_API_URL
  },
  // 经销商资金账户管理_银行汇款明细查询
  veBuDlrAccountRLogQueryBankFindAll: {
    ServiceCode: 'veBuDlrAccountRLogQueryBankFindAll',
    InputType: 'InputVeBuDlrAccountRLogExt',
    APIUrl: PA_FIC_API_URL
  },
  // 维修出库初始化
  RepaiOutService001: {
    ServiceCode: 'RepaiOutService001',
    InputType: 'InputRepaiOutService',
    APIUrl: '/ly/mp/busicen/bff/scc/wm/pa/RepairOut/initRepairOut.do'
  },
  // 维修出库_查询主表
  seBuRepairOrderQueryFindAll: {
    ServiceCode: 'seBuRepairOrderQueryFindAll',
    InputType: 'InputSeBuRepairOrderExt',
    APIUrl: PA_ASC_API_URL
  },
  // 维修出库_查询明细
  seBuRepairOrderDQueryFindAll: {
    ServiceCode: 'seBuRepairOrderDQueryFindAll',
    InputType: 'InputSeBuRepairOrder',
    // APIUrl: '/ly/mp/busicen/bff/scc/wm/pa/RepairOut/queryRepairOutD.do'
    APIUrl: PA_ASC_API_URL
  },
  // '维修出库_查询保存'
  paBuDlrOutStoreMutationSave: {
    ServiceCode: 'paBuDlrOutStoreMutationSave',
    InputType1: 'InputPaBuDlrOutStore',
    InputType2: '[InputPaBuDlrOutStoreD]!',
    APIUrl: PA_SCC_API_URL
  },
  // 维修出库_查询打印
  RepaiOutService005: {
    ServiceCode: 'RepaiOutService005',
    InputType: 'InputRepaiOutServiceM',
    APIUrl: '/ly/mp/busicen/bff/scc/wm/pa/RepairOut/printRepairOut.do'
  },
  // 资金账户管理查询
  veBuDlrAccountRLogQueryFindAll: {
    ServiceCode: 'veBuDlrAccountRLogQueryFindAll',
    InputType: 'InputVeBuDlrAccountRLogExt',
    APIUrl: PA_FIC_API_URL
  },
  // 维修退库_查询主表
  seBuReturnApplyOrderQueryFindAll: {
    ServiceCode: 'seBuReturnApplyOrderQueryFindAll',
    InputType: 'InputSeBuReturnApplyOrderExt',
    APIUrl: PA_ASC_API_URL
  },
  // 维修退库_查询明细
  seBuReturnApplyOrderDQueryFindAll: {
    ServiceCode: 'seBuReturnApplyOrderDQueryFindAll',
    InputType: 'InputSeBuReturnApplyOrder',
    APIUrl: PA_ASC_API_URL
  },
  // 维修退库_保存
  // paBuDlrOutStoreMutationSave: {
  //   ServiceCode: 'paBuDlrOutStoreMutationSave',
  //   InputType: 'InputSeBuReturnApplyOrderExt',
  //   APIUrl: PA_SCC_API_URL
  // },
  // 维修退库_打印
  RepairOutReturnService004: {
    ServiceCode: 'RepairOutReturnService004',
    InputType: 'InputSeBuReturnApplyOrderExt',
    APIUrl:
      'ly/mp/busicen/bff/scc/scm/pa/RepairOutReturn/PrintRepairOutReturn.do'
  },
  // 备货单查询
  paBuStockUpQueryFindAll: {
    ServiceCode: 'paBuStockUpQueryFindAll',
    InputType: 'InputPaBuStockUpExt',
    APIUrl: PA_SCC_API_URL
  },
  // 备货单详情
  paBuStockUpDQueryFindAll: {
    ServiceCode: 'paBuStockUpDQueryFindAll',
    InputType: 'InputPaBuStockUpD',
    APIUrl: PA_SCC_API_URL
  },
  // 备件采购入库_订单号查询 (经销商备件入库_查询主表)
  paBuOemOutStoreQueryFindAllOrderCode: {
    ServiceCode: 'paBuOemOutStoreQueryFindAllOrderCode',
    InputType: 'InputPaBuOemOutStoreExt',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商备件入库退货_主表查询
  paBuDlrInStoreQueryFindAll: {
    ServiceCode: 'paBuDlrInStoreQueryFindAll',
    InputType: 'InputPaBuDlrInStoreExt',
    APIUrl: PA_SCC_API_URL
  },
  // 备件采购入库_明细查询 (经销商备件入库_查询明细)
  paBuOemOutStoreDQueryFindAll: {
    ServiceCode: 'paBuOemOutStoreDQueryFindAll',
    InputType: 'InputPaBuOemOutStoreDExt',
    APIUrl: PA_SCC_API_URL
  },
  // 备件采购入库退货_切换单据类型事件
  paBuOemOutStoreQueryFindSupplier: {
    ServiceCode: 'paBuOemOutStoreQueryFindSupplier',
    InputType: 'InputPaBuOemOutStoreExt',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商备件入库退货_明细查询
  paBuDlrInStoreDQueryFindAll: {
    ServiceCode: 'paBuDlrInStoreDQueryFindAll',
    InputType: 'InputPaBuDlrInStoreD',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商备件入库退货_详细保存
  paBuDlrInStoreMutationSave: {
    ServiceCode: 'paBuDlrInStoreMutationSave',
    InputType: 'InputPaBuDlrInStore',
    APIUrl: PA_SCC_API_URL
  },
  // 备件类别下拉框
  paDbAttrTypeQueryList: {
    ServiceCode: 'paDbAttrTypeQueryList',
    InputType: 'InputPaDbAttrType',
    APIUrl: '/ly/mp/busicen/prc/graphql.do'
  },
  // 备件出入库查询_主表查询
  paOutBoundQuery: {
    ServiceCode: 'paOutBoundQuery',
    InputType: 'InputPaOutBound',
    APIUrl: PA_SCC_API_URL
  },
  // 备件出入库查询_明细查询
  paOutBoundDQueryDFindAll: {
    ServiceCode: 'paOutBoundDQueryDFindAll',
    InputType: 'InputPaOutBoundD',
    APIUrl: PA_SCC_API_URL
  },
  // 订单缺件原因
  paOrderShortPartsQuery: {
    ServiceCode: 'paOrderShortPartsQuery',
    InputType: 'InputpaOrderShortParts',
    APIUrl: PA_SCC_API_URL
  },
  // 查询经销商订货参数
  paDlrOrderParamsQuery: {
    ServiceCode: 'paDlrOrderParamsQuery',
    InputType: 'paDlrOrderParamsInput',
    APIUrl: PA_SCC_API_URL
  },
  // ..................................汪瑶瑶迭代二...............................
  // 备件来源维护-备件来源查询
  partBigTypeRepreQuery: {
    ServiceCode: 'partBigTypeRepreQuery',
    InputType: 'InputpaOrderShortParts',
    APIUrl: PA_SCC_API_URL
  },
  // 备件来源维护-备件来源类别查询
  partSourceTypeQuery: {
    ServiceCode: 'partSourceTypeQuery',
    InputType: 'InputpaOrderShortParts',
    APIUrl: PA_SCC_API_URL
  },
  // 备件来源维护-备件来源保存
  partSourceTypeSave: {
    ServiceCode: 'partSourceTypeSave',
    InputType: 'InputpaOrderShortParts',
    APIUrl: PA_SCC_API_URL
  },
  // 备件来源维护-备件来源类别保存
  partSourceType1Save: {
    ServiceCode: 'partSourceType1Save',
    InputType: 'InputpaOrderShortParts',
    APIUrl: PA_SCC_API_URL
  },
  // 可视化基础数据配置-时间节点配置查询
  paBuOemVisTimeCfigQueryFindAll: {
    ServiceCode: 'paBuOemVisTimeCfigQueryFindAll',
    InputType: 'InputPaBuOemVisTimeCfig',
    APIUrl: PA_SCC_API_URL
  },
  // 可视化基础数据配置-纳期类型配置查询
  paBuOemVisTypeCfigQueryFindAll: {
    ServiceCode: 'paBuOemVisTypeCfigQueryFindAll',
    InputType: 'InputPaBuOemVisTypeCfig',
    APIUrl: PA_SCC_API_URL
  },
  // 可视化基础数据配置-纳期类型配置保存
  paBuOemVisTypeCfigMutationSave: {
    ServiceCode: 'paBuOemVisTypeCfigMutationSave',
    InputType: 'InputPaBuOemVisTypeCfig,InputPaBuOemVisualTypeD',
    APIUrl: PA_SCC_API_URL
  },
  // 可视化基础数据配置-纳期类型配置保存
  paBuOemVisTimeCfigMutationSave: {
    ServiceCode: 'paBuOemVisTimeCfigMutationSave',
    InputType: 'InputPaBuOemVisTimeCfig',
    APIUrl: PA_SCC_API_URL
  },

  // 可视化基础数据配置-时间节点配置物流名称下拉框
  mdsLookupValueQuerySpecial: {
    ServiceCode: 'mdsLookupValueQuerySpecial',
    InputType: 'InputMdsLookupValue',
    APIUrl: PA_PRC_API_URL
  },
  // 批量维护属性字段配置-查询
  paDbPartColConfigQueryList: {
    ServiceCode: 'paDbPartColConfigQueryList',
    InputType: 'InputPaDbPartColConfig',
    APIUrl: PA_PRC_API_URL
  },
  // 批量维护属性字段配置-保存
  paDbPartColConfigMutationSave: {
    ServiceCode: 'paDbPartColConfigMutationSave',
    InputType: 'InputPaDbPartColConfig',
    APIUrl: PA_PRC_API_URL
  },
  // 备件调拨单制作-查询
  paBuDlrFlitOrderQueryFindAll: {
    ServiceCode: 'paBuDlrFlitOrderQueryFindAll',
    InputType: 'InputPaBuDlrFlitOrderExt',
    APIUrl: PA_ORC_API_URL
  },
  // 备件调拨单制作-明细查询
  paBuDlrFlitOrderDQueryFindAll: {
    ServiceCode: 'paBuDlrFlitOrderDQueryFindAll',
    InputType: 'InputPaBuDlrFlitOrderDExt',
    APIUrl: PA_ORC_API_URL
  },
  // 备件调拨单制作-新建调拨单保存
  paBuDlrFlitOrderMutationSave: {
    ServiceCode: 'paBuDlrFlitOrderMutationSave',
    InputType: 'InputPaBuDlrFlitOrder,InputPaBuDlrFlitOrderD',
    APIUrl: PA_ORC_API_URL
  },
  // 备件调拨单制作-删除
  paBuDlrFlitOrderMutationDel: {
    ServiceCode: 'paBuDlrFlitOrderMutationDel',
    InputType: 'InputPaBuDlrFlitOrder',
    APIUrl: PA_ORC_API_URL
  },
  // 备件调拨取消-调拨取消查询
  flitCancelQuery: {
    ServiceCode: 'flitCancelQuery',
    InputType: 'InputPaBuDlrFlitOrderExt',
    APIUrl: PA_ORC_API_URL
  },
  // 备件调拨取消-调拨取消保存
  flitCancelSave: {
    ServiceCode: 'flitCancelSave',
    InputType: 'InputPaBuDlrFlitOrderExt',
    APIUrl: PA_ORC_API_URL
  },
  // 备件调拨取消-调拨取消历史查询
  flitCancelHistoryQuery: {
    ServiceCode: 'flitCancelHistoryQuery',
    InputType: 'InputPaBuDlrFlitOrderExt',
    APIUrl: PA_ORC_API_URL
  },
  // 备件调拨取消-调拨取消历史删除
  flitCancelHistorySave: {
    ServiceCode: 'flitCancelHistorySave',
    InputType: 'InputPaBuDlrFlitOrderExt',
    APIUrl: PA_ORC_API_URL
  },
  // 备件调拨取消-调拨取消明细查询
  flitCancelDetailQuery: {
    ServiceCode: 'flitCancelDetailQuery',
    InputType: 'InputPaBuDlrFlitOrderExt',
    APIUrl: PA_ORC_API_URL
  },
  // 备件调拨取消-调拨取消历史明细查询
  flitCancelHistoryDetailQuery: {
    ServiceCode: 'flitCancelHistoryDetailQuery',
    InputType: 'InputPaBuDlrFlitOrderExt',
    APIUrl: PA_ORC_API_URL
  },
  // 备件调拨单审核-查询
  flitToExamineQuery: {
    ServiceCode: 'flitToExamineQuery',
    InputType: 'InputPaBuDlrFlitOrderExt',
    APIUrl: PA_ORC_API_URL
  },
  // 备件调拨单审核-审核，驳回，作废
  flitToExamineSave: {
    ServiceCode: 'flitToExamineSave',
    InputType: 'InputPaBuDlrFlitOrderExt',
    APIUrl: PA_ORC_API_URL
  },
  // ..................................任中杰迭代二...............................

  // 经销商备件入库_查询主表
  paDlstorageQueryFindAll: {
    ServiceCode: 'paDlstorageQueryFindAll',
    InputType: 'InputpaDlstorageQuery',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商备件入库_查询明细
  paDlstorageQueryDFindAll: {
    ServiceCode: 'paDlstorageQueryDFindAll',
    InputType: 'InputpaDlstorageQueryD',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商备件入库_保存
  paBuDlrInStoreMutationInStoreSave: {
    ServiceCode: 'paBuDlrInStoreMutationInStoreSave',
    InputType: 'InputpaDlstorageQuery',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商备件出库_查询主表
  paDlrOutStoreQueryFindAll: {
    ServiceCode: 'paDlrOutStoreQueryFindAll',
    InputType: 'InputpaDlOutstorageQuery',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商备件出库_查询明细
  paDlrOutStoreQueryDFindAll: {
    ServiceCode: 'paDlrOutStoreQueryDFindAll',
    InputType: 'InputpaDlOutstorageQueryD',
    APIUrl: PA_SCC_API_URL
  },

  // 经销商备件出库_保存
  paDlrOutStoreMutationInStoreSave: {
    ServiceCode: 'paDlrOutStoreMutationInStoreSave',
    InputType: 'InputpaDlOutstorageQuery',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商备件出库退货_主表查询
  paBuDlrOutStoreReturnQueryFindAll: {
    ServiceCode: 'paBuDlrOutStoreReturnQueryFindAll',
    InputType: 'InputPaBuDlrOutStoreExt',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商备件出库退货_明细查询
  paBuDlrOutStoreReturnDQueryFindAll: {
    ServiceCode: 'paBuDlrOutStoreReturnDQueryFindAll',
    InputType: 'InputPaBuOemOutStoreDExt',
    APIUrl: PA_SCC_API_URL
  },
  // 经销商备件出库退货_保存
  paBuDlrOutStoreReturnMutationSave: {
    ServiceCode: 'paBuDlrOutStoreReturnMutationSave',
    InputType: 'InputPaBuDlrOutStoreExt',
    APIUrl: PA_SCC_API_URL
  },
  // 缺件分配登记_主表查询
  paBuLackPartOrderQueryDistribution: {
    ServiceCode: 'paBuLackPartOrderQueryDistribution',
    InputType: 'InputPaBuLackPartOrderExt',
    APIUrl: PA_SCC_API_URL
  },
  // 缺件分配登记_明细查询
  paBuLackPartOrderDQueryDistribution: {
    ServiceCode: 'paBuLackPartOrderDQueryDistribution',
    InputType: 'InputPaBuLackPartOrderD',
    APIUrl: PA_SCC_API_URL
  },
  // 缺件分配登记_缺件登记
  paBuLackPartOrderDMutationDistribution: {
    ServiceCode: 'paBuLackPartOrderDMutationDistribution',
    InputType: 'InputPaBuLackPartOrderDExt',
    APIUrl: PA_SCC_API_URL
  },
  // 缺件分配登记_历史分配查询
  paBuLackPartOrderQueryHisDistribution: {
    ServiceCode: 'paBuLackPartOrderQueryHisDistribution',
    InputType: 'InputPaBuLackPartOrderExt',
    APIUrl: PA_SCC_API_URL
  },
  // // 缺件外购登记_主表查询（已有）
  // paBuLackPartOrderQueryFindAll: {
  //   ServiceCode: 'paBuLackPartOrderQueryFindAll',
  //   InputType: 'InputPaBuLackPartOrderExt',
  //   APIUrl: PA_SCC_API_URL
  // },
  // 缺件外购登记_明细查询
  paBuLackPartOrderDQueryOutPurchase: {
    ServiceCode: 'paBuLackPartOrderDQueryOutPurchase',
    InputType: 'InputPaBuLackPartOrderD',
    APIUrl: PA_SCC_API_URL
  },
  // 缺件外购登记_缺件登记
  paBuLackPartOrderDMutationOutPurchase: {
    ServiceCode: 'paBuLackPartOrderDMutationOutPurchase',
    InputType: '[InputPaBuLackPartOrderD]',
    APIUrl: PA_SCC_API_URL
  },
  // 欠拨修改_查询
  paBuOemLackQueryFindAll: {
    ServiceCode: 'paBuOemLackQueryFindAll',
    InputType: 'InputPaBuOemLackExt',
    APIUrl: PA_ORC_API_URL
  },
  // 欠拨修改_记录查询
  paBuLackDeleteLogQueryFindAll: {
    ServiceCode: 'paBuLackDeleteLogQueryFindAll',
    InputType: 'InputPaBuLackDeleteLogExt',
    APIUrl: PA_ORC_API_URL
  },
  // 欠拨修改_保存
  paBuOemLackMutation: {
    ServiceCode: 'paBuOemLackMutation',
    InputType: 'InputPaBuOemLack',
    APIUrl: PA_ORC_API_URL
  }
}

// export default {
//   paApis
// }
