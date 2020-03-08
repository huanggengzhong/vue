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

const paBuOemDlrAccountQueryList = Mock.mock({
  paBuOemDlrAccountQueryPriceFindAll: {
    result: '1',
    pageIndex: 1,
    pageSize: 10,
    limit: 20,
    pages: 1,
    records: 4,
    msg: '',
    rows: [
      {
        dlrId: 1,
        carBrandCn: '东风日产',
        dlrCode: 'H2901',
        dlrShortName: '广州风日',
        dlrAccountName: '日产账户',
        canUseMoney: '987654321',
        dlrBalance: 654154555,
        creditQuota: 1000000,
        frozenMoney: 560000,
        remit: 3551155,
        adding: 1515152,
        subtract: 5551221,
        balanceMoney: 22121112,
        operDate: '2019-08-07'
      },
      {
        dlrId: 1,
        carBrandCn: '英菲尼迪',
        dlrCode: 'KK668',
        dlrShortName: '广州神龙',
        dlrAccountName: '英菲尼迪账户',
        canUseMoney: '545215512',
        dlrBalance: 21512121,
        creditQuota: 1000000,
        frozenMoney: 560000,
        remit: 1212122,
        adding: 1512121,
        subtract: 12235112,
        balanceMoney: 2215155,
        operDate: '2019-08-01'
      },
      {
        dlrId: 1,
        carBrandCn: '东风启辰',
        dlrCode: 'ZZ251',
        dlrShortName: '广州红利',
        dlrAccountName: '启辰账户',
        canUseMoney: '34323444',
        dlrBalance: 23432432,
        creditQuota: 1000000,
        frozenMoney: 560000,
        remit: 2323122,
        adding: 3434343,
        subtract: 5551221,
        balanceMoney: 22121112,
        operDate: '2019-08-05'
      }
    ]
  }
})

export default [
  // 品牌
  {
    url:
      paApis.paBuOemDlrAccountQueryPriceFindAll.APIUrl +
      cH +
      'v=' +
      paApis.paBuOemDlrAccountQueryPriceFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: paBuOemDlrAccountQueryList
      }
    }
  }
]
