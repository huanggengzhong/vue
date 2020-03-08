import Mock from 'mockjs'
const cH = '/'

const getPaAccountLsit = Mock.mock({
  result: '1',
  pageIndex: 1,
  pageSize: 10,
  limit: 20,
  pages: 1,
  records: 4,
  msg: '',
  rows: [{
    warehouseCode: 'H2901',
    warehouseName: '花都仓库',
    isCenterWarehouse: 0,
    isVirtualStore: 0,
    isLogistic: 1,
    isEnable: 1,
    warehouseAddr: '花都区风神达到18号',
    remark: '华南地区中心仓库'
  },
  {
    warehouseCode: 'F3500',
    warehouseName: '成都仓库',
    isCenterWarehouse: 1,
    isVirtualStore: 0,
    isLogistic: 0,
    isEnable: 1,
    warehouseAddr: '成都市黄牛岗路185号',
    remark: '西南地区中心仓库'
  },
  {
    warehouseCode: 'T1500',
    warehouseName: '华北仓库',
    isCenterWarehouse: 1,
    isVirtualStore: 1,
    isLogistic: 1,
    isEnable: 1,
    warehouseAddr: '河北省邯郸市吉家庄',
    remark: '华北地区中心仓库'
  },
  {
    warehouseCode: 'G1503',
    warehouseName: '西北仓库',
    isCenterWarehouse: 1,
    isVirtualStore: 0,
    isLogistic: 1,
    isEnable: 0,
    warehouseAddr: '甘肃省宁夏市西格列',
    remark: '西北地区中心仓库'
  }
  ]
})

export default [
  // 品牌
  {
    url: '/ly/mp/busicen/scc/graphql.do' + cH + 'partsOemWareHouseQueryFindAll',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: getPaAccountLsit
      }
    }
  }
]