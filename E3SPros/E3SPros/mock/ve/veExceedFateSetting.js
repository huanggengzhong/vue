/**
* description: 储位储位模拟数据
* author: linwm
* createdDate: 2019-07-24
*/ 
import Mock from 'mockjs'

const cH = '/'
// 储位查询
const veExceedFateSetting = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veExceedFateSetting: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [
        {
          carSeriesCode: '1',
          carHouseName: '花都中心库',
          carAreaName: '花都储区',
          carPlaceName: '花都储位',
          carPlaceManger: '管理员',
          isEnable: "1",
          updateControlId: '42caee2daceb40e7bd2601cb34893864'
        },
        {
          carSeriesCode: '1',
          carHouseName: '大连中心库',
          carAreaName: '大连储区',
          carPlaceName: '大连储位',
          carPlaceManger: '管理员',
          isEnable: "1",
          updateControlId: '52caee2daceb40e7bd2601cb34893864'
        }
      ]
    }
  }
})
export default [
]

