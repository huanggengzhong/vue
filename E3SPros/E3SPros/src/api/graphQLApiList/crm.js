/**
* description: CRM API清单（服务编码，输入类型）
* author: 张轩
* createdDate: 2019-07-24
* logs：
*  20190724 创建 zxuan
*/

// 整车1请求URL
const CRM_CSC_API_URL = '/ly/mp/busicen/csc/graphql.do'
const CRM_ASC_API_URL = '/ly/mp/busicen/asc/graphql.do'
const CRM_USC_API_URL = '/ly/mp/busicen/usc/graphql.do'
// eslint-disable-next-line no-unused-vars
const CRM_CS_API_URL = '/ly/mp/busicen/cs/graphql.do'
const CRM_PRC_API_URL = '/ly/mp/busicen/prc/graphql.do'
// eslint-disable-next-line no-unused-vars
const CRM_CSS_API_URL = '/ly/mp/busicen/css/graphql.do'

// ServiceCode：服务编码，InputType：输入类型，APIUrl：请求URL
export const crmApis = {

  // DLR回访保存
  clueServerMutatioinDlrView: { ServiceCode: 'clueServerMutatioinDlrView', InputType: 'InputClueServer', APIUrl: CRM_ASC_API_URL },
  // DLR线索-导入
  clueServerMutationDlrImport: { ServiceCode: 'clueServerMutationDlrImport', InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  // 本组待办任务_线索分配_查询
  csBuClueServerInfoQueryGroupAssign: { ServiceCode: 'csBuClueServerInfoQueryGroupAssign', InputType: 'InputClueServer', APIUrl: CRM_ASC_API_URL },
  // 本组待办任务_线索培育_查询
  clueServerQueryGroupTask: { ServiceCode: 'clueServerQueryGroupTask', InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  // 城市线索池保存
  placeClueMutationGetBill: { ServiceCode: 'placeClueMutationGetBill', InputType: 'InputPlaceClue', APIUrl: CRM_CSC_API_URL },
  // 城市线索池查询、当日预约到店线索、DLR线索单-查询、本店待办线索_查询、本人当日待办线索_查询
  clueServerQueryDlrTask: { ServiceCode: 'clueServerQueryDlrTask', InputType: 'InputClueServer', APIUrl: CRM_ASC_API_URL },
  // 待清洗线索_查询
  clueServerQueryOemTask: { ServiceCode: 'clueServerQueryOemTask', InputType: 'InputClueServer', APIUrl: CRM_ASC_API_URL },
  // 店端新建线索、 店端新建线索-暂存
  clueServerCreateClueOrder: { ServiceCode: 'clueServerCreateClueOrder', InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  // 督导与经销商关系_查询
  dudaoDlrRefQueryFindAll: { ServiceCode: 'dudaoDlrRefQueryFindAll', InputType: 'InputDudaoDlrRef', APIUrl: CRM_ASC_API_URL },
  // 服务类别导入
  serverClassMutationImport: { ServiceCode: 'serverClassMutationImport', InputType: 'InputServerClass', APIUrl: CRM_CSC_API_URL },
  // 服务类别维护
  serverClassMutationUpdateAndSave: { ServiceCode: 'serverClassMutationUpdateAndSave', InputType: 'InputServerClass', APIUrl: CRM_CSC_API_URL },
  // 服务类别查询
  serverClassQueryFindAll: { ServiceCode: 'serverClassQueryFindAll', InputType: 'InputServerClass', APIUrl: CRM_CSC_API_URL },
  // 服务类别选择
  serverClassQueryCommChoose: { ServiceCode: 'serverClassQueryCommChoose', InputType: 'InputServerClass', APIUrl: CRM_CSC_API_URL },
  // 线索查重
  ClueServerQuerycheckRepeat: { ServiceCode: 'ClueServerQuerycheckRepeat', InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  // 线索分配-保存
  clueServerMutationDlrAssign: { ServiceCode: 'clueServerMutationDlrAssign', InputType: 'InputvClueServer', APIUrl: CRM_ASC_API_URL },
  // 线索跟进明细查询
  csBuClueReviewQueryFindAll: { ServiceCode: 'csBuClueReviewQueryFindAll', InputType: 'InputCsBuClueReviewQuery', APIUrl: CRM_ASC_API_URL },
  // 线索清洗_保存
  clueServerMutationClean: { ServiceCode: 'clueServerMutationClean', InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  // 线索审核_查询
  clueServerQueryDlrCheck: { ServiceCode: 'clueServerQueryDlrCheck', InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  // 线索审核_审批
  clueServerMutationDlrCheckSave: { ServiceCode: 'clueServerMutationDlrCheckSave', InputType: 'InputClueServer', APIUrl: CRM_ASC_API_URL },
  // 新建服务单、新建服务单-暂存
  createClueOrder: { ServiceCode: 'createClueOrder', InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  // 已办任务_线索查询
  csBuClueServerInfoQueryAlreadyTask: { ServiceCode: 'csBuClueServerInfoQueryAlreadyTask', InputType: 'InputClueServer', APIUrl: CRM_ASC_API_URL },
  // 总部线索查询
  clueServerQueryFromHeadquarters: { ServiceCode: 'clueServerQueryFromHeadquarters', InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  // 总部线索导入
  ClueServerQueryOEMExport: { ServiceCode: 'ClueServerQueryOEMExport', InputType: 'InputClueser', APIUrl: CRM_ASC_API_URL },
  // 总部线索详情
  ClueServerQueryOEMDetail: { ServiceCode: 'ClueServerQueryOEMDetail', InputType: 'InputClueServer', APIUrl: CRM_ASC_API_URL },
  // 投诉单处理保存
  csBuComplaintOrderMutationDealTS: { ServiceCode: 'csBuComplaintOrderMutationDealTS', InputType: 'InputCsComplainOrderEntity', APIUrl: CRM_CSC_API_URL },
  // 投诉单查询
  csBuComplainOrderQueryFindAll: { ServiceCode: 'csBuComplainOrderQueryFindAll', InputType: 'InputCsComplainOrderEntity', APIUrl: CRM_CSC_API_URL },
  // 投诉单申请协助查询
  csBuComplaintHelpQueryFindAll: { ServiceCode: 'csBuComplaintHelpQueryFindAll', InputType: 'InputCsBuComplaintHelpQueryMap', APIUrl: CRM_CSC_API_URL },
  // 督办记录
  csBuDubanQueryFindAll: { ServiceCode: 'csBuDubanQueryFindAll', InputType: 'InputCsBuDuban', APIUrl: CRM_CSC_API_URL },
  // 投诉结案延期申请查询
  csBuComplaintDelayQueryFindAll: { ServiceCode: 'csBuComplaintDelayQueryFindAll', InputType: 'InputCsBuComplaintDelayQueryMap', APIUrl: CRM_CSC_API_URL },
  // 投诉结案延期审核、投诉结案延期申请
  csBuComplaintDelayMutationSaveById: { ServiceCode: 'csBuComplaintDelayMutationSaveById', InputType: 'InputCsBuComplaintDelay', APIUrl: CRM_CSC_API_URL },
  // 投诉申请协助、投诉协助回复
  csBuComplaintHelpMutationSaveById: { ServiceCode: 'csBuComplaintHelpMutationSaveById', InputType: 'InputCsBuComplaintHelp', APIUrl: CRM_CSC_API_URL },
  // 新建投诉单提交
  csBuComplaintOrderMutationCommitTS: { ServiceCode: 'csBuComplaintOrderMutationCommitTS', InputType: 'InputCsComplainOrderEntity', APIUrl: CRM_CSC_API_URL },
  // 暂存投诉单
  csBuComplaintOrderMutationSaveTS: { ServiceCode: 'csBuComplaintOrderMutationSaveTS', InputType: 'InputCsComplainOrderEntity', APIUrl: CRM_CSC_API_URL },
  // 追加投诉
  addComplainCommit: { ServiceCode: 'addComplainCommit', InputType: 'InputCsComplainOrderEntity', APIUrl: CRM_CSC_API_URL },
  // 追加投诉暂存
  addComplainSave: { ServiceCode: 'addComplainSave', InputType: 'InputCsComplainOrderEntity', APIUrl: CRM_CSC_API_URL },
  // 保有客户导入
  importCustOwnerMutationSave: { ServiceCode: 'importCustOwnerMutationSave', InputType: 'InputImportCustOwnerQueryMap', APIUrl: CRM_USC_API_URL },
  // 保有客户导入查询
  importCustOwnerQueryFindAll: { ServiceCode: 'importCustOwnerQueryFindAll', InputType: 'InputImportCustOwnerQueryMap', APIUrl: CRM_USC_API_URL },
  // 车辆视图-保险信息&金融征信
  carViewInsureAndFinanceQueryFindAll: { ServiceCode: 'carViewInsureAndFinanceQueryFindAll', InputType: 'InputCarViewMap', APIUrl: CRM_USC_API_URL },
  // 车辆视图-车籍基本信息
  carViewCarBaseInfoQueryFindAll: { ServiceCode: 'carViewCarBaseInfoQueryFindAll', InputType: 'InputCarViewMap', APIUrl: CRM_USC_API_URL },
  // 车辆视图-车辆交付&车联网&上牌信息
  carViewCarPayMsgMapQueryFindAll: { ServiceCode: 'carViewCarPayMsgMapQueryFindAll', InputType: 'InputCarViewMap', APIUrl: CRM_USC_API_URL },
  // 车辆视图-车辆选装信息
  carViewChooseMsgQueryFindAll: { ServiceCode: 'carViewChooseMsgQueryFindAll', InputType: 'InputCarViewMap', APIUrl: CRM_USC_API_URL },
  // 车辆视图-车主变更记录
  carViewCarownerChangeLogQueryFindAll: { ServiceCode: 'carViewCarownerChangeLogQueryFindAll', InputType: 'InputCarViewMap', APIUrl: CRM_USC_API_URL },
  // 车辆视图-充电桩信息
  carViewCharginpoleMsgQueryFindAll: { ServiceCode: 'carViewCharginpoleMsgQueryFindAll', InputType: 'InputCarViewMap', APIUrl: CRM_USC_API_URL },
  // 车辆视图-历任车主
  carViewCarOwnerHistoryQueryFindAll: { ServiceCode: 'carViewCarOwnerHistoryQueryFindAll', InputType: 'InputCarViewMap', APIUrl: CRM_USC_API_URL },
  // 车辆视图-人车关系
  carViewCarPersonMsgQueryFindAll: { ServiceCode: 'carViewCarPersonMsgQueryFindAll', InputType: 'InputCarViewMap', APIUrl: CRM_USC_API_URL },
  // 车辆视图-人车关系-用户权益
  carViewCustomerQuanQueryFindAll: { ServiceCode: 'carViewCustomerQuanQueryFindAll', InputType: 'InputCarViewMap', APIUrl: CRM_USC_API_URL },
  // 车辆视图-维修历史记录
  carViewRepairRecordQueryFindAll: { ServiceCode: 'carViewRepairRecordQueryFindAll', InputType: 'InputCarViewMap', APIUrl: CRM_USC_API_URL },
  // 创建ONE-ID
  createdOneId: { ServiceCode: 'createdOneId', InputType: 'InputCearOneIdMap', APIUrl: CRM_USC_API_URL },
  // 核实途径查询
  mdmBaseVerifywayQueryFindAll: { ServiceCode: 'mdmBaseVerifywayQueryFindAll', InputType: 'InputMdmBaseVerifyway', APIUrl: CRM_USC_API_URL },
  // 客户级别定义查询
  custLevelSetQueryFindAll: { ServiceCode: 'custLevelSetQueryFindAll', InputType: 'InputCustLevelSetMap', APIUrl: CRM_USC_API_URL },
  // 客户级别定义维护
  custLevelSetMutationSave: { ServiceCode: 'custLevelSetMutationSave', InputType: 'InputCustLevelSetMap', APIUrl: CRM_USC_API_URL },
  // 客户属性查询
  mdmDbCustPropertyQueryFindAll: { ServiceCode: 'mdmDbCustPropertyQueryFindAll', InputType: 'InputMdmDbCustProperty', APIUrl: CRM_USC_API_URL },
  // 客户信息-保存车辆
  oneIdSaveCarMutationSave: { ServiceCode: 'oneIdSaveCarMutationSave', InputType: 'InputOneIdSaveCarMap', APIUrl: CRM_USC_API_URL },
  // 客户信息查询
  oneIdCustListQueryFindAll: { ServiceCode: 'oneIdCustListQueryFindAll', InputType: 'InputQueryCustList', APIUrl: CRM_USC_API_URL },
  // 客户信息-从ONEID更新本店客户信息
  updateDlrCustFromOemMutationSave: { ServiceCode: 'updateDlrCustFromOemMutationSave', InputType: 'InputUpdateDlrCustFromOem', APIUrl: CRM_USC_API_URL },
  // 从厂家车辆信息更新本店车辆信息
  updateDlrCarFromOemMutationSave: { ServiceCode: 'updateDlrCarFromOemMutationSave', InputType: 'InputUpdateDlrCarFromOemMap', APIUrl: CRM_USC_API_URL },
  // 客户信息-更换车主
  changeCarOwnerMutationSave: { ServiceCode: 'changeCarOwnerMutationSave', InputType: 'InputChangeCarOwnerDataInfo,InputChangeCarOwnerCustInfo,InputChangeCarOwnerCustLink,InputChangeCarOwnerCustCar', APIUrl: CRM_USC_API_URL },
  // 更新客户标签(画像)
  custImageMutationSave: { ServiceCode: 'custImageMutationSave', InputType: 'InputCustImageMap,InputCustImageFocuseCodeMap,InputCustImageInterestCodeMap', APIUrl: CRM_USC_API_URL },
  // 客户信息明细-车辆关系
  custViewCustCarListQueryFindAll: { ServiceCode: 'custViewCustCarListQueryFindAll', InputType: 'InputCustViewMap', APIUrl: CRM_USC_API_URL },
  // 客户信息明细-获客渠道&客户画像
  custViewCustChannelImageQueryFindAll: { ServiceCode: 'custViewCustChannelImageQueryFindAll', InputType: 'InputCustViewMap', APIUrl: CRM_USC_API_URL },
  // 客户信息明细-客户分级（忠诚度）
  custViewCustLevelQueryFindAll: { ServiceCode: 'custViewCustLevelQueryFindAll', InputType: 'InputCustViewMap', APIUrl: CRM_USC_API_URL },
  // 客户信息明细-联系信息、客户信息明细-基本信息
  custViewCustBaseInfoQuery: { ServiceCode: 'custViewCustBaseInfoQuery', InputType: 'InputCustViewMap', APIUrl: CRM_USC_API_URL },
  // 客户信息明细-联系信息
  custViewContactWayQueryFindAll:{ ServiceCode: 'custViewContactWayQueryFindAll', InputType: 'InputCustViewMap', APIUrl: CRM_USC_API_URL },
  // 客户信息明细-维护历史记录
  custViewCustChangeLogQueryFindAll: { ServiceCode: 'custViewCustChangeLogQueryFindAll', InputType: 'InputCustViewMap', APIUrl: CRM_USC_API_URL },
  // 客户信息明细-信用记录
  custViewCustCreditRecordQueryFindAll: { ServiceCode: 'custViewCustCreditRecordQueryFindAll', InputType: 'InputCustViewMap', APIUrl: CRM_USC_API_URL },
  // 客户信息明细-预约记录
  custViewCustBookingRecordQueryFindAll: { ServiceCode: 'custViewCustBookingRecordQueryFindAll', InputType: 'InputCustViewMap', APIUrl: CRM_USC_API_URL },
  // 客户信息-修改客户信息
  oneIdEditCustBaseInfoMutationSave: { ServiceCode: 'oneIdEditCustBaseInfoMutationSave', InputType: 'InputOneIdEditCustBaseInfoMap,InputOneIdCustBaseInfoInterestCodeListMap', APIUrl: CRM_USC_API_URL },
  // 客户信息-证件上传
  uploadCustCredNoMutationSave: { ServiceCode: 'uploadCustCredNoMutationSave', InputType: 'InputUploadCustCredNoMap', APIUrl: CRM_USC_API_URL },
  // 客户修改申请处理查询
  custEditAuditQueryFindAll: { ServiceCode: 'custEditAuditQueryFindAll', InputType: 'InputCustEditAuditQueryMap', APIUrl: CRM_USC_API_URL },
  // 客户修改申请审批
  custEditAuditMutationSave: { ServiceCode: 'custEditAuditMutationSave', InputType: 'InputCustEditAuditSaveMap', APIUrl: CRM_USC_API_URL },
  // 未确认客户信息一览表
  unConfirmCustQueryFindAll: { ServiceCode: 'unConfirmCustQueryFindAll', InputType: 'InputUnConfirmCustMap', APIUrl: CRM_USC_API_URL },
  // 派单责任人设置主表查询
  pvDbDutyPersonMQuery: { ServiceCode: 'pvDbDutyPersonMQuery', InputType: 'InputCsDbDutyPersonMMap', APIUrl: CRM_CSC_API_URL },
  // 厂家派单规则保存
  csDbDutyPersonMMutationSaveById: { ServiceCode: 'csDbDutyPersonMMutationSaveById', InputType: 'InputCsDbDutyPersonM', APIUrl: CRM_CSC_API_URL },
  // 流程节点信息查询
  csDbNodeQueryFindAll: { ServiceCode: 'csDbNodeQueryFindAll', InputType: 'InputCsDbNodeMap', APIUrl: CRM_CSC_API_URL },
  // 责任区查询
  csDbAccountQueryFindAll: { ServiceCode: 'csDbAccountQueryFindAll', InputType: 'InputCsDbAccountExt', APIUrl: CRM_CSC_API_URL },
  // 责任区分配
  csDbAccountPopedomMutationSaveById: { ServiceCode: 'csDbAccountPopedomMutationSaveById', InputType: 'InputCsDbAccountSave', APIUrl: CRM_CSC_API_URL },
  // 责任区取消分配
  cancelAccountFP: { ServiceCode: 'cancelAccountFP', InputType: 'InputCsDbAccountSave', APIUrl: CRM_CSC_API_URL },
  // 责任区省份查询
  csDbAccountProvinceQuery: { ServiceCode: 'csDbAccountProvinceQuery', InputType: 'InputCsDbAccountProvinceMap', APIUrl: CRM_CSC_API_URL },
  // 责任区保存
  csDbAccountMutationSaveById: { ServiceCode: 'csDbAccountMutationSaveById', InputType: 'InputCsDbAccount', APIUrl: CRM_CSC_API_URL },
  // 责任区专营店查询
  csDbAccountDlrQuery: { ServiceCode: 'csDbAccountDlrQuery', InputType: 'InputCsDbAccountDlrMap', APIUrl: CRM_CSC_API_URL },
  // 专营店派单规则分配专营店
  saveDutyPersonDlrFP: { ServiceCode: 'saveDutyPersonDlrFP', InputType: 'InputCsDutyPersonDSave', APIUrl: CRM_CSC_API_URL },
  // 专营店派单规则取消分配专营店
  cancelDutyPersonDlrFP: { ServiceCode: 'cancelDutyPersonDlrFP', InputType: 'InputCsDutyPersonDSave', APIUrl: CRM_CSC_API_URL },
  // 专营店派单规则专营店查询
  csDbDutyPersonDlrQuery: { ServiceCode: 'csDbDutyPersonDlrQuery', InputType: 'InputCsDbDutyPersonDlrMap', APIUrl: CRM_CSC_API_URL },
  // 获取流程处理记录
  csBuDealRecordQueryFindAll: { ServiceCode: 'csBuDealRecordQueryFindAll', InputType: 'InputCsBuDealRecordQueryMap', APIUrl: CRM_CSC_API_URL },
  // 获取单据回访记录
  clueServerQueryReviewRecord: { ServiceCode: 'clueServerQueryReviewRecord', InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  // 获取我的待办任务
  csBuMyTaskQueryFindAll: { ServiceCode: 'csBuMyTaskQueryFindAll', InputType: 'InputCsBuMyTaskQueryMap', APIUrl: CRM_CSC_API_URL },
  // 获取我的已办任务
  csBuMyTaskHisQueryFindAll: { ServiceCode: 'csBuMyTaskHisQueryFindAll', InputType: 'InputCsBuMyTaskHisQueryMap', APIUrl: CRM_CSC_API_URL },
  // 流程节点信息维护
  csDbNodeMutationSaveById: { ServiceCode: 'csDbNodeMutationSaveById', InputType: 'InputCsDbNode', APIUrl: CRM_CSC_API_URL },
  // 流程节点组信息查询
  csDbNodeGroupQueryFindAll: { ServiceCode: 'csDbNodeGroupQueryFindAll', InputType: 'InputCsDbNodeGroupMap', APIUrl: CRM_CSC_API_URL },
  // 流程节点组信息维护
  csDbNodeGroupMutationSaveById: { ServiceCode: 'csDbNodeGroupMutationSaveById', InputType: 'InputCsDbNodeGroup', APIUrl: CRM_CSC_API_URL },
  // 短信账号设置保存
  csBuMessChannelMutationSave: { ServiceCode: 'csBuMessChannelMutationSave', InputType: 'CsBuMessChannel', APIUrl: CRM_CSC_API_URL },
  // 邮件发送保存、邮件发送记录查询
  csBuEmailRuntimeQueryFindAll: { ServiceCode: 'csBuEmailRuntimeQueryFindAll', InputType: 'InputCsBuEmailRuntimeExt', APIUrl: CRM_CSC_API_URL },
  // 员工信息查询
  employeeQueryByPage: { ServiceCode: 'employeeQueryByPage', InputType: 'InputCsBuEmailRuntimeExt', APIUrl: CRM_USC_API_URL },
  // 值列表查询
  mdsLookupValueQueryByPage: { ServiceCode: 'mdsLookupValueQueryByPage', InputType: 'InputMdsLookupValue', APIUrl: CRM_PRC_API_URL },
  //渠道小类查询
  pcDbInfoChanDQueryFindAll: { ServiceCode: 'pcDbInfoChanDQueryFindAll', InputType: 'InputPcDbInfoChanDExt', APIUrl: CRM_CSC_API_URL },
  //渠道大类查询
  pcDbInfoChanMQueryFindAll: { ServiceCode: 'pcDbInfoChanMQueryFindAll', InputType: 'InputPcDbInfoChanM', APIUrl: CRM_CSC_API_URL },
  //渠道小类维护
  pcDbInfoChanDMutationSaveById: { ServiceCode: 'pcDbInfoChanDMutationSaveById', InputType: 'InputPcDbInfoChanD', APIUrl: CRM_CSC_API_URL },
  // xgz
  //线索服务单_查询
  csBuClueServerInfoQueryFindAll: { ServiceCode: 'csBuClueServerInfoQueryFindAll', InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  // 城市线索池_查询
  placeClueQueryCityPool: { ServiceCode: 'placeClueQueryCityPool', InputType: 'InputPlaceClue', APIUrl: CRM_CSC_API_URL },
  //车辆品牌_查询（这个下拉框是差查PI，并非值列表）
  mdmCarBrandQueryByPage: { ServiceCode: 'mdmCarBrandQueryByPage', InputType: 'InputMdmCarBrand', APIUrl: CRM_PRC_API_URL },
  // 督导与经销商关系_查询
  dudaoDlrRefQuery: { ServiceCode: 'dudaoDlrRefQuery', InputType: 'InputDudaoDlrRef', APIUrl: CRM_CSC_API_URL },
  //网点派单规则
  dlrDbDutyPersonMQuery: { ServiceCode: 'dlrDbDutyPersonMQuery', InputType: 'InputCsDbDutyPersonMMap', APIUrl: CRM_CSC_API_URL },
  // 投诉途径维护_保存这个是值列表保存
  mdsLookupValueMutationSave: { ServiceCode: 'mdsLookupValueMutationSave', InputType: 'InputMdsLookupValue', APIUrl: CRM_PRC_API_URL },
  // 线索查重
  clueServerQueryFromDlr: { ServiceCode: 'clueServerQueryFromDlr', InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  // 工作组查询
  workingGroupQueryByPage: { ServiceCode: 'workingGroupQueryByPage', InputType: 'InputWorkingGroup', APIUrl: CRM_CSC_API_URL },
  // 工作组保存
  workingGroupMutationUpdateById: { ServiceCode: 'workingGroupMutationUpdateById', InputType: 'InputWorkingGroup', APIUrl: CRM_CSC_API_URL },
  // 工作组组员查询
  workingGroupQueryUsers: { ServiceCode: 'workingGroupQueryUsers', InputType: 'InputWorkingGroup', APIUrl: CRM_CSC_API_URL },
  // 工作组组员维护
  workingGroupMutationUpdateUser: { ServiceCode: 'workingGroupMutationUpdateUser', InputType: 'InputWorkingGroup', APIUrl: CRM_CSC_API_URL },
  // 接触方式查询
  pcDbCantactWayQueryFindAll: { ServiceCode: 'pcDbCantactWayQueryFindAll', InputType: 'InputPcDbCantactWay', APIUrl: CRM_CSC_API_URL },
  // 接触方式维护
  pcDbCantactWayMutationSaveById: { ServiceCode: 'pcDbCantactWayMutationSaveById', InputType: 'InputPcDbCantactWay', APIUrl: CRM_CSC_API_URL },
  // 渠道大类维护
  pcDbInfoChanMMutationSaveById: { ServiceCode: 'pcDbInfoChanMMutationSaveById', InputType: 'InputPcDbInfoChanM', APIUrl: CRM_CSC_API_URL },
  // 战败失控原因查询
  pcDbFailReasonMQueryFindAll: { ServiceCode: 'pcDbFailReasonMQueryFindAll', InputType: 'InputPcDbFailReasonM', APIUrl: CRM_CSC_API_URL },
  // 战败失控原因维护
  pcDbFailReasonMMutationSaveById: { ServiceCode: 'pcDbFailReasonMMutationSaveById', InputType: 'InputPcDbFailReasonM', APIUrl: CRM_CSC_API_URL },
  //获取下一步处理查询
  getNextDutyPerson: { ServiceCode: 'getNextDutyPerson', InputType: 'InputGetNextDutyPersonMap', APIUrl: CRM_CSC_API_URL },
  //投诉单查询
  csBuComplaintOrderQueryFindAll: { ServiceCode: 'csBuComplaintOrderQueryFindAll', InputType: 'InputCsBuComplaintOrderQueryMap', APIUrl: CRM_CSC_API_URL },
  //我的草稿箱
  csGetMyDraftsQuery: { ServiceCode: 'csGetMyDraftsQuery', InputType: 'InputCsServerInfoQueryMap', APIUrl: CRM_CSC_API_URL },
  //意向车系=车系
  mdmVeCarSeriesQueryListForPage: { ServiceCode: 'mdmVeCarSeriesQueryListForPage', InputType: 'InputMdmVeCarSeries', APIUrl: CRM_PRC_API_URL },
  //意向车型
  mdmVeCarConfigQueryListForPage: { ServiceCode: 'mdmVeCarConfigQueryListForPage', InputType: 'InputMdmVeCarConfig', APIUrl: CRM_PRC_API_URL },
  //渠道来源选择
  sourceChannelInfoQueryChoose: { ServiceCode: 'sourceChannelInfoQueryChoose', InputType: 'InputSourceChannelInfo', APIUrl: CRM_CSC_API_URL },
  //新建线索
  clueServerMutationCreateClueOrder: { ServiceCode: 'clueServerMutationCreateClueOrder', InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  //经销商查询
  mdmOrgdlrQueryByPage: { ServiceCode: 'mdmOrgdlrQueryByPage', InputType: 'InputExMdmOrgDlr', APIUrl: CRM_USC_API_URL },
  //车系查询
  mdmVeBaseSeriesQueryListForPage: { ServiceCode: 'mdmVeBaseSeriesQueryListForPage', InputType: 'InputMdmVeBaseSeries', APIUrl: CRM_PRC_API_URL },
  //车辆归属地查询
  csDbLicenseAddrQueryFindAll: { ServiceCode: 'csDbLicenseAddrQueryFindAll', InputType: 'InputCsDbLicenseAddr', APIUrl: CRM_CSC_API_URL },
  //车辆归属地保存
  csDbLicenseAddrMutationSaveById: { ServiceCode: 'csDbLicenseAddrMutationSaveById', InputType: 'InputCsDbLicenseAddr', APIUrl: CRM_CSC_API_URL },
  //省份查询
  mdmOrgProvinceQueryFindAll: { ServiceCode: 'mdmOrgProvinceQueryFindAll', InputType: 'InputMdmOrgProvince', APIUrl: CRM_USC_API_URL },
  //竞品品牌查询
  mdmCompBrandQueryFindAll: { ServiceCode: 'mdmCompBrandQueryFindAll', InputType: 'InputMdmCompBrand', APIUrl: CRM_PRC_API_URL },
  //城市查询
  mdmOrgCityQueryFindAll: { ServiceCode: 'mdmOrgCityQueryFindAll', InputType: 'InputMdmOrgCity', APIUrl: CRM_USC_API_URL },
  //竞品品牌保存
  mdmCompBrandMutationSaveById: { ServiceCode: 'mdmCompBrandMutationSaveById', InputType: 'InputMdmCompBrand', APIUrl: CRM_PRC_API_URL },
  //竞品车系查询
  mdmCompCarSeriesQueryFindAll: { ServiceCode: 'mdmCompCarSeriesQueryFindAll', InputType: 'InputMdmCompCarSeries', APIUrl: CRM_PRC_API_URL },
  //竞品车系保存
  mdmCompCarSeriesMutationSaveById: { ServiceCode: 'mdmCompCarSeriesMutationSaveById', InputType: 'InputMdmCompCarSeries', APIUrl: CRM_PRC_API_URL },
  //竞品车型查询
  mdmCompCarTypeQueryFindAll: { ServiceCode: 'mdmCompCarTypeQueryFindAll', InputType: 'InputMdmCompCarTypeExt', APIUrl: CRM_PRC_API_URL },
  //竞品车型保存
  mdmCompCarTypeMutationSaveById: { ServiceCode: 'mdmCompCarTypeMutationSaveById', InputType: 'InputMdmCompCarType', APIUrl: CRM_PRC_API_URL },
  //角色查询
  mdsSysPositionQueryFindAll: { ServiceCode: 'mdsSysPositionQueryFindAll', InputType: 'InputMdsSysPosition', APIUrl: CRM_USC_API_URL },
  //线索审核
  clueServerMutationDlrCheck: { ServiceCode: 'clueServerMutationDlrCheck', InputType: '[InputClueServer]', APIUrl: CRM_CSC_API_URL },
  //系统岗位对应人员
  mdsSysPositionQueryEmpList: { ServiceCode: 'mdsSysPositionQueryEmpList', InputType: 'InputSysPosEmp', APIUrl: CRM_USC_API_URL },
  //网点系统配置
  csDbSystemConfigMutationSaveById: { ServiceCode: 'csDbSystemConfigMutationSaveById', InputType: 'InputCsDbSystemConfig', APIUrl: CRM_CSC_API_URL },
  //保有客户弹出框
  mdmDlrCarownerCustQueryFindAll: { ServiceCode: 'mdmDlrCarownerCustQueryFindAll', InputType: 'InputMdmDlrCarownerCust', APIUrl: CRM_USC_API_URL },
  //DLR线索保存
  clueServerMutationReview: { ServiceCode: 'clueServerMutationReview', InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  //投诉系统配置查询
  complaintParamSetQueryFindAll: { ServiceCode: 'complaintParamSetQueryFindAll', InputType: 'InputCsDbParamSet', APIUrl: CRM_CSC_API_URL },
  //投诉系统配置维护
  csDbParamSetMutationSaveById: { ServiceCode: 'csDbParamSetMutationSaveById', InputType: 'InputCsDbParamSet', APIUrl: CRM_CSC_API_URL },
  //本组待办查询
  csBuMyTaskGroupQueryFindAll: { ServiceCode: 'csBuMyTaskGroupQueryFindAll', InputType: 'InputCsBuMyTaskGroupQueryMap', APIUrl: CRM_CSC_API_URL },
  //专营店客户信息查询
  mdmDlrCustInfoQuery: { ServiceCode: 'mdmDlrCustInfoQuery', InputType: 'InputGetDlrCustListMap', APIUrl: CRM_USC_API_URL },
  //区县查询
  mdmOrgCommunityQueryFindAll: { ServiceCode: 'mdmOrgCommunityQueryFindAll', InputType: 'InputMdmOrgCommunityExt', APIUrl: CRM_USC_API_URL },
  //接触记录查询
  clueServerQueryReviewRecord: { ServiceCode: 'clueServerQueryReviewRecord', InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  //本组待办任务 分配
  csBuMyTaskMutationAssign: { ServiceCode: 'csBuMyTaskMutationAssign', InputType: 'InputCsBuMyTaskAssignMap', APIUrl: CRM_CSC_API_URL },
  //本组待办任务 抢单
  csBuMyTaskMutationQing: { ServiceCode: 'csBuMyTaskMutationQing', InputType: 'InputCsBuMyTaskQingMap', APIUrl: CRM_CSC_API_URL },
  //员工信息查询
  mdmOrgEmployeeQueryFindAll: { ServiceCode: 'mdmOrgEmployeeQueryFindAll', InputType: 'InputExMdmOrgEmployee', APIUrl: CRM_USC_API_URL },
  //追加投诉暂存
  addComplainSave: { ServiceCode: 'addComplainSave', InputType: 'InputCsComplainOrderEntity', APIUrl: CRM_CSC_API_URL },
  //追加投诉暂存
  addComplainCommit: { ServiceCode: 'addComplainCommit', InputType: 'InputCsComplainOrderEntity', APIUrl: CRM_CSC_API_URL },
  //待清洗线索详情
  clueServerQueryDetailFromHeadquarters: { ServiceCode: 'clueServerQueryDetailFromHeadquarters', InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  //经销商系统配置查询
  csDbSystemConfigQueryFindAll: { ServiceCode: 'csDbSystemConfigQueryFindAll', InputType: 'InputCsDbSystemConfig', APIUrl: CRM_CSC_API_URL },
  //责任区分配
  csDbAccountPopedomMutationFP: { ServiceCode: 'csDbAccountPopedomMutationFP', InputType: 'InputCsDbAccountSave', APIUrl: CRM_CSC_API_URL },

  // xgz
  mdmVeBaseSeriesQueryListForPage: { ServiceCode: 'mdmVeBaseSeriesQueryListForPage', InputType: 'InputMdmVeBaseSeries', APIUrl: CRM_PRC_API_URL },
  //城市线索池-保存
  // placeClueMutationGetBill: { ServiceCode: 'placeClueMutationGetBill', InputType: 'InputPlaceClue', APIUrl: CRM_CSC_API_URL },
  // 系统岗位人员信息-查询
  mdsSysPositionQueryEmpList: { ServiceCode: 'mdsSysPositionQueryEmpList', InputType: 'InputSysPosEmp', APIUrl: CRM_USC_API_URL },
  // 线索分配-保存
  clueServerMutationAssign: { ServiceCode: 'clueServerMutationAssign', InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  //网点派单规则维护（保存）  
  csDbDutyPersonMMutationSaveById: { ServiceCode: 'csDbDutyPersonMMutationSaveById', InputType: 'InputCsDbDutyPersonM', APIUrl: CRM_CSC_API_URL },
  // 网点派单规则维护-分配专营店
  saveDutyPersonDlrFP: { ServiceCode: 'saveDutyPersonDlrFP', InputType: ' InputCsDutyPersonDSave', APIUrl: CRM_CSC_API_URL },
  // 本组待办任务分配-线索培育
  clueServerQueryFromHeadquarters: { ServiceCode: 'clueServerQueryFromHeadquarters', InputType: ' InputClueServer', APIUrl: CRM_CSC_API_URL },
  // 号码归属地查询
  csDbPhonenoPlaceQueryFindAll: { ServiceCode: 'csDbPhonenoPlaceQueryFindAll', InputType: ' InputCsDbPhonenoPlace', APIUrl: CRM_CSC_API_URL },
  //进度反馈
  complaintHelpRpMutationSave: { ServiceCode: 'complaintHelpRpMutationSave', InputType: ' InputCsBuComplaintHelp', APIUrl: CRM_CSC_API_URL },
  // 号码归属地保存
  csDbPhonenoPlaceMutationSaveById: { ServiceCode: 'csDbPhonenoPlaceMutationSaveById', InputType: ' InputCsDbPhonenoPlace', APIUrl: CRM_CSC_API_URL },
  // 服务单新建暂存
  clueServerMutationCreateServerOrder: { ServiceCode: 'clueServerMutationCreateServerOrder', InputType: '  InputClueServer', APIUrl: CRM_CSC_API_URL },
  // 组织树查询
  mdmOrgRelationRealQueryByPage: { ServiceCode: 'mdmOrgRelationRealQueryByPage', InputType: '  InputMdmOrgRelationReal', APIUrl: CRM_USC_API_URL },
  // 工作组查询
  workingGroupQueryGroupUserByCurrentUser: { ServiceCode: 'workingGroupQueryGroupUserByCurrentUser', InputType: ' InputWorkingGroup', APIUrl: CRM_CSC_API_URL },
  //城市线索池保存
  placeClueMutationGetBill: { ServiceCode: "placeClueMutationGetBill", InputType: "InputPlaceClue", APIUrl: CRM_CSC_API_URL },
  // 专营店新建客户
  createdOneIdMutationSaveCust: { ServiceCode: 'createdOneIdMutationSaveCust', InputType: ' InputCreatCustMap', APIUrl: CRM_USC_API_URL },
  // 延期申请保存
  csBuComplaintDelaySave: { ServiceCode: 'csBuComplaintDelaySave', InputType: ' InputCsBuComplaintDelay', APIUrl: CRM_CSC_API_URL },
  // 协助申请保存
  complaintHelpMutationSave: { ServiceCode: 'complaintHelpMutationSave', InputType: ' InputCsBuComplaintHelp', APIUrl: CRM_CSC_API_URL },
  // 线索抢单
  clueServerMutationGetBill: { ServiceCode: "clueServerMutationGetBill", InputType: 'InputClueServer', APIUrl: CRM_CSC_API_URL },
  mdmCarIncolorQueryList: { ServiceCode: 'mdmCarIncolorQueryList', InputType: ' InputMdmCarIncolor', APIUrl: '/ly/mp/busicen/prc/graphql.do' },
  mdmCarColorQueryListForPage: { ServiceCode: 'mdmCarColorQueryListForPage', InputType: ' InputMdmCarColor', APIUrl: '/ly/mp/busicen/prc/graphql.do' },
  // 短信账号维护（设置）-查询
  csBuMessChannelQueryFindAll: { ServiceCode: 'csBuMessChannelQueryFindAll', InputType: ' InputCsBuMessChannel', APIUrl: CRM_CSC_API_URL },
  // 短信账号维护（设置）-查询（带专营店信息）
  csBuMessChannelQueryForDlr: { ServiceCode: 'csBuMessChannelQueryForDlr', InputType: ' InputCsBuMessChannelForDlr', APIUrl: CRM_CSC_API_URL },
  // 短信账号维护（设置）-保存
  csBuMessChannelMutationSaveById: { ServiceCode: 'csBuMessChannelMutationSaveById', InputType: ' InputCsBuMessChannel', APIUrl: CRM_CSC_API_URL },

  // 获取当前登录人的工作组
  workingGroupQueryGroupUserByCurrentUser: { ServiceCode: 'workingGroupQueryGroupUserByCurrentUser', InputType: ' InputWorkingGroup', APIUrl: CRM_CSC_API_URL },
  // 车系和车身颜色关系查询
  mdmCarSeriesColorQueryList: { ServiceCode: 'mdmCarSeriesColorQueryList', InputType: ' InputMdmCarSeriesColor', APIUrl: CRM_PRC_API_URL },
  // 变更车主
  createdOneIdMutationChangeCarOnwer: { ServiceCode: 'createdOneIdMutationChangeCarOnwer', InputType: ' InputCreatCustMap', APIUrl: CRM_USC_API_URL },
  // excel导入解析
  resolve: { ServiceCode: 'resolve', InputType: 'file', APIUrl: '/ly/mp/busicen/asc/excel/resolve.do' },
  // 短信模板查询
  csDbTemplateQueryFindAll: { ServiceCode: 'csDbTemplateQueryFindAll', InputType: ' InputCsDbTemplate', APIUrl: CRM_CSC_API_URL },
  // 来源单据查询
  csGetServerInfoListQuery: { ServiceCode: 'csGetServerInfoListQuery', InputType: ' InputCsServerInfoQueryMap', APIUrl: CRM_CSC_API_URL },
  // 本店待申诉单据查询
  csBuAppealQueryServer: { ServiceCode: 'csBuAppealQueryServer', InputType: ' InputCsBuAppealQueryServerMap', APIUrl: CRM_CSC_API_URL },
  // 投诉申诉申请
  csBuAppealMutationAdd: { ServiceCode: 'csBuAppealMutationAdd', InputType: ' InputCsBuAppeal', APIUrl: CRM_CSC_API_URL },
  // 投诉申诉查询
  csBuAppealQueryAppealList: { ServiceCode: 'csBuAppealQueryAppealList', InputType: ' InputCsBuAppealQueryListMap', APIUrl: CRM_CSC_API_URL },
  // 投诉申诉审核
  csBuAppealMutationAudit: { ServiceCode: 'csBuAppealMutationAudit', InputType: ' InputCsBuAppeal', APIUrl: CRM_CSC_API_URL },
  // 媒体日志下发查询
  pcMediaClueLogQueryFindAll: { ServiceCode: 'pcMediaClueLogQueryFindAll', InputType: ' InputPcMediaClueLogInfo', APIUrl: CRM_CSC_API_URL },
  // 数据日志导出查询
  pcBuOutputHisQueryFindAll: { ServiceCode: 'pcBuOutputHisQueryFindAll', InputType: ' InputPcBuOutputHisInfo', APIUrl: CRM_CSC_API_URL },
  // 线索回访全网行为更新
  clueServerQueryWholeNetAction: { ServiceCode: 'clueServerQueryWholeNetAction', InputType: ' InputClueServer', APIUrl: CRM_CSC_API_URL },
  //丢失电话回访查询
  csDbLostcallsQueryFindAll: { ServiceCode: 'csDbLostcallsQueryFindAll', InputType: 'InputCsDbLostcalls', APIUrl: CRM_CSC_API_URL },
  //车辆信息查询
  mdmDlrCarQuery: { ServiceCode: 'mdmDlrCarQuery', InputType: 'ExInputMdmDlrCar', APIUrl: CRM_PRC_API_URL },
  //试乘试驾评价项查询
  csMdmVeDriverOptionSetQueryFindAll: { ServiceCode: 'csMdmVeDriverOptionSetQueryFindAll', InputType: ' InputCsMdmVeDriverOptionSet', APIUrl: CRM_CSC_API_URL },
  //试乘试驾评价项设置
  csMdmVeDriverOptionSetMutationSaveById: { ServiceCode: 'csMdmVeDriverOptionSetMutationSaveById', InputType: ' InputCsMdmVeDriverOptionSet', APIUrl: CRM_CSC_API_URL },
  //车主变更审核查询
  mdmOldcustAuditQueryFindAll: { ServiceCode: 'mdmOldcustAuditQueryFindAll', InputType: ' InputMdmOldcustAudit', APIUrl: CRM_USC_API_URL },
  //车主变更审核保存
  mdmOldcustAuditMutationSaveById: { ServiceCode: 'mdmOldcustAuditMutationSaveById', InputType: ' InputMdmOldcustAudit', APIUrl: CRM_USC_API_URL },
  //媒体下发统计查询
  pcMediaClueLogQueryCount: { ServiceCode: 'pcMediaClueLogQueryCount', InputType: ' InputPcMediaClueLogInfo', APIUrl: CRM_CSC_API_URL },
  //厂家下发统计查询
  pcMediaClueLogQueryFactoryCount: { ServiceCode: 'pcMediaClueLogQueryFactoryCount', InputType: ' InputPcMediaClueLogFactoryInfo', APIUrl: CRM_CSC_API_URL },
  //短信批量发送查询
  csBuMessSendMutationSaveMore: { ServiceCode: 'csBuMessSendMutationSaveMore', InputType: ' InputExCsBuMessSend', APIUrl: CRM_CSC_API_URL },
  //邮件发送查询
  csBuEmailRuntimeQueryFindAll: { ServiceCode: 'csBuEmailRuntimeQueryFindAll', InputType: ' InputCsBuEmailRuntimeInfo', APIUrl: CRM_CSC_API_URL },
  //邮件发送保存
  csBuEmailRuntimeMutationSaveById: { ServiceCode: 'csBuEmailRuntimeMutationSaveById', InputType: ' InputCsBuEmailRuntime', APIUrl: CRM_CSC_API_URL },
  //结案延期审核
  complaintDelaySHSave: { ServiceCode: 'complaintDelaySHSave', InputType: ' InputCsBuComplaintDelay', APIUrl: CRM_CSC_API_URL },
  //来店迎宾
  mdmBuComeOrderMutationWelcome: { ServiceCode: 'mdmBuComeOrderMutationWelcome', InputType: ' InputMdmBuComeOrder', APIUrl: CRM_USC_API_URL },
  //提醒升级规则查询
  csDbUpdateRemindSetMQueryFindAll: { ServiceCode: 'csDbUpdateRemindSetMQueryFindAll', InputType: ' InputCsDbUpdateRemindSetM', APIUrl: CRM_CSC_API_URL },
  //升级规则保存
  csDbUpdateRemindSetMMutationUpgradeSave: { ServiceCode: 'csDbUpdateRemindSetMMutationUpgradeSave', InputType: ' InputCsDbUpdateRemindSetMUpgradeSaveMap', APIUrl: CRM_CSC_API_URL },
  //提醒规则保存
  csDbUpdateRemindSetMMutationRemindSave: { ServiceCode: 'csDbUpdateRemindSetMMutationRemindSave', InputType: ' InputCsDbUpdateRemindSetMRemindSaveMap', APIUrl: CRM_CSC_API_URL },
  //来店新增登记
  mdmBuComeOrderMutationNewRegister: { ServiceCode: 'mdmBuComeOrderMutationNewRegister', InputType: ' InputMdmBuComeOrder', APIUrl: CRM_USC_API_URL },
  //来店列表
  mdmBuComeOrderQueryList: { ServiceCode: 'mdmBuComeOrderQueryList', InputType: ' InputMdmBuComeOrder', APIUrl: CRM_USC_API_URL },
  //确认到店
  mdmBuComeOrderMutationConfirm: { ServiceCode: 'mdmBuComeOrderMutationConfirm', InputType: ' InputMdmBuComeOrder', APIUrl: CRM_USC_API_URL },
   
   //短信模板编辑保存
   csDbTemplateInseretForm: { ServiceCode: 'csDbTemplateInseretForm', InputType: ' InputCsDbTemplate', APIUrl: CRM_CSC_API_URL },

   //错误电话修改查询
   custErrorPhoneQueryFindAll: { ServiceCode: 'custErrorPhoneQueryFindAll', InputType: ' InputCustErrorPhoneMap', APIUrl: CRM_USC_API_URL },
   //短信批量发送
   csBuMessSendMutationSaveMore: { ServiceCode: 'csBuMessSendMutationSaveMore', InputType: ' InputCsBuMessSend', APIUrl: CRM_CSC_API_URL },
  //意向客户跟进-查询
  mdmDlrCustIntentQueryFlow: { ServiceCode: 'mdmDlrCustIntentQueryFlow', InputType: ' InputMdmDlrCustIntentQueryFlowMap', APIUrl: CRM_USC_API_URL },
  //短信发送查询
  csBuMessSendQueryFindAll: { ServiceCode: 'csBuMessSendQueryFindAll', InputType: '  InputCsBuMessSendInfo', APIUrl: CRM_CSC_API_URL },
  
  //短信回复查询
  csBuMessReceiveQueryFindAll:{ServiceCode: 'csBuMessReceiveQueryFindAll', InputType: 'InputCsBuMessReceiveInfo', APIUrl: CRM_CSC_API_URL},
  //问卷设置查询
  pcBuQyQuestionQueryFindAll:{ServiceCode: 'pcBuQyQuestionQueryFindAll', InputType: 'InputPcBuQyQuestion', APIUrl: CRM_CSC_API_URL},
  //关键信息修改
  mdmOldcustAuditMutationSaveById:{ServiceCode: 'mdmOldcustAuditMutationSaveById', InputType: 'InputCreatCustMap', APIUrl: CRM_USC_API_URL},
  //地图查询
  mdmOrgDlrQueryKiloDlrInfo:{ServiceCode: 'mdmOrgDlrQueryKiloDlrInfo', InputType: 'InputExMdmOrgDlrMap', APIUrl: CRM_USC_API_URL},
  //车系中文对照查询
  csDbMediaCarServiceQueryFindAll: { ServiceCode: 'csDbMediaCarServiceQueryFindAll', InputType: '  InputCsDbMediaCarServiceInfo', APIUrl: CRM_CSC_API_URL },
  //车系中文对照维护
  csDbMediaCarServiceMutationSaveById: { ServiceCode: 'csDbMediaCarServiceMutationSaveById', InputType: '  InputCsDbMediaCarService', APIUrl: CRM_CSC_API_URL },
  //客户信息明细-基本信息
  custViewCustBaseInfoQuery: { ServiceCode: 'custViewCustBaseInfoQuery', InputType: '  InputCustViewMap', APIUrl: CRM_USC_API_URL },
  //提醒规则明细查询
  csDbUpdateRemindSetDQueryRemainD: { ServiceCode: 'csDbUpdateRemindSetDQueryRemainD', InputType:'InputCsDbUpdateRemindSetDQueryMap', APIUrl: CRM_CSC_API_URL },
  //活动回访列表查询
  visitQueryList: { ServiceCode: 'visitQueryList', InputType: '  InputVisit', APIUrl: CRM_USC_API_URL },
  //活动回访
  MdmBuVisitResultMutationReview: { ServiceCode: 'MdmBuVisitResultMutationReview', InputType: '  InputMdmBuVisitResultReviewMap', APIUrl: CRM_USC_API_URL },
  //提醒子规则维护
  csDbUpdateRemindSetDMutationRemindSave: { ServiceCode: 'csDbUpdateRemindSetDMutationRemindSave', InputType: 'InputCsDbUpdateRemindSetDSaveRemindMap', APIUrl: CRM_CSC_API_URL },
  //升级规则明细查询
  csDbUpdateRemindSetDQueryUpgradeD: { ServiceCode: 'csDbUpdateRemindSetDQueryUpgradeD', InputType: 'InputCsDbUpdateRemindSetDQueryMap', APIUrl: CRM_CSC_API_URL },
  //升级子规则维护
  csDbUpdateRemindSetDMutationUpgradeSave: { ServiceCode: 'csDbUpdateRemindSetDMutationUpgradeSave', InputType: 'InputCsDbUpdateRemindSetDSaveUpgradeMap', APIUrl: CRM_CSC_API_URL },
  //提醒升级删除
  csDbUpdateRemindSetDMutationDelete: { ServiceCode: 'csDbUpdateRemindSetDMutationDelete', InputType: 'InputCsDbUpdateRemindSetDDelete', APIUrl: CRM_CSC_API_URL },
  //留档校验
  mdmBuComeOrderMutationCheckCustRecord: { ServiceCode: 'mdmBuComeOrderMutationCheckCustRecord', InputType: 'InputMdmBuComeOrder', APIUrl: CRM_USC_API_URL },
  //留档
  mdmBuComeOrderMutationCustomerEdit: { ServiceCode: 'mdmBuComeOrderMutationCustomerEdit', InputType: 'InputMdmBuComeOrder', APIUrl: CRM_USC_API_URL },
}
