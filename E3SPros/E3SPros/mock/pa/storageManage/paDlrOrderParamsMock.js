import Mock from 'mockjs'
import { paApis } from '../../../src/api/graphQLApiList/pa'
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

const paDlrOrderParamsList = Mock.mock({
  paDlrOrderParamsQuery: {
    result: '1',
    pageIndex: 1,
    pageSize: 10,
    pages: 1,
    records: 4,
    msg: '查询成功',
    'rows|10': [
      {
        partBrandCn: 'N2035',
        jinjichengdu: '广州风日|长沙鸿海',
        orderType: '华南分仓',
        partNo: '是',
        partName: '12',
        pinci: '6',
        dinghuoshuliang: '库存下限',
        quejianshuliang: '12',
        kucun: '0.3'
      }
    ]
  }
})
export default [
  // 品牌
  {
    url:
      paApis.paDlrOrderParamsQuery.APIUrl +
      cH +
      'v=' +
      paApis.paDlrOrderParamsQuery.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        result: '1',
        data: paDlrOrderParamsList
      }
    }
  }
]
