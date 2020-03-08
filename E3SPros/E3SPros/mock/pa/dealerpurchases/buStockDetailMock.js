import Mock from 'mockjs'
import { paApis } from '../../../src/api/graphQLApiList/pa'
const cH = '/'

const paBuStockUpQueryDList = Mock.mock({
  paBuStockUpDQueryFindAll: {
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
        partNo: 'P20181212A-01',
        partName: '轮胎',
        oldPartNo: 'P20181212A-02',
        stockUpQty: '1',
        unit: '件',
        price: '500',
        saleAmount: '10000',
        partBrandName: '马牌',
        outStoreCode: '215045512555',
        outStoreQty: '1',
        outStoreAmount: '500'
      },
      {
        dlrId: 2,
        partNo: 'P20190811-02',
        partName: '机油',
        oldPartNo: 'P20190811-03',
        stockUpQty: '1',
        unit: '瓶',
        price: '88',
        saleAmount: '10000',
        partBrandName: '嘉实多',
        outStoreCode: '054124421',
        outStoreQty: '10',
        outStoreAmount: '880'
      },
      {
        dlrId: 3,
        partNo: 'P20180505-03',
        partName: '空调机',
        oldPartNo: 'P20180505-04',
        stockUpQty: '2',
        unit: '件',
        price: '580',
        saleAmount: '10000',
        partBrandName: '划得来',
        outStoreCode: '2121151',
        outStoreQty: '2',
        outStoreAmount: '1060'
      }
    ]
  }
})

export default [
  // 品牌
  {
    url:
      paApis.paBuStockUpDQueryFindAll.APIUrl +
      cH +
      'v=' +
      paApis.paBuStockUpDQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: paBuStockUpQueryDList
      }
    }
  }
]
