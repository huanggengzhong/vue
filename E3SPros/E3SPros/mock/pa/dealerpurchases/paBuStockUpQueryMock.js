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

const paBuStockUpQueryList = Mock.mock({
  paBuStockUpQueryFindAll: {
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
        purOrderType: '紧急订单',
        dlrCode: 'H2901',
        dlrShortName: '广州风日',
        stockUpCode: 'FR2051218',
        auditDate: '2019-05-09',
        warehouseName: '华南仓库',
        transportTypeName: '公路',
        purOrderCode: 'P201905091215',
        enoughCapital: '结案',
        stockUpVariety: '1',
        stockUpQty: '1',
        stockUpAmount: '50000'
      },
      {
        dlrId: 2,
        purOrderType: '常规订单',
        dlrCode: 'Z8899',
        dlrShortName: '长沙龙美',
        stockUpCode: 'LM2155122',
        auditDate: '2019-08-08',
        warehouseName: '华中仓库',
        transportTypeName: '公路',
        purOrderCode: 'P201908081103',
        enoughCapital: '已备货',
        stockUpVariety: '1',
        stockUpQty: '4',
        stockUpAmount: '30000'
      },
      {
        dlrId: 3,
        purOrderType: '分仓备货',
        dlrCode: 'L1199',
        dlrShortName: '衡阳国菱',
        stockUpCode: 'GL1205544',
        auditDate: '2018-08-08',
        warehouseName: '华中仓库',
        transportTypeName: '公路',
        purOrderCode: 'P201808085566',
        enoughCapital: '已备货',
        stockUpVariety: '1',
        stockUpQty: '2',
        stockUpAmount: '10000'
      },
      {
        dlrId: 4,
        purOrderType: '紧急订单',
        dlrCode: 'X1024',
        dlrShortName: '上海海韵',
        stockUpCode: 'HY1542581',
        auditDate: '2019-08-14',
        warehouseName: '上海仓库',
        transportTypeName: '公路',
        purOrderCode: 'P201908142145',
        enoughCapital: '结案',
        stockUpVariety: '1',
        stockUpQty: '3',
        stockUpAmount: '15000'
      }
    ]
  }
})

export default [
  // 品牌
  {
    url:
      paApis.paBuStockUpQueryFindAll.APIUrl +
      cH +
      'v=' +
      paApis.paBuStockUpQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: paBuStockUpQueryList
      }
    }
  }
]
