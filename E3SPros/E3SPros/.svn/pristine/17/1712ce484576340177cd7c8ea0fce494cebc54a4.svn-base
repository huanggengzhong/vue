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

const paNetToStoreList = Mock.mock({
  netToStoreQueryFindAll: {
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
        carBrandCn: '东风日产',
        dlrCode: 'F8888',
        dlrShortName: '广州风日',
        provinceName: '广东省广州市',
        warehouseName: '1',
        isEnable: '1',
        remark: '华南地区主仓库'
      },
      {
        dlrId: 2,
        carBrandCn: '东风启辰',
        dlrCode: 'S6605',
        dlrShortName: '长沙神龙',
        provinceName: '湖南省长沙市',
        warehouseName: '2',
        isEnable: '0',
        remark: '湖南地区主仓库'
      },
      {
        dlrId: 3,
        carBrandCn: '东风日产',
        dlrCode: 'S1190',
        dlrShortName: '衡阳国菱',
        provinceName: '湖南省衡阳市',
        warehouseName: '2',
        isEnable: '0',
        remark: '华中地区主仓库'
      },
      {
        dlrId: 4,
        carBrandCn: '东风日产',
        dlrCode: 'G2900',
        dlrShortName: '广州赛洛韦',
        provinceName: '广东省广州市',
        warehouseName: '3',
        isEnable: '1',
        remark: '华南地区主仓库'
      }
    ]
  }
})
//备件价格维护保存
const netToStoreMutationSave = Mock.mock({
  netToStoreMutationSave: {
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
      paApis.netToStoreQueryFindAll.APIUrl +
      cH +
      'v=' +
      paApis.netToStoreQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: paNetToStoreList
      }
    }
  },
  {
    url:
      paApis.netToStoreMutationSave.APIUrl +
      cH +
      'v=' +
      paApis.netToStoreMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: netToStoreMutationSave
      }
    }
  }
]
