/**
 * description: 售后服务API清单（服务编码，输入类型）
 * author: luojx
 * createdDate: 2019-07-22
 * logs：
 *  20190722 创建 luojx
 */
import config from '../../utils/config'

// 售后服务1请求URL
const SE_ASC_API_URL = config.localUrl + '/ly/mp/busicen/asc/graphql.do'

// 公共mds请求
const MDS_PRC_API_URL = config.localUrl + '/ly/mp/busicen/prc/graphql.do'
// 公共fic请求
const SE_FIC_API_URL = config.localUrl + '/ly/mp/busicen/fic/graphql.do'
// 公共usc请求
const SE_USC_API_URL = config.localUrl + '/ly/mp/busicen/usc/graphql.do'
// 公共acc请求
const SE_ACC_API_URL = config.localUrl + '/ly/mp/busicen/acc/graphql.do'
// 公共prc请求
const SE_PRC_API_URL = config.localUrl + '/ly/mp/busicen/prc/graphql.do'

// 车辆档案
const CAR_ASC_API_URL = config.localUrl + '/ly/mp/busicen/usc/graphql.do'
// 服务车系1请求URL
const SE_SERCARSER_API_URL =
  config.localUrl + '/ly/mp/busicen/prc/bff/common/pa/serviceCarType/'
// 服务车型1请求URL
const SE_SERCARTYPE_API_URL =
  config.localUrl + '/ly/mp/busicen/prc/bff/common/pa/serviceCarType/'

