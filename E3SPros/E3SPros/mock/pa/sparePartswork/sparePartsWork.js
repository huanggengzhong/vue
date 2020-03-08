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

const PaBuDlrInStoreList = Mock.mock({
  SparePartsCustomerMaintenance: {
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
        inStoreCode: 'A223',
        abbreviation: 'DFG武汉展厅',
        category: '直营二级经销商',
        linkman: '黄光达',
        contactNumber: '13025123921',
        status: '启动',
        settlementPeriod: '2018-09-13',
        to: '2018-09-14',
        yue: '1',
        creditLine: '0',
        amountSowed: '125125122',
        Organization: ' 广东',
        sourceOrderCode: '500.00',
        facsimile: '嗯 ',
        email: '823043823@qq.com',
        note: '666'
      }
    ],
    rows2: []
  }
})
const PaBuDlrInStoreList2 = Mock.mock({
  dealerSparepartsparameters: {
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
        inStoreCode: 'A223',
        abbreviation: 'DFG武汉展厅'
      }
    ],
    rows2: []
  }
})
const calendarEditorparameters = Mock.mock({
  calendarEditorparameters: {
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
        inStoreCode: 'A223',
        abbreviation: 'DFG武汉展厅'
      }
    ],
    rows2: []
  }
})
export default [
  // {
  //   url:
  //     paApis.SparePartsCustomerMaintenance.APIUrl +
  //     cH +
  //     'v=' +
  //     paApis.SparePartsCustomerMaintenance.ServiceCode,
  //   type: 'post',
  //   response: config => {
  //     return {
  //       code: 20000,
  //       data: PaBuDlrInStoreList
  //     }
  //   }
  // },
  {
    url:
      paApis.dealerSparepartsparameters.APIUrl +
      cH +
      'v=' +
      paApis.dealerSparepartsparameters.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: PaBuDlrInStoreList2
      }
    }
  },
  // {
  //   url:
  //     paApis.calendarEditor.APIUrl +
  //     cH +
  //     'v=' +
  //     paApis.calendarEditor.ServiceCode,
  //   type: 'post',
  //   response: config => {
  //     return {
  //       code: 20000,
  //       data: calendarEditorparameters
  //     }
  //   }
  // }
]
