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
        invoiceNo: 'WQ11121',
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
        billNo: 'BWA1231412',
        sourceOrderCode: 'H2901171222AU01',
        partBrandName: '9301025',
        partBrandCode: '2957DSCk-SSD',
        partNo: 'N',
        a1: '主蓄电池总成',
        warehouseName: '东风备件库',
        placeCode: '12-A1-0001',
        inQty: '1',
        hasInQty: '0',
        a2: '0',
        canInQty: '1',
        inQtyTemp: '1',
        unit: '1',
        taxRate: '13%',
        a4: '130',
        storePriceAmount: '1000.00',
        a5: '无',
        a6: '',
        a7: '1',
        a8: '0',
        oldPartNo: '295B03NKDB-075',
        oldPartName: '主蓄电池总成',
        oldPartQty: '1',
        remarks: ''

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
  // {
  //   url:
  //     paApis.paBuDlrInStoreMutationInStoreSave.APIUrl +
  //     cH +
  //     'v=' +
  //     paApis.paBuDlrInStoreMutationInStoreSave.ServiceCode,
  //   type: 'post',
  //   response: config => {
  //     return {
  //       code: 20000,
  //       result: '1',
  //       msg: '保存成功'
  //     }
  //   }
  // }
]
