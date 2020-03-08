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

const paDbTransitList = Mock.mock({
  paDbTransitRelationQueryFindAll: {
    result: '1',
    pageIndex: 1,
    pageSize: 10,
    limit: 20,
    pages: 1,
    records: 4,
    msg: '',
    rows: [
      {
        id: 1,
        orderTypeCode: 1,
        orderTypeName: '经销商正常订单',
        transitType: [
          {
            transitTypeCode: 'ys_0001',
            transitTypeName: '公路运输'
          },
          {
            transitTypeCode: 'ys_0002',
            transitTypeName: '中铁快运'
          },
          {
            transitTypeCode: 'ys_0003',
            transitTypeName: '航空'
          },
          {
            transitTypeCode: 'ys_0004',
            transitTypeName: '特快专递'
          }
        ]
      },
      {
        id: 2,
        orderTypeCode: 2,
        orderTypeName: '经销商紧急订单',
        transitType: [
          {
            transitTypeCode: 'ys_0001',
            transitTypeName: '公路运输'
          },
          {
            transitTypeCode: 'ys_0002',
            transitTypeName: '中铁快运'
          },
          {
            transitTypeCode: 'ys_0003',
            transitTypeName: '航空'
          },
          {
            transitTypeCode: 'ys_0004',
            transitTypeName: '特快专递'
          }
        ]
      },
      {
        id: 3,
        orderTypeCode: 3,
        orderTypeName: '经销商三包订单',
        transitType: [
          {
            transitTypeCode: 'ys_0001',
            transitTypeName: '公路运输'
          },
          {
            transitTypeCode: 'ys_0002',
            transitTypeName: '中铁快运'
          },
          {
            transitTypeCode: 'ys_0004',
            transitTypeName: '特快专递'
          }
        ]
      },
      {
        id: 4,
        orderTypeCode: 4,
        orderTypeName: '主机厂正常订单',
        transitType: [
          {
            transitTypeCode: 'ys_0001',
            transitTypeName: '公路运输'
          },
          {
            transitTypeCode: 'ys_0002',
            transitTypeName: '中铁快运'
          },
          {
            transitTypeCode: 'ys_0003',
            transitTypeName: '航空'
          },
          {
            transitTypeCode: 'ys_0004',
            transitTypeName: '特快专递'
          }
        ]
      },
      {
        id: 5,
        orderTypeCode: 5,
        orderTypeName: '主机厂紧急订单',
        transitType: [
          {
            transitTypeCode: 'ys_0001',
            transitTypeName: '公路运输'
          },
          {
            transitTypeCode: 'ys_0002',
            transitTypeName: '中铁快运'
          },
          {
            transitTypeCode: 'ys_0003',
            transitTypeName: '航空'
          }
        ]
      },
      {
        id: 6,
        orderTypeCode: 6,
        orderTypeName: '允许外购订单',
        transitType: [
          {
            transitTypeCode: 'ys_0001',
            transitTypeName: '公路运输'
          }
        ]
      },
      {
        id: 7,
        orderTypeCode: 8,
        orderTypeName: '服务二网采购订单',
        transitType: [
          {
            transitTypeCode: 'ys_0001',
            transitTypeName: '公路运输'
          },
          {
            transitTypeCode: 'ys_0002',
            transitTypeName: '中铁快运'
          }
        ]
      },
      {
        id: 8,
        orderTypeCode: 10,
        orderTypeName: '特殊订单',
        transitType: [
          {
            transitTypeCode: 'ys_0002',
            transitTypeName: '中铁快运'
          },
          {
            transitTypeCode: 'ys_0003',
            transitTypeName: '航空'
          },
          {
            transitTypeCode: 'ys_0005',
            transitTypeName: '自提'
          },
          {
            transitTypeCode: 'ys_0004',
            transitTypeName: '特快专递'
          }
        ]
      }
    ]
  }
})
//运输方式与订单类型关系维护保存
const paDbTransitRelationMutationSave = Mock.mock({
  paDbTransitRelationMutationSave: {
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
      paApis.paDbTransitRelationQueryFindAll.APIUrl +
      cH +
      'v=' +
      paApis.paDbTransitRelationQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: paDbTransitList
      }
    }
  },
  {
    url:
      paApis.paDbTransitRelationMutationSave.APIUrl +
      cH +
      'v=' +
      paApis.paDbTransitRelationMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: paDbTransitRelationMutationSave
      }
    }
  }
]
