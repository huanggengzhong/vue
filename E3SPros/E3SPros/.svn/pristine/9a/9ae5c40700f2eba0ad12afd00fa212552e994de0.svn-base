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

const data = Mock.mock({
  PartsCarType: {
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
      carTypeCode: '35232235',
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
    url: seApis.PartsCarType.APIUrl + cH + 'v=' + seApis.PartsCarType.ServiceCode,
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

