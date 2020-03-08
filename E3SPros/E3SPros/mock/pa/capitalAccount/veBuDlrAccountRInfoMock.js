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

const veBuDlrAccountRInfoQueryFindAll = Mock.mock({
  veBuDlrAccountRInfoQueryFindAll:
  {
    result: '1',
    pageIndex: 1,
    pageSize: 10,
    limit: 20,
    pages: 1,
    records: 4,
    msg: '',
    rows: [{
      'dlrId': 1,
      'dlrCode': 'H2901',
      'dlrShortName': '广州丰日',
      'dlrBalance': 1000000,
      'frozenMoney': 300000,
      'canUseMoney': '',
      'pvAccount': '1',
      'dlrAccount': '0',
      'tranAmount': '100000',
      'businessType': '1',
      'businessClass': '0',
      'businessDate': '2019-09-01',
      'remark': ''
    },
    {
      'dlrId': 2,
      'dlrCode': 'SB110',
      'dlrShortName': '沈阳瑞龙',
      'dlrBalance': 300000,
      'frozenMoney': 100000,
      'canUseMoney': '',
      'pvAccount': '0',
      'dlrAccount': '1',
      'tranAmount': '50000',
      'businessType': '1',
      'businessClass': '0',
      'businessDate': '2019-08-05',
      'remark': ''
    },
    {
      'dlrId': 3,
      'dlrCode': 'AK479',
      'dlrShortName': '芜湖先锋',
      'dlrBalance': 5000000,
      'frozenMoney': 500000,
      'canUseMoney': '',
      'pvAccount': '0',
      'dlrAccount': '1',
      'tranAmount': '30000',
      'businessType': '0',
      'businessClass': '1',
      'businessDate': '2019-09-02',
      'remark': ''
    },
    {
      'dlrId': 4,
      'dlrCode': 'UZi86',
      'dlrShortName': '柳州芭提雅',
      'dlrBalance': 2000000,
      'frozenMoney': 500000,
      'canUseMoney': '',
      'pvAccount': '1',
      'dlrAccount': '1',
      'tranAmount': '20000',
      'businessType': '1',
      'businessClass': '0',
      'businessDate': '2019-06-12',
      'remark': ''
    },
    {
      'dlrId': 5,
      'dlrCode': 'S550',
      'dlrShortName': '深圳洛维基',
      'dlrBalance': 4000000,
      'frozenMoney': 200000,
      'canUseMoney': '',
      'pvAccount': '0',
      'dlrAccount': '0',
      'tranAmount': '1000',
      'businessType': '0',
      'businessClass': '1',
      'businessDate': '2019-08-15',
      'remark': ''
    }
    ]
  }
})

export default [
  // 品牌
  {
    url: paApis.veBuDlrAccountRInfoQueryFindAll.APIUrl + cH + 'v=' + paApis.veBuDlrAccountRInfoQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: veBuDlrAccountRInfoQueryFindAll
      }
    }
  }
]
