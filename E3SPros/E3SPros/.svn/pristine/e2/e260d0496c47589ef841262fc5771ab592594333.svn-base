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

const veBuDlrAccountRLogList = Mock.mock({
  veBuDlrAccountRLogQueryFindAll: {
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
        dlrCode: 'H2901',
        dlrShortName: '广州风日',
        amountSource: '预扣金额',
        tranAmount: 120000,
        orderCode: 'HDBC2018213125',
        balance: 15000,
        operDate: '2019-05-05',
        operMan: '张三',
        remark: ''
      },
      {
        dlrId: 2,
        dlrCode: 'HAC无聊哥',
        dlrShortName: '东营恶霸',
        amountSource: '转款',
        tranAmount: 113645,
        orderCode: 'HDBC20150051135',
        balance: 5000,
        operDate: '2019-07-15',
        operMan: '人已虚',
        remark: ''
      },
      {
        dlrId: 3,
        dlrCode: 'MLXG',
        dlrShortName: '武汉火锅',
        amountSource: '预扣金额',
        tranAmount: 1544221,
        orderCode: 'HDBC20190485412',
        balance: 10000,
        operDate: '2019-05-05',
        operMan: '张三',
        remark: ''
      }
    ]
  }
})

export default [
  // 品牌
  {
    url:
      paApis.veBuDlrAccountRLogQueryFindAll.APIUrl +
      cH +
      'v=' +
      paApis.veBuDlrAccountRLogQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: veBuDlrAccountRLogList
      }
    }
  }
]
