/**
* description: 储区模拟数据
* author: linwm
* createdDate: 2019-07-24
*/
import Mock from 'mockjs'
const cH = '/'

//储区查询
const veStockArea = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veStockArea: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [
        {
          carStockAreaId:'1',
          carHouseName: '花都中心库',
          carAreaName: '花都储区',
          carAreaManger: '管理员',
          isEnable: "1",
          remark: "无",
          updateControlId: '12caee2daceb40e7bd2601cb34893864'
        },
        {
          carStockAreaId:'2',
          carHouseName: '大连中心库',
          carAreaName: '大连储区',
          carAreaManger: '管理员',
          isEnable: "1",
          remark: "无",
          updateControlId: '22caee2daceb40e7bd2601cb34893864'
        },
        {
          carStockAreaId:'3',
          carHouseName: '郑州中心库',
          carAreaName: '郑州储区',
          carAreaManger: '管理员',
          isEnable: "1",
          remark: "无",
          updateControlId: '32caee2daceb40e7bd2601cb34893864'
        }
      ]
    }
  }
})

// 储区保存
const veStockAreaSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veStockAreaSave: {
      result: '1',
      msg: ''
    }
  }
})

export default [
  {
    url: '/ly/mp/busicen/scs/graphql.do' + cH + 'v=veStockAreaSave',
    type: 'post',
    response: config => {
      return veStockAreaSave
    }
  },
  {
    url: '/ly/mp/busicen/scs/graphql.do' + cH + 'v=veStockArea',
    type: 'post',
    response: config => {
      return veStockArea
    }
  }
]