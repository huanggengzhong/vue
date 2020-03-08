import request from '@/utils/request'
import qs from 'qs'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'post',
    data: params
  })
}

export function getVehicleConfigurationList(params) {
  return request({
    url: '/vehicleConfiguration/list',
    method: 'post',
    data: params
  })
}

export function getColorMaintenanceList(params) {
  return request({
    url: '/colorMaintenance/list',
    method: 'post',
    data: params
  })
}

export function getListQuery(data) {
  return request({
    url: '/listQuery/add',
    method: 'post',
    data
  })
}

export function getInteriorColorMainList(data) {
  return request({
    url: '/interiorColorMain/list',
    method: 'post',
    data
  })
}

export function getAccountMaintenanceList(data) {
  return request({
    url: '/accountMaintenance/list',
    method: 'post',
    data
  })
}

export function testTableColConfig(data) {
  return request({
    url: 'http://localhost:8008/yzc/eccommon/ilogs/testdycols.do?token=HRYrhvsHb12oFEYuDoEIGJQL1gmkKuXYHiIEDI9wI9c%3d',
    method: 'get',
    data,
    noHeader: true
  })
}

export function testTableCompConfig(data) {
  return request({
    url: 'http://localhost:8008/yzc/eccommon/ilogs/testdycomps.do?token=HRYrhvsHb12oFEYuDoEIGJQL1gmkKuXYHiIEDI9wI9c%3d',
    method: 'get',
    data,
    noHeader: true
  })
}

export function testPageConfig(data) {
  return request({
    url: 'http://localhost:8008/yzc/eccommon/ilogs/testdypages.do?token=HRYrhvsHb12oFEYuDoEIGJQL1gmkKuXYHiIEDI9wI9c%3d&' + qs.stringify(data),
    method: 'get',
    data,
    noHeader: true
  })
}
