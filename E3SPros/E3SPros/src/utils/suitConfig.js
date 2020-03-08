/**
 * 全局标签配置
 */
const globalLabel = {
  DLR_NAME: '经销商',
  CAR_SERIES: '车系',
  CAR_TYPE: '车型',
  CAR_TYPE_CODE: '车型编码',
  CAR_TYPE_NAME: '车型名称',
  WAREHOME: '仓库',
  CAR_COLOR: '车身颜色',
  CAR_INCOLOR: '内饰色',
  PRO_PRICE: '产品价格',
  SUB_PRICE: '补贴价格',
  COLOR_PRICE: '颜色价格',
  INCOLOR_PRICE: '内饰价格',
  DISCOUNT_PRICE: '折扣价格',
  TRADE_PRICE: '行业价格',
  CAR_CONFIG: '车型配置',
  MOVEIN_PLACE: '搬入地',
  AREA: '区域',
  REGION: '大区',
  VILLAGE: '小区',
  CITY_NAME: '城市名称',
  LOOKUP_VALUE: '值列表',
  PROVINCE: '省份',
  CAPITAL_TYPE: '资金类型',
  FUNCTION_NAME: '功能名称',
  DISTRIBUTION_MODE: '分配模式',
  CAR_COLOR_CODE: '车身颜色编码',
  CAR_COLOR_NAME: '车身颜色名称',
  SUPPLY_STATUS: '供应状态',
  CAR_INCOLOR_CODE: '内饰色编码',
  CAR_INCOLOR_NAME: '内饰色名称',
  ACCOUNT_NAME: '账户名称',
  ACCOUNT_CODE: '账户代码',
  TRANPORT_NAME: '送货方式',
  EXAMINE_NAME: '审核状态',
  BUSSINESS_TYPE_NAME: '到款类型',
  PV_BANK_NAME: '到账银行',
  BUSSINESS_CLASS_NAME: '明细类别',
  MOTORTYPE_NAME: '电机类型',
  SITUATION: '状态',
  BATTERY_TYPE: '电池类型',
  ELECON_TYPE: '电控类型',
  POWER_TYPE: '动力类型',
  ADAPT_CLIMATE: '适应气候',
  EMISSION_STANDARD: '排放标准',
  ORG_TYPE: '组织类型'

}
const constData = {
  MAX_VALUE: 2147483647, // int最大值
  IS_SYSTEM_OPTIONS: [ // 来源下拉列表
    { code: '1', text: '主机厂' },
    { code: '0', text: '经销商' }
  ]
}
export default {
  globalLabel,
  constData
}
