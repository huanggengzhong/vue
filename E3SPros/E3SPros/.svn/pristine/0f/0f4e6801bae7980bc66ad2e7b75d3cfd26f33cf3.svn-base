/**
 * description: 批次分配原则设置
 * author: ssb
 * createdDate: 2019-08-06
 */
import Mock from 'mockjs'

const cH = '/'
// 次分配原则设置顺序查询
const batchAllocation1 = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsLookupValueQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 10,
      pages: 2,
      records: 13,
      'rows|10': { tree1: [{
        label: '经销商车型优先'
      }, {
        label: '目标达成率'
      }, {
        label: '误差率'
      }, {
        label: '库存周转率'
      }, {
        label: '客户确认订单时间'
      }], tree2: [{
        label: '采购单确认时间',
        sort: '1'
      }, {
        label: '分配达成率',
        sort: '2'
      }] }
    }
  }
})

const batchAllocation = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbBatchAssignPrincipleQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 10,
      pages: 2,
      records: 13,
      'rows|10': [{
        carBrandCn: '东风日产-日产',
        carBrandCode: '1',
        orderTypeName: '采购单类型',
        orderTypeId: '22caee2daceb40e7bd2601cb34893864',
        orderCashTypeName: '采购资金类型',
        orderCashTypeId: '22caee2daceb40e7bd2601cb34893864',
        SeriesName: '日产-阳光',
        SeriesId: '22caee2daceb40e7bd2601cb34893862',
        isSet: '已设置',
        pucashTypeId: '22caee2daceb40e7bd2601cb34893864',
        assginPrincipleType: '0'
      }]
    }
  }
})

const batchAllocationUpdate = Mock.mock({
  result: '1',
  msg: '保存成功',
  data: {
    veDbBatchAssignPrincipleMutaionSave: {
      result: '1',
      msg: '保存成功'
    }
  }
})

export default [
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veDbBatchAssignPrincipleQueryFindAll',
    type: 'post',
    response: config => {
      return batchAllocation
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=mdsLookupValueQueryByPage',
    type: 'post',
    response: config => {
      return batchAllocation1
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veDbBatchAssignPrincipleMutaionSave',
    type: 'post',
    response: config => {
      return batchAllocationUpdate
    }
  }
]

// export default [
//   {
//     url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veDbBatchAssignPrincipleQueryFindAll',
//     type: 'post',
//     response: config => {
//       return batchAllocation
//     }
//   }
// ]

// export default [
//   {
//     url: veApis.veBatchAllocationQry.APIUrl + cH + 'v=' + veApis.veBatchAllocationQry.ServiceCode,
//     type: 'post',
//     response: config => {
//       console.log(veApis.veAccountQry.APIUrl + cH + 'v=' + veApis.veAccountQry.ServiceCode)
//       return batchAllocation
//     }
//   }
// ]
