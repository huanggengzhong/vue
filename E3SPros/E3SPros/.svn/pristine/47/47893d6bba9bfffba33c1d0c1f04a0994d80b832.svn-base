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

const paBuLackPartOrderQueryDistribution = Mock.mock({
  paBuLackPartOrderQueryDistribution: {
    result: '1',
    pageIndex: 1,
    pageSize: 10,
    limit: 20,
    pages: 1,
    records: 4,
    msg: '',
    'rows|10': [
      {
        lackPartId: '112121',
        partNo: 'BM212111',
        partName: 'N51242155122',
        storeQty: '10',
        partBrandName: 'H290120125112',
        updateControlId: '211111'

      }
    ]
  }
})
const paBuLackPartOrderDQueryDistribution = Mock.mock({
  paBuLackPartOrderDQueryDistribution: {
    result: '1',
    pageIndex: 1,
    pageSize: 10,
    limit: 20,
    pages: 1,
    records: 4,
    msg: '',
    'rows|3': [
      {
        lackPartOrderDId: 'WA201381',
        lackPartCode: '',
        carLicense: '',
        custName: '张一一',
        nowAssignQty: '',
        canAssignQty: '',
        lackQty: '',
        orderQty: '',
        outPurchaseQty: '',
        assignQty: '',
        vin: '',
        urgentLevelName: '',
        expectArriveDate: '',
        intendReceiveDate: '',
        sourceTypeName: '',
        creator: '',
        createdDate: '',
        updateControlId: ''

      }
    ]
  }
})

const paBuLackPartOrderQueryHisDistribution = Mock.mock({
  paBuLackPartOrderQueryHisDistribution: {
    result: '1',
    pageIndex: 1,
    pageSize: 10,
    limit: 20,
    pages: 1,
    records: 4,
    msg: '',
    'rows|3': [
      {
        lackPartId: '',
        lackPartCode: '',
        custName: '',
        custTel: '',
        carLicense: '',
        vin: '',
        urgentLevelName: '',
        sourceTypeName: '',
        regEmpName: '',
        createdDate: '',
        relateOrderCode: '',
        partNo: '',
        partName: '',
        unit: '',
        lackQty: '',
        dealQty: '',
        createdName: '',
        assignDate: '',
        updateControlId: ''

      }
    ]
  }
})

export default [

  {
    url:
      paApis.paBuLackPartOrderQueryDistribution.APIUrl +
      cH +
      'v=' +
      paApis.paBuLackPartOrderQueryDistribution.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: paBuLackPartOrderQueryDistribution
      }
    }
  },
  {
    url:
      paApis.paBuLackPartOrderDQueryDistribution.APIUrl +
      cH +
      'v=' +
      paApis.paBuLackPartOrderDQueryDistribution.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: paBuLackPartOrderDQueryDistribution
      }
    }
  },
  {
    url:
      paApis.paBuLackPartOrderQueryHisDistribution.APIUrl +
      cH +
      'v=' +
      paApis.paBuLackPartOrderQueryHisDistribution.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: paBuLackPartOrderQueryHisDistribution
      }
    }
  },
  {
    url:
    paApis.paBuLackPartOrderDMutationDistribution.APIUrl +
    cH +
    'v=' +
    paApis.paBuLackPartOrderDMutationDistribution.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        msg: '分配成功'
      }
    }
  }
]
