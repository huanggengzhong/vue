/**
 * description: 服务模块公用模拟数据mock
 * author: zjinhang
 * createdDate: 2019-07-22
*/
import Mock from 'mockjs'

// 品牌
const payTypeData = Mock.mock({
  'rows': [{
    'code': '1',
    text: '普通'
  },
  {
    'code': '2',
    text: '免保'
  },
  {
    'code': '3',
    text: '保修'
  },
  {
    'code': '4',
    text: '保险'
  },
  {
    'code': '5',
    text: '内部'
  },
  {
    'code': '6',
    text: '协议'
  }]
})


export default [
  // 
  {
    url: '/se/getPayType/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: payTypeData
      }
    }
  }  
]
