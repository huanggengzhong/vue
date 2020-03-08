/**
 * description: 组织架构、公共信息（如：产品资料）API清单（服务编码，输入类型）
 * author: luojx
 * createdDate: 2019-07-22
 * logs：
 *  20190722 创建 luojx
 */
import config from '../../utils/config'
const ORG_ORC_API_URL = config.localUrl + '/ly/mp/busicen/orc/graphql.do'

// 组织架构1请求URL
const ORG_USC_API_URL = config.localUrl + '/ly/mp/busicen/usc/graphql.do'
// 组织架构2请求URL
const ORG_PRC_API_URL = config.localUrl + '/ly/mp/busicen/prc/graphql.do'
// 组织架构3请求URL
const ORG_EAP_API_URL = config.localUrl + '/ly/mp/busicen/eap/graphql.do'


// ServiceCode：服务编码，InputType：输入类型，APIUrl：请求URL
export const orgApis = {

  // =====组织架构=====

  // 菜单角色删除
  sysRolePrivMutationDel: { ServiceCode: 'sysRolePrivMutationDel', InputType: 'ExInputSysRole', APIUrl: ORG_USC_API_URL },

  // 厂商大区查询
  mdmOrgBigAreaQueryByPage: { ServiceCode: 'mdmOrgBigAreaQueryByPage', InputType: 'InputMdmOrgBigArea', APIUrl: ORG_USC_API_URL },
  // 厂商地区查询
  mdmOrgZoneQueryByPage: { ServiceCode: 'mdmOrgZoneQueryByPage', InputType: 'InputMdmOrgZone', APIUrl: ORG_USC_API_URL },
  // 厂商小区查询
  mdmOrgSmallAreaQueryByPage: { ServiceCode: 'mdmOrgSmallAreaQueryByPage', InputType: 'ExInputMdmOrgSmallArea', APIUrl: ORG_USC_API_URL },
  // 厂商信息保存
  mdmOrgInfoFactoryMutationSave: { ServiceCode: 'mdmOrgInfoFactoryMutationSave', InputType: 'ExInputMdmOrgInfo', APIUrl: ORG_USC_API_URL },
  // 厂商信息查询
  mdmOrgInfoQueryFactoryByPage: { ServiceCode: 'mdmOrgInfoQueryFactoryByPage', InputType: 'ExInputMdmOrgInfo', APIUrl: ORG_USC_API_URL },
  // 厂商组织信息保存
  mdmOrgRelationRealMutationSave: { ServiceCode: 'mdmOrgRelationRealMutationSave', InputType: 'InputMdmOrgRelationReal', APIUrl: ORG_USC_API_URL },

  // 城市保存
  mdmOrgCityMutationSave: { ServiceCode: 'mdmOrgCityMutationSave', InputType: 'InputMdmOrgCity', APIUrl: ORG_USC_API_URL },
  // 城市查询
  mdmOrgCityQueryFindAll: { ServiceCode: 'mdmOrgCityQueryFindAll', InputType: 'InputMdmOrgCity', APIUrl: ORG_USC_API_URL },
  // 岗位查询
  Station01: { ServiceCode: 'Station01', InputType: '', APIUrl: ORG_USC_API_URL },

  // 公司信息查询
  mdmOrgCompanyQueryByPage: { ServiceCode: 'mdmOrgCompanyQueryByPage', InputType: '', APIUrl: ORG_USC_API_URL },
  // 集团信息保存
  mdmOrgInfoMutationGroupSave: { ServiceCode: 'mdmOrgInfoMutationGroupSave', InputType: 'ExInputMdmOrgInfo', APIUrl: ORG_USC_API_URL },
  // 集团信息查询
  mdmOrgInfoQueryGroupByPage: { ServiceCode: 'mdmOrgInfoQueryGroupByPage', InputType: 'ExInputMdmOrgInfo', APIUrl: ORG_USC_API_URL },
  // 集团组织查询
  mdmOrgRelationRealGroupQueryByPage: { ServiceCode: 'mdmOrgRelationRealGroupQueryByPage', InputType: 'InputMdmOrgRelationReal', APIUrl: ORG_USC_API_URL },
  // 角色保存
  roleSave: { ServiceCode: 'roleSave', InputType: '', APIUrl: ORG_USC_API_URL },
  // 厂商信息保存
  mdmOrgInfoMutationFactorySave: { ServiceCode: 'mdmOrgInfoMutationFactorySave', InputType: 'ExInputMdmOrgInfo', APIUrl: ORG_USC_API_URL },
  // 角色成员查询
  sysRoleUserQueryByPage: { ServiceCode: 'sysRoleUserQueryByPage', InputType: 'ExInputSysRoleUser', APIUrl: ORG_EAP_API_URL },
  // 角色成员保存
  sysRoleUserMutationSaves: { ServiceCode: 'sysRolePrivMutationSave', InputType: 'InputSysRolePriv', APIUrl: ORG_EAP_API_URL },
  // 角色成员保存
  sysRoleUserMutationSave: { ServiceCode: 'sysRoleUserMutationSave', InputType: 'InputSysRoleUser', APIUrl: ORG_EAP_API_URL },
  // 角色成员删除
  sysRoleUserMutationDel: { ServiceCode: 'sysRoleUserMutationDel', InputType: 'InputSysRoleUser', APIUrl: ORG_EAP_API_URL },
  // 角色成员新增
  roleUserSave: { ServiceCode: 'roleUserSave', InputType: 'InputSysRoleUser', APIUrl: ORG_USC_API_URL },
  // 角色权限查询
  sysRolePrivQueryByPage: { ServiceCode: 'sysRolePrivQueryByPage', InputType: 'ExInputSysRolePriv', APIUrl: ORG_EAP_API_URL },
  // 角色删除
  roleRemove: { ServiceCode: 'roleRemove', InputType: '', APIUrl: ORG_USC_API_URL },
  // 角色授权
  sysRolePrivMutationSave: { ServiceCode: 'sysRolePrivMutationSave', InputType: 'InputSysRolePriv', APIUrl: ORG_EAP_API_URL },

  // 经销商信息保存
  mdmOrgDlrSave: { ServiceCode: 'mdmOrgDlrSave', InputType: '', APIUrl: ORG_USC_API_URL },
  // 经销商信息查询
  mdmOrgDlrQueryByPage: { ServiceCode: 'mdmOrgdlrQueryByPage', InputType: 'InputExMdmOrgDlr', APIUrl: ORG_USC_API_URL },
  // 经销商信息带条件查询
  mdmOrgDlrQueryByPageS: { ServiceCode: 'mdmOrgdlrQueryByPage', InputType: 'InputExMdmOrgDlr', APIUrl: ORG_USC_API_URL },
  // 经销商财务扩展信息
  mdmOrgDlrQueryFinanceList: { ServiceCode: 'mdmOrgDlrQueryFinanceList', InputType: 'InputExMdmOrgDlrFinance', APIUrl: ORG_USC_API_URL },
  // 经销商信息管理查询
  mdmOrgdlrQueryByPage: { ServiceCode: 'mdmOrgdlrQueryByPage', InputType: '', APIUrl: ORG_USC_API_URL },
  // 经销商信息管理保存
  mdmOrgDlrMutationSave: { ServiceCode: 'mdmOrgDlrMutationSave', InputType: 'InputExMdmOrgDlr', APIUrl: ORG_USC_API_URL },
  // 经销商销售扩展查询
  mdmOrgDlrQuerySaleList: { ServiceCode: 'mdmOrgDlrQuerySaleList', InputType: 'InputeExMdmOrgDlr', APIUrl: ORG_USC_API_URL },
  // 经销商销售扩展信息保存
  mdmOrgDlrMutationSaleSave: { ServiceCode: 'mdmOrgDlrMutationSaleSave', InputType: 'InputeExMdmOrgDlr', APIUrl: ORG_USC_API_URL },
  // 经销商联系人查询
  mdmOrgDlrLinkInfoQueryList: { ServiceCode: 'mdmOrgDlrLinkInfoQueryList', InputType: 'ExInputMdmOrgDlrLinkInfo', APIUrl: ORG_USC_API_URL },
  // 经销商联系人保存
  mdmOrgDlrLinkInfoMutationSaveById: { ServiceCode: 'mdmOrgDlrLinkInfoMutationSaveById', InputType: 'InputMdmOrgDlrLinkInfo', APIUrl: ORG_USC_API_URL },

  // 品牌查询
  mdmCarBrandQueryByPage: { ServiceCode: 'mdmCarBrandQueryByPage', InputType: 'InputMdmCarBrand', APIUrl: ORG_PRC_API_URL },
  // 品牌保存
  mdmCarBrandBizSave: { ServiceCode: 'mdmCarBrandMutationSave', InputType: 'InputMdmCarBrand', APIUrl: ORG_PRC_API_URL },
  // 用户品牌查询
  mdmOrgEmployeeBrQueryFindAll: { ServiceCode: 'mdmOrgEmployeeBrQueryFindAll', InputType: 'InputExMdmOrgEmployeeBr', APIUrl: ORG_USC_API_URL },
  // 用户品牌保存
  mdmOrgEmployeeBrMutationSaveById: { ServiceCode: 'mdmOrgEmployeeBrMutationSaveById', InputType: 'InputMdmOrgEmployeeBr', APIUrl: ORG_USC_API_URL },

  // 区县保存
  mdmOrgCommutiySave: { ServiceCode: 'mdmOrgCommunityMutationSave', InputType: 'InputMdmOrgCommunity', APIUrl: ORG_USC_API_URL },
  // 区县查询
  mdmOrgCommunityQueryFindAll: { ServiceCode: 'mdmOrgCommunityQueryFindAll', InputType: 'InputMdmOrgCommunityExt', APIUrl: ORG_USC_API_URL },
  mdmOrgZoneQueryFindAll: { ServiceCode: 'mdmOrgZoneQueryFindAll', InputType: 'InputMdmOrgZone', APIUrl: ORG_USC_API_URL },
  // 区域经销商信息保存
  mdmOrgAreaDlrMutationSave: { ServiceCode: 'mdmOrgAreaDlrMutationSave', InputType: 'ExInputMdmOrgRelationReal', APIUrl: ORG_USC_API_URL },
  areaDlrMutationSave: { ServiceCode: 'areaDlrMutationSave', InputType: 'InputMdmAreaDlr', APIUrl: ORG_USC_API_URL },
  // 区域经销商信息查询
  areaDlrQueryByPage: { ServiceCode: 'areaDlrQueryByPage', InputType: 'InputMdmAreaDlr', APIUrl: ORG_USC_API_URL },
  // 区域经销商信息删除
  areaDlrMutationDel: { ServiceCode: 'areaDlrMutationDel', InputType: 'InputMdmAreaDlr', APIUrl: ORG_USC_API_URL },
  // 区域经销商信息查询
  mdmOrgAreaDlrQueryByPage: { ServiceCode: 'mdmOrgAreaDlrQueryByPage', InputType: 'InputMdmOrgRelationReal', APIUrl: ORG_USC_API_URL },
  // 全局角色保存
  sysRoleMutationGlobalSave: { ServiceCode: 'sysRoleMutationGlobalSave', InputType: 'ExInputSysRole', APIUrl: ORG_EAP_API_URL },
  // 全局角色保存
  //  globalRoleSave: { ServiceCode: 'globalRoleSave', InputType: 'ExInputSysRole', APIUrl: ORG_USC_API_URL },

  // 全局角色查询
  // globalRoleQuery: { ServiceCode: 'globalRoleQuery', InputType: 'ExInputSysRole', APIUrl: ORG_USC_API_URL },
  // 全局角色查询
  // sysGloableRoleQueryByPage: { ServiceCode: 'sysGloableRoleQueryByPage', InputType: 'ExInputSysRole', APIUrl: ORG_USC_API_URL },
  sysRoleQueryGloableByPage: { ServiceCode: 'sysRoleQueryGloableByPage', InputType: 'ExInputSysRole', APIUrl: ORG_EAP_API_URL },
  // 登陆用户信息查询
  getUserLoginInfo: { ServiceCode: 'getUserLoginInfo', InputType: '', APIUrl: ORG_USC_API_URL },

  // 省份保存
  mdmOrgProvinceMutationSave: { ServiceCode: 'mdmOrgProvinceMutationSave', InputType: 'InputMdmOrgProvince', APIUrl: ORG_USC_API_URL },
  // 省份查询
  mdmOrgProvinceQueryFindAll: { ServiceCode: 'mdmOrgProvinceQueryFindAll', InputType: 'InputMdmOrgProvince', APIUrl: ORG_USC_API_URL },
  // 省份 弹窗
  mdmOrgdlrAreaProvinceQueryByPage: { ServiceCode: 'mdmOrgdlrAreaProvinceQueryByPage', InputType: '', APIUrl: ORG_USC_API_URL },
  // 通知场景保存
  mdsSysSceneSettingMutationSave: { ServiceCode: 'mdsSysSceneSettingMutationSave', InputType: 'ExInputMdsSysSceneSetting', APIUrl: ORG_PRC_API_URL },
  // 通知场景查询
  mdsSysSceneSettingQueryByPage: { ServiceCode: 'mdsSysSceneSettingQueryByPage', InputType: 'InputMdsSysSceneSetting', APIUrl: ORG_PRC_API_URL },
  // 通知场景对象保存
  mdsSysSceneSettingDMutationSave: { ServiceCode: 'mdsSysSceneSettingDMutationSave', InputType: 'InputMdsSysSceneSettingD', APIUrl: ORG_PRC_API_URL },
  // 通知场景对象查询
  mdsSysSceneSettingDQueryByPage: { ServiceCode: 'mdsSysSceneSettingDQueryByPage', InputType: 'InputMdsSysSceneSettingD', APIUrl: ORG_PRC_API_URL },
  // 通知模板保存
  mdsSysMsgModuleMutationSave: { ServiceCode: 'mdsSysMsgModuleMutationSave', InputType: 'InputMdsSysMsgModule', APIUrl: ORG_PRC_API_URL },
  // 通知模板查询
  mdsSysMsgModuleQueryByPage: { ServiceCode: 'mdsSysMsgModuleQueryByPage', InputType: 'InputMdsSysMsgModule', APIUrl: ORG_PRC_API_URL },

  // 系统岗位保存
  mdsSysPositionMutationSave: { ServiceCode: 'mdsSysPositionMutationSave', InputType: 'InputExMdsSysPosition', APIUrl: ORG_USC_API_URL },
  // 系统岗位查询
  mdsSysPositionQueryFindAll: { ServiceCode: 'mdsSysPositionQueryFindAll', InputType: 'InputMdsSysPosition', APIUrl: ORG_USC_API_URL },
  // 系统岗位对应业务岗位查询
  mdsSysPositionDetailQueryFindAll: { ServiceCode: 'mdsSysPositionDetailQueryFindAll', InputType: 'InputMdsSysPositionEx', APIUrl: ORG_USC_API_URL },

  // 下属组织类型查询
  belongOrgListQueryByPage: { ServiceCode: 'belongOrgListQueryByPage', InputType: '', APIUrl: ORG_USC_API_URL },
  // 业务岗位保存
  mdmOrgStationSave: { ServiceCode: 'mdmOrgStationSave', InputType: '', APIUrl: ORG_USC_API_URL },
  // 业务岗位查询
  mdmOrgStationQuery: { ServiceCode: 'mdmOrgStationQuery', InputType: '', APIUrl: ORG_USC_API_URL },

  // 用户角色查询
  employeeRoleQueryByPage: { ServiceCode: 'employeeRoleQueryByPage', InputType: '', APIUrl: ORG_USC_API_URL },
  // 用户经销商保存
  mdmEmployeeDlrMutation: { ServiceCode: 'mdmEmployeeDlrMutation', InputType: 'InputMdmUserDlr', APIUrl: ORG_USC_API_URL },
  // 用户经销商查询
  mdmUserDlrQueryInfo: { ServiceCode: 'mdmUserDlrQueryInfo', InputType: 'InputMdmUserDlrExt', APIUrl: ORG_USC_API_URL },
  // 用户区域保存
  userAreaMutation: { ServiceCode: 'userAreaMutation', InputType: 'UserAreaMutation', APIUrl: ORG_USC_API_URL },
  // 用户区域查询
  userAreaQueryByPage: { ServiceCode: 'userAreaQueryByPage', InputType: 'UserAreaQuery', APIUrl: ORG_USC_API_URL },
  // 用户权限保存
  sysUserPrivMutationSave: { ServiceCode: 'sysUserPrivMutationSave', InputType: 'InputSysUserPriv', APIUrl: ORG_EAP_API_URL },
  // 用户权限查询
  sysUserPrivQueryByPage: { ServiceCode: 'sysUserPrivQueryByPage', InputType: 'ExInputSysUserPriv', APIUrl: ORG_EAP_API_URL },

  // 员工保存
  mdmOrgEmployeeMutationSaveById: { ServiceCode: 'mdmOrgEmployeeMutationSaveById', InputType: 'InputExMdmOrgEmployee', APIUrl: ORG_USC_API_URL },
  // 员工查询
  mdmOrgEmployeeQueryFindAll: { ServiceCode: 'mdmOrgEmployeeQueryFindAll', InputType: 'InputExMdmOrgEmployee', APIUrl: ORG_USC_API_URL },

  // 值列表保存
  mdsLookupValueMutationSave: { ServiceCode: 'mdsLookupValueMutationSave', InputType: 'InputMdsLookupValue', APIUrl: ORG_PRC_API_URL },
  // 值列表查询
  mdsLookupValueQueryByPage: { ServiceCode: 'mdsLookupValueQueryByPage', InputType: 'InputMdsLookupValue', APIUrl: ORG_PRC_API_URL },
  // 值列表类型保存
  mdsLookupTypeSave: { ServiceCode: 'mdsLookupTypeSave', InputType: 'InputMdsLookupType', APIUrl: ORG_PRC_API_URL },
  // 值列表类型查询
  mdsLookupTypeQueryByPage: { ServiceCode: 'mdsLookupTypeQueryByPage', InputType: 'InputMdsLookupType', APIUrl: ORG_PRC_API_URL },

  // 组织查询
  mdmOrgRelationRealQueryByPage: { ServiceCode: 'mdmOrgRelationRealQueryByPage', InputType: 'InputMdmOrgRelationReal', APIUrl: ORG_USC_API_URL },
  // 组织节点关系查询
  mdmOrgNodeRelQueryFindAll: { ServiceCode: 'mdmOrgNodeRelQueryFindAll', InputType: 'InputExMdmOrgNodeRel', APIUrl: ORG_USC_API_URL },
  // 组织角色查询
  sysRoleQueryCommonByPage: { ServiceCode: 'sysRoleQueryCommonByPage', InputType: 'ExInputSysRole', APIUrl: ORG_EAP_API_URL },
  // 组织角色删除
  sysRoleMutationCommonDel: { ServiceCode: 'sysRoleMutationCommonDel', InputType: 'ExInputSysRole', APIUrl: ORG_EAP_API_URL },
  // 组织角色保存
  sysRoleMutationCommonSave: { ServiceCode: 'sysRoleMutationCommonSave', InputType: 'ExInputSysRole', APIUrl: ORG_EAP_API_URL },

  // =========车辆产品资料=============

  // 车辆产品价格-车辆价格查询
  mdmVeCarConfigPriceQueryListForPage: { ServiceCode: 'mdmVeCarConfigPriceQueryListForPage', InputType: 'InputMdmVeCarConfigPrice', APIUrl: ORG_PRC_API_URL },
  // 车辆产品价格-车辆历史价格查询 ？？  跟车辆价格查询一样  ？？？
  mdmVeCarConfigPriceQueryListForPage_: { ServiceCode: 'mdmVeCarConfigPriceQueryListForPage', InputType: 'InputMdmVeCarConfigPrice', APIUrl: ORG_PRC_API_URL },
  // 车辆产品价格-车辆价格保存
  mdmVeCarConfigPriceMutationSave: { ServiceCode: 'mdmVeCarConfigPriceMutationSave', InputType: 'InputMdmVeCarConfigPrice', APIUrl: ORG_PRC_API_URL },
  // 车辆产品排序-车系排序保存
  mdmVeCarSeriesMutationSortSave: { ServiceCode: 'mdmVeCarSeriesMutationSortSave', InputType: '[InputMdmVeCarSeries]', APIUrl: ORG_PRC_API_URL },
  // 车辆产品排序-车型配置排序保存
  mdmVeCarConfigMutationSortSave: { ServiceCode: 'mdmVeCarConfigMutationSortSave', InputType: '[InputMdmVeCarConfig]', APIUrl: ORG_PRC_API_URL },
  // 车辆档案查询 ？？？
  // 无
  // 车身颜色-车身颜色查询
  mdmCarColorQueryListForPage: { ServiceCode: 'mdmCarColorQueryListForPage', InputType: 'InputMdmCarColor', APIUrl: ORG_PRC_API_URL },
  // 车身颜色-车身颜色保存
  mdmCarColorMutationSave: { ServiceCode: 'mdmCarColorMutationSave', InputType: 'InputMdmCarColor', APIUrl: ORG_PRC_API_URL },
  // 车系-车系查询
  mdmVeCarSeriesQueryListForPage: { ServiceCode: 'mdmVeCarSeriesQueryListForPage', InputType: 'InputMdmVeCarSeries', APIUrl: ORG_PRC_API_URL },
  // 车系-车系保存 ？？  跟 车系排序保存 一样  ？？？
  mdmVeCarSeriesMutationSave: { ServiceCode: 'mdmVeCarSeriesMutationSave', InputType: 'InputMdmVeCarSeries', APIUrl: ORG_PRC_API_URL },
  // 车系-基准车系查询
  mdmVeBaseSeriesQueryListForPage: { ServiceCode: 'mdmVeBaseSeriesQueryListForPage', InputType: 'InputMdmVeBaseSeries', APIUrl: ORG_PRC_API_URL },
  // 车系-基准车系保存
  mdmVeBaseSeriesMutationSave: { ServiceCode: 'mdmVeBaseSeriesMutationSave', InputType: 'InputMdmVeBaseSeries', APIUrl: ORG_PRC_API_URL },
  // 车系车身颜色关系
  // 车系车身颜色关系-车系车身颜色关系查询
  mdmCarSeriesColorQueryList: { ServiceCode: 'mdmCarSeriesColorQueryList', InputType: 'InputMdmCarSeriesColor', APIUrl: ORG_PRC_API_URL },
  // 车系车身颜色关系-车系车身颜色关系保存
  mdmCarSeriesColorMutationSave: { ServiceCode: 'mdmCarSeriesColorMutationSave', InputType: 'InputMdmCarSeriesColor', APIUrl: ORG_PRC_API_URL },
  // 车型-车型大类查询
  mdmLargeCarTypeQueryListForPage: { ServiceCode: 'mdmLargeCarTypeQueryListForPage', InputType: 'InputMdmLargeCarType', APIUrl: ORG_PRC_API_URL },
  // 车型-车型大类保存
  mdmLargeCarTypeMutationSave: { ServiceCode: 'mdmLargeCarTypeMutationSave', InputType: 'InputMdmLargeCarType', APIUrl: ORG_PRC_API_URL },
  // 车型-车型中类查询
  mdmMiddleCarTypeQueryListForPage: { ServiceCode: 'mdmMiddleCarTypeQueryListForPage', InputType: 'InputMdmMiddleCarType', APIUrl: ORG_PRC_API_URL },
  // 车型-车型中类保存
  mdmMiddleCarTypeMutationSave: { ServiceCode: 'mdmMiddleCarTypeMutationSave', InputType: 'InputMdmMiddleCarType', APIUrl: ORG_PRC_API_URL },
  // 车型-车型小类查询
  mdmSmallCarTypeQueryListForPage: { ServiceCode: 'mdmSmallCarTypeQueryListForPage', InputType: 'InputMdmSmallCarType', APIUrl: ORG_PRC_API_URL },
  // 车型-车型小类保存
  mdmSmallCarTypeMutationSave: { ServiceCode: 'mdmSmallCarTypeMutationSave', InputType: 'InputMdmSmallCarType', APIUrl: ORG_PRC_API_URL },

  // 车型配置-车型配置查询
  mdmVeCarConfigQueryListForPage: { ServiceCode: 'mdmVeCarConfigQueryListForPage', InputType: 'InputMdmVeCarConfig', APIUrl: ORG_PRC_API_URL },
  // 车型配置-车型配置保存 ？？  跟 车型配置排序保存 一样  ？？？
  mdmVeCarConfigMutationSave: { ServiceCode: 'mdmVeCarConfigMutationSave', InputType: 'InputMdmVeCarConfig', APIUrl: ORG_PRC_API_URL },
  // 车型配置-车型配置保存
  mdmVeCarConfigMutationSaveS: { ServiceCode: 'mdmVeCarConfigMutationSave', InputType: 'InputMdmVeCarConfig', APIUrl: ORG_PRC_API_URL },

  // 车型配置车身颜色关系-车型配置车身颜色关系查询
  mdmCarTypeColorQueryListForPage: { ServiceCode: 'mdmCarTypeColorQueryListForPage', InputType: 'InputMdmCarTypeColor', APIUrl: ORG_PRC_API_URL },
  // 车型配置车身颜色关系-车型配置车身颜色关系保存
  mdmCarTypeColorMutationSave: { ServiceCode: 'mdmCarTypeColorMutationSave', InputType: 'InputMdmCarTypeColor', APIUrl: ORG_PRC_API_URL },

  // 车型配置内饰关系-车型配置内饰关系查询
  mdmCarTypeIncolorQueryListForPage: { ServiceCode: 'mdmCarTypeIncolorQueryListForPage', InputType: 'InputMdmCarTypeIncolor', APIUrl: ORG_PRC_API_URL },
  // 车型配置内饰关系-车型配置内饰关系保存
  mdmCarTypeIncolorMutationSave: { ServiceCode: 'mdmCarTypeIncolorMutationSave', InputType: 'InputMdmCarTypeIncolor', APIUrl: ORG_PRC_API_URL },

  // 经销商车型授权-经销商车型查询
  orcVeDbOrgCarCofigQueryListForPage: { ServiceCode: 'orcVeDbOrgCarCofigQueryListForPage', InputType: 'InputOrcVeDbOrgCarCofig', APIUrl: ORG_PRC_API_URL },
  // 经销商车型授权-经销商车型保存
  orcVeDbOrgCarCofigMutationSave: { ServiceCode: 'orcVeDbOrgCarCofigMutationSave', InputType: 'InputOrcVeDbOrgCarCofig', APIUrl: ORG_PRC_API_URL },

  // 经销商账户品牌扣款-经销商账户品牌扣款查询
  orcDbPurcashBrandQueryListForPage: { ServiceCode: 'veDbPurcashBrandQueryListForPage', InputType: 'InputVeDbPurcashBrandExt', APIUrl: ORG_ORC_API_URL },
  // 经销商账户品牌扣款-经销商账户品牌扣款保存
  orcDbPurcashBrandMutationSave: { ServiceCode: 'veDbPurcashBrandMutationSave', InputType: '[InputVeDbPurcashBrand]', APIUrl: ORG_ORC_API_URL },
  // 完整样例
  sysGloableRoleQueryByPage1: { ServiceCode: 'sysGloableRoleQueryByPage1', InputType: 'ExInputSysRole', APIUrl: ORG_USC_API_URL },

  // 竞争车辆产品资料- ？？？
  // 无文档（文档里没有针对graphQL API的描述

  // 内饰色维护-内饰色查询
  mdmCarIncolorQueryList: { ServiceCode: 'mdmCarIncolorQueryList', InputType: 'InputMdmCarIncolor', APIUrl: ORG_PRC_API_URL },
  // 内饰色维护-内饰色保存
  mdmCarIncolorMutationSave: { ServiceCode: 'mdmCarIncolorMutationSave', InputType: 'InputMdmCarIncolor', APIUrl: ORG_PRC_API_URL },
  // 意向车系选择
  mdmBuComeOrderIntentCarQueryList: { ServiceCode: 'mdmBuComeOrderIntentCarQueryList', InputType: 'InputMdmBuComeOrderIntentCar', APIUrl: ORG_PRC_API_URL },

  // 集团组织架构查询
  mdmOrgInfoQueryGroupMenueByPage: { ServiceCode: 'mdmOrgInfoQueryGroupMenueByPage', InputType: 'ExInputMdmOrgInfo', APIUrl: ORG_USC_API_URL },

  // 菜单树查询
  menuQueryByPage: { ServiceCode: 'sysMenuQueryByPage', InputType: 'InputSysMenu', APIUrl: ORG_EAP_API_URL },
  sysMenuQueryByPage: { ServiceCode: 'sysMenuQueryByPage', InputType: 'InputSysMenu', APIUrl: ORG_EAP_API_URL },
  // 菜单角色查询
  sysMenuRoleQueryByPage: { ServiceCode: 'sysMenuRoleQueryByPage', InputType: 'ExInputSysRolePriv', APIUrl: ORG_EAP_API_URL },

  // 角色保存
  sysRoleCommonMutationSave: { ServiceCode: 'sysRoleCommonMutationSave', InputType: 'ExInputSysRole', APIUrl: ORG_EAP_API_URL },

  // 角色删除
  sysRoleCommonMutationDel: { ServiceCode: 'sysRoleCommonMutationDel', InputType: 'InputFactoryInfo', APIUrl: ORG_EAP_API_URL },
  // 车辆补贴价格查询
  veBuDlrSubsidyQueryListForPage: { ServiceCode: 'veBuDlrSubsidyQueryListForPage', InputType: 'InputVeBuDlrSubsidyExt', APIUrl: ORG_PRC_API_URL },
  // 车辆补贴价格历史查询
  veBuDlrSubsidyHistoryQueryList: { ServiceCode: 'veBuDlrSubsidyHistoryQueryList', InputType: 'InputVeBuDlrSubsidyHistoryExt', APIUrl: ORG_PRC_API_URL },
  // 车辆补贴价格保存
  veBuDlrSubsidyMutationSave: { ServiceCode: 'veBuDlrSubsidyMutationSave', InputType: 'InputVeBuDlrSubsidy', APIUrl: ORG_PRC_API_URL },
  // 业务岗位查询
  mdmOrgStationQueryFindAll: { ServiceCode: 'mdmOrgStationQueryFindAll', InputType: 'InputMdmOrgStation', APIUrl: ORG_USC_API_URL },
  // 业务岗位保存
  mdmOrgStationMutationSaveById: { ServiceCode: 'mdmOrgStationMutationSaveById', InputType: 'InputMdmOrgStation', APIUrl: ORG_USC_API_URL },
  // 冻结金额经销商开关保存
  mdmVeCarProductQueryListForPage: { ServiceCode: 'mdmVeCarProductQueryListForPage', InputType: 'InputMdmVeCarProduct', APIUrl: ORG_PRC_API_URL },
  // 客户信息查询
  oneIdCustListQueryFindAll: { ServiceCode: 'oneIdCustListQueryFindAll', InputType: 'InputQueryCustList', APIUrl: ORG_USC_API_URL },
  // 可配置化页面查询
  proConfigPageviewQueryByPage: { ServiceCode: 'proConfigPageviewQueryByPage', InputType: 'InputProConfigPageview', APIUrl: 'http://localhost:10002/ly/mp/busicen/prc/graphql.do/' },
  // 可配置化页面保存
  proConfigPageviewMutationSave: { ServiceCode: 'proConfigPageviewMutationSave', InputType: 'InputProConfigPageview', APIUrl: 'http://localhost:10002/ly/mp/busicen/prc/graphql.do/' },
  // 可配置化页面对应组件查询
  proConfigComponentQueryByPage: { ServiceCode: 'proConfigComponentQueryByPage', InputType: 'InputProConfigComponentExt', APIUrl: 'http://localhost:10002/ly/mp/busicen/prc/graphql.do/' },
  // 可配置化页面对应组件保存
  proConfigComponentMutationSave: { ServiceCode: 'proConfigComponentMutationSave', InputType: 'InputProConfigComponentSaveExt', APIUrl: 'http://localhost:10002/ly/mp/busicen/prc/graphql.do/' },
  // 可配置化页面对应网格列查询
  proConfigColumnQueryByPage: { ServiceCode: 'proConfigColumnQueryByPage', InputType: 'InputProConfigColumnExt', APIUrl: 'http://localhost:10002/ly/mp/busicen/prc/graphql.do/' },
  // 可配置化页面对应网格列保存
  proConfigColumnMutationSave: { ServiceCode: 'proConfigColumnMutationSave', InputType: 'InputProConfigColumnSaveExt', APIUrl: 'http://localhost:10002/ly/mp/busicen/prc/graphql.do/' },
  // 可配置化页面多语言信息查询
  proConfigLangQueryByPage: { ServiceCode: 'proConfigLangQueryByPage', InputType: 'InputProConfigLang', APIUrl: 'http://localhost:10002/ly/mp/busicen/prc/graphql.do/' },

  orgconfigurablePageTableManagement: { ServiceCode: 'orgconfigurablePageTableManagement', InputType: 'InputQueryCustList', APIUrl: ORG_USC_API_URL },

  // 竞争品牌查询
  mdmCompBrandQueryFindAll: { ServiceCode: 'mdmCompBrandQueryFindAll', InputType: 'InputMdmCompCarBrand', APIUrl: ORG_PRC_API_URL },
  // 竞争品牌保存
  mdmCompBrandMutationSave: { ServiceCode: 'mdmCompBrandMutationSave', InputType: 'InputMdmCompCarBrand', APIUrl: ORG_PRC_API_URL },
  // 竞争车系查询
  mdmCcompCarseriesQueryFindAll: { ServiceCode: 'mdmCcompCarseriesQueryFindAll', InputType: 'InputMdmCompVeCarSeries', APIUrl: ORG_PRC_API_URL },
  // 竞争车系保存
  mdmCcompCarseriesMutationSave: { ServiceCode: 'mdmCcompCarseriesMutationSave', InputType: 'InputMdmVeCompCarSeries', APIUrl: ORG_PRC_API_URL },
  // 竞争车型查询
  mdmCompCarTypeQueryFindAll: { ServiceCode: 'mdmCompCarTypeQueryFindAll', InputType: 'InputMdmCompCarTypeExt', APIUrl: ORG_PRC_API_URL },
  // 竞争车型保存
  mdmCompCarTypeMutationSave: { ServiceCode: 'mdmCompCarTypeMutationSave', InputType: 'InputMdmCompCarTypeExt', APIUrl: ORG_PRC_API_URL },
  // 经销商通用部门管理
  mdmOrgDeptQueryFindAll: { ServiceCode: 'mdmOrgDeptQueryFindAll', InputType: 'InputMdmOrgDept', APIUrl: ORG_USC_API_URL },
  mdmOrgDeptMutationSaveById: { ServiceCode: 'mdmOrgDeptMutationSaveById', InputType: 'InputMdmOrgDept', APIUrl: ORG_USC_API_URL }
}
