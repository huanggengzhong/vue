/**
城市查询
*/
import request from '@/utils/request'
import config from '@/utils/config'

// 厂家地区
export function zonequery(params) {
  return request({
    url: '/zonequery/list',
    method: 'get',
    params
  })
}

// 小类联动
export function accountsmallgroupTypeQuery(params) {
  return request({
    url: '/accountsmallgroupTypeQuery/list',
    method: 'get',
    params
  })
}

// 账户分类
export function accountsmallTypeQuery(params) {
  return request({
    url: '/accountsmallTypeQuery/list',
    method: 'get',
    params
  })
}
// 城市联动
export function getCitygroup(params) {
  return request({
    url: '/getCitygroup/list',
    method: 'get',
    params
  })
}
// 经销商联动
export function querydlrStatusgroup(params) {
  return request({
    url: '/querydlrStatusgroup/list',
    method: 'get',
    params
  })
}

// 经销商
export function querydlrStatus(params) {
  return request({
    url: '/querydlrStatus/list',
    method: 'get',
    params
  })
}

// 资金分类查询
export function getpurcashTypeQuery(params) {
  return request({
    url: '/getpurcashTypeQuery/list',
    method: 'get',
    params
  })
}

// 省份
export function getprovinceQuery(params) {
  return request({
    url: '/getprovinceQuery/list',
    method: 'get',
    params
  })
}

// 值列表
export function lookupValue(params) {
  return request({
    url: '/lookupValue/list',
    method: 'get',
    params
  })
}

// 城市
export function getCity(params) {
  return request({
    url: '/getCity/list',
    method: 'get',
    params
  })
}

// 小区
export function getsmallArea(params) {
  return request({
    url: '/getsmallArea/list',
    method: 'get',
    params
  })
}
// 小区联动
export function getsmallAreagrop(params) {
  return request({
    url: '/getsmallAreagrop/list',
    method: 'get',
    params
  })
}
// 大区
export function getbigArea(params) {
  return request({
    url: '/getbigArea/list',
    method: 'get',
    params
  })
}

// 供应状态
export function getSupplyStatus(params) {
  return request({
    url: '/getSupplyStatus/list',
    method: 'get',
    params
  })
}

// 启用状态
export function getEnabledStatus(params) {
  return request({
    url: '/getEnabledStatus/list',
    method: 'get',
    params
  })
}
