import Mock from 'mockjs'
import { seApis } from '../../src/api/graphQLApiList/se'
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
  ChooseCarType001: {
    'T.CAR_BRAND_CODE': '1',
    'T.CAR_BRAND_CN': '1',
    'T.CAR_BRAND_EN': '1'
  }
})

const data = Mock.mock({
  ChooseCarType002: {
    'result': '1',
    'rows': [{
      carTypeCode: '3525235',
      carTypeCn: 'GSDGSDFS',
      carSeriesCode: 'f23twewe',
      carSeriesCN: 'rwerwer23',
      carSeriesEn: 'r23rfewf',
      carBrandCode: 'fqwfsd',
      carBrandCn: 'gwesd1',
      carBrandEn: '1'
    },
    {
      carTypeCode: '3525235',
      carTypeCn: 'GSDGSDFS',
      carSeriesCode: 'gewfds',
      carSeriesCN: 'sfdwef',
      carSeriesEn: '32rfewf',
      carBrandCode: 'sdff',
      carBrandCn: 'r32r',
      carBrandEn: '1'
    }
    ]
  }
})

export default [
  {
    url: seApis.ChooseCarType001.APIUrl + cH + 'v=' + seApis.ChooseCarType001.ServiceCode,
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
    url: seApis.ChooseCarType002.APIUrl + cH + 'v=' + seApis.ChooseCarType002.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: data
      }
    }
  }
]

