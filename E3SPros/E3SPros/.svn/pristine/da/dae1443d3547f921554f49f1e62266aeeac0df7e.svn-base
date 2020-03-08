/**
 * description: 经销商 收款单查询    汽车销售收款
 * author: zhhx
 * createdDate: 2019-10-11
 * logs:
 */
import Mock from 'mockjs'
import { veApis } from '../../src/api/graphQLApiList/ve'

const cH = '/'
// 查询
const veSaleOrdGatheringQry = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    veSaleOrdGatheringQry: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      'rows|33': [{
        'orderType': '本店大客户(异店交车)',
        'custName': '大客户发车作业',
        'carCustName': '大客户发车作业',
        'secondD': '测试22',
        'vin': 'LGB20190813DE5007',
        'carType': '西玛',
        'gatheringOrderCode': 'H2901SA201908140002',
        'contractNumber': 'H2901HT201908140002',
        'gatheringAmount': '199,800.00',
        'factReceivedAmount': '0.00',
        'gatheringState': '收款中',
        'caEmpName': '张三',
        'createDate': '2019-9-21',
        'OfferApplication': '正常',
        'updateControlId': '1'
      }]
    }
  }
})

// 保存
const veSaleOrdGatheringM = Mock.mock({
  'result': '1',
  'data': {
    'veSaleOrdGatheringM': {
      'result': '1',
      'records': 1,
      'msg': '1',
      'rows': []
    }
  }
})

export default [
  {
    url: veApis.veSaleOrdGatheringQry.APIUrl + cH + 'v=' + veApis.veSaleOrdGatheringQry.ServiceCode,
    type: 'post',
    response: config => {
      return veSaleOrdGatheringQry
    }
  },
  {
    url: veApis.veSaleOrdGatheringM.APIUrl + cH + 'v=' + veApis.veSaleOrdGatheringM.ServiceCode,
    type: 'post',
    response: config => {
      return veSaleOrdGatheringM
    }
  }
]
