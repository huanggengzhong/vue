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

const paDlstorageQueryFindAllList = Mock.mock({

  paDlstorageQueryFindAll: {
    result: '1',
    pageIndex: 1,
    pageSize: 10,
    limit: 20,
    pages: 1,
    records: 4,
    msg: '',
    'rows|10': [
      {
        billNo: 'BWA1231412',
        billType: '总部采购入库',
        billDate: '2018/12/11',
        deliveryNo: 'C19010101',
        deliveryDate: '2019/01/11',
        invoiceNO: 'WQ11121',
        state: '部分入库',
        package: '1',
        total: '10',
        amount: '1200.00',
        receiptDate: '2019/02/02',
        transporters: '顺丰',
        shippingPoint: '无',
        taxRate: '16',
        remarks: '无'

      }

    ]
  }
})
const paDlstorageQueryDFindAllList = Mock.mock({

  paDlstorageQueryDFindAll: {
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
      paApis.paDlstorageQueryFindAll.APIUrl +
      cH +
      'v=' +
      paApis.paDlstorageQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        result: '1',
        data: paDlstorageQueryFindAllList
      }
    }
  },
  {
    url:
      paApis.paDlstorageQueryDFindAll.APIUrl +
      cH +
      'v=' +
      paApis.paDlstorageQueryDFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        result: '1',
        data: paDlstorageQueryDFindAllList
      }
    }
  }
]
