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
  ChooseCarSeries002: {
    'result': '1',
    'rows': [{
      CAR_SERIES_CODE: '1',
      CAR_SERIES_CN: 'SGDSV',
      CAR_SERIES_EN: '1',
      CAR_BRAND_CODE: '1',
      CAR_BRAND_CN: '1',
      CAR_BRAND_EN: '1'
    },
    {
      CAR_SERIES_CODE: '2',
      CAR_SERIES_CN: 'FSDVSV',
      CAR_SERIES_EN: '2',
      CAR_BRAND_CODE: '2',
      CAR_BRAND_CN: '2',
      CAR_BRAND_EN: '2'
    }, {
      CAR_SERIES_CODE: '3',
      CAR_SERIES_CN: 'XDBSDSD',
      CAR_SERIES_EN: '3',
      CAR_BRAND_CODE: '3',
      CAR_BRAND_CN: '3',
      CAR_BRAND_EN: '3'
    }
    ]
  }
})

const ChooseCarSeries002 = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    ChooseCarSeries002: {
      'result': '1',
      'rows': [
        {
          CAR_SERIES_CODE: '1',
          CAR_SERIES_CN: 'SGDSV',
          CAR_SERIES_EN: '1',
          CAR_BRAND_CODE: '1',
          CAR_BRAND_CN: '1',
          CAR_BRAND_EN: '1'
        },
        {
          CAR_SERIES_CODE: '2',
          CAR_SERIES_CN: 'FSDVSV',
          CAR_SERIES_EN: '2',
          CAR_BRAND_CODE: '2',
          CAR_BRAND_CN: '2',
          CAR_BRAND_EN: '2'
        }, {
          CAR_SERIES_CODE: '3',
          CAR_SERIES_CN: 'XDBSDSD',
          CAR_SERIES_EN: '3',
          CAR_BRAND_CODE: '3',
          CAR_BRAND_CN: '3',
          CAR_BRAND_EN: '3'
        }
      ]
    }
  }
})

export default [
  // {
  //   url: seApis.ChooseCarSeries002.APIUrl + cH + 'v=' + seApis.ChooseCarSeries002.ServiceCode,
  //   type: 'post',
  //   response: config => {
  //     return {
  //       result: '1',
  //       msg: 'success',
  //       data: data
  //     }
  //   }
  // },
  {
    url: seApis.ChooseCarSeries002.APIUrl + cH + 'v=' + seApis.ChooseCarSeries002.ServiceCode,
    type: 'post',
    response: config => {
      return ChooseCarSeries002
    }
  }
]

