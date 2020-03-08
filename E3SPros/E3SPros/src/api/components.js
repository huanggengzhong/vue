/**
 * description: 最小层组件：品牌、状态、省份城市等的请求
 * author: yangmin
 * createdDate: 2019-07-16
*/
import request from '@/utils/request'

// 品牌
export function getBrand(params) {
  return request({
    url: '/getBrand/list',
    method: 'get',
    params
  })
}

// 是否可用
export function getIsEnable(params) {
  return request({
    url: '/getIsEnable/list',
    method: 'get',
    params
  })
}

// 设置状态
export function getSetStatus(params) {
  return request({
    url: '/getSetStatus/list',
    method: 'get',
    params
  })
}


// 获得车型
export function getCarType(params) {
  return request({
    url: '/getCarType/list',
    method: 'get',
    params
  })
}

//获得车系
export function getCarSeriesM(params) {
  return request({
    url: '/getCarSeriesM/list',
    method: 'get',
    params
  })
}


//获得岗位
export function getPosition(params) {
  return request({
    url: '/getPosition/list',
    method: 'get',
    params
  })
}

// 获得颜色
export function getCarColor(params) {
  return request({
    url: '/getCarColor/list',
    method: 'get',
    params
  })
}

// 获得车系
export function getCarSeries(params) {
  return request({
    url: '/getCarSeries/list',
    method: 'get',
    params
  })
}

//授权状态
export function getAuthorizationStatus(params) {
  return request({
    url: '/getAuthorizationStatus/list',
    method: 'get',
    params
  })
}
//仓库多选下拉列表
export function getWareHouseMulti(params) {
  return request({
    url: '/getWareHouseMulti/list',
    method: 'get',
    params
  })
}

//仓库
export function getWareHouse(params) {
  return request({
    url: '/getWareHouse/list',
    method: 'get',
    params
  })
}

export function getCashInBank(params) {
  return request({
    url: '/getCashInBank/list',
    method: 'get',
    params
  })
}

export function getcarSeries(params) {
  return request({
    url: '/getcarSeries/list',
    method: 'get',
    params
  })
}

export function getCarType1(params) {
  return request({
    url: '/getCarType1/list',
    method: 'get',
    params
  })
}

export function getCarTypeConfig(params) {
  return request({
    url: '/getCarTypeConfig/list',
    method: 'get',
    params
  })
}

export function getCarTypeConfigData(params) {
  return request({
    url: '/getCarTypeConfigData/list',
    method: 'get',
    params
  })
}

export function getRegional(params) {
  return request({
    url: '/getRegional/list',
    method: 'get',
    params
  })
}

//分配模式
export function getDistributionModel(params) {
  return request({
    url: '/getDistributionModel/list',
    method: 'get',
    params
  })
}
//小区弹出框
export function getSmallAreaModal(params) {
  return request({
    url: '/getSmallAreaModal/list',
    method: 'get',
    params
  })
}
export function getWareHouseData(params) {
  return request({
    url: '/WareHouse/list',
    method: 'get',
    params
  })
}
export function getInteriorColor(params) {
  return request({
    url: '/InteriorColor/list',
    method: 'get',
    params
  })
}

// 用户权限设置
export function getUserCarSeriesJurisdiction(params) {
  return request({
    url: '/userCarSeriesJurisdiction/list',
    method: 'get',
    params
  })
}
// 功能名称
export function getFuncName(params) {
  return request({
    url: '/funcName/list',
    method: 'get',
    params
  })
}
// 部门选择
export function getChooseDepartment(params) {
  return request({
    url: '/departmentChoose/list',
    method: 'get',
    params
  })
}
// 限制状态
export function getLimitStatus(params) {
  return request({
    url: '/limitStatus/list',
    method: 'get',
    params
  })
}
// 限制原因
export function getRestrictingReason(params) {
  return request({
    url: '/restrictingReason/list',
    method: 'get',
    params
  })
}
// 是否是etpt
export function getIsETPT(params) {
  return request({
    url: '/isETPT/list',
    method: 'get',
    params
  })
}

// 质量状态
export function getQualityStatus(params) {
  return request({
    url: '/QualityStatus/list',
    method: 'get',
    params
  })
}
// 库存类型
export function getWareHouseType(params) {
  return request({
    url: '/WareHouseType/list',
    method: 'get',
    params
  })
}
export function getCarStatus(params) {
  return request({
    url: '/carStatus/list',
    method: 'get',
    params
  })
}

// 是否显示库存管理
export function getIsShowStock(params) {
  return request({
    url: '/isShowStock/list',
    method: 'get',
    params
  })
}
// 是否订单生产车型
export function getIsProduction(params) {
  return request({
    url: '/isProduction/list',
    method: 'get',
    params
  })
}

export function getScrapType(params) {
  return request({
    url: '/scrapReason/list',
    method: 'get',
    params
  })
}

export function getScrapReason(params) {
  return request({
    url: '/scrapType/list',
    method: 'get',
    params
  })
}

export function getstockHouse(params) {
  return request({
    url: '/stockHouse/list',
    method: 'get',
    params
  })
}
export function getlookupType(params) {
  return request({
    url: '/lookupType/list',
    method: 'get',
    params
  })
}
export function getjiexiState(params) {
  return request({
    url: '/jiexiState/list',
    method: 'get',
    params
  })
}
