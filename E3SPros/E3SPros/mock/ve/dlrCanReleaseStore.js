/**
* description: 经销商可分配仓库设置
* author: linwm
* createdDate: 2019-07-25
*/
import Mock from 'mockjs'

const cH = '/'
const dlrCanReleaseStoreQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    dlrCanReleaseStoreQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [
        {
          carBrandName: '东风日产-日产',
          bigAreaName: '北区',
          smallAreaName: '吉林区',
          dlrShortName: '广州风日店',
          carHouseName1: '0',
          carHouseName2: '1',
          carHouseName3: '2',
          carHouseName4: '3',
          carHouseName5: '4',
          carHouseName6: '0',
          carHouseName7: '1',
          carHouseName8: '2',
          carHouseName9: '3',
          carHouseName10: '4',
          storeShowStatus: '0',
          updateControlId: '22caee2daceb40e7bd2601cb34893882'
        },
        {
          carBrandName: '东风日产-日产',
          bigAreaName: '北区',
          smallAreaName: '吉林区',
          dlrShortName: '广州风日店',
          carHouseName1: '1',
          carHouseName2: '2',
          carHouseName3: '3',
          carHouseName4: '4',
          carHouseName5: '0',
          carHouseName6: '1',
          carHouseName7: '2',
          carHouseName8: '3',
          carHouseName9: '4',
          carHouseName10: '0',
          storeShowStatus: '1',
          updateControlId: '22caee2daceb40e7bd2601cb34893892'
        }
      ]
    }
  }
})

const dlrCanReleaseStoreMutationUpdate = Mock.mock({
  result: '1',
  msg: '',
  data: {
    dlrCanReleaseStoreMutationUpdate: {
      result: '1',
      msg: ''
    }
  }
})

export default [
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=dlrCanReleaseStoreQueryFindAll',
    type: 'post',
    response: config => {
      return dlrCanReleaseStoreQueryFindAll
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=dlrCanReleaseStoreMutationUpdate',
    type: 'post',
    response: config => {
      return dlrCanReleaseStoreMutationUpdate
    }
  }
]
