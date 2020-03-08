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
  paBuDlrInStoreQueryFindAll: {
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
        billType: '主机厂采购入库',
        inStoreCode: 'N51242155122',
        inStoreDate: '2019-08-12',
        sourceOrderCode: 'H290120125112',
        inStoreAmount: '350000',
        taxRate: '3%',
        storeCostAmount: '365000',
        inStoreVarietyNum: '2',
        supplierShortName: '达利机械',
        relateOrderCode: 'Z15018541188',
        bottomList: [
          {
            partBrandCode: 'CK',
            partNo: '9898784RF1A-A117',
            unit: '个',
            hasReturnQty: '1',
            storeQty: '10',
            canReturnQty: '1',
            returnQty: '1',
            inStorePrice: '530',
            inStoreAmount: '530',
            storePrice: '530',
            storePriceAmount: '500',
            storeCost: '480',
            storeCostAmount: '123456',
            warehouseName: '花都仓库',
            placeCode: 'S05'
          },
          {
            partBrandCode: 'JS',
            partNo: '66051381-A650',
            unit: '件',
            hasReturnQty: '2',
            storeQty: '8',
            canReturnQty: '2',
            returnQty: '2',
            inStorePrice: '55',
            inStoreAmount: '110',
            storePrice: '55',
            storePriceAmount: '110',
            storeCost: '50',
            storeCostAmount: '100',
            warehouseName: '海珠仓库',
            placeCode: 'Z66'
          }
        ]
      },
      {
        dlrId: 2,
        billType: '物流上流采购入库',
        inStoreCode: 'W1245125112',
        inStoreDate: '2019-05-05',
        sourceOrderCode: 'WL512251254',
        inStoreAmount: '120000',
        taxRate: '3%',
        storeCostAmount: '116400',
        inStoreVarietyNum: '1',
        supplierShortName: '老干妈',
        relateOrderCode: 'S125125122',
        bottomList: [
          {
            partBrandCode: 'LK',
            partNo: '898974123-A668',
            unit: '瓶',
            hasReturnQty: '1',
            storeQty: '10',
            canReturnQty: '1',
            returnQty: '1',
            inStorePrice: '125',
            inStoreAmount: '125',
            storePrice: '110',
            storePriceAmount: '2000',
            storeCost: '480',
            storeCostAmount: '4541',
            warehouseName: '黄埔仓库',
            placeCode: 'H70'
          }
        ]
      },
      {
        dlrId: 3,
        billType: '主机厂采购入库',
        inStoreCode: 'SS45124512',
        inStoreDate: '201-07-06',
        sourceOrderCode: 'GG3812452',
        inStoreAmount: '400000',
        taxRate: '5%',
        storeCostAmount: '380000',
        inStoreVarietyNum: '1',
        supplierShortName: '铁朗',
        relateOrderCode: 'A12451245',
        bottomList: [
          {
            partBrandCode: 'TT',
            partNo: '47875412-A003',
            unit: '件',
            hasReturnQty: '2',
            storeQty: '8',
            canReturnQty: '2',
            returnQty: '2',
            inStorePrice: '200',
            inStoreAmount: '400',
            storePrice: '200',
            storePriceAmount: '1600',
            storeCost: '480',
            storeCostAmount: '4541',
            warehouseName: '黄埔仓库',
            placeCode: 'H70'
          }
        ]
      },
      {
        dlrId: 4,
        billType: '自定义备件采购入库',
        inStoreCode: 'Z51515124142',
        inStoreDate: '2019-08-08',
        sourceOrderCode: 'OB8975125',
        inStoreAmount: '30000',
        taxRate: '2%',
        storeCostAmount: '29400',
        inStoreVarietyNum: '2',
        supplierShortName: '花木兰',
        relateOrderCode: 'SZ21155155',
        bottomList: [
          {
            partBrandCode: 'LPL',
            partNo: '00668836-A151',
            unit: '件',
            hasReturnQty: '2',
            storeQty: '8',
            canReturnQty: '2',
            returnQty: '2',
            inStorePrice: '200',
            inStoreAmount: '400',
            storePrice: '200',
            storePriceAmount: '1600',
            storeCost: '480',
            storeCostAmount: '4541',
            warehouseName: '白云仓库',
            placeCode: 'B58'
          }
        ]
      }
    ]
  }
})
const PaBuDlrInStoreDList = Mock.mock({
  paBuDlrInStoreDQueryFindAll: {
    result: '1',
    pageIndex: 1,
    pageSize: 10,
    limit: 20,
    pages: 1,
    records: 4,
    msg: '',
    'rows|3': [
      {
        partBrandCode: 'N',
        b1: '',
        partNo: '295B04NC9A-075',
        partName: '主蓄电池总成',
        unit: '个',
        inStoreQty: '1',
        hasReturnQty: '0',
        storeQty: '10',
        canReturnQty: '1',
        returnQty: '1',
        taxRinStorePriceate: '123,815.60',
        inStoreAmount: '0.00',
        warehouseName: '一仓库',
        placeCode: 'BM001'
      }
    ]
  }
})

export default [

  {
    url:
      paApis.paBuDlrInStoreQueryFindAll.APIUrl +
      cH +
      'v=' +
      paApis.paBuDlrInStoreQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: PaBuDlrInStoreList
      }
    }
  },
  {
    url:
      paApis.paBuDlrInStoreDQueryFindAll.APIUrl +
      cH +
      'v=' +
      paApis.paBuDlrInStoreDQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: PaBuDlrInStoreDList
      }
    }
  },
  {
    url:
    paApis.paBuDlrInStoreMutationSave.APIUrl +
    cH +
    'v=' +
    paApis.paBuDlrInStoreMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        msg: '退库成功'
      }
    }
  }
]
