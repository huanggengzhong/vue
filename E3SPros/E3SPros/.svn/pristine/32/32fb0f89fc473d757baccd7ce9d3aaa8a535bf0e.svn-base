import Mock from 'mockjs'
import { seApis } from '../../../src/api/graphQLApiList/se'
const cH = '/'
var cloneObj = function(obj) {
  var newObj = {}
  if (obj instanceof Array) {
    newObj = []
  }
  for (var key in obj) {
    var val = obj[key]
    newObj[key] = typeof val === 'object' ? cloneObj(val) : val
  }
  return newObj
}
const initData = Mock.mock({
  ServiceCarType001: {
    'result': '1',
    'msg': '查询成功！',
    'rows': [{
      CAR_BRAND_CODE: '1',
      CAR_BRAND_CN: '1',
      CAR_BRAND_EN: '1',
      OEM_CODE: '1',
      GROUP_CODE: '1',
      OEM_ID: '1',
      GROUP_ID: '1'
    }]
  }
})

const saveData = Mock.mock({
  ServiceCarType005: {
    'result': '1',
    'msg': '保存成功！'
  }
})

const importData = Mock.mock({
  ServiceCarType004: {
    'result': '1',
    'msg': '保存成功！'
  }
})

const exprotData = Mock.mock({
  ServiceCarType003: {
    'result': '1',
    'msg': '查询成功！',
    'pageindex': 1,
    'pages': 1,
    'records': 1,
    'rows': [{
      'CAR_BRAND_CODE': '1',
      'CAR_BRAND_CN': '1',
      'CAR_SERIES_CODE': '1',
      'CAR_SERIES_CN': '1',
      'CAR_SERIES_CODES': '1',
      'CAR_SERIES_CNS': '1',
      'SMALL_CAR_TYPE_CODE': '1',
      'SMALL_CAR_TYPE_CN': '1',
      'SERVICE_CAR_TYPE': '1',
      'IS_DUTY_CAR_TYPE': '1',
      'IS_DUTY_CAR_TYPE_CN': '1',
      'SMALL_CAR_TYPE_ID': '1',
      'UPDATE_CONTROL_ID': '1',
      'S_CARSERIES_CODE': '1',
      'CAR_CONFIG_CODE': '1',
      'POWER_TYPE': '1',
      'SUPPLY_STATUS_NAME': '1',
      'SUPPLY_STATUS': '1',
      'CAR_CONFIG_CN': '1',
      'OEM_CODE': '1',
      'GROUP_CODE': '1',
      'OEM_ID': '1',
      'GROUP_ID': '1'
    }]
  }
})

const data = Mock.mock({
  ServiceCarType002: {
    'result': '1',
    'msg': '查询成功！',
    'pageindex': 1,
    'pages': 1,
    'records': 1,
    'rows': [{
      'CAR_BRAND_CODE,': '1',
      'CAR_BRAND_CN': '1',
      'CAR_SERIES_CODE': '1',
      'CAR_SERIES_CN': '1',
      'CAR_SERIES_CODES': '1',
      'CAR_SERIES_CNS': '1',
      'SMALL_CAR_TYPE_CODE': '1',
      'SMALL_CAR_TYPE_CN': '1',
      'SERVICE_CAR_TYPE': '1',
      'IS_DUTY_CAR_TYPE': '1',
      'IS_DUTY_CAR_TYPE_CN': '1',
      'SMALL_CAR_TYPE_ID': '1',
      'UPDATE_CONTROL_ID': '1',
      'S_CARSERIES_CODE': '1',
      'CAR_CONFIG_CODE': '1',
      'POWER_TYPE': '1',
      'SUPPLY_STATUS_NAME': '1',
      'SUPPLY_STATUS': '1',
      'CAR_CONFIG_CN': '1',
      'OEM_CODE': '1',
      'GROUP_CODE': '1',
      'OEM_ID': '1',
      'GROUP_ID': '1'
    },
    {
      'CAR_BRAND_CODE,': '2',
      'CAR_BRAND_CN': '12',
      'CAR_SERIES_CODE': '13',
      'CAR_SERIES_CN': '14',
      'CAR_SERIES_CODES': '12',
      'CAR_SERIES_CNS': '13',
      'SMALL_CAR_TYPE_CODE': '13',
      'SMALL_CAR_TYPE_CN': '13',
      'SERVICE_CAR_TYPE': '13',
      'IS_DUTY_CAR_TYPE': '123',
      'IS_DUTY_CAR_TYPE_CN': '12',
      'SMALL_CAR_TYPE_ID': '13',
      'UPDATE_CONTROL_ID': '12',
      'S_CARSERIES_CODE': '12',
      'CAR_CONFIG_CODE': '12',
      'POWER_TYPE': '14',
      'SUPPLY_STATUS_NAME': '1',
      'SUPPLY_STATUS': '1',
      'CAR_CONFIG_CN': '1',
      'OEM_CODE': '1',
      'GROUP_CODE': '1',
      'OEM_ID': '1',
      'GROUP_ID': '1'
    },
    {
      'CAR_BRAND_CODE,': '13',
      'CAR_BRAND_CN': '14',
      'CAR_SERIES_CODE': '12',
      'CAR_SERIES_CN': '12',
      'CAR_SERIES_CODES': '11',
      'CAR_SERIES_CNS': '14',
      'SMALL_CAR_TYPE_CODE': '15',
      'SMALL_CAR_TYPE_CN': '13',
      'SERVICE_CAR_TYPE': '12',
      'IS_DUTY_CAR_TYPE': '13',
      'IS_DUTY_CAR_TYPE_CN': '13',
      'SMALL_CAR_TYPE_ID': '12',
      'UPDATE_CONTROL_ID': '12',
      'S_CARSERIES_CODE': '12',
      'CAR_CONFIG_CODE': '11',
      'POWER_TYPE': '13',
      'SUPPLY_STATUS_NAME': '1',
      'SUPPLY_STATUS': '1',
      'CAR_CONFIG_CN': '1',
      'OEM_CODE': '1',
      'GROUP_CODE': '1',
      'OEM_ID': '1',
      'GROUP_ID': '1'
    }
    ]
  }
})

export default [
  {
    url: seApis.ServiceCarType001.APIUrl + cH + 'v=' + seApis.ServiceCarType001.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: initData
      }
    }
  },
  {
    url: seApis.ServiceCarType002.APIUrl + cH + 'v=' + seApis.ServiceCarType002.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: data
      }
    }
  },
  {
    url: seApis.ServiceCarType003.APIUrl + cH + 'v=' + seApis.ServiceCarType003.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: exprotData
      }
    }
  },
  {
    url: seApis.ServiceCarType004.APIUrl + cH + 'v=' + seApis.ServiceCarType004.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: importData
      }
    }
  },
  {
    url: seApis.ServiceCarType005.APIUrl + cH + 'v=' + seApis.ServiceCarType005.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: saveData
      }
    }
  }
]

