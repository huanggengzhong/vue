/**
 * description: 专营店销退财务确认 /
 * author: zhhx
 * createdDate: 2019-09-24
 * logs:
 */
import Mock from 'mockjs'
import { veApis } from '../../src/api/graphQLApiList/ve'

const cH = '/'
// 查询
const veBuPurReturnOrderDQueryFindAll = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    veBuPurReturnOrderDQueryFindAll: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      'rows|5': [
        {
          'returnStatusName': '完成',
          'invoiceApplyStatusName': '开票',
          'invoiceHandleMethod': '1',
          'carBrandCn': '东风日产-日产',
          'dlrShortName': '广州丰日',
          'purReturnCode': 'F3I3UBVB3I34',
          'returnDate': '2019-9-24',
          'purReturnCarHouseName': '风日',
          'retreatAmount': '5000',
          'carConfigCode': 'D168VAK1-BM1',
          'vin': 'LGBH12F21FV276194',
          'carColorName': '珠光白/QAB',
          'carIncolorName': '深内饰G/G',
          'carColorPrice': '40000',
          'carIncolorPrice': '50000',
          'totalPrice': '5000000',
          'remark': '测试',
          'deliverModeName': '陆运',
          'carReturnTypeName': '退回',
          'firstInDlrstockDate': '2019-9-24',
          'purReturnTypeName': '销退类型1',
          'purPrice': '采购金额',
          'auditDate': '2019-4-5',
          'auditEmpName': '莫小妹',
          'creator': '张大飞',
          'financeDate': '2019-4-5',
          'financeName': '伊利儿',
          'purReturnId': '1',
          'purReturnDId': '1',
          'returnDlrId': '1',
          'purOrderDId': '1',
          'invoiceState': '1',
          'returnStatus': '1',
          'updateReturnStatus': '1',
          'updateControlIdCarStore': '1',
          'updateControlIdVeCarStore': '1',
          'updateControlId': '1',
          'updateControlIdD': '1',
          /*xulfan添加字段*/
          reqNumber: '390F3BVR80V3R80',
          dlrName: '深圳裕朋',
          reqDate: '2019-04-03',
          salRefWarehouse: '广州风日',
          salRefAmount: '39792',
          carConfig: 'FDRNLHWJ10EXABK-BC',
          note: 'AC0',
          carDamReturnTime: '2019-02-13',
          acceptTime: '2019-02-17',
        },
        {
          'returnStatusName': '完成',
          'invoiceApplyStatusName': '开票',
          'invoiceHandleMethod': '1',
          'carBrandCn': '东风日产-启辰',
          'dlrShortName': '深圳裕朋',
          'purReturnCode': 'F3I3UBVB3I34',
          'returnDate': '2019-9-24',
          'purReturnCarHouseName': '风日',
          'retreatAmount': '5000',
          'carConfigCode': 'D168VAK1-BM1',
          'vin': 'LGBH12F21FV276194',
          'carColorName': '珠光白/QAB',
          'carIncolorName': '深内饰G/G',
          'carColorPrice': '2000',
          'carIncolorPrice': '1000',
          'totalPrice': '400000',
          'remark': '测试',
          'deliverModeName': '陆运',
          'carReturnTypeName': '退回',
          'firstInDlrstockDate': '2019-9-24',
          'purReturnTypeName': '销退类型1',
          'purPrice': '采购金额',
          'auditDate': '2019-4-5',
          'auditEmpName': '莫小妹',
          'creator': '张大飞',
          'financeDate': '2019-4-5',
          'financeName': '伊利儿',
          'purReturnId': '1',
          'purReturnDId': '1',
          'returnDlrId': '1',
          'purOrderDId': '1',
          'invoiceState': '1',
          'returnStatus': '1',
          'updateReturnStatus': '1',
          'updateControlIdCarStore': '1',
          'updateControlIdVeCarStore': '1',
          'updateControlId': '1',
          'updateControlIdD': '1',
          /*xulfan添加字段*/
          reqNumber: '390F3BVR80V3R80',
          dlrName: '深圳裕朋',
          reqDate: '2019-04-03',
          salRefWarehouse: '广州风日',
          salRefAmount: '19990',
          carConfig: 'FDRNLHWJ10EXABK-BC',
          note: 'AC0',
          carDamReturnTime: '2019-04-23',
          acceptTime: '2019-01-13',
        },
        {
          'returnStatusName': '完成',
          'invoiceApplyStatusName': '开票',
          'invoiceHandleMethod': '1',
          'carBrandCn': '东风日产-进口尼桑',
          'dlrShortName': '广州置业',
          'purReturnCode': 'F3I3UBVB3I34',
          'returnDate': '2019-9-24',
          'purReturnCarHouseName': '风日',
          'retreatAmount': '5000',
          'carConfigCode': 'D168VAK1-BM1',
          'vin': 'LGBH23JFJOFO23ID4',
          'carColorName': '珠光白/QAB',
          'carIncolorName': '深内饰G/G',
          'carColorPrice': '3000',
          'carIncolorPrice': '1000',
          'totalPrice': '200000',
          'remark': '测试',
          'deliverModeName': '海运',
          'carReturnTypeName': '退回',
          'firstInDlrstockDate': '2019-9-24',
          'purReturnTypeName': '销退类型1',
          'purPrice': '采购金额',
          'auditDate': '2019-4-5',
          'auditEmpName': '莫小妹',
          'creator': '张大飞',
          'financeDate': '2019-4-5',
          'financeName': '伊利儿',
          'purReturnId': '1',
          'purReturnDId': '1',
          'returnDlrId': '1',
          'purOrderDId': '1',
          'invoiceState': '1',
          'returnStatus': '1',
          'updateReturnStatus': '1',
          'updateControlIdCarStore': '1',
          'updateControlIdVeCarStore': '1',
          'updateControlId': '1',
          'updateControlIdD': '1',
          /*xulfan添加字段*/
          reqNumber: '390F3BVR80V3R80',
          dlrName: '深圳裕朋',
          reqDate: '2019-12-03',
          salRefWarehouse: '广州风日',
          salRefAmount: '84930',
          carConfig: 'FDRN23OFKSEXABK-BC',
          note: 'AC4',
          carDamReturnTime: '2019-06-13',
          acceptTime: '2019-09-17',
        },
      ]
    }
  }
})

