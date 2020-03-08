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

const paPartsWareHouseList = Mock.mock({
  partsDlrWareHouseQueryFindAll: {
    result: '1',
    pageIndex: 1,
    pageSize: 10,
    limit: 20,
    pages: 1,
    records: 4,
    msg: '',
    rows: [
      {
        warehouseId: 1,
        warehouseCode: 10,
        warehouseName: '天河员村仓',
        isEnable: '1',
        hasPart: 0,
        hasPlace: 0,
        remark: '华南地区分仓库-启辰车型'
      },
      {
        warehouseId: 2,
        warehouseCode: 15,
        warehouseName: '海珠区琶洲仓',
        isEnable: '0',
        hasPart: 1,
        hasPlace: 0,
        remark: '华南地区分仓库-启辰车型'
      },
      {
        warehouseId: 3,
        warehouseCode: 20,
        warehouseName: '白云区三元里仓库',
        isEnable: '1',
        hasPart: 1,
        hasPlace: 0,
        remark: '华南地区分仓库-启辰车型'
      },
      {
        warehouseId: 4,
        warehouseCode: 100,
        warehouseName: '花都区总仓库',
        isEnable: '1',
        hasPart: 0,
        hasPlace: 1,
        remark: '华南地区分仓库-日产车型'
      }
    ]
  }
})

//备件仓库仓位维护保存
const partsDlrPlaceMutationSave = Mock.mock({
  partsDlrPlaceMutationSave: {
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
//备件仓库仓位删除
const partsDlrPlaceMutationDelete = Mock.mock({
  partsDlrPlaceMutationDelete: {
    result: '1',
    rows: [
      {
        result: '1',
        msg: '删除成功'
      }
    ],
    msg: 'success'
  }
})
export default [
  // 品牌
  {
    url:
      paApis.partsDlrWareHouseQueryFindAll.APIUrl +
      cH +
      'v=' +
      paApis.partsDlrWareHouseQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: paPartsWareHouseList
      }
    }
  },
  {
    url:
      paApis.partsDlrPlaceMutationSave.APIUrl +
      cH +
      'v=' +
      paApis.partsDlrPlaceMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: partsDlrPlaceMutationSave
      }
    }
  },
  {
    url:
      paApis.partsDlrPlaceMutationDelete.APIUrl +
      cH +
      'v=' +
      paApis.partsDlrPlaceMutationDelete.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: partsDlrPlaceMutationDelete
      }
    }
  }
]
