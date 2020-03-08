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

const paOutBoundQueryList = Mock.mock({

  paOutBoundQuery: {
    result: '1',
    pageIndex: 1,
    pageSize: 10,
    limit: 20,
    pages: 1,
    records: 4,
    msg: '',
    'rows|10': [
      {
        a1: '121312dsaw1',
        a2: '维修出库',
        a3: '关联工单',
        a4: '122131s792q',
        a5: '内部单位',
        a6: '王五',
        a7: '保修件',
        a8: '10',
        a9: '10000',
        a10: '无'

      }

    ]
  }
})
const paOutBoundQueryDList = Mock.mock({

  paOutBoundDQueryDFindAll: {
    result: '1',
    pageIndex: 1,
    pageSize: 10,
    limit: 20,
    pages: 1,
    records: 4,
    msg: '',
    'rows|10': [
      {
        a1: '9301025',
        a2: '螺塞',
        a3: 'EA',
        a4: '9.16',
        a5: '1.00',
        a6: '9.16',
        a7: '仓库3',
        a8: 'KA2-7'

      }

    ]
  }
})
export default [
  // 品牌
  {
    url:
      paApis.paOutBoundQuery.APIUrl +
      cH +
      'v=' +
      paApis.paOutBoundQuery.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        result: '1',
        data: paOutBoundQueryList
      }
    }
  },
  {
    url:
      paApis.paOutBoundDQueryDFindAll.APIUrl +
      cH +
      'v=' +
      paApis.paOutBoundDQueryDFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        result: '1',
        data: paOutBoundQueryDList
      }
    }
  }
]
