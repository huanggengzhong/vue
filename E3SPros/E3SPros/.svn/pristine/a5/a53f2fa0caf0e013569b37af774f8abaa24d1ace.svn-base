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

const paWareHouseQueryList = Mock.mock({
  partsOemWareHouseQueryFindAll: {
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
        warehouseCode: 'HK',
        warehouseName: '华南分库',
        isCenterWarehouseDecode: '1',
        isVirtualStoreDecode: '0',
        isLogisticDecode: '0',
        isEnableDecode: '1',
        warehouseAddr: '广州市花都区赤泥镇风神达到8号'
      },
      {
        dlrId: 2,
        warehouseCode: 'SH',
        warehouseName: '上海分库',
        isCenterWarehouseDecode: '1',
        isVirtualStoreDecode: '0',
        isLogisticDecode: '0',
        isEnableDecode: '1',
        warehouseAddr: '上海市浦东区梅花路151号'
      },
      {
        dlrId: 3,
        warehouseCode: 'WS',
        warehouseName: '乌市分库',
        isCenterWarehouseDecode: '0',
        isVirtualStoreDecode: '0',
        isLogisticDecode: '0',
        isEnableDecode: '1',
        warehouseAddr: '乌市百花下路鼎到底19号'
      },
      {
        dlrId: 4,
        warehouseCode: 'SY',
        warehouseName: '沈阳分库',
        isCenterWarehouseDecode: '0',
        isVirtualStoreDecode: '0',
        isLogisticDecode: '0',
        isEnableDecode: '1',
        warehouseAddr: '沈阳市葫芦岛江边镇黑呱呱5号'
      },
      {
        dlrId: 5,
        warehouseCode: 'WH',
        warehouseName: '武汉分库',
        isCenterWarehouseDecode: '1',
        isVirtualStoreDecode: '0',
        isLogisticDecode: '0',
        isEnableDecode: '1',
        warehouseAddr: '武汉市武阳区玄武镇自编2号'
      }
    ]
  }
})
//备件价格维护保存
const partsOemWareHouseMutationSave = Mock.mock({
  partsOemWareHouseMutationSave: {
    result: '1',
    rows: [
      {
        result: '1',
        msg: '保存成功'
      }
    ],
    msg: 'success'
  }
})
export default [
  // 品牌
  {
    url:
      paApis.partsOemWareHouseQueryFindAll.APIUrl +
      cH +
      'v=' +
      paApis.partsOemWareHouseQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: paWareHouseQueryList
      }
    }
  },
  {
    url:
      paApis.partsOemWareHouseMutationSave.APIUrl +
      cH +
      'v=' +
      paApis.partsOemWareHouseMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: partsOemWareHouseMutationSave
      }
    }
  }
]