// 专营店销退财务确认   保存
const veBuPurReturnOrderMutationConfirm = Mock.mock({
  'result': '1',
  'data': {
    'veBuPurReturnOrderMutationConfirm': {
      'result': '1',
      'records': 1,
      'msg': '1',
      'rows': []
    }
  }
})

// 专营店销退业务确认   保存
const veBuPurReturnMutationConfirm = Mock.mock({
  'result': '1',
  'data': {
    'veBuPurReturnMutationConfirm': {
      'result': '1',
      'records': 1,
      'msg': '1',
      'rows': []
    }
  }
})

export default [
  {
    url: veApis.veBuPurReturnOrderDQueryFindAll.APIUrl + cH + 'v=' + veApis.veBuPurReturnOrderDQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veBuPurReturnOrderDQueryFindAll
    }
  },
  {
    url: veApis.veBuPurReturnOrderMutationConfirm.APIUrl + cH + 'v=' + veApis.veBuPurReturnOrderMutationConfirm.ServiceCode,
    type: 'post',
    response: config => {
      return veBuPurReturnOrderMutationConfirm
    }
  },
  {
    url: veApis.veBuPurReturnMutationConfirm.APIUrl + cH + 'v=' + veApis.veBuPurReturnMutationConfirm.ServiceCode,
    type: 'post',
    response: config => {
      return veBuPurReturnMutationConfirm
    }
  }
]
