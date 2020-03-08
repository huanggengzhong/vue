/**
 * description: 整车API清单（服务编码，输入类型）
 * author: luojx
 * createdDate: 2019-07-22
 * logs：
 *  20190722 创建 luojx
 */
import config from '../../utils/config'

// 整车1请求URL
const ORG_ORC_API_URL = config.localUrl + '/ly/mp/busicen/orc/graphql.do'
// 整车3请求URL
const ORG_SCC_API_URL = config.localUrl + '/ly/mp/busicen/scc/graphql.do'
// 整车2请求URL
const ORG_SCS_API_URL = config.localUrl + '/ly/mp/busicen/scs/graphql.do'
// 资金查询URL
const ORG_FIC_API_URL = config.localUrl + '/ly/mp/busicen/fic/graphql.do'

const ORG_USC_API_URL = config.localUrl + '/ly/mp/busicen/usc/graphql.do'
const ORG_PRC_API_URL = config.localUrl + '/ly/mp/busicen/prc/graphql.do'
// ServiceCode：服务编码，InputType：输入类型，APIUrl：请求URL
export const veApis = {

  // =====基础数据=====
  // 经销商车型授权
  veDbVeOrgCarConfigMutationSave: { ServiceCode: 'veDbVeOrgCarConfigMutationSave', InputType: 'InputVeDbVeOrgCarConfigExt', APIUrl: ORG_ORC_API_URL },
  // 车型授权情况查询
  veDbVeOrgCarConfigQueryIsExist: { ServiceCode: 'veDbVeOrgCarConfigQueryIsExist', InputType: 'InputVeDbVeOrgCarConfigExt', APIUrl: ORG_ORC_API_URL },
  // 资金类型查询
  veDbPurcashTypeQueryFindAll: { ServiceCode: 'veDbPurcashTypeQueryFindAll', InputType: 'InputVeDbPurcashType', APIUrl: ORG_ORC_API_URL },
  // 资金类型查询
  veDbDlrBankQueryFindAll: { ServiceCode: 'veDbDlrBankQueryFindAll', InputType: 'InputVeDbPurcashType', APIUrl: ORG_ORC_API_URL },
  // 资金类型查询
  veDbDlrBankMutationSave: { ServiceCode: 'veDbDlrBankMutationSave', InputType: 'InputVeDbPurcashType', APIUrl: ORG_ORC_API_URL },

  // 物流时效设置查询
  veLogisticsTransportationTimelineSettingsQueryFindAll: { ServiceCode: 'veLogisticsTransportationTimelineSettingsQueryFindAll', InputType: 'InputVeDbPurcashType', APIUrl: ORG_ORC_API_URL },
  // 物流时效设置查询
  veLogisticsTransportationTimelineSettingsSave: { ServiceCode: 'veLogisticsTransportationTimelineSettingsSave', InputType: 'InputVeDbPurcashType', APIUrl: ORG_ORC_API_URL },
  // 资金类型保存
  veDbPurcashTypeMutationUpdate: { ServiceCode: 'veDbPurcashTypeMutationUpdate', InputType: 'InputVeDbPurcashType', APIUrl: ORG_ORC_API_URL },
  // 经销商车型查询
  orcVeDbOrgCarCofigQueryListForPage: { ServiceCode: 'orcVeDbOrgCarCofigQueryListForPage', InputType: 'InputOrcVeDbOrgCarCofig', APIUrl: ORG_ORC_API_URL },
  // 品牌资金类型查询
  veDbPurcashTypeBrandQueryFindAll: { ServiceCode: 'veDbPurcashTypeBrandQueryFindAll', InputType: 'InputVeDbPurcashTypeBrandExt', APIUrl: ORG_ORC_API_URL },
  // 品牌资金类型保存
  veDbPurcashTypeBrandMutationUpdate: { ServiceCode: 'veDbPurcashTypeBrandMutationUpdate', InputType: 'InputVeDbPurcashTypeBrand', APIUrl: ORG_ORC_API_URL },

  // 经销商资金类型查询
  veDbOrgPurcashTypeQueryFindAll: { ServiceCode: 'veDbOrgPurcashTypeQueryFindAll', InputType: 'InputVeDbOrgPurcashType', APIUrl: ORG_ORC_API_URL },
  // 经销商资金类型保存
  veDbOrgPurcashTypeMutationUpdate: { ServiceCode: 'veDbOrgPurcashTypeMutationUpdate', InputType: 'InputVeDbOrgPurcashType', APIUrl: ORG_ORC_API_URL },
  // 账户查询
  veDbDlrAccountQueryFindAll: { ServiceCode: 'veDbDlrAccountQueryFindAll', InputType: 'InputVeDbDlrAccount', APIUrl: ORG_FIC_API_URL },
  // 账户保存
  veDbDlrAccountMutationSave: { ServiceCode: 'veDbDlrAccountMutationSave', InputType: 'InputVeDbDlrAccount', APIUrl: ORG_FIC_API_URL },
  // 采购单类型查询
  veDbOrderTypeQueryFindAll: { ServiceCode: 'veDbOrderTypeQueryFindAll', InputType: 'InputVeDbOrderType', APIUrl: ORG_ORC_API_URL },
  // 采购单类型保存
  veDbOrderTypeMutationUpdate: { ServiceCode: 'veDbOrderTypeMutationUpdate', InputType: 'InputVeDbOrderType', APIUrl: ORG_ORC_API_URL },
  // 采购单类型品牌查询
  veDbOrderTypeBrandQueryFindAll: { ServiceCode: 'veDbOrderTypeBrandQueryFindAll', InputType: 'InputVeDbOrderTypeBrand', APIUrl: ORG_ORC_API_URL },
  // 采购单类型品牌保存
  veDbOrderTypeBrandMutationUpdate: { ServiceCode: 'veDbOrderTypeBrandMutationUpdate', InputType: '[InputVeDbOrderTypeBrandExt]', APIUrl: ORG_ORC_API_URL },
  // 采购单冻结金额查询
  veDbBaseseriesFreezeBailQueryFindAll: { ServiceCode: 'veDbBaseseriesFreezeBailQueryFindAll', InputType: 'InputVeDbBaseseriesFrbail', APIUrl: ORG_ORC_API_URL },
  // 采购单冻结金额保存
  veDbBaseseriesFreezeBailMutationSave: { ServiceCode: 'veDbBaseseriesFreezeBailMutationSave', InputType: '[InputVeDbBaseseriesFrbail]', APIUrl: ORG_ORC_API_URL },
  // 冻结金额经销商开关保存
  purOrderFreezeOnOffMutaionUpdate: { ServiceCode: 'purOrderFreezeOnOffMutaionUpdate', InputType: 'InputPurOrderFreeze', APIUrl: ORG_ORC_API_URL },
  // 冻结金额经销商开关保存新
  mdsSysInfoOnOffMutationSave: { ServiceCode: 'mdsSysInfoOnOffMutationSave', InputType: '[InputMdsSysInfoExt]', APIUrl: ORG_PRC_API_URL },

  // purOrderFreezeOnOffMutaionUpdate: { ServiceCode: 'purOrderFreezeOnOffMutaionUpdate', InputType: 'InputPurOrderFreeze', APIUrl: ORG_ORC_API_URL },
  // 用户车系查询
  veUserSeriesQueryFindAll: { ServiceCode: 'veUserSeriesQueryFindAll', InputType: 'InputVeUserSeries', APIUrl: ORG_ORC_API_URL },
  // 用户车系保存
  veUserSeriesMutationSave: { ServiceCode: 'veUserSeriesMutationSave', InputType: 'InputVeUserSeries', APIUrl: ORG_ORC_API_URL },

  // 用户小区域查询
  userAreaQueryByPage: { ServiceCode: 'mdmUserAreaQueryFindAll', InputType: 'InputMdmUserArea', APIUrl: ORG_USC_API_URL },
  // 用户小区域查询
  mdmEmployeeDlrQueryByPage: { ServiceCode: 'mdmEmployeeDlrQueryByPage', InputType: 'UserAreaQuery', APIUrl: ORG_USC_API_URL },
  // 用户小区域保存
  userAreaMutation: { ServiceCode: 'mdmUserAreaMutationSaveById', InputType: 'InputMdmUserArea', APIUrl: ORG_USC_API_URL },

  // 搬入地查询
  moveInAddressQueryFindAll: { ServiceCode: 'moveInAddressQueryFindAll', InputType: 'InputVeDbCarStockHouseCanUse', APIUrl: ORG_SCC_API_URL },
  // 搬入地保存
  veDbMoveInMutationSave: { ServiceCode: 'veDbMoveInMutationSave', InputType: 'InputVeDbCarStockHouse', APIUrl: ORG_SCC_API_URL },
  // 自动出货确认时机查询
  veDbCaroutTimeSetQueryFindAll: { ServiceCode: 'veDbCaroutTimeSetQueryFindAll', InputType: 'InputVeDbCaroutTimeSetExt', APIUrl: ORG_ORC_API_URL },
  // 自动出货确认机设置保存
  veDbCaroutTimeSetMutationSave: { ServiceCode: 'veDbCaroutTimeSetMutationSave', InputType: '[InputVeDbCaroutTimeSetExt]', APIUrl: ORG_ORC_API_URL },
  // 自动出货查询
  veDbCaroutConfigQueryFindAll: { ServiceCode: 'veDbCaroutConfigQueryFindAll', InputType: 'InputVeDbCaroutConfig', APIUrl: ORG_ORC_API_URL },
  // 自动出货保存
  veDbCaroutConfigMutationSave: { ServiceCode: 'veDbCaroutConfigMutationSave', InputType: '[InputVeDbCaroutConfig]', APIUrl: ORG_ORC_API_URL },
  // 自动出货优先标识查询
  veBuPurOrderDQueryFindAll: { ServiceCode: 'veBuPurOrderDQueryFindAll', InputType: 'InputVeBuPurOrderDExt', APIUrl: ORG_ORC_API_URL },
  // 自动出货优先标识保存
  veBuPurOrderDMutationSave: { ServiceCode: 'veBuPurOrderDMutationSave', InputType: 'InputVeBuPurOrderD', APIUrl: ORG_ORC_API_URL },
  // 替代车型查询
  veDbReplaceCarConfigQueryFindAll: { ServiceCode: 'veDbReplaceCarConfigQueryFindAll', InputType: 'InputVeDbReplaceCarConfig', APIUrl: ORG_ORC_API_URL },
  // 替代车型保存
  veDbReplaceCarConfigMutationSave: { ServiceCode: 'veDbReplaceCarConfigMutationSave', InputType: '[InputVeDbReplaceCarConfig]', APIUrl: ORG_ORC_API_URL },

  // VIN显示开关控制查询
  vinDisplaySwitchControlQuery: { ServiceCode: 'vinDisplaySwitchControlQuery', InputType: 'InputVeDbReplaceCarConfig', APIUrl: ORG_ORC_API_URL },
  // VIN显示开关保存
  vinDisplaySwitchControlSave: { ServiceCode: 'vinDisplaySwitchControlSave', InputType: '[InputVeDbReplaceCarConfig]', APIUrl: ORG_ORC_API_URL },

  // 交车时间限制设置查询
  vedeliveryTimeLimitSetQuery: { ServiceCode: 'vedeliveryTimeLimitSetQuery', InputType: 'InputVeDbReplaceCarConfig', APIUrl: ORG_ORC_API_URL },
  // 交车时间限制设置保存
  vedeliveryTimeLimitSetSave: { ServiceCode: 'vedeliveryTimeLimitSetSave', InputType: '[InputVeDbReplaceCarConfig]', APIUrl: ORG_ORC_API_URL },
  // 采购单类型品牌关系分配顺序模式查询 与 品牌资金类型查询 一样
  veDbOrderTypeBrandQueryFindAll2: { ServiceCode: 'veDbOrderTypeBrandQueryFindAll', InputType: 'InputVeDbOrderTypeBrand', APIUrl: ORG_ORC_API_URL },
  // 经销商车型优先分配设置查询
  veDbCarConfigPriQueryFindAll: { ServiceCode: 'veDbCarConfigPriQueryFindAll', InputType: 'InputVeDbCarConfigPriExt', APIUrl: ORG_ORC_API_URL },
  // 经销商车型优先分配设置保存
  veDbCarConfigPriMutationUpdate: { ServiceCode: 'veDbCarConfigPriMutationUpdate', InputType: 'InputVeDbCarConfigPri', APIUrl: ORG_ORC_API_URL },
  // 经销商可分配仓库设置查询
  veDbCarStockHouseCanUseQueyFindAll: { ServiceCode: 'veDbCarStockHouseCanUseQueyFindAll', InputType: 'InputVeDbCarStockHouseCanUse', APIUrl: ORG_SCC_API_URL },
  // 经销商可分配仓库设置保存
  veDbCarStockPriorityMutaionSave: { ServiceCode: 'veDbCarStockPriorityMutaionSave', InputType: 'InputVeDbCarStockPriority', APIUrl: ORG_SCC_API_URL },

  // 批次分配作废方式设置查询
  veDbBatcinvalidWayQuery: { ServiceCode: 'veDbBatcinvalidWayQuery', InputType: 'InputVeBuPurOrderD', APIUrl: ORG_ORC_API_URL },
  // 批次分配作废方式设置保存
  veDbBatcinvalidWaySave: { ServiceCode: 'veDbBatcinvalidWaySave', InputType: 'InputVeBuPurOrderD', APIUrl: ORG_ORC_API_URL },

  // 批次分配时机设置查询
  veDbBatchAssignTimeQueryFindAll: { ServiceCode: 'veDbBatchAssignTimeQueryFindAll', InputType: 'InputVeDbBatchAssignTimeExt', APIUrl: ORG_ORC_API_URL },
  // 批次分配时机设置保存
  veDbBatchAssignTimeMutation: { ServiceCode: 'veDbBatchAssignTimeMutation', InputType: '[InputVeDbBatchAssignTimeExt]', APIUrl: ORG_ORC_API_URL },
  // 批次分配车系设置查询
  veDbBatchBaseSeriesQueryFindAll: { ServiceCode: 'veDbBatchBaseSeriesQueryFindAll', InputType: 'InputVeDbBatchBaseSeriesExt', APIUrl: ORG_ORC_API_URL },
  // 批次分配车系设置保存
  batchBaseSeriesMutationSave: { ServiceCode: 'batchBaseSeriesMutationSave', InputType: '[InputMdmVeCarSeriesExt]', APIUrl: ORG_PRC_API_URL },
  // 批次分配原则设置查询
  veDbBatchAssignPrincipleQueryFindAll: { ServiceCode: 'veDbBatchAssignPrincipleQueryFindAll', InputType: 'InputVeDbBatchAssignPrincipleExt', APIUrl: ORG_ORC_API_URL },
  // 批次分配原则条件查询
  veDbBatchAssignPrincipleCondition: { ServiceCode: 'veDbBatchAssignPrincipleCondition', InputType: 'InputVeDbBatchAssignPrincipleExt', APIUrl: ORG_ORC_API_URL },
  mdsLookupValueQueryByPage: { ServiceCode: 'mdsLookupValueQueryByPage', InputType: 'InputMdsLookupValue', APIUrl: ORG_ORC_API_URL },
  // 批次分配原则优先顺序设置保存
  veDbBatchAssignPrincipleMutaionSave: { ServiceCode: 'veDbBatchAssignPrincipleMutaionSave', InputType: '[InputVeDbBatchassignPrinc]', APIUrl: ORG_ORC_API_URL },
  // 采购单确认时机设置查询
  veDbOrderConfirmQueryFindAll: { ServiceCode: 'veDbOrderConfirmQueryFindAll', InputType: 'InputVeDbOrderConfirm', APIUrl: ORG_ORC_API_URL },
  // 采购单确认时机设置保存
  veDbOrderConfirmMutationSave: { ServiceCode: 'veDbOrderConfirmMutationSave', InputType: 'InputVeDbOrderConfirm', APIUrl: ORG_ORC_API_URL },
  // 分配模式查询
  purcashModelQueryFIndAll: { ServiceCode: 'mdsLookupValueQueryByPage', InputType: 'InputMdsLookupValue', APIUrl: ORG_ORC_API_URL },
  // 车型分配模式设置查询
  veDbCarconfigDismodeQueryFindAll: { ServiceCode: 'veDbCarconfigDismodeQueryFindAll', InputType: 'InputVeDbCarconfigDismodeExt', APIUrl: ORG_ORC_API_URL },
  // 车型分配模式设置保存
  veDbCarconfigDismodeMutationSave: { ServiceCode: 'veDbCarconfigDismodeMutationSave', InputType: 'InputVeDbCarconfigDismodeExt', APIUrl: ORG_ORC_API_URL },
  // 采购单审核设置查询
  veDbBigPurOrderAduitQueryFindAll: { ServiceCode: 'veDbBigPurOrderAduitQueryFindAll', InputType: 'InputVeDbBigPurorderAduit', APIUrl: ORG_ORC_API_URL },
  // 采购单审核设置保存
  veDbBigPurOrderAduitMutationUpdate: { ServiceCode: 'veDbBigPurOrderAduitMutationUpdate', InputType: 'InputVeDbBigPurorderAduit', APIUrl: ORG_ORC_API_URL },
  // 经销商超期预警日期设置查询
  veExceedFateSetting: { ServiceCode: 'veExceedFateSettingQueryFindAll', InputType: 'InputVeDbCarExceedFateSettingExt', APIUrl: ORG_SCC_API_URL, SpecailCode: '1' },
  // 经销商超期预警日期设置保存
  veExceedFateSettingSave: { ServiceCode: 'veDbCarExceedFateSettingMutationSave', InputType: '[InputVeDbCarExceedFateSettingExt]', APIUrl: ORG_SCC_API_URL },
  // 储位信息查询
  veStockPlace: { ServiceCode: 'veDbCarStockPlaceQueryFindAll', InputType: 'InputVeDbCarStockPlaceExt', APIUrl: ORG_SCC_API_URL, SpecailCode: '1' },
  // 储位信息保存
  veStockPlaceSave: { ServiceCode: 'veDbCarStockPlaceMutationSave', InputType: '[InputVeDbCarStockPlaceExt]', APIUrl: ORG_SCC_API_URL },
  // 储位信息删除
  veStockPlaceDel: { ServiceCode: 'veDbCarStockPlaceMutationDelete', InputType: '[InputVeDbCarStockPlaceExt]', APIUrl: ORG_SCC_API_URL },
  // 储区信息查询
  veStockArea: { ServiceCode: 'veDbCarStockAreaQueryFindAll', InputType: 'InputVeDbCarStockAreaExt', APIUrl: ORG_SCC_API_URL, SpecailCode: '1' },
  // 储区信息保存
  veStockAreaSave: { ServiceCode: 'veDbCarStockAreaMutaionSave', InputType: '[InputVeDbCarStockAreaExt]', APIUrl: ORG_SCC_API_URL },
  // 储区信息删除
  veStockAreaDel: { ServiceCode: 'deleteCarStockArea', InputType: '[InputVeDbCarStockAreaExt]', APIUrl: ORG_SCC_API_URL },

  // =====滚动需求计划=====
  // 经销商滚动需求计划制定时机查询
  veMonthPlanQuery: { ServiceCode: 'veMonthPlanQuery', InputType: 'varMonthPlanQuery', APIUrl: ORG_ORC_API_URL },
  // 经销商滚动需求计划制定时机保存
  verMonthPlanSave: { ServiceCode: 'verMonthPlanSave', InputType: 'varMonthPlanSave', APIUrl: ORG_ORC_API_URL },
  // 滚动需求计划申请
  veBuMonthPlanQueryFindAll: { ServiceCode: 'veBuMonthPlanQueryFindAll', InputType: 'InputVeBuMonthPlan', APIUrl: ORG_ORC_API_URL },
  // 滚动需求计划申请提交
  veMonthPlanSubmit: { ServiceCode: 'veMonthPlanSubmit', InputType: 'varMonthPlanImport', APIUrl: ORG_ORC_API_URL },
  // 经销商滚动需求上传审核明细查询
  veMonthPlanDetailQuery: { ServiceCode: 'veMonthPlanDetailQuery', InputType: 'varMonthPlanDetailQuery', APIUrl: ORG_ORC_API_URL },
  // 经销商滚动需求上传审核查询
  veMonthPlan3Query: { ServiceCode: 'veMonthPlan3Query', InputType: 'varMonthPlanQuery', APIUrl: ORG_ORC_API_URL },
  // 滚动需求上传审核通过与驳回
  veMonthPlanAudit: { ServiceCode: 'veMonthPlanAudit', InputType: 'varMonthPlanAudit', APIUrl: ORG_ORC_API_URL },
  // 滚动需求误差率系数设置  暂无api   左边查询
  veErrorRateSetQuery: { ServiceCode: 'veErrorRateSetQuery', InputType: 'veErrorRateSetQuery', APIUrl: ORG_ORC_API_URL },
  // 滚动需求误差率系数设置  暂无api   左边保存
  veErrorRateSetMutationSave: { ServiceCode: 'veErrorRateSetMutationSave', InputType: 'veErrorRateSetMutationSave', APIUrl: ORG_ORC_API_URL },
  // 滚动需求误差率系数设置  暂无api   右边查询
  veErrorRateSettingQuery: { ServiceCode: 'veErrorRateSettingQuery', InputType: 'veErrorRateSettingQuery', APIUrl: ORG_ORC_API_URL },
  // 滚动需求误差率系数设置  暂无api   右边保存
  veErrorRateSettingMutationSave: { ServiceCode: 'veErrorRateSettingMutationSave', InputType: 'veErrorRateSettingMutationSave', APIUrl: ORG_ORC_API_URL },


 
  // =====采购模块=====
  // 采购单查询
  vePurOrderQuery: { ServiceCode: 'vePurOrderQuery', InputType: 'varPurOrderQuery', APIUrl: ORG_ORC_API_URL },
  // 已分配采购单查询
  vePurOrderAssignQuery: { ServiceCode: 'vePurOrderAssignQuery', InputType: 'varPurOrderQAssignQuery', APIUrl: ORG_ORC_API_URL },
  // 采购单出货确认方法
  vePurConfirmOut: { ServiceCode: 'vePurConfirmOut', InputType: 'varPurConfirmout', APIUrl: ORG_ORC_API_URL },
  // 采购单扣款资金类型变更查询
  vePurCashChangeQry: { ServiceCode: 'vePurCashChangeQry', InputType: 'varPurCashChangeQry', APIUrl: ORG_ORC_API_URL },
  // 采购单扣款资金类型变更保存
  vePurCashChangeUpdate: { ServiceCode: 'vePurCashChangeUpdate', InputType: 'varPurCashChangeQry', APIUrl: ORG_ORC_API_URL },
  // 扣款资金类型确认
  vePurCashConfirm: { ServiceCode: 'vePurCashConfirm', InputType: 'varPurCashConfirm', APIUrl: ORG_ORC_API_URL },
  // 采购单统计表查询
  vePurstaticQry: { ServiceCode: 'vePurstaticQry', InputType: 'varPurStaticQry', APIUrl: ORG_ORC_API_URL },
  // 已审核采购单查询
  vePurAuditQry: { ServiceCode: 'vePurAuditQry', InputType: 'varPurAuditQry', APIUrl: ORG_ORC_API_URL },
  // 采购单驳回方法
  veRejectOrder: { ServiceCode: 'veRejectOrder', InputType: 'varRejectOrder', APIUrl: ORG_ORC_API_URL },
  // 自动批量分配方法
  veAutoAssign: { ServiceCode: 'veAutoAssign', InputType: 'varAutoAssign', APIUrl: ORG_ORC_API_URL },
  // 配车方法
  veCarAssign: { ServiceCode: 'veCarAssign', InputType: 'varCarAssign', APIUrl: ORG_ORC_API_URL },
  // 分配模板下载
  // 文档无内容。。。
  // 导入分配
  veImportAssign: { ServiceCode: 'veImportAssign', InputType: 'varImportAssign', APIUrl: ORG_ORC_API_URL },
  // 执行批次分配方法
  veBattchAssign: { ServiceCode: 'veBattchAssign', InputType: 'varBattchAssign', APIUrl: ORG_ORC_API_URL },
  // 批次分配执行日志查询
  veBattchAssignLogQry: { ServiceCode: 'veBattchAssignLogQry', InputType: 'varBattchAssignLogQry', APIUrl: ORG_ORC_API_URL },
  // 置换方法
  veReplaceCar: { ServiceCode: 'veReplaceCar', InputType: 'varReplaceCar', APIUrl: ORG_ORC_API_URL },
  // 订单预测查询
  veOrderForecast: { ServiceCode: 'veOrderForecast', InputType: 'varOrderForecast', APIUrl: ORG_ORC_API_URL },
  // 理论库存查询
  veBaseCycleStockQry: { ServiceCode: 'veBaseCycleStockQry', InputType: 'varBaseCycleStock', APIUrl: ORG_ORC_API_URL },
  // 理论库存保存
  veBaseCycleStockSave: { ServiceCode: 'veBaseCycleStockSave', InputType: 'varBaseCycleStockSave', APIUrl: ORG_ORC_API_URL },
  // 配车解除方法
  veCarRelease: { ServiceCode: 'veCarRelease', InputType: 'varCarRelease', APIUrl: ORG_ORC_API_URL },
  // 自动出货确认执行
  veAutoConfirmOut: { ServiceCode: 'veAutoConfirmOut', InputType: 'varAutoConfirmOut', APIUrl: ORG_ORC_API_URL },
  // 自动出货确认日志查询
  veAutoConfirmOutLogQry: { ServiceCode: 'veAutoConfirmOutLogQry', InputType: 'varAutoConfirmOutLogQry', APIUrl: ORG_ORC_API_URL },
  // 合格证快递查询
  veCertificatQry: { ServiceCode: 'veCertificatQry', InputType: 'varCertificatQry', APIUrl: ORG_ORC_API_URL },
  // 合格证快递导入
  veCertificatImport: { ServiceCode: 'veCertificatImport', InputType: 'varCertificatImport', APIUrl: ORG_ORC_API_URL },
  // 采购需求查询
  vePurReqQry: { ServiceCode: 'vePurReqQry', InputType: 'varPurReqQry', APIUrl: ORG_ORC_API_URL },
  // 采购需求保存
  vePurReqSave: { ServiceCode: 'vePurReqSave', InputType: 'varPurReqSave', APIUrl: ORG_ORC_API_URL },
  // 采购需求删除
  vePurReqDel: { ServiceCode: 'vePurReqDel', InputType: 'varPurReqDel', APIUrl: ORG_ORC_API_URL },
  // 待验收采购单查询
  vePurInstockQry: { ServiceCode: 'vePurInstockQry', InputType: 'varPurInstockQry', APIUrl: ORG_ORC_API_URL },
  // 验收入库方法
  vePurInstockHouse: { ServiceCode: 'vePurInstockHouse', InputType: 'varPurInstockHouse', APIUrl: ORG_ORC_API_URL },
  // 未审核采购单查询
  vePurOrderUnconfirm: { ServiceCode: 'vePurOrderUnconfirm', InputType: 'varPurOrderUnconfirm', APIUrl: ORG_ORC_API_URL },
  // 一般采购单保存
  vePurOrderSave: { ServiceCode: 'vePurOrderSave', InputType: 'varPurOrderSave', APIUrl: ORG_ORC_API_URL },
  // 一般采购单确认
  vePurOrderConfirm: { ServiceCode: 'vePurOrderConfirm', InputType: 'varPurOrderConfirm', APIUrl: ORG_ORC_API_URL },
  // 主机厂库存统计
  veInStockCarStatic: { ServiceCode: 'veInStockCarStatic', InputType: 'varInStockCarStatic', APIUrl: ORG_ORC_API_URL },
  // 本月提车进度
  vePurSpeedStatic: { ServiceCode: 'vePurSpeedStatic', InputType: 'varPurSpeedStatic', APIUrl: ORG_ORC_API_URL },

  // =====库存管理=====
  // 库存统计查询
  veStockStaticQry: { ServiceCode: 'veStockStaticQry', InputType: 'varStockStaticQry', APIUrl: ORG_SCC_API_URL },
  // 仓库信息查询
  veDbCarStockHouseQueryFindAll: { ServiceCode: 'veDbCarStockHouseQueryFindAll', InputType: 'InputVeDbCarStockHouseCanUse', APIUrl: ORG_SCC_API_URL },
  // 仓库信息保存
  veStockHouseSave: { ServiceCode: 'veDbCarStockHouseMutationSave', InputType: 'InputVeDbCarStockHouse', APIUrl: ORG_SCC_API_URL },
  // 仓库信息删除
  veStockHouseDel: { ServiceCode: 'veDbCarStockHouseMutationDelete', InputType: 'InputVeDbCarStockHouse', APIUrl: ORG_SCC_API_URL },
  // 库存明细查询
  varStockStaticQry: { ServiceCode: 'varStockStaticQry', InputType: 'varStockStaticQry', APIUrl: ORG_SCC_API_URL },
  // 车辆限制查询
  varCarLimitQry: { ServiceCode: 'varCarLimitQry', InputType: 'carLimit', APIUrl: ORG_SCC_API_URL },
  // 车辆限制设置查询
  veCarLimit: { ServiceCode: 'veCarLimit', InputType: 'varCarLimitQry', APIUrl: ORG_SCC_API_URL },
  // 车辆限制设置保存
  varCarLimitSave: { ServiceCode: 'varCarLimitSave', InputType: 'varCarLimitSave', APIUrl: ORG_SCC_API_URL },

  // =====主机厂资金管理=====
  // 经销商资金查询
  veDrlAccountQry: { ServiceCode: 'veDrlAccountQry', InputType: 'varDrlAccountQry', APIUrl: ORG_FIC_API_URL },
  // 车辆报废设置
  veStockDiscardSave: { ServiceCode: 'veStockDiscardSave', InputType: 'varCarStockDiscardSave', APIUrl: ORG_SCC_API_URL },
  // 车辆报废审核
  veStockDiscardQry: { ServiceCode: 'veStockDiscardQry', InputType: 'varCarStockDiscard', APIUrl: ORG_SCC_API_URL },
  // 物流出库查询
  veOutStoreQry: { ServiceCode: 'veOutStoreQry', InputType: 'varOutStore', APIUrl: ORG_SCC_API_URL },
  // 物流出库信息导入
  veOutStoreImport: { ServiceCode: 'veOutStoreImport', InputType: 'varOutStoreImport', APIUrl: ORG_SCC_API_URL },
  // 物流出库信息删除
  veOutStoreDel: { ServiceCode: 'veOutStoreDel', InputType: 'varOutStore', APIUrl: ORG_SCC_API_URL },
  // 物流出库信息解析
  veOutStoreSave: { ServiceCode: 'veOutStoreSave', InputType: 'varOutStore', APIUrl: ORG_SCC_API_URL },
  // 物流入库查询
  veInStoreQry: { ServiceCode: 'veInStoreQry', InputType: 'varInstore', APIUrl: ORG_SCC_API_URL },
  // 物流入库信息导入、解析
  veInStoreImport: { ServiceCode: 'veInStoreImport', InputType: 'varInStoreImport', APIUrl: ORG_SCC_API_URL },
  // 物流入库信息删除
  veInStoreDel: { ServiceCode: 'veInStoreDel', InputType: 'varInstore', APIUrl: ORG_SCC_API_URL },
  // 资金记录查询
  veAccountQry: { ServiceCode: 'veAccountQry', InputType: 'varAccount', APIUrl: ORG_FIC_API_URL },
  // 资金记录驳回
  veAccountReject: { ServiceCode: 'veAccountReject', InputType: 'varAccount', APIUrl: ORG_FIC_API_URL },
  // 资金记录保存
  veAccountSave: { ServiceCode: 'veAccountSave', InputType: 'varAccount', APIUrl: ORG_FIC_API_URL },
  // 资金记录删除
  veAccountDel: { ServiceCode: 'veAccountDel', InputType: 'varAccount', APIUrl: ORG_FIC_API_URL },
  // 采购车辆运输操作保存
  vePurOrderVlStatus: { ServiceCode: 'vePurOrderVlStatus', InputType: 'vePurOrderVlStatus', APIUrl: ORG_ORC_API_URL },
  // 批次分配原则设置主表格查询
  veBatchAllocationQry: { ServiceCode: 'veDbBatchAssignPrincipleQueryFindAll', InputType: 'InputVeDbBatchAssignPrinciple', APIUrl: ORG_ORC_API_URL },
  // 批次分配原则优先顺序设置树表格查询
  veBatchAllocationQry1: { ServiceCode: 'mdsLookupValueQueryByPage', InputType: 'InputMdsLookupValue', APIUrl: ORG_PRC_API_URL },
  veBatchAllocationQry2: { ServiceCode: 'veDbBatchAssignPrincipleMutaionSave', InputType: 'InputVeDbBatchAssignPrinciple', APIUrl: ORG_ORC_API_URL },

  // 采购单作废
  veCancelOrder: { ServiceCode: 'veCancelOrder', InputType: 'varCancelOrder', APIUrl: ORG_ORC_API_URL },
  // 代办项目类型设置
  veTypesOfAgencyProjects: { ServiceCode: 'veTypesOfAgencyProjects', InputType: 'varCancelOrder', APIUrl: ORG_ORC_API_URL },
  // 查询代办服务信息列表
  VeDbCarAgentQueryFindAll: { ServiceCode: 'VeDbCarAgentQueryFindAll', InputType: 'InputVeDbCarAgentExt', APIUrl: ORG_ORC_API_URL },
  // 查询代办服务项目详情
  VeDbCarAgentItemQueryFindAll: { ServiceCode: 'VeDbCarAgentItemQueryFindAll', InputType: 'InputVeDbCarAgentItemExt', APIUrl: ORG_ORC_API_URL },
  // 设置代办项目类型
  veBuAgentProjectTypeMutationSave: { ServiceCode: 'veBuAgentProjectTypeMutationSave', InputType: 'InputVeBuAgentProjectTypeExt', APIUrl: ORG_ORC_API_URL },

  // 车辆销售设置
  veDbCarSalePriceQueryFindAll: { ServiceCode: 'veDbCarSalePriceQueryFindAll', InputType: 'InputVeDbCarSalePriceExt', APIUrl: ORG_PRC_API_URL },
  // 车辆销售设置
  carSellSetMock2: { ServiceCode: 'carSellSetMock2', InputType: 'varCancelOrder', APIUrl: ORG_ORC_API_URL },
  // 车辆销售设置
  carSellSetMock3: { ServiceCode: 'carSellSetMock3', InputType: 'varCancelOrder', APIUrl: ORG_ORC_API_URL },
  // 分配达成率扣减台数设置
  distribAchieApi1: { ServiceCode: 'distribAchieApi1', InputType: 'varCancelOrder', APIUrl: ORG_ORC_API_URL },
  // 分配达成率扣减台数设置
  distribAchieApi2: { ServiceCode: 'distribAchieApi2', InputType: 'varCancelOrder', APIUrl: ORG_ORC_API_URL },
  // 分配达成率扣减台数设置
  distribAchieApi3: { ServiceCode: 'distribAchieApi3', InputType: 'varCancelOrder', APIUrl: ORG_ORC_API_URL },
  // 结算开关设置
  settlementSwitchSet1: { ServiceCode: 'settlementSwitchSet1', InputType: 'varCancelOrder', APIUrl: ORG_ORC_API_URL },
  // 经销商结算开关查询
  veDbDlrCashSwitchQueryFindAll: { ServiceCode: 'veDbDlrCashSwitchQueryFindAll', InputType: 'InputVeDbDlrCashSwitchExt', APIUrl: ORG_ORC_API_URL },
  // 经销商结算开关保存
  veDbDlrCashSwitchMutationSave: { ServiceCode: 'veDbDlrCashSwitchMutationSave', InputType: '[InputVeDbDlrCashSwitchExt]', APIUrl: ORG_ORC_API_URL },
  // 结算开关设置
  settlementSwitchSet2: { ServiceCode: 'settlementSwitchSet2', InputType: 'varCancelOrder', APIUrl: ORG_ORC_API_URL },
  // 分配达成率扣减台数设置
  targetQuantityImport1: { ServiceCode: 'targetQuantityImport1', InputType: 'varCancelOrder', APIUrl: ORG_ORC_API_URL },
  // 分配达成率扣减台数设置
  targetQuantityImport2: { ServiceCode: 'targetQuantityImport2', InputType: 'varCancelOrder', APIUrl: ORG_ORC_API_URL },
  // 大客户政策类型维护
  majorCustoPolicyTypeMaint1: { ServiceCode: 'majorCustoPolicyTypeMaint1', InputType: 'varCancelOrder', APIUrl: ORG_ORC_API_URL },
  // 经销商销货退回
  dlrSalesReturn1: { ServiceCode: 'dlrSalesReturn1', InputType: 'varCancelOrder', APIUrl: ORG_ORC_API_URL },
  // 经销商销货退回
  dlrSalesReturn2: { ServiceCode: 'dlrSalesReturn2', InputType: 'varCancelOrder', APIUrl: ORG_ORC_API_URL },

  // 非直营二级网点设置查询
  veDbPactCompanyQueryFindAll: { ServiceCode: 'veDbPactCompanyQueryFindAll', InputType: 'InputVeDbPactCompanyExt', APIUrl: ORG_USC_API_URL },
  // 客户销退时间限制设置
  veSaleTimeLimitQry: { ServiceCode: 'veSaleTimeLimitQry', InputType: 'veSaleTimeLimitQry', APIUrl: ORG_ORC_API_URL },
  // 客户销退时间限制设置保存
  veSaleTimeLimitM: { ServiceCode: 'veSaleTimeLimitM', InputType: 'veSaleTimeLimitM', APIUrl: ORG_ORC_API_URL },

  // 非直营二级网点设置保存
  veDbPactCompanyMutationSave: { ServiceCode: 'veDbPactCompanyMutationSave', InputType: '[InputVeDbPactCompanyExt]', APIUrl: ORG_USC_API_URL },
  // 车辆产品查询
  mdmVeCarProductQueryListForPage: { ServiceCode: 'mdmVeCarProductQueryListForPage', InputType: 'InputMdmVeCarProduct', APIUrl: ORG_PRC_API_URL },
  // 发票面额与项目名称设置查询
  veReceiptnameSetting: { ServiceCode: 'veReceiptnameSetting', InputType: 'InpustReceiptnameSetting', APIUrl: ORG_ORC_API_URL },
  // 库存周转率基准车系权重系数设置
  veInventoryTRSetting: { ServiceCode: 'veInventoryTRSetting', InputType: 'InpustReceiptnameSetting', APIUrl: ORG_ORC_API_URL },
  // 经销商开关
  veDealerSwitchSetting: { ServiceCode: 'veDealerSwitchSetting', InputType: 'InpustReceiptnameSetting', APIUrl: ORG_ORC_API_URL },
  // 报备申请查询
  veApplicationForFiling: { ServiceCode: 'veApplicationForFiling', InputType: 'InpustReceiptnameSetting', APIUrl: ORG_ORC_API_URL },
  // 报备申请保存
  veApplicationForFilingSave: { ServiceCode: 'veApplicationForFilingSave', InputType: 'InpustReceiptnameSetting', APIUrl: ORG_ORC_API_URL },
  // 选装包查询
  veOptionalpackage: { ServiceCode: 'veOptionalpackage', InputType: 'veOptionalpackage', APIUrl: ORG_ORC_API_URL },
  // 报备查询
  veCustomerSellingBack: { ServiceCode: 'veCustomerSellingBack', InputType: 'InpustReceiptnameSetting', APIUrl: ORG_ORC_API_URL },
  // veInventoryTRSetting: { ServiceCode: 'veInventoryTRSetting', InputType: 'InpustReceiptnameSetting', APIUrl: ORG_ORC_API_URL },
  // 车辆产品查询
  car231231: { ServiceCode: 'car231231', InputType: 'car231231', APIUrl: ORG_ORC_API_URL },

  // 车辆产品查询
  // car231231: { ServiceCode: 'car231231', InputType: 'car231231', APIUrl: ORG_ORC_API_URL },

  // 不参与在线库存分配车型设置
  // veInventoryTRSetting: { ServiceCode: 'veInventoryTRSetting', InputType: 'InpustReceiptnameSetting', APIUrl: ORG_ORC_API_URL },

  // veInventoryTRSetting: { ServiceCode: 'veInventoryTRSetting', InputType: 'InpustReceiptnameSetting', APIUrl: ORG_ORC_API_URL },
  // 不参与在线库存分配车型设置
  // 调拨量设置查询
  veAllocationRule: { ServiceCode: 'veAllocationRule', InputType: 'InpustReceiptnameSetting', APIUrl: ORG_ORC_API_URL },

  veNoOnlineStockCarTypeSetting: { ServiceCode: 'veNoOnlineStockCarTypeSetting', InputType: 'InputVeDbCarTypeSetting', APIUrl: ORG_ORC_API_URL },
  // 不参与在线库存分配车型设置保存
  veNoOnlineStockCarTypeSettingSave: { ServiceCode: 'veNoOnlineStockCarTypeSettingSave', InputType: 'InputVeDbCarTypeSettingSave', APIUrl: ORG_ORC_API_URL },
  // 经销商按店分配台数设置查询
  disNumQuery: { ServiceCode: 'disNumQuery', InputType: 'InputVeDbPactCompanyExt', APIUrl: ORG_ORC_API_URL },
  // 经销商按店分配台数设置保存
  disNumSave: { ServiceCode: 'disNumSave', InputType: 'InputVeDbPactCompanyExt', APIUrl: ORG_ORC_API_URL },
  // 经销商库存度运行时机设置查询
  dlrStockRuntimeSetQuery: { ServiceCode: 'dlrStockRuntimeSetQuery', InputType: 'InputVeDbPactCompanyExt', APIUrl: ORG_ORC_API_URL },
  // 经销商库存度运行时机设置保存
  dlrStockRuntimeSetSave: { ServiceCode: 'dlrStockRuntimeSetSave', InputType: 'InputVeDbPactCompanyExt', APIUrl: ORG_ORC_API_URL },
  // 参与批次分配采购单时间范围查询
  veDbBatchordScheduleQueryFindAll: { ServiceCode: 'veDbBatchordScheduleQueryFindAll', InputType: 'InputveDbBatchordScheduleExt', APIUrl: ORG_ORC_API_URL },
  // 参与批次分配采购单时间范围保存
  veDbBatchordScheduleMutationSave: { ServiceCode: 'veDbBatchordScheduleMutationSave', InputType: 'InputveDbBatchordScheduleExt', APIUrl: ORG_ORC_API_URL },
  // // 参与批次分配采购单时间范围查询
  veDbBatchordScheduleMutationDelete: { ServiceCode: 'veDbBatchordScheduleMutationDelete', InputType: 'InputveDbBatchordScheduleExt', APIUrl: ORG_ORC_API_URL },
  // 专营店库存度  查询
  veDlrInventoryQuery: { ServiceCode: 'veDlrInventoryQuery', InputType: 'veDlrInventoryQuery', APIUrl: ORG_ORC_API_URL },
  // // 专营店库存度 导入
  veDlrInventoryImport: { ServiceCode: 'veDlrInventoryImport', InputType: 'veDlrInventoryImport', APIUrl: ORG_ORC_API_URL },
  // 经销商目标量反馈时机查询
  veDbMtargettimeSetQueryFindAll: { ServiceCode: 'veDbMtargettimeSetQueryFindAll', InputType: 'InputVeDbMtargettimeSetExt', APIUrl: ORG_ORC_API_URL },
  // 经销商目标量反馈时机保存
  veDbMtargettimeSetMutationSave: { ServiceCode: 'veDbMtargettimeSetMutationSave', InputType: 'InputVeDbMtargettimeSetExt', APIUrl: ORG_ORC_API_URL },
  // 分配达成率目标导入查询
  veAssignGoalImportQry: { ServiceCode: 'veAssignGoalImportQry', InputType: 'InputVeDbAssignGoalImportQry', APIUrl: ORG_ORC_API_URL },
  // 分配达成率目标导入保存
  veAssignGoalImportSave: { ServiceCode: 'veAssignGoalImportSave', InputType: 'InputVeDbAssignGoalImportSave', APIUrl: ORG_ORC_API_URL },
  // 目标量类型维护-查询
  targetAmountTypeQry: { ServiceCode: 'targetAmountTypeQry', InputType: 'InputTargetAmountTypeQry', APIUrl: ORG_ORC_API_URL },
  // 目标量类型维护-保存
  targetAmountTypeSave: { ServiceCode: 'targetAmountTypeSave', InputType: 'InputTargetAmountTypeSave', APIUrl: ORG_ORC_API_URL },
  // 不参与车辆分配的时间段设置
  timePeriodSettingsInNoVehicleAssignment: { ServiceCode: 'timePeriodSettingsInNoVehicleAssignment', InputType: 'InputveDbBatchordScheduleExt', APIUrl: ORG_ORC_API_URL },
  // 目标量确认函查询
  targetQuantityConfirmationLetterQuery: { ServiceCode: 'targetQuantityConfirmationLetterQuery', InputType: 'InputveDbBatchordScheduleExt', APIUrl: ORG_ORC_API_URL },

  // 采购单查询（风险店采购单信息管控调用该查询）
  veBuPurOrderQueryFindAll: { ServiceCode: 'veBuPurOrderQueryFindAll', InputType: 'InputVeBuPurOrderExt', APIUrl: ORG_ORC_API_URL },
  // 风险店采购单信息管控
  veRiskDlrMessageCtrl: { ServiceCode: 'veBuPurOrderDMutationRiskFlagSave', InputType: 'InputVeBuPurOrderDExt', APIUrl: ORG_ORC_API_URL },
  // 经销商风险店查询
  veDbDlrRiskSetQueryFindAll: { ServiceCode: 'veDbDlrRiskSetQueryFindAll', InputType: 'InputVeDbDlrRiskSetExt', APIUrl: ORG_USC_API_URL },
  // 经销商风险店保存
  veDbDlrRiskSetMutationSave: { ServiceCode: 'veDbDlrRiskSetMutationSave', InputType: '[InputVeDbDlrRiskSetExt]', APIUrl: ORG_USC_API_URL },

  // tp设置查询
  veTpDlrManageSetQueryFindAll: { ServiceCode: 'veTpDlrManageSetQueryFindAll', InputType: 'InputveDbBatchordScheduleExt', APIUrl: ORG_ORC_API_URL },
  // 物流运输时限设置-查询
  logTransTimeLimitSetQry: { ServiceCode: 'logTransTimeLimitSetQry', InputType: 'InputLogTransTimeLimitSetQry', APIUrl: ORG_ORC_API_URL },
  // 物流运输时限设置-保存
  logTransTimeLimitSetSave: { ServiceCode: 'logTransTimeLimitSetSave', InputType: 'InputLogTransTimeLimitSetSave', APIUrl: ORG_ORC_API_URL },
  logCustomerReturnBackset: { ServiceCode: 'logCustomerReturnBackset', InputType: 'InputLogCustomerReturnBackset', APIUrl: ORG_ORC_API_URL },
  // 客户销退时间限制设置-保存
  logTimeLimitSetSave: { ServiceCode: 'logTransTimeLimitSetSave', InputType: 'InputLogTransTimeLimitSetSave', APIUrl: ORG_ORC_API_URL },
  // 地库设置查询
  basementSetQuery: { ServiceCode: 'basementSetQuery', InputType: 'InputVeDbPurcashType', APIUrl: ORG_ORC_API_URL },
  // 地库设置保存
  basementSetSave: { ServiceCode: 'basementSetSave', InputType: 'InputVeDbPurcashType', APIUrl: ORG_ORC_API_URL },
  carSellSetMock1: { ServiceCode: 'mdmVeCarSeriesQueryListForPage', InputType: 'InputVeDbPurcashType', APIUrl: ORG_ORC_API_URL },
  // 目标量审核查询
  targetQuantityAuditQuery: { ServiceCode: 'targetQuantityAuditQuery', InputType: 'targetQuantityAuditQuery', APIUrl: ORG_ORC_API_URL },
  // 目标量审核-审核
  targetQuantityAuditcheck: { ServiceCode: 'targetQuantityAuditcheck', InputType: 'targetQuantityAuditcheck', APIUrl: ORG_ORC_API_URL },
  // 目标量审核查询-驳回
  targetQuantityAuditReject: { ServiceCode: 'targetQuantityAuditReject', InputType: 'targetQuantityAuditReject', APIUrl: ORG_ORC_API_URL },

  // 销退入库
  vebackIntoStorage: { ServiceCode: 'vebackIntoStorage', InputType: 'InputMdmCcompCarseriesExt', APIUrl: ORG_ORC_API_URL },
  // 专营店销退财务确认 & 专营店销退业务审核 查询
  veBuPurReturnOrderDQueryFindAll: { ServiceCode: 'veBuPurReturnOrderDQueryFindAll', InputType: 'InputVeBuPurReturnOrderDExt', APIUrl: ORG_ORC_API_URL },
  // 专营店销退财务确认 保存
  veBuPurReturnOrderMutationConfirm: { ServiceCode: 'veBuPurReturnOrderMutationConfirm', InputType: 'InputVeBuPurReturnOrderExt', APIUrl: ORG_ORC_API_URL },
  // 专营店销退业务审核 保存  待确认
  veBuPurReturnMutationConfirm: { ServiceCode: 'veBuPurReturnMutationConfirm', InputType: 'InputVeBuPurReturnOrderExt', APIUrl: ORG_ORC_API_URL },
  // 采购销退状态查询
  purSalesStatusQuery: { ServiceCode: 'veBuPurReturnOrderDQueryFindAll', InputType: 'InputVeBuPurReturnOrderDExt', APIUrl: ORG_ORC_API_URL },
  // 车辆调拨查询
  veBuTransferOrderDQueryFindAll: { ServiceCode: 'veBuTransferOrderDQueryFindAll', InputType: 'InputVeBuTransferOrderDExt', APIUrl: ORG_ORC_API_URL },
  // 车辆调出确认--审核
  veBuTransferOrderDMutationOutConfirm: { ServiceCode: 'veBuTransferOrderDMutationOutConfirm', InputType: 'InputVeBuTransferOrderDExt', APIUrl: ORG_ORC_API_URL },
  // 车辆调拨单查询
  vecldbsqOutQueryForPage: { ServiceCode: 'vecldbsqOutQueryForPage', InputType: 'InputcldbsqOut', APIUrl: ORG_PRC_API_URL },
  // 车辆调拨申请-调出确认
  vecldbsqOutConfirm: { ServiceCode: 'vecldbsqOutConfirm', InputType: 'InputcldbsqOutConfirm', APIUrl: ORG_PRC_API_URL },
  // 车辆调拨申请查询
  vecldbsqOutApplyQueryForPage: { ServiceCode: 'vecldbsqOutApplyQueryForPage', InputType: 'InputcldbsqOutApply', APIUrl: ORG_PRC_API_URL },
  // 汽车销售退款 查询   待确认
  veCarSalesRefundFindAll: { ServiceCode: 'veCarSalesRefundFindAll', InputType: 'veCarSalesRefundFindAll', APIUrl: ORG_PRC_API_URL },
  // 汽车销售退款 退款  待确认
  veCarSalesRefund: { ServiceCode: 'veCarSalesRefund', InputType: 'veCarSalesRefund', APIUrl: ORG_PRC_API_URL },
  // 经销商车辆调拨审核查询
  vedlrTransferExamineQueryForPage: { ServiceCode: 'vedlrTransferExamineQueryForPage', InputType: 'InputDlrTransferExamine', APIUrl: ORG_PRC_API_URL },
  // 调拨明细查询
  vetransferDetailQueryForPage: { ServiceCode: 'vetransferDetailQueryForPage', InputType: 'InputTransferDetail', APIUrl: ORG_PRC_API_URL },
  // 经销商收款单查询   汽车销售收款
  veSaleOrdGatheringQry: { ServiceCode: 'veSaleOrdGatheringQry', InputType: 'varSaleOrdGatheringQry', APIUrl: ORG_PRC_API_URL },
  veDlrInvoiceM: { ServiceCode: 'veDlrInvoiceM', InputType: 'varDlrInvoiceM', APIUrl: ORG_PRC_API_URL },
  //
  veSaleOrdGatheringQry1: { ServiceCode: 'veSaleOrdGatheringQry1', InputType: 'varSaleOrdGatheringQry', APIUrl: ORG_PRC_API_URL },
  // 汽车销售开票
  veDlrInvoiceApplyQry: { ServiceCode: 'veDlrInvoiceApplyQry', InputType: 'varDlrInvoiceApplyQry', APIUrl: ORG_PRC_API_URL },
  // 经销商收款单保存
  veSaleOrdGatheringM: { ServiceCode: 'veSaleOrdGatheringM', InputType: 'veSaleOrdGatheringM', APIUrl: ORG_PRC_API_URL },
  // 大客户订单作废查询
  veBigClientOrderDQueryByPage: { ServiceCode: 'veBigClientOrderDQueryByPage', InputType: 'InputBigClientOrderD', APIUrl: ORG_PRC_API_URL },
  veDelorder: { ServiceCode: 'veDelorder', InputType: 'InputBigClientOD', APIUrl: ORG_PRC_API_URL },
  // 销售合同查询
  veContractQry: { ServiceCode: 'veContractQry', InputType: 'varContractQry', APIUrl: ORG_ORC_API_URL },
  //销售合同保存
  veSaleOrdMutation: { ServiceCode: 'veSaleOrdMutation', InputType: 'varSaleOrdMutation', APIUrl: ORG_ORC_API_URL },
  // 税控基础信息维护
  vemaintenanceInformation: { ServiceCode: 'vemaintenanceInformation', InputType: 'vemaintenanceInformation', APIUrl: ORG_ORC_API_URL },
  // 扣款时限设置查询
  veDeductTimeLimitQry: { ServiceCode: 'veDeductTimeLimitQry', InputType: 'vardeductTimeLimitQry', APIUrl: ORG_ORC_API_URL },
  // 扣款时限设置保存
  vedeductTimeLimitM: { ServiceCode: 'vedeductTimeLimitM', InputType: 'varDeductTimeLimitDel', APIUrl: ORG_ORC_API_URL },
  // // 大客户业务订单查询
  veBusinessConfirmation: { ServiceCode: 'veBusinessConfirmation', InputType: 'InputBusinessConfirmation', APIUrl: ORG_PRC_API_URL },
  // // 大客户业务订单确认mdsSysInfoOnOffMutationSave
  veConfirmOrder: { ServiceCode: 'veConfirmOrder', InputType: 'InputveConfirmOrder', APIUrl: ORG_PRC_API_URL },
  // 调拨量调整查询
  veBuTransferTargetApplyQueryFindAll: { ServiceCode: 'veBuTransferTargetApplyQueryFindAll', InputType: 'InputVeBuTransferTargetApplyExt', APIUrl: ORG_ORC_API_URL },
  // 调拨量调整申请
  veBuTransferTargetApplyMutationApply: { ServiceCode: 'veBuTransferTargetApplyMutationApply', InputType: 'InputVeBuTransferTargetApplyExt', APIUrl: ORG_ORC_API_URL },
  // 开关查询
  mdsSysInfoOnOffQueryFindAll: { ServiceCode: 'mdsSysInfoOnOffQueryFindAll', InputType: 'InputMdsSysInfoExt', APIUrl: ORG_PRC_API_URL },
  // 大客户订单取消
  veOrderCancel: { ServiceCode: 'veOrderCancel', InputType: 'InputBigClientOD', APIUrl: ORG_PRC_API_URL },
  // 销售交车
  // veCarDeliveryM:{apiConfig:'veCarDeliveryM',InputType: 'varCarDeliveryM', APIUrl: ORG_ORC_API_URL },
 

}

