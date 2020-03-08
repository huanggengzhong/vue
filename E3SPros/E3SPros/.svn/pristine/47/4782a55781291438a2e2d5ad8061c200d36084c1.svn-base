/**
* description: 搬入地设置模拟数据
* author: linwm
* createdDate: 2019-07-23
*/
import Mock from 'mockjs'

const cH = '/'
const moveInAddressQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    moveInAddressQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [
        {
          wareHouseCode: "0176",
          isDefault: '1',
          isEnable: '1',
          brandName: '东风日产-日产',
          area: '北区',
          bigArea: "东北区",
          smallArea: "黑龙江区",
          province: "黑龙江",
          city: "哈尔滨",
          storeOnly: "广州风日店",
          wareHouseName: "大庆勤华瑞嘉主搬",
          wareHouseAddress: "大庆市让胡路区经济开发区祥驰路17号"
        },
        {
          wareHouseCode: "0434",
          isDefault: '1',
          isEnable: '1',
          brandName: '东风日产-日产',
          area: '北区',
          bigArea: "东北区",
          smallArea: "黑龙江区",
          province: "黑龙江",
          city: "哈尔滨",
          storeOnly: "深圳裕朋",
          wareHouseName: "大庆勤华瑞嘉鸡西次搬",
          wareHouseAddress: "黑龙江鸡西市鸡冠区红星乡汽车产业园区A-07-2"
        },
        {
          wareHouseCode: "0162",
          isDefault: '1',
          isEnable: '1',
          brandName: '东风日产-日产',
          area: '南区',
          bigArea: "西南区",
          smallArea: "广州区",
          province: "广东",
          city: "广州",
          storeOnly: "深圳裕朋",
          wareHouseName: "勤华瑞嘉肇州直营店",
          wareHouseAddress: "大庆市高新技术产业开发区汽车工业园一区"
        },
        {
          wareHouseCode: "0162",
          isDefault: '1',
          isEnable: '1',
          brandName: '东风日产-日产',
          area: '南区',
          bigArea: "西南区",
          smallArea: "广州区",
          province: "广东",
          city: "广州",
          storeOnly: "深圳裕朋",
          wareHouseName: "勤华瑞嘉肇州直营店",
          wareHouseAddress: "大庆市高新技术产业开发区汽车工业园一区"
        },
        {
          wareHouseCode: "0162",
          isDefault: '1',
          isEnable: '1',
          brandName: '东风日产-日产',
          area: '南区',
          bigArea: "西南区",
          smallArea: "广州区",
          province: "广东",
          city: "广州",
          storeOnly: "深圳裕朋",
          wareHouseName: "勤华瑞嘉肇州直营店",
          wareHouseAddress: "大庆市高新技术产业开发区汽车工业园一区"
        },
        {
          wareHouseCode: "0162",
          isDefault: '1',
          isEnable: '1',
          brandName: '东风日产-日产',
          area: '南区',
          bigArea: "西南区",
          smallArea: "广州区",
          province: "广东",
          city: "广州",
          storeOnly: "深圳裕朋",
          wareHouseName: "勤华瑞嘉肇州直营店",
          wareHouseAddress: "大庆市高新技术产业开发区汽车工业园一区"
        }
      ]
    }
  }
})

// 品牌保存
const moveInAddrMutaionUpdate = Mock.mock({
  result: '1',
  msg: '',
  data: {
    moveInAddrMutaionUpdate: {
      result: '1',
      msg: ''
    }
  }
})



export default [
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=moveInAddressQueryFindAll',
    type: 'post',
    response: config => {
      return moveInAddressQueryFindAll
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=moveInAddrMutaionUpdate',
    type: 'post',
    response: config => {
      return moveInAddrMutaionUpdate
    }
  },
  
]
