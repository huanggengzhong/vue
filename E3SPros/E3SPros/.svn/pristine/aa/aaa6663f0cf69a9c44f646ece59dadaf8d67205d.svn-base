/**
* description: 储位储位模拟数据
* author: linwm
* createdDate: 2019-07-24
*/
import Mock from 'mockjs'

const cH = '/'
//储位查询
const veStockPlace = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veStockPlace: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [
        {
          carStockHousePlaceId:'1',
          carHouseName: '花都中心库',
          carAreaName: '花都储区',
          carPlaceName: '花都储位',
          carPlaceManger: '管理员',
          isEnable: "1",
          updateControlId: '42caee2daceb40e7bd2601cb34893864'
        },
        {
          carStockHousePlaceId:'2',
          carHouseName: '大连中心库',
          carAreaName: '大连储区',
          carPlaceName: '大连储位',
          carPlaceManger: '管理员',
          isEnable: "1",
          updateControlId: '52caee2daceb40e7bd2601cb34893864'
        },
        {
          carStockHousePlaceId:'3',
          carHouseName: '郑州中心库',
          carAreaName: '郑州储区',
          carPlaceName: '郑州储位',
          carPlaceManger: '管理员',
          isEnable: "1",
          updateControlId: '62caee2daceb40e7bd2601cb34893864'
        },
      ]
    }
  }
})

// 储位保存
const veStockPlaceSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veStockPlaceSave: {
      result: '1',
      msg: ''
    }
  }
})

export default [
  {
    url: '/ly/mp/busicen/scs/graphql.do' + cH + 'v=veStockPlace',
    type: 'post',
    response: config => {
      return veStockPlace
    }
  },
  {
    url: '/ly/mp/busicen/scs/graphql.do' + cH + 'v=veStockPlaceSave',
    type: 'post',
    response: config => {
      return veStockPlaceSave
    }
  }
]

