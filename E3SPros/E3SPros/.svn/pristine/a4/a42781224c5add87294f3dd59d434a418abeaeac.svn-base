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
  ServiceCarSeries001: {
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
  ServiceCarSeries004: {
    'result': '1',
    'msg': '保存成功！'
  }
})

const data = Mock.mock({
  ServiceCarSeries002: {
    'result': '1',
    'msg': '查询成功！',
    'rows': [{
      CAR_BRAND_CN: '东风日产',
      CAR_SERIES_CODE: 'SBSDWEFSDS',
      CAR_SERIES_CN: '1ASD',
      S_CARSERIES_CODE: '1VAS',
      S_CARSERIES_DESC: '1CAS',
      CAR_BRAND_CODE: 'FASCAS1',
      CAR_SERIES_ID: '1ASVV',
      UPDATE_CONTROL_ID: '1',
      OEM_CODE: '1',
      GROUP_CODE: '1',
      OEM_ID: '1',
      GROUP_ID: '1'
    },
    {
      CAR_BRAND_CN: '1东风日产',
      CAR_SERIES_CODE: 'GWEFDSVSD',
      CAR_SERIES_CN: 'FAS',
      S_CARSERIES_CODE: '1SAF',
      S_CARSERIES_DESC: '1ASVXZ',
      CAR_BRAND_CODE: '1CZXC',
      CAR_SERIES_ID: '1AVSDA',
      UPDATE_CONTROL_ID: '1',
      OEM_CODE: '1',
      GROUP_CODE: '1',
      OEM_ID: '1',
      GROUP_ID: '1'
    },
    {
      CAR_BRAND_CN: '1东风日产',
      CAR_SERIES_CODE: '3VSDFWFC',
      CAR_SERIES_CN: '1ADSA',
      S_CARSERIES_CODE: '1SADAS',
      S_CARSERIES_DESC: '1VASCAS',
      CAR_BRAND_CODE: '1ASDSACZDV',
      CAR_SERIES_ID: '1',
      UPDATE_CONTROL_ID: '1',
      OEM_CODE: '1',
      GROUP_CODE: '1',
      OEM_ID: '1',
      GROUP_ID: '1'
    }
    ]
  }
})

export default [
  {
    url: seApis.ServiceCarSeries001.APIUrl + cH + 'v=' + seApis.ServiceCarSeries001.ServiceCode,
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
    url: seApis.ServiceCarSeries002.APIUrl + cH + 'v=' + seApis.ServiceCarSeries002.ServiceCode,
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
    url: seApis.ServiceCarSeries004.APIUrl + cH + 'v=' + seApis.ServiceCarSeries004.ServiceCode,
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