// 售后服务2请求URL
// const SE_PRC_API_URL = config.localUrl + '/ly/mp/busicen/prc/graphql.do'
export const seApis = {
  // 主凶件保存
  seMainCulpritMutationSave: {
    ServiceCode: 'seMainCulpritMutationSave',
    InputType: 'InputSeDbReturnReason',
    APIUrl: SE_ASC_API_URL
  },
  // 主凶件查询
  seMainCulpritFindAll: {
    ServiceCode: 'seMainCulpritFindAll',
    InputType: 'InputSeDbReturnReason',
    APIUrl: SE_ASC_API_URL
  },
  // 回复原因查询
  seDbReturnReasonQueryFindAll: {
    ServiceCode: 'seDbReturnReasonQueryFindAll',
    InputType: 'InputSeDbReturnReason',
    APIUrl: SE_ASC_API_URL
  },
  // 回复原因保存
  seDbReturnReasonMutationSave: {
    ServiceCode: 'seDbReturnReasonMutationSave',
    InputType: 'SeDbReturnReasonMutation',
    APIUrl: SE_ASC_API_URL
  },
  // 回复原因删除
  seDbReturnReasonDelete: {
    ServiceCode: 'seDbReturnReasonDelete',
    InputType: 'SeDbReturnReasonMutation',
    APIUrl: SE_ASC_API_URL
  },
  // 故障现象原因弹窗
  seBugCauseCodegetList: {
    ServiceCode: 'seBugCauseCodegetList',
    InputType: 'InputSeReserveCanOrder',
    APIUrl: SE_ASC_API_URL
  },
  // 故障现象原因码保存
  seDbCsCtMutationSave: {
    ServiceCode: 'seDbCsCtMutationSave',
    InputType: 'InputSeDbCsCt',
    APIUrl: SE_ASC_API_URL
  },
  // 故障现象原因码查询
  seDbCsCtQueryFindAll: {
    ServiceCode: 'seDbCsCtQueryFindAll',
    InputType: 'InputSeDbCsCt',
    APIUrl: SE_ASC_API_URL
  },
  // 预约容量保存
  seBuReserveCanMutationSave: {
    ServiceCode: 'seBuReserveCanMutationSave',
    InputType: '[InputSeBuReserveCan]',
    APIUrl: SE_ASC_API_URL
  },
  // 预约容量查询
  /* seBuReserveCanQueryFactQty: {
    ServiceCode: 'seBuReserveCanQueryFactQty',
    InputType: 'InputSeBuReserveCanOrder',
    APIUrl: SE_ASC_API_URL
  }, */
  // 定期保养参数导入
  seDbMaintainConfigMutationImport: {
    ServiceCode: 'seDbMaintainConfigMutationImport',
    InputType: 'InputSeDbMaintainConfig',
    APIUrl: SE_ASC_API_URL
  },
  // 定期保养参数删除
  seDbMaintainConfigMutationRemove: {
    ServiceCode: 'seDbMaintainConfigMutationRemove',
    InputType: 'InputSeDbMaintainConfig',
    APIUrl: SE_ASC_API_URL
  },
  // 定期保养参数保存
  seDbMaintainConfigMutationSave: {
    ServiceCode: 'seDbMaintainConfigMutationSave',
    InputType: 'InputSeDbMaintainConfig',
    APIUrl: SE_ASC_API_URL
  },
  // 定期保养参数查询
  seDbMaintainConfigQueryFindAll: {
    ServiceCode: 'seDbMaintainConfigQueryFindAll',
    InputType: 'InputSeDbMaintainConfig',
    APIUrl: SE_ASC_API_URL
  },
  // 查询值列表
  mdsLookupValueQueryByPage: {
    ServiceCode: 'mdsLookupValueQueryByPage',
    InputType: 'InputMdsLookupValue',
    APIUrl: MDS_PRC_API_URL
  },
  // 查询容量
  seReserveCanQuerySet: {
    ServiceCode: 'seReserveCanQuerySet',
    InputType: 'InputSeReserveCanOrder',
    APIUrl: SE_ASC_API_URL
  },
  // 预约追踪_查询预约单_右页签
  seBuReserveOrderQueryList: {
    ServiceCode: 'seBuReserveOrderQueryList',
    InputType: 'InputSeBuReserveOrderInfo',
    APIUrl: SE_ASC_API_URL
  },
  // 实时预约容量
  seBuReserveCanQueryFactQty: {
    ServiceCode: 'seBuReserveCanQueryFactQty',
    InputType: 'InputMap',
    APIUrl: SE_ASC_API_URL
  },
  // 预约单保存
  seBuReserveOrderMutationSave: {
    ServiceCode: 'seBuReserveOrderMutationSave',
    InputType1: 'InputSeBuReserveOrderMain',
    InputType2: '[InputSeBuReserveOrderOther]',
    InputType3: '[InputSeBuReserveOrderPart]',
    InputType4: '[InputSeBuReserveOrderWi]',
    APIUrl: SE_ASC_API_URL
  },
  // 预约作废
  seBuReserveOrderMutationCancel: {
    ServiceCode: 'seBuReserveOrderMutationCancel',
    InputType: 'InputSeBuReserveOrderMap',
    APIUrl: SE_ASC_API_URL
  },
  // 预约备件详细查询
  seReservePartQueryDetail: {
    ServiceCode: 'seReservePartQueryDetail',
    InputType: 'InputSeReservePartDetail',
    APIUrl: SE_ASC_API_URL
  },
  // 预约备件查询
  seReservePartQueryMain: {
    ServiceCode: 'seReservePartQueryMain',
    InputType: 'InputSeReservePartDetail',
    APIUrl: SE_ASC_API_URL
  },
  // 故障部位-保存
  seDbFaultPartMutationSave: {
    ServiceCode: 'seDbFaultPartMutationSave',
    InputType: 'InputSeDbFaultPart',
    APIUrl: SE_ASC_API_URL
  },
  // 故障部位-查询
  seDbFaultPartQueryFindAll: {
    ServiceCode: 'seDbFaultPartQueryFindAll',
    InputType: 'InputSeDbFaultPart',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工时类别-查询大类列表
  seDbOpratePlaceQueryFindAll: {
    ServiceCode: 'seDbOpratePlaceQueryFindAll',
    InputType: 'InputMapSeDbOpratePlace',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工时类别-查询小类列表
  seDbOpratePlaceQueryFindSmalll: {
    ServiceCode: 'seDbWiTypeQueryFindAll',
    InputType: 'InputSeDbWiType',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工时类别-保存大类
  seDbOpratePlaceMutationSaveBig: {
    ServiceCode: 'seDbOpratePlaceMutationSave',
    InputType: 'InputSeDbOpratePlace',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工时类别-保存小类
  seDbOpratePlaceMutationSaveSmall: {
    ServiceCode: 'seDbWiTypeMutationSave',
    InputType: 'InputSeDbWiType',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工时类别-删除大类
  seDbOpratePlaceMutationDeleteBig: {
    ServiceCode: 'seDbOpratePlaceMutationDelete',
    InputType: 'InputSeDbOpratePlace',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工时类别-删除小类
  seDbOpratePlaceMutationDeleteSmall: {
    ServiceCode: 'seDbWiTypeMutationDelete',
    InputType: 'InputSeDbWiType',
    APIUrl: SE_ASC_API_URL
  },
  // 工时备件关联设置-查询
  SeDbWiPartQueryFindAll: {
    ServiceCode: 'seDbWipartQueryFind',
    InputType: 'InputSeDbWiPartNew',
    APIUrl: SE_ASC_API_URL
  },
  // 工时备件关联设置-设置关联
  SeDbWiPartMutationSave: {
    ServiceCode: 'seDbWiPartMutationSave',
    InputType: 'InputSeDbWiPart',
    APIUrl: SE_ASC_API_URL
  },
  // 工时备件关联设置-取消关联
  SeDbWiPartMutationRemove: {
    ServiceCode: 'seDbWiPartMutationRemove',
    InputType: 'InputSeDbWiPart',
    APIUrl: SE_ASC_API_URL
  },
  // 精品销售结算_结算
  fiBuGatheringOrderMutationSave: {
    ServiceCode: 'fiBuGatheringOrderMutationSave',
    InputType1: 'InputFiBuGatheringOrder',
    InputType2: 'InputFiBuGatheringOrderD',
    APIUrl: SE_ASC_API_URL
  },
  // 精品销售结算_销售单列表查询
  seBuAcceOrderQueryFindAll: {
    ServiceCode: 'seBuAcceOrderQueryFindAll',
    InputType: 'InputFiBuGatheringOrder',
    APIUrl: SE_ASC_API_URL
  },
  // 精品销售结算_精品明细查询
  seBuAccePartQueryFindAll: {
    ServiceCode: 'seBuAccePartQueryFindAll',
    InputType: 'InputFiBuGatheringOrder',
    APIUrl: SE_ASC_API_URL
  },
  // 精品销售反结算_精品销售结算列表查询
  fiBuGatheringOrderQueryBalanceList: {
    ServiceCode: 'fiBuGatheringOrderQueryBalanceList',
    InputType: 'InputFiBuGatheringOrderExt',
    APIUrl: SE_FIC_API_URL
  },
  // 精品销售反结算_精品销售反结算列表查询
  fiBuGatheringOrderQueryCancelBalanceList: {
    ServiceCode: 'fiBuGatheringOrderQueryCancelBalanceList',
    InputType: 'InputFiBuGatheringOrderExt',
    APIUrl: SE_FIC_API_URL
  },
  // 精品销售反结算_反结算
  fiBuGatheringOrderMutationCancelBalance: {
    ServiceCode: 'fiBuGatheringOrderMutationCancelBalance',
    InputType: 'InputFiBuGatheringOrderExt',
    APIUrl: SE_FIC_API_URL
  },
  // 精品销售退料申请查询页-查询
  boutiqueSalesReQueryFindAll: {
    ServiceCode: 'boutiqueSalesReQueryFindAll',
    InputType: 'InputboutiqueSalesRe',
    APIUrl: SE_ASC_API_URL
  },
  // 精品销售退料申请查询页-作废
  boutiqueSalesReDelete: {
    ServiceCode: 'boutiqueSalesReDelete',
    InputType: 'InputboutiqueSalesRe',
    APIUrl: SE_ASC_API_URL
  },
  // 精品销售退料申请查询页-打印
  boutiqueSalesRePrintf: {
    ServiceCode: 'boutiqueSalesRePrintf',
    InputType: 'InputboutiqueSalesRe',
    APIUrl: SE_ASC_API_URL
  },
  // 备件分类对应清单-查询
  partSortQueryFindAll: {
    ServiceCode: 'partSortQueryFindAll',
    InputType: 'InputPartSort',
    APIUrl: SE_ASC_API_URL
  },
  // 备件分类对应清单-保存
  partSortDetailMutationSave: {
    ServiceCode: 'partSortDetailMutationSave',
    InputType: 'InputPartSort',
    APIUrl: SE_ASC_API_URL
  },
  // 备件分类对应清单-删除
  partSortDetailDelete: {
    ServiceCode: 'partSortDetailDelete',
    InputType: 'InputPartSort',
    APIUrl: SE_ASC_API_URL
  },
  // 备件分类对应清单-excel导入解析
  partResolve: {
    ServiceCode: 'partResolve',
    InputType: 'file',
    APIUrl: '/ly/mp/busicen/asc/excel/resolve.do'
  },
  // 员工权限设置-查询
  seDbFavoPowerQueryFindAll: {
    ServiceCode: 'seDbFavoPowerQueryFindAll',
    InputType: 'InputSeDbFavoPowerExt',
    APIUrl: SE_USC_API_URL
  },
  // 员工权限设置-保存
  seDbFavoPowerMutationSave: {
    ServiceCode: 'seDbFavoPowerMutationSave',
    InputType: 'InputSeDbFavoPower',
    APIUrl: CAR_ASC_API_URL
  },
  // 服务参数设置-查询
  SeDbParaSetQueryFindAll: {
    ServiceCode: 'seDbParaSetQueryFindAll',
    InputType: 'InputSeDbParaSet',
    APIUrl: SE_ASC_API_URL
  },
  // 服务参数设置-保存
  SeDbParaSetMutationSave: {
    ServiceCode: 'seDbParaSetMutationSave',
    InputType: 'InputSeDbParaSet',
    APIUrl: SE_ASC_API_URL
  },
  // 经销商级别-经销商级别时间段查询
  seDbNetLevleTimeQueryFindAll: {
    ServiceCode: 'seDbNetLevleTimeQueryFindAll',
    InputType: 'InputSeDbNetLevleTime',
    APIUrl: SE_ASC_API_URL
  },
  // 经销商级别-经销商级别时间段保存
  SeDbNetLevleTimeMutationSave: {
    ServiceCode: 'seDbNetLevleTimeMutationSave',
    InputType: 'InputSeDbNetLevleTime',
    APIUrl: SE_ASC_API_URL
  },
  // 经销商级别-经销商级别查询
  seDbNetLevleQueryFindAll: {
    ServiceCode: 'seDbNetLevleQueryFindAll',
    InputType: 'InputSeDbNetLevleNew',
    APIUrl: SE_ASC_API_URL
  },
  // 经销商级别-经销商级别保存
  SeDbNetLevleMutationSave: {
    ServiceCode: 'seDbNetLevleMutationSave',
    InputType: '[InputSeDbNetLevle]',
    APIUrl: SE_ASC_API_URL
  },
  // 经销商级别-导入经销商级别
  seDbNetLevleMutationImport: {
    ServiceCode: 'seDbNetLevleMutationImportEx',
    InputType: 'InputSeDbNetLevle',
    APIUrl: SE_ASC_API_URL
  },
  // 经销商级别-excel导入解析
  resolve: {
    ServiceCode: 'resolve',
    InputType: 'file',
    APIUrl: '/ly/mp/busicen/asc/excel/resolve.do'
  },
  // 级别对应工时系数-查询
  seDbMaintainWiCoefQueryFindAll: {
    ServiceCode: 'seDbMaintainWiCoefQueryFindAll',
    InputType: 'InputSeDbMaintainWiCoef',
    APIUrl: SE_ASC_API_URL
  },
  // 级别对应工时系数-保存
  seDbMaintainWiCoefMutationSave: {
    ServiceCode: 'seDbMaintainWiCoefMutationSave',
    InputType: 'InputSeDbMaintainWiCoef',
    APIUrl: SE_ASC_API_URL
  },
  // 级别对应工时系数-删除
  seDbMaintainWiCoefMutationDelete: {
    ServiceCode: 'seDbMaintainWiCoefMutationDelete',
    InputType: 'InputSeDbMaintainWiCoef',
    APIUrl: SE_ASC_API_URL
  },
  // 车辆信息-查询
  mdmCarQueryFindAll: {
    ServiceCode: 'mdmCarQueryFindAll',
    InputType: 'InputCarViewMap',
    APIUrl: CAR_ASC_API_URL
  },
  // 备件选择-查询
  paChoosePartQuery: {
    ServiceCode: 'paDbDlrPartListQueryList',
    InputType: 'InputExPaDbDlrPartList',
    APIUrl: SE_PRC_API_URL
  },
  // 工时选择-查询
  SeChooseWiQuery: {
    ServiceCode: 'seDbWiQueryFindAll',
    InputType: 'InputSeDbWiNew',
    APIUrl: SE_ASC_API_URL
  },
  // 工时选择-返回
  seChooseWiSelect: {
    ServiceCode: 'seBuSelectWiBackQueryFind',
    InputType: 'InputSeBuSelectWi',
    APIUrl: SE_ASC_API_URL
  },
  // 工时选择-查询大类
  seOperatePart: {
    ServiceCode: 'seDbOpratePlaceQueryFindAll',
    InputType: 'InputMapSeDbOpratePlace',
    APIUrl: SE_ASC_API_URL
  },
  // 工时选择-查询小类
  seRepairSmallKind: {
    ServiceCode: 'seDbWiTypeQueryFindAll',
    InputType: 'InputSeDbWiType',
    APIUrl: SE_ASC_API_URL
  },
  // 工时选择-查询来源
  seIsSystem: {
    ServiceCode: 'seIsSystem',
    InputType: 'seOperatePart',
    APIUrl: SE_ASC_API_URL
  },
  // 备件选择-备件类别查询
  PartTypeCodeQuery: {
    ServiceCode: 'PartTypeCodeQuery',
    InputType: 'InputPaChoosePart',
    APIUrl: SE_ASC_API_URL
  },
  // 备件选择-备件属性查询
  PartPropertyCodeQuery: {
    ServiceCode: 'PartPropertyCodeQuery',
    InputType: 'InputPaChoosePart',
    APIUrl: SE_ASC_API_URL
  },
  // 备件选择-备件车系查询
  PubSeriesCodeQuery: {
    ServiceCode: 'PubSeriesCodeQuery',
    InputType: 'InputPaChoosePart',
    APIUrl: SE_ASC_API_URL
  },
  // 备件选择-备件车型查询
  PubCarTypeCodeQuery: {
    ServiceCode: 'PubCarTypeCodeQuery',
    InputType: 'InputPaChoosePart',
    APIUrl: SE_ASC_API_URL
  },
  // 备件选择-选择备件弹窗替换件查询
  paChoosePartQueryReplace: {
    ServiceCode: 'paChoosePartQueryReplace',
    InputType: 'InputPaChoosePart',
    APIUrl: SE_ASC_API_URL
  },
  // 备件选择-选择备件弹窗导入查询
  paChoosePartImport: {
    ServiceCode: 'paChoosePartImport',
    InputType: 'InputPaChoosePart',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工单-打印
  seBuRepairOrderQueryPrint: {
    ServiceCode: 'seBuRepairOrderQueryPrint',
    InputType: 'InputSeBuRepairOrder',
    APIUrl: SE_ASC_API_URL
  },

  // 车系选择-初始化
  ChooseCarSeries001: {
    ServiceCode: 'ChooseCarSeries001',
    InputType: '',
    APIUrl: '/ly/mp/busicen/bff/prc/database/ChooseCarSeries/initChooseCarSeries.do'
  },
  // 车系选择-查询
  seChooseCarSeriesQueryFind: {
    ServiceCode: 'seChooseCarSeriesQueryFind',
    InputType: 'InputSeChooseCarSeries',
    APIUrl: SE_ASC_API_URL
  },
  // 车型选择-初始化
  ChooseCarType001: {
    ServiceCode: 'ChooseCarType001',
    InputType: '',
    APIUrl: '/ly/mp/busicen/bff/prc/database/ChooseCarType/initChooseCarType.do'
  },
  // 车型选择-查询
  // ChooseCarType002: { ServiceCode: 'ChooseCarType002', InputType: '', APIUrl: '/ly/mp/busicen/bff/prc/database/ChooseCarType/queryChooseCarType.do' },
  // 车型选择下拉框-查询
  seChooseCarTypeQueryFind: {
    ServiceCode: 'seChooseCarTypeQueryFind',
    InputType: 'InputSeChooseCarType',
    APIUrl: SE_ASC_API_URL
  },
  // 协议公司查询
  seDbPolicyCompanyQuery: {
    ServiceCode: 'seDbPolicyCompanyQueryFind',
    InputType: 'InputSeDbPolicyCompanyNew',
    APIUrl: SE_ASC_API_URL
  },
  // 协议公司维护保存
  seDbPolicyCompanySave: {
    ServiceCode: 'seDbPolicyCompanyMutationSave',
    InputType: 'InputSeDbPolicyCompany',
    APIUrl: SE_ASC_API_URL
  },
  // 协议公司启用禁用
  seDbPolicyCompanyEnable: {
    ServiceCode: 'seDbPolicyCompanyMutationEnable',
    InputType: 'InputSeDbPolicyCompany',
    APIUrl: SE_ASC_API_URL
  },
  // 协议公司车辆查询
  seDbPolicyCarQuery: {
    ServiceCode: 'seDbPolicyCarQueryFind',
    InputType: 'InputSeDbPolicyCarNew',
    APIUrl: SE_ASC_API_URL
  },
  // 协议车辆删除
  seDbPolicyCarMutationDelete: {
    ServiceCode: 'seDbPolicyCarMutationDelete',
    InputType: 'InputSeDbPolicyCar',
    APIUrl: SE_ASC_API_URL
  },
  // 协议车辆新增
  seDbPolicyCarMutationSave: {
    ServiceCode: 'seDbPolicyCarMutationSave',
    InputType: 'InputSeDbPolicyCar',
    APIUrl: SE_ASC_API_URL
  },
  // 服务车系维护-查询
  mdmVeCarSeriesQueryListForPage: {
    ServiceCode: 'mdmVeCarSeriesQueryListForPage',
    InputType: 'InputMdmVeCarSeries',
    APIUrl: MDS_PRC_API_URL
  },
  // 服务车型维护-查询
  mdmSmallCarTypeQueryListForPage: {
    ServiceCode: 'mdmSmallCarTypeQueryListForPage',
    InputType: 'InputMdmSmallCarType',
    APIUrl: MDS_PRC_API_URL
  },
  // 服务车型维护-保存
  mdmSmallCarTypeMutationSaveServiceCarType: {
    ServiceCode: 'mdmSmallCarTypeMutationSaveServiceCarType',
    InputType: 'InputMdmSmallCarType',
    APIUrl: MDS_PRC_API_URL
  },
  // 维修班组与技师查询-查询
  SeDbRepairGroupQuery: {
    ServiceCode: 'seDbRepairGroupQueryFindAll',
    InputType: 'InputSeDbRepairGroup',
    APIUrl: SE_ASC_API_URL
  },
  // 维修班组与技师查询-班组保存
  SeDbRepairGroupInsert: {
    ServiceCode: 'SeDbRepairGroupMutationSave',
    InputType: 'InputSeDbRepairGroup',
    APIUrl: SE_ASC_API_URL
  },
  // 维修班组与技师查询-班组修改（弃用）
  SeDbRepairGroupUpdate: {
    ServiceCode: 'SeDbRepairGroupUpdate',
    InputType: 'InputSeDbRepairGroup',
    APIUrl: SE_ASC_API_URL
  },
  // 维修班组与技师查询-班组删除
  SeDbRepairGroupDelete: {
    ServiceCode: 'SeDbRepairGroupDelete',
    InputType: 'InputSeDbRepairGroup',
    APIUrl: SE_ASC_API_URL
  },
  // 维修班组与技师查询-班组启停
  seDbRepairGroupEnable: {
    ServiceCode: 'seDbRepairGroupMutationEnable',
    InputType: 'InputSeDbRepairGroup',
    APIUrl: SE_ASC_API_URL
  },
  // 维修班组与技师查询-技师查询
  SeDbRepairGroupTechQuery: {
    ServiceCode: 'seDbWorkshopEmpQuryFind',
    InputType: 'InputSeDbWorkshopEmp',
    APIUrl: SE_ASC_API_URL
  },
  // 维修班组与技师查询-技师新增
  SeDbRepairGroupTechInsert: {
    ServiceCode: 'seDbWorkshopEmpMutationInsert',
    InputType: 'InputSeDbWorkshopEmp',
    APIUrl: SE_ASC_API_URL
  },
  // 维修班组与技师查询-技师删除
  SeDbRepairGroupTechDelete: {
    ServiceCode: 'seDbWorkshopEmpMutatinDelete',
    InputType: 'InputSeDbWorkshopEmp',
    APIUrl: SE_ASC_API_URL
  },
  // 客户车辆查询-查询
  seCommonQueryCarOwnerCustInfo: {
    ServiceCode: 'seCustAndCarQueryFind',
    InputType: 'InputCustAndCar',
    APIUrl: SE_ASC_API_URL
  },
  // 客户车辆查询-返回
  seCustAndCarQueryBack: {
    ServiceCode: 'seCustAndCarQueryBack',
    InputType: 'InputCustAndCarBack',
    APIUrl: SE_ASC_API_URL
  },
  // 保养参数设置查询
  seDbMaintainQueryFindAll: {
    ServiceCode: 'seDbMaintainQueryFindAll',
    InputType: 'InputSeDbMaintain',
    APIUrl: SE_ASC_API_URL
  },
  // 保养参数设置保存
  seDbMaintainMutationSave: {
    ServiceCode: 'seDbMaintainMutationSave',
    InputType: 'InputSeDbMaintain',
    APIUrl: SE_ASC_API_URL
  },
  // 保养参数设置删除
  seDbMaintainMutationDelete: {
    ServiceCode: 'seDbMaintainMutationDelete',
    InputType: 'InputSeDbMaintain',
    APIUrl: SE_ASC_API_URL
  },
  // 保养费用设置查询
  seDbMaintainLevelQueryFindAll: {
    ServiceCode: 'seDbMaintainLevelQueryFindAll',
    InputType: 'InputSeDbMaintainLevel',
    APIUrl: SE_ASC_API_URL
  },
  // 保养费用保存
  SeDbMaintainLevelMutationSave: {
    ServiceCode: 'SeDbMaintainLevelMutationSave',
    InputType: 'InputSeDbMaintainLevel',
    APIUrl: SE_ASC_API_URL
  },
  // 保养费用删除
  seDbMaintainMutationDeleteFee: {
    ServiceCode: 'SeDbMaintainLevelMutationDelete',
    InputType: 'InputSeDbMaintainLevel',
    APIUrl: SE_ASC_API_URL
  },
  // 保养参数设置导入
  seDbMaintainMutationImport: {
    ServiceCode: 'seDbMaintainMutationImport',
    InputType: '',
    APIUrl: SE_ASC_API_URL
  },
  // 预约追踪
  seBuReserveOrderQueryViewBoard: {
    ServiceCode: 'seBuReserveOrderQueryViewBoard',
    InputType: 'InputSeBuReserveOrderViewBoardExt',
    APIUrl: SE_ASC_API_URL
  },
  // 导入工单模板-模板明细
  seCommonQueryRepairModeDetail: {
    ServiceCode: 'seCommonQueryRepairModeDetail',
    InputType: 'InputSeDbRepairModeType',
    APIUrl: SE_ASC_API_URL
  },
  // 导入工单模板-导入前校验
  seBuRepairModeImportCheck: {
    ServiceCode: 'seBuRepairModeImportCheck',
    InputType: 'InputSeBuRepairOrder',
    APIUrl: SE_ASC_API_URL
  },
  // 导入工单模板-导入初始化
  paDbNetAddRateQuery: {
    ServiceCode: 'paDbNetAddRateQuery',
    InputType: 'InputPaDbNetAddRate',
    APIUrl: SE_ASC_API_URL
  },
  // 导入工单模板-模板导入-左
  seDbRepairModeQueryFindAll: {
    ServiceCode: 'seDbRepairModeQueryFindAll',
    InputType: 'InputSeDbRepairMode',
    APIUrl: SE_ASC_API_URL
  },
  // 导入工单模板-查询对应车辆是否做个过相同类型的免保
  seDbRepairQueryByVin: {
    ServiceCode: 'seDbRepairQueryByVin',
    InputType: 'InputSeBuRepairOrder',
    APIUrl: SE_ASC_API_URL
  },
  // 导入工单模板-模板列表
  seDbRepairModeQuery: {
    ServiceCode: 'seDbRepairModeQuery',
    InputType: 'InputSeBuRepairOrder',
    APIUrl: SE_ASC_API_URL
  },
  // 导入工单模板-适用车型数据获取
  AdapType: {
    ServiceCode: 'AdapType',
    InputType: '',
    APIUrl: SE_ASC_API_URL
  },
  // 经销商弹窗-经销商查询
  seCommonQueryChooseDlr: {
    ServiceCode: 'seCommonQueryChooseDlr',
    InputType: 'InputSeCommonChooseDlr',
    APIUrl: SE_ASC_API_URL
  },
  // 经销商弹窗-组织品牌查询
  OrgBrand: {
    ServiceCode: 'OrgBrand',
    InputType: '',
    APIUrl: SE_ASC_API_URL
  },
  // 经销商弹窗-营业状态
  BusStatus: {
    ServiceCode: 'BusStatus',
    InputType: '',
    APIUrl: SE_ASC_API_URL
  },
  // 经销商弹窗-经销商类型
  OrgType: {
    ServiceCode: 'OrgType',
    InputType: '',
    APIUrl: SE_ASC_API_URL
  },
  // 经销商弹窗-多选-经销商查询
  seComQueChoMuQuery: {
    ServiceCode: 'seComQueChoMuQuery',
    InputType: '',
    APIUrl: SE_ASC_API_URL
  },
  // 经销商弹窗-多选-门店类型获取
  seStoreType: {
    ServiceCode: 'seStoreType',
    InputType: '',
    APIUrl: SE_ASC_API_URL
  },
  // 维修施工单-查询-列表
  seBuRepairOrderQueryMain: {
    ServiceCode: 'seBuRepairOrderQueryMain',
    InputType: 'InputSeBuRepairOrderMain',
    APIUrl: SE_ASC_API_URL
  },
  // 查询服务代表列表
  seCommonQueryServiceSa: {
    ServiceCode: 'seCommonQueryServiceSa',
    InputType: 'InputSaInfo',
    APIUrl: SE_ASC_API_URL
  },
  // 公共方法，获取保客的车辆和客户信息
  seCommonQueryCarCustInfo: {
    ServiceCode: 'seCommonQueryCarCustInfo',
    InputType: 'InputSeCommonCarCustInfo',
    APIUrl: SE_ASC_API_URL
  },
  // 维修撤销派工
  seBuWorkOrderMutationCancel: {
    ServiceCode: 'seBuWorkOrderMutationCancel',
    InputType: 'InputSeBuWorkOrderMutationCancel',
    APIUrl: SE_ASC_API_URL
  },
  // 派工详情初始化
  seBuWorkOrderQueryFindAllRD: {
    ServiceCode: 'seBuWorkOrderQueryFindAllRD',
    InputType: 'InputSeBuRepairOrderExt',
    APIUrl: SE_ASC_API_URL
  },
  // 维修派工保存
  seBuWorkOrderMutationSave: {
    ServiceCode: 'seBuWorkOrderMutationSave',
    InputType: ' InputSeBuWorkOrderExt',
    InputType2: '[InputSeBuWorkOrderDExt]',
    APIUrl: SE_ASC_API_URL
  },
  // 付费性质和业务类别关系查询
  seDbPayBusinessQuery: {
    ServiceCode: 'seDbPayBusinessQueryFindAll',
    InputType: 'InputSeDbPayBusiness',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工单_预约导入
  // 维修工单_预约导入查询
  seBuRepairReserverQuery: {
    ServiceCode: 'seBuRepairReserverQuery',
    InputType: 'InputSeBuRepairOrder',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工单-选择预约单导入
  seBuRepairReserverImport: {
    ServiceCode: 'seBuRepairReserverImport',
    InputType: 'InputSeBuRepairOrder',
    APIUrl: SE_ASC_API_URL
  },
  // 维修复核详情初始化
  seBuRepairCheckQueryAll: {
    ServiceCode: 'seBuRepairCheckQueryAllRD',
    InputType: 'InputSeBuRepairOrderExt',
    APIUrl: SE_ASC_API_URL
  },
  // 撤销复核
  seBuRepairCheckCancel: {
    ServiceCode: 'seBuWorkOrderMutationRepairCheckCancel',
    InputType: 'InputSeBuWorkOrder',
    APIUrl: SE_ASC_API_URL
  },
  // 复核校验
  seBuWorkOrderQueryCheckVerifier: {
    ServiceCode: 'seBuWorkOrderQueryCheckVerifier',
    InputType: 'InputSeBuWorkOrder',
    APIUrl: SE_ASC_API_URL
  },
  // 维修复核保存
  seBuRepairCheckMutationSave: {
    ServiceCode: 'seBuRepairCheckMutationSave',
    InputType: 'InputSeBuRepairCheck',
    APIUrl: SE_ASC_API_URL
  },
  // 预约单明细查询
  seBuReserveOrderQueryInfo: {
    ServiceCode: 'seBuReserveOrderQueryInfo',
    InputType: 'InputSeBuReserveOrderExt',
    APIUrl: SE_ASC_API_URL
  },
  // 预约登记_查询该车辆是否预约或查询预约状态
  seBuReserveOrderQueryStatus: {
    ServiceCode: 'seBuReserveOrderQueryStatus',
    InputType: 'InputSeBuReserveOrderStatus',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工单-获取工时单价
  seCommonWiPrice: {
    ServiceCode: 'seCommonWiPrice',
    InputType: 'InputSeDbWiPrice',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工单-获取备件单价
  SeBuRepairOrderPartPriceRate: {
    ServiceCode: 'SeBuRepairOrderPartPriceRate',
    InputType: 'InputSeBuRepairOrder',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工单明细查询
  seBuRepairOrderQueryFindAll: {
    ServiceCode: 'seBuRepairOrderQueryFindAll',
    InputType: 'InputSeBuRepairOrder',
    APIUrl: SE_ASC_API_URL
  },

  // 其他费用-查询
  ChooseOtherFeeType002: {
    ServiceCode: 'seDbCostTypeQueryFindAll',
    InputType: 'InputSeDbCostType',
    APIUrl: SE_ASC_API_URL
  },
  // 其他费用-保存
  seDbCostTypeMutationSave: {
    ServiceCode: 'seDbCostTypeMutationSave',
    InputType: 'InputSeDbCostType',
    APIUrl: SE_ASC_API_URL
  },
  // 其他费用-状态
  ChooseOtherFeeTypeIsEnable: {
    ServiceCode: 'ChooseOtherFeeTypeIsEnable',
    InputType: '',
    APIUrl: SE_ASC_API_URL
  },
  // 其他费用-来源
  ChooseOtherFeeTypeIsSystem: {
    ServiceCode: 'ChooseOtherFeeTypeIsSystem',
    InputType: '',
    APIUrl: SE_ASC_API_URL
  },

  // 车辆档案数据图-车辆基本信息
  carViewCarBaseInfoQueryFindAll: {
    ServiceCode: 'carViewCarBaseInfoQueryFindAll',
    InputType: 'InputCarViewMap',
    APIUrl: SE_ASC_API_URL
  },
  // 车辆档案数据图-车辆视图-车辆交付&车联网&上牌信息
  carViewCarPayMsgMapQueryFindAll: {
    ServiceCode: 'carViewCarPayMsgMapQueryFindAll',
    InputType: 'InputCarViewMap',
    APIUrl: SE_ASC_API_URL
  },
  // 车辆档案数据图-车辆视图-保险信息&金融征信
  carViewInsureAndFinanceQueryFindAll: {
    ServiceCode: 'carViewInsureAndFinanceQueryFindAll',
    InputType: 'InputCarViewMap',
    APIUrl: SE_ASC_API_URL
  },
  // 车辆档案数据图-车辆基本信息
  carViewChooseMsgQueryFindAll: {
    ServiceCode: 'carViewChooseMsgQueryFindAll',
    InputType: 'InputCarViewMap',
    APIUrl: SE_ASC_API_URL
  },
  // 车辆档案数据图-人车关系
  carViewCarPersonMsgQueryFindAll: {
    ServiceCode: 'carViewCarPersonMsgQueryFindAll',
    InputType: 'InputCarViewMap',
    APIUrl: SE_ASC_API_URL
  },
  // 车辆档案数据图-维修历史记录
  carViewRepairRecordQueryFindAll: {
    ServiceCode: 'carViewRepairRecordQueryFindAll',
    InputType: 'InputCarViewMap',
    APIUrl: SE_ASC_API_URL
  },
  // 车辆档案数据图-历任车主
  carViewCarOwnerHistoryQueryFindAll: {
    ServiceCode: 'carViewCarOwnerHistoryQueryFindAll',
    InputType: 'InputCarViewMap',
    APIUrl: SE_ASC_API_URL
  },
  // 车辆档案数据图-充电桩信息
  carViewCharginpoleMsgQueryFindAll: {
    ServiceCode: 'carViewCharginpoleMsgQueryFindAll',
    InputType: 'InputCarViewMap',
    APIUrl: SE_ASC_API_URL
  },
  // 车辆档案数据图-充电桩信息
  carViewCarownerChangeLogQueryFindAll: {
    ServiceCode: 'carViewCarownerChangeLogQueryFindAll',
    InputType: 'InputCarViewMap',
    APIUrl: SE_ASC_API_URL
  },
  // 维修施工单-保存
  sebuRepairOrderMutationSave: {
    ServiceCode: 'sebuRepairOrderMutationSave',
    InputType: 'InputSebuRepairOrder',
    APIUrl: SE_ASC_API_URL
  },
  // 专营店客户信息-查询
  mdmDlrCustInfoQuery: {
    ServiceCode: 'mdmDlrCustInfoQuery',
    InputType: 'InputGetDlrCustListMap',
    APIUrl: CAR_ASC_API_URL
  },
  // 维修服务活动设置-主表设置-查询
  seDbActionQueryFindAll: {
    ServiceCode: 'seDbActionQueryFindAll',
    InputType: 'InputSeDbAction',
    APIUrl: CAR_ASC_API_URL
  },
  // 维修服务活动设置-主表设置-删除
  seDbActionMutationDelete: {
    ServiceCode: 'seDbActionMutationDelete',
    InputType: 'InputSeDbAction',
    APIUrl: CAR_ASC_API_URL
  },
  // 维修服务活动设置-主表设置-终止
  seDbActionMutationStop: {
    ServiceCode: 'seDbActionMutationStop',
    InputType: 'InputSeDbAction',
    APIUrl: CAR_ASC_API_URL
  },
  // 维修服务活动设置-活动设置保存
  seDbActionMutationSave: {
    ServiceCode: 'seDbActionMutationSave',
    InputType: 'InputSeDbAction',
    APIUrl: CAR_ASC_API_URL
  },
  // 维修服务活动设置-适用车型查询
  seDbActionCartypeQueryFindAll: {
    ServiceCode: 'seDbActionCartypeQueryFindAll',
    InputType: 'InputSeDbActionCartype',
    APIUrl: CAR_ASC_API_URL
  },
  // 维修服务活动设置-适用车型保存
  seDbActionCartypeMutationSave: {
    ServiceCode: 'seDbActionCartypeMutationSave',
    InputType: 'InputSeDbActionCartype',
    APIUrl: CAR_ASC_API_URL
  },
  // 维修服务活动设置-备件优惠-查询
  seDbActionPartQueryFindAll: {
    ServiceCode: 'seDbActionPartQueryFindAll',
    InputType: 'InputSeDbActionPart',
    APIUrl: CAR_ASC_API_URL
  },
  // 维修服务活动设置-备件优惠-保存
  seDbActionPartMutationSave: {
    ServiceCode: 'seDbActionPartMutationSave',
    InputType: 'InputSeDbActionPart',
    APIUrl: CAR_ASC_API_URL
  },
  // 维修服务活动设置-赠送-查询
  seDbActionPersentQueryFindAll: {
    ServiceCode: 'seDbActionPersentQueryFindAll',
    InputType: 'InputSeDbActionPersent',
    APIUrl: CAR_ASC_API_URL
  },
  // 维修服务活动设置-赠送-保存
  seDbActionPersentMutationSave: {
    ServiceCode: 'seDbActionPersentMutationSave',
    InputType: 'InputSeDbActionPersent',
    APIUrl: CAR_ASC_API_URL
  },
  // 维修服务活动设置-工时优惠-查询
  seDbActionWiQueryFindAll: {
    ServiceCode: 'seDbActionWiQueryFindAll',
    InputType: 'InputSeDbActionWi',
    APIUrl: CAR_ASC_API_URL
  },
  // 维修服务活动设置-工时优惠-保存
  seDbActionWiMutationSave: {
    ServiceCode: 'seDbActionWiMutationSave',
    InputType: 'InputSeDbActionWi',
    APIUrl: CAR_ASC_API_URL
  },
  //  零件分类设置-主表查询
  seDbPartGroupingQueryFind: {
    ServiceCode: 'seDbPartGroupingQueryFind',
    InputType: 'InputSeDbPartGrouping',
    APIUrl: CAR_ASC_API_URL
  },
  //  零件分类设置-保存
  seDbPartGroupingSave: {
    ServiceCode: 'seDbPartGroupingSave',
    InputType: 'InputSeDbPartGrouping',
    APIUrl: CAR_ASC_API_URL
  },
  //  零件分类设置-删除
  seDbPartGroupingDelet: {
    ServiceCode: 'seDbPartGroupingDelet',
    InputType: 'InputSeDbPartGrouping',
    APIUrl: CAR_ASC_API_URL
  }
}

// export default {
//   seApis
// }
// 施工单模板 by zjinhang
export const apiRepairOrderModel = {
  // 估价单模板查询
  seDbRepairModeQueryFindAll: {
    ServiceCode: 'seDbRepairModeQueryFindAll',
    InputType: 'InputSeDbRepairMode',
    APIUrl: SE_ASC_API_URL
  },
  // seDbRepairModeQuery: { ServiceCode: 'seDbRepairModeQuery', InputType: 'InputSeDbRepairMode', APIUrl: SE_ASC_API_URL },
  // 模板对应车型的关联查询
  seDbRepairModeCarTypeQuery: {
    ServiceCode: 'seDbRepairModeTypeQueryFindAll',
    InputType: 'InputSeDbRepairModeType',
    APIUrl: SE_ASC_API_URL
  },
  // 模板车型对应维修项目关联查询
  weDbRepairModeWiQuery: {
    ServiceCode: 'seDbRepairModeWiQueryFindAll',
    InputType: 'InputSeDbRepairModeWi',
    APIUrl: SE_ASC_API_URL
  },
  // 模板车型对应维修备件关联查询
  seDbRepairModePartQuery: {
    ServiceCode: 'seDbRepairModePartQueryFindAll',
    InputType: 'InputSeDbRepairModePart',
    APIUrl: SE_ASC_API_URL
  },
  // 估价单模板主信息保存
  seDbRepairModeSave: {
    ServiceCode: 'seDbRepairModeMutationSave',
    InputType: 'InputSeDbRepairMode',
    APIUrl: SE_ASC_API_URL
  },
  // 模板对应车型保存
  seDbRepairModeCarTypeSave: {
    ServiceCode: 'seDbRepairModeTypeMutationSave',
    InputType: 'InputSeDbRepairModeType',
    APIUrl: SE_ASC_API_URL
  },
  // 模板对应车型明细删除
  seDbRepairModeCarTypeDelete: {
    ServiceCode: 'seDbRepairModeTypeMutationDelete',
    InputType: 'InputSeDbRepairModeType',
    APIUrl: SE_ASC_API_URL
  },
  // 模板对应维修项目保存
  seDbRepairModeWiSave: {
    ServiceCode: 'seDbRepairModeWiMutationSave',
    InputType: 'InputSeDbRepairModeWi',
    APIUrl: SE_ASC_API_URL
  },
  // 模板对应维修备件保存
  seDbRepairModePartSave: {
    ServiceCode: 'seDbRepairModePartMutationSave',
    InputType: 'InputSeDbRepairModePart',
    APIUrl: SE_ASC_API_URL
  },
  // 模板对应维修项目删除
  seDbRepairModeWiDelete: {
    ServiceCode: 'seDbRepairModeWiMutationDelete',
    InputType: 'InputSeDbRepairModeWi',
    APIUrl: SE_ASC_API_URL
  },
  // 模板对应维修备件删除
  seDbRepairModePartDelete: {
    ServiceCode: 'seDbRepairModePartMutationDelete',
    InputType: 'InputSeDbRepairModePart',
    APIUrl: SE_ASC_API_URL
  },
  // 新增模板适用车型保存
  seDbRepairModeChooseSave: {
    ServiceCode: 'seDbRepairModeTypeMutationBatchSave',
    InputType: 'InputSeDbRepairModeType',
    APIUrl: SE_ASC_API_URL
  }
}

// 工时单价模板
export const apiSeDbWiPriceModel = {
  // 维修工时价格模板查询
  seDbWiPriceModelMQueryFindAll: {
    ServiceCode: 'seDbWiPriceModelMQueryFindAll',
    InputType: 'InputSeDbWiPriceModelM',
    APIUrl: SE_ASC_API_URL
  },
  // 模板对应业务类别和车系查询
  seDbWiPriceModelDQueryFindAll: {
    ServiceCode: 'seDbWiPriceModelDQueryFindAll',
    InputType: 'InputSeDbWiPriceModelD',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工时价格模板设置保存
  seDbWiPriceModelMMutationSave: {
    ServiceCode: 'seDbWiPriceModelMMutationSave',
    InputType: 'InputSeDbWiPriceModelM',
    APIUrl: SE_ASC_API_URL
  },
  // 工时价格模板明细信息保存
  seDbWiPriceModelDMutationSave: {
    ServiceCode: 'seDbWiPriceModelDMutationSave',
    InputType: 'InputSeDbWiPriceModelD',
    APIUrl: SE_ASC_API_URL
  },
  // 工时价格模板明细删除
  seDbWiPriceModelDMutationDelete: {
    ServiceCode: 'seDbWiPriceModelDMutationDelete',
    InputType: 'InputSeDbWiPriceModelD',
    APIUrl: SE_ASC_API_URL
  },
  // 工时价格模板与门店关系查询
  seDbWiPriceModelDlrQueryFindAll: {
    ServiceCode: 'seDbWiPriceModelDlrQueryFindAll',
    InputType: 'InputSeDbWiPriceModelDlrNew',
    APIUrl: SE_ASC_API_URL
  },
  // 工时价格模板与门店关系删除
  seDbWiPriceModelDlrMutationDelete: {
    ServiceCode: 'seDbWiPriceModelDlrMutationDelete',
    InputType: 'InputSeDbWiPriceModelDlr',
    APIUrl: SE_ASC_API_URL
  },
  // 工时价格模板与门店关系保存
  seDbWiPriceModelDlrMutationSave: {
    ServiceCode: 'seDbWiPriceModelDlrMutationSave',
    InputType: 'InputSeDbWiPriceModelDlr',
    APIUrl: SE_ASC_API_URL
  },
  // 工时价格模板与门店关系导入
  seDbWiPriceModelDlrImport: {
    ServiceCode: 'seDbWiPriceModelDlrImport',
    InputType: 'InputSeDbWiPriceModelDlr',
    APIUrl: '/ly/mp/busicen/asc/excel/seDbWiPriceModelDlrImport.do'
  }
}

// 维修结算申请
export const apiRepairBalanceApply = {
  // 结算单状态查询
  seBuRepairOrderQueryStatus: {
    ServiceCode: 'seBuRepairOrderQueryStatus',
    InputType: 'InputOrderStatus',
    APIUrl: SE_ASC_API_URL
  },
  // 制作结算申请单校验查询
  fiBuRepairGatheringQueryApplyRepairFin: {
    ServiceCode: 'fiBuRepairGatheringQueryApplyRepairFin',
    InputType: 'InputFiBuRepairGathering',
    APIUrl: SE_FIC_API_URL
  },
  // 制作结算申请单校验查询-更新
  fiBuRepairGatheringMutationApplyBeforPartQty: {
    ServiceCode: 'fiBuRepairGatheringMutationApplyBeforPartQty',
    InputType: 'InputFiBuRepairGathering',
    APIUrl: SE_FIC_API_URL
  },
  // 维修反结算
  seBuAntiRepairBalanceQuery: {
    ServiceCode: 'seBuAntiRepairBalanceQuery',
    InputType: 'InputSeBuAntiRepairBalance',
    APIUrl: SE_ASC_API_URL
  },
  // 维修反结算保存
  fiBuRepairGatheringMutationAntiSave: {
    ServiceCode: 'fiBuRepairGatheringMutationAntiSave',
    InputType: 'InputFiBuRepairGatheringAnti',
    APIUrl: SE_FIC_API_URL
  },
  // 查询结算申请
  seBuRepairBalanceQueryFind: {
    ServiceCode: 'seBuRepairBalanceQueryFind',
    InputType: 'InputSeBuRepairBalance',
    APIUrl: SE_ASC_API_URL
  },
  // 取消结算申请
  seBuRepairBalanceApplyCancel: {
    ServiceCode: 'seBuRepairBalanceApplyCancel',
    InputType: 'InputSeBuRepairBalanceApply',
    APIUrl: SE_ASC_API_URL
  },
  // 结算申请详细页面加载
  fiBuRepairGatheringQueryFindAllRD: {
    ServiceCode: 'fiBuRepairGatheringQueryFindAllRD',
    InputType: 'InputFiBuRepairGatheringExt',
    APIUrl: SE_FIC_API_URL
  },
  // 制作结算申请单校验
  seBuRepairBalanceApplyCheck: {
    ServiceCode: 'seBuRepairBalanceApplyCheck',
    InputType: 'InputSeBuRepairBalanceApply',
    APIUrl: SE_ASC_API_URL
  },
  // 提交结算申请
  fiBuRepairGatheringMutationApplySave: {
    ServiceCode: 'fiBuRepairGatheringMutationApplySave',
    InputType: 'InputFiBuRepairGatheringExt',
    APIUrl: SE_FIC_API_URL
  },
  // 打印结算单
  seBuRepairBalanceApplyPrint: {
    ServiceCode: 'seBuRepairBalanceApplyPrint',
    InputType: 'InputSeBuRepairBalanceApply',
    APIUrl: SE_ASC_API_URL
  }
}

// 维修结算 by liyk
export const apiSeBalance = {
  // 财务结算收款-查询
  seBuRepairBalanceQueryMain: {
    ServiceCode: 'seBuRepairBalanceQueryMain',
    InputType: 'InputRepairBalanceMain',
    APIUrl: SE_ASC_API_URL
  },
  // 财务结算收款-财务收款详情加载
  fiBuRepairGatheringQueryFindAllReceivablesRD: {
    ServiceCode: 'fiBuRepairGatheringQueryFindAllReceivablesRD',
    InputType: 'InputFiBuRepairGatheringExt',
    APIUrl: SE_FIC_API_URL
  },
  // 财务结算收款-保存
  seBuRepairBalanceSave: {
    ServiceCode: 'seBuRepairBalanceSave',
    InputType: 'InputSeBuRepairBalance',
    APIUrl: SE_ASC_API_URL
  },
  // 财务结算收款-打印结算单
  seBuRepairBalancePrint: {
    ServiceCode: 'seBuRepairBalancePrint',
    InputType: 'InputSeBuRepairBalance',
    APIUrl: SE_ASC_API_URL
  }
}

// 维修报表 by liyk
export const apiSeReport = {
  // 维修车辆档案-查询
  seRepairReportMaintainVehicleFindAll: {
    ServiceCode: 'seRepairReportMaintainVehicleFindAll',
    InputType: 'InputSeRepairReport',
    APIUrl: SE_ASC_API_URL
  },
  // 历史维修记录工单预览-查询
  seBuRepairHistoryQueryDetailFindAll: {
    ServiceCode: 'seBuRepairHistoryQueryDetailFindAll',
    InputType: 'InputSeBuRepairHistory',
    APIUrl: SE_ASC_API_URL
  },
  // 维修营业日报-查询
  seRepairReportQueryRepairDailyFindAll: {
    ServiceCode: 'seRepairReportQueryRepairDailyFindAll',
    InputType: 'InputSeRepairReport',
    APIUrl: SE_ASC_API_URL
  },
  // 派工结算明细-列表查询
  seRepairReportQueryListFindAll: {
    ServiceCode: 'seRepairReportQueryListFindAll',
    InputType: 'InputSeRepairReport',
    APIUrl: SE_ASC_API_URL
  },
  // 派工结算明细-查询
  seRepairReportQueryListDetail: {
    ServiceCode: 'seRepairReportQueryListDetail',
    InputType: 'InputSeRepairReport',
    APIUrl: SE_ASC_API_URL
  }
}

export const apiSeProcess = {
  // 领料单查询
  seMaterialListFindAll: {
    ServiceCode: 'seMaterialListFindAll',
    InputType: 'InputSeMaterialList',
    APIUrl: SE_ASC_API_URL
  },
  // 维修退料申请查询
  seBuReturnApplyOrderQueryFindList: {
    ServiceCode: 'seBuReturnApplyOrderQueryFindList',
    InputType: 'InputSeBuReturnApplyOrderExt',
    APIUrl: SE_ASC_API_URL
  },
  // 维修退料申请查询出库单
  seBuReturnApplyOrderQueryFindStock: {
    ServiceCode: 'seBuReturnApplyOrderQueryFindStock',
    InputType: 'InputSeBuReturnApplyOrderExt',
    APIUrl: SE_ASC_API_URL
  },
  // 维修退料申请查询出库单明细
  seBuReturnApplyOrderQueryFindStockD: {
    ServiceCode: 'seBuReturnApplyOrderQueryFindStockD',
    InputType: 'InputSeBuReturnApplyOrderExt',
    APIUrl: SE_ASC_API_URL
  },
  // 维修退料申请保存
  seBuRepairPartReturnSave: {
    ServiceCode: 'seBuRepairPartReturnSave',
    InputType: 'InputSeBuRepairPartReturn',
    APIUrl: SE_ASC_API_URL
  },
  // 维修退料申请作废
  seBuReturnApplyOrderMutationCancel: {
    ServiceCode: 'seBuReturnApplyOrderMutationCancel',
    InputType: 'InputSeBuReturnApplyPartSaveExt',
    APIUrl: SE_ASC_API_URL
  }
}

// 维修工时标准
export const apiSeDbWiQuery = {
  // 维修工时标准-查询
  seDbWiQueryFindAll: {
    ServiceCode: 'seDbWiQueryFindAll',
    InputType: 'InputSeDbWiNew',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工时标准-查询工时与车型关系
  seDbWiCartypeQueryFind: {
    ServiceCode: 'seDbWiCartypeQueryFind',
    InputType: 'InputSeDbWiCartype',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工时标准-查询连带工时
  seDbWiRelationQueryFind: {
    ServiceCode: 'seDbWiRelationQueryFind',
    InputType: 'InputSeDbWiRelationNew',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工时标准-保存
  seDbWiMutationSaveWi: {
    ServiceCode: 'seDbWiMutationSaveWi',
    InputType: 'InputSeDbWi',
    APIUrl: SE_ASC_API_URL
  },
  // 车型工时对应关系-保存
  seDbWiCarTypeMutationSave: {
    ServiceCode: 'seDbWiCarTypeMutationSave',
    InputType: '[InputSeDbWiCartype]',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工时标准-删除
  seDbWiMutationRemoveWi: {
    ServiceCode: 'seDbWiMutationRemoveWi',
    InputType: 'InputSeDbWi',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工时标准-导入
  seDbWiMutationImportWi: {
    ServiceCode: 'seDbWiMutationImportWi',
    InputType: 'InputSeDbWi',
    APIUrl: SE_ASC_API_URL
  },
  // 维修工时标准-导入连带工时
  seDbWiMutationImportWiRelation: {
    ServiceCode: 'seDbWiMutationImportWiRelation',
    InputType: 'InputSeDbWiRelation',
    APIUrl: SE_ASC_API_URL
  },
  // 连带工时设置-保存
  seDbWiRelationMutationSave: {
    ServiceCode: 'seDbWiRelationMutationSave',
    InputType: '[InputSeDbWiRelation]',
    APIUrl: SE_ASC_API_URL
  },
  // 车型工时对应关系删除
  seDbwiCarTypeMutationDelete: {
    ServiceCode: 'seDbwiCarTypeMutationDelete',
    InputType: 'InputSeDbWiCartype',
    APIUrl: SE_ASC_API_URL
  },
  // 连带工时设置-删除
  seDbWiRelationMutationDelete: {
    ServiceCode: 'seDbWiRelationMutationDelete',
    InputType: 'InputSeDbWiRelation',
    APIUrl: SE_ASC_API_URL
  }
}

// 综合查询维修情况
export const apiSeRepairUnionReportQuery = {
  // 维修综合查询
  SeRepairReportQueryRepairUnionReport: {
    ServiceCode: 'SeRepairReportQueryRepairUnionReport',
    InputType: 'InputSeRepairReport',
    APIUrl: SE_ASC_API_URL
  }
}

// 历史维修记录(公共)
export const apiBuRepairHistoryQuery = {
  // 维修综合查询
  seBuRepairHistoryQuery: {
    ServiceCode: 'seBuRepairHistoryQuery',
    InputType: 'InputSeBuRepairHistory',
    APIUrl: SE_ASC_API_URL
  }
}

// 服务车型维护
export const serviceCarType = {
  // 车型状态数据
  carState: {
    ServiceCode: 'carState',
    InputType: '',
    APIUrl: SE_ASC_API_URL
  },
  // 启动状态数据
  startupState: {
    ServiceCode: 'startupState',
    InputType: '',
    APIUrl: SE_ASC_API_URL
  },
  // 启动状态数据
  ServiceCarType002: {
    ServiceCode: 'ServiceCarType002',
    InputType: '',
    APIUrl: SE_ASC_API_URL
  }
}

// 经销商弹框、下拉框
export const seComQueChoDlrApi = {
  // 经销商查询
  mdmOrgdlrQueryByPage: {
    ServiceCode: 'mdmOrgdlrQueryByPage',
    InputType: 'InputExMdmOrgDlr',
    APIUrl: CAR_ASC_API_URL
  }
}
// 服务代表选择下拉框
export const seCommonQueryServiceSaApi = {
  // 经销商查询
  seCommonQueryServiceSa: {
    ServiceCode: 'seCommonQueryServiceSa',
    InputType: 'InputSaInfo',
    APIUrl: SE_ASC_API_URL
  }
}

// 派工结算明细
export const apiRepairReportQueryListDetail = {
  // 派工结算明细-查询(已改名)
  seRepairReportQueryList: {
    ServiceCode: 'seRepairReportQueryList',
    InputType: 'InputSeRepairReport',
    APIUrl: SE_ASC_API_URL
  }
}

// 值列表查询
export const lookupValueQuery = {
  // 值列表查询
  lookupValueQueryApi: {
    ServiceCode: 'mdsLookupValueQueryByPage',
    InputType: 'InputMdsLookupValue',
    APIUrl: MDS_PRC_API_URL
  }
}

// 召回专案
export const recallApi = {
  // 召回专案设定-查询
  seDbRecallCaseQueryListForPage: {
    ServiceCode: 'seDbRecallCaseQueryListForPage',
    InputType: 'InputSeDbRecallCaseExt',
    APIUrl: SE_ACC_API_URL
  },
  // 召回专案设定-发布-删除-停止
  seDbRecallCaseMutationSaveIsPublish: {
    ServiceCode: 'seDbRecallCasePublish',
    InputType: 'InputSeDbRecallCase',
    APIUrl: SE_ASC_API_URL
  },
  // 召回专案设定-保存
  seDbRecallCaseMutationSave: {
    ServiceCode: 'seDbRecallCaseMutationSave',
    InputType: 'InputSeDbRecallCase',
    APIUrl: SE_ASC_API_URL
  },
  // 召回专案VIN码查询
  seDbRecallCaseVinQueryListForPage: {
    ServiceCode: 'SeDbRecallCaseVinQuery',
    InputType: 'InputSeDbRecallCaseVin',
    APIUrl: SE_ASC_API_URL
  },
  // 召回专案执行情况查询
  seDbRecallCaseQueryExecuteDetail: {
    ServiceCode: 'seDbRecallCaseQueryExecuteDetail',
    InputType: 'InputSeDbRecallCaseExt',
    APIUrl: SE_ASC_API_URL
  },
  // 召回专案进度查询
  seDbRecallCaseQuerySchedule: {
    ServiceCode: 'seDbRecallCaseQuerySchedule',
    InputType: 'InputSeDbRecallCaseExt',
    APIUrl: SE_ASC_API_URL
  },

  // 召回专案查询-明细
  seDbRecallCaseQueryListDetail: {
    ServiceCode: 'seDbRecallCaseQueryListDetail',
    InputType: 'InputSeDbRecallCase',
    APIUrl: SE_ACC_API_URL
  },
  // 召回专案查询OEM-主表查询
  recallQueryOEM: {
    ServiceCode: 'recallQueryOEM',
    InputType: 'InputSeRecallQuery',
    APIUrl: SE_ASC_API_URL
  },
  // 召回专案车辆查询
  seDbRecallCaseVinQueryList: {
    ServiceCode: 'seDbRecallCaseVinQueryList',
    InputType: 'InputSeDbRecallCaseVinExt',
    APIUrl: SE_ASC_API_URL
  },
  // 召回专案任务分配-查询
  seDbRecallCaseQueryTastAllocation: {
    ServiceCode: 'seDbRecallCaseQueryTastAllocation',
    InputType: 'InputSeDbRecallCaseExt',
    APIUrl: SE_ACC_API_URL
  },
  // 召回专案分配责任人-查询
  chargePersonQuery: {
    ServiceCode: 'chargePersonQuery',
    InputType: 'InputChargePersonQuery',
    APIUrl: SE_ASC_API_URL
  },
  // 召回专案任务分配-保存
  seDbRecallCaseVinMutationSaveTastAllocation: {
    ServiceCode: 'seDbRecallCaseVinMutationSaveTastAllocation',
    InputType: 'InputSeDbRecallCaseVin',
    APIUrl: SE_ACC_API_URL
  },
  // 召回专案任务分配-导入
  recallTaskAssignImport: {
    ServiceCode: 'recallTaskAssignImport',
    InputType: 'file',
    APIUrl: '/ly/mp/busicen/asc/excel/resolve.do'
  },
  // 派工单选择查询
  seChooseRepairOrderQueryFind: {
    ServiceCode: 'seChooseRepairOrderQueryFind',
    InputType: 'InputSeChooseRepairOrder',
    APIUrl: SE_ASC_API_URL
  },
  // 选择备件弹窗查询
  seChoosePartListQueryFind: {
    ServiceCode: 'seChoosePartListQueryFind',
    InputType: 'InputSeChoosePartList',
    APIUrl: SE_ASC_API_URL
  }
}

// 批复内容个性设置
export const apiSeReply = {
  // 批复内容个性设置-查询
  replyContentsSetQuery: {
    ServiceCode: 'replyContentsSetQuery',
    InputType: 'InputSeReplyM',
    APIUrl: SE_ASC_API_URL
  },
  // 批复内容维护信息-保存
  replyContentsSetSave: {
    ServiceCode: 'replyContentsSetSave',
    InputType: 'InputSeReplyM',
    APIUrl: SE_ASC_API_URL
  }
}

// 精品套餐设置
export const apiSeDbAcce = {
  // 精品套餐设置-查询
  seDbAcceQueryFindAllPage: {
    ServiceCode: 'seDbAcceQueryFindAllPage',
    InputType: 'InputSeDbAcce',
    APIUrl: SE_ACC_API_URL
  },
  // 精品套餐设置-保存
  SeDbAcceMutationSave: {
    ServiceCode: 'SeDbAcceMutationSave',
    InputType: 'InputSeDbAcce',
    APIUrl: SE_ASC_API_URL
  },
  // 精品套餐设置_明细查询
  seDbAcceQueryDetailFindAll: {
    ServiceCode: 'seDbAcceQueryDetailFindAll',
    InputType: 'InputSeDbAcce',
    APIUrl: SE_ACC_API_URL
  },
  // 精品套餐设置_启用/停用
  seDbAcceMutationEnable: {
    ServiceCode: 'seDbAcceMutationEnable',
    InputType: 'InputSeDbAcce',
    APIUrl: SE_ASC_API_URL
  }
}

// 制作精品销售单
export const apiSeBuAcceOrder = {
  // 制作精品销售单-查询
  seBuAcceOrderQueryFindAll: {
    ServiceCode: 'seBuAcceOrderQueryFindAll',
    InputType: 'InputSeBuAcceOrderExt',
    APIUrl: SE_ASC_API_URL
  },
  // 制作精品销售单-查询明细
  seBuAccePartQueryFindAll: {
    ServiceCode: 'seBuAccePartQueryFindAll',
    InputType: 'InputSeBuAccePart',
    APIUrl: SE_ASC_API_URL
  },
  // 制作精品销售单_修改查询
  SeBuAccePartUpdateQuery: {
    ServiceCode: 'SeBuAccePartUpdateQuery',
    InputType: 'InputSeBuAccePart',
    APIUrl: SE_ASC_API_URL
  },
  // 制作精品销售单_保存
  seBuAcceOrderMutationSave: {
    ServiceCode: 'seBuAcceOrderMutationSave',
    InputType: 'InputSeBuAcceOrder',
    APIUrl: SE_ASC_API_URL
  }
}

// 保修基础 by dengqh
export const apiGuarantee = {
  // 发动机公告车型关系维护查询
  seDbEngineCarTypeQueryFindAll: {
    ServiceCode: 'seDbEngineCarTypeQueryFindAll',
    InputType: 'InputSeDbEngineCarType',
    APIUrl: SE_ASC_API_URL
  },
  // 发动机公告车型关系维护保存
  SeDbEngineCarTypeMutationSave: {
    ServiceCode: 'SeDbEngineCarTypeMutationSave',
    InputType: 'InputSeDbEngineCarType',
    APIUrl: SE_ASC_API_URL
  },
  // 发动机公告车型关系维护删除
  seDbEngineCarTypeMutationDelete: {
    ServiceCode: 'seDbEngineCarTypeMutationDelete',
    InputType: 'InputSeDbEngineCarType',
    APIUrl: SE_ASC_API_URL
  },
  //发动机公告车型关系维护导入
  SeDbEngineCartypeMutationImport: {
    ServiceCode: 'SeDbEngineCartypeMutationImport',
    InputType: 'InputSeDbEngineCarType',
    APIUrl: SE_ASC_API_URL
  },




}
// 保修基础 by kefr
export const apiMaintain = {
  // 新车准备标准维护查询
  seDbNewCarReadyQueryFind: {
    ServiceCode: 'seDbNewCarReadyQueryFind',
    InputType: 'InputSeDbNewCarReady',
    APIUrl: SE_ASC_API_URL
  },
  // 新车准备标准维护新增标准保存
  seDbNewCarReadyMutationSave: {
    ServiceCode: 'SeDbEngineCarTypeMutationSave',
    InputType: 'InputSeDbNewCarReady',
    APIUrl: SE_ASC_API_URL
  },
  //新车准备标准维护查询删除
  seDbNewCarReadyMutationDelete: {
    ServiceCode: 'seDbNewCarReadyMutationDelete',
    InputType: 'InputSeDbNewCarReady',
    APIUrl: SE_ASC_API_URL
  }
}

// 经销商售后扩展信息 by wbhuwy
export const apiMOrgDlr = {
  // 经销商售后扩展信息保存
  mdmOrgDlrExtendInfoMutationSave: {
    ServiceCode: 'mdmOrgDlrExtendInfoMutationSave',
    InputType: 'InputMdmOrgDlrExtendInfo',
    APIUrl: SE_USC_API_URL
  },
  // 查询
  mdmOrgDlrExtendInfoQueryList: {
    ServiceCode: 'mdmOrgDlrExtendInfoQueryList',
    InputType: 'InputExMdmOrgDlrExtendInfo',
    APIUrl: SE_USC_API_URL
  },
  // 查询服务系数
  mdmOrgDlrAssessCoefficientQueryList: {
    ServiceCode: 'mdmOrgDlrAssessCoefficientQueryList',
    InputType: 'InputMdmOrgDlrAssessCoefficient',
    APIUrl: SE_USC_API_URL
  }
}

// 保修基础 by luoqh
export const apiMaintenance = {
  // 保养维护__查询
  seDbEngCarTypeMaintaQueryFindAll: {
    ServiceCode: 'seDbEngCarTypeMaintaQueryFindAll',
    InputType: 'SeDbEngCarTypeMaintaQuery',
    APIUrl: SE_ASC_API_URL
  },
  //保养明细维护维__查询
  seDbEngCarTypeMaintaQueryInfoFindAll: {
    ServiceCode: 'seDbEngCarTypeMaintaQueryInfoFindAll',
    InputType: 'SeDbEngCarTypeMaintaQuery',
    APIUrl: SE_ASC_API_URL
  },
  //保养维护__保存
  SeDbEngCarTypeMaintaMutationSave: {
    ServiceCode: 'SeDbEngCarTypeMaintaMutationSave',
    InputType: 'SeDbEngCarTypeMaintaMutation',
    APIUrl: SE_ASC_API_URL
  },
  //保养维护明细__保存
  SeDbEngCarTypeMaintaMutationInfoSave: {
    ServiceCode: 'SeDbEngCarTypeMaintaMutationInfoSave',
    InputType: 'SeDbEngCarTypeMaintaMutation',
    APIUrl: SE_ASC_API_URL
  },

  //保养维护__删除
  SeDbEngCarTypeMaintaMutationDelete: {
    ServiceCode: 'SeDbEngCarTypeMaintaMutationDelete',
    InputType: 'SeDbEngCarTypeMaintaMutation',
    APIUrl: SE_ASC_API_URL
  },
  //保养维护明细__删除
  SeDbEngCarTypeMaintaMutationInfoDelete: {
    ServiceCode: 'SeDbEngCarTypeMaintaMutationInfoDelete',
    InputType: 'SeDbEngCarTypeMaintaMutation',
    APIUrl: SE_ASC_API_URL
  },


}
