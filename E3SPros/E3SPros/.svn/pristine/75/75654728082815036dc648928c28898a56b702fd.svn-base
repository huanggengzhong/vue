/**
 * description: 汽车销售退款
 * author: zhhx
 * createdDate: 2019-09-25
 * logs:
 */
import Mock from 'mockjs'
import { veApis } from '../../src/api/graphQLApiList/ve'

const cH = '/'
// 查询
const veCarSalesRefundFindAll = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    veCarSalesRefundFindAll: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      'rows|33': [{
        'saleOrderCode': '1isod22ihhiw', // 订单编号
        'saleContractNo': '东风日产', // 合同编号
        'refundStatus': '已退款', // 退款状态 待确认
        'buyCustName': '伊利儿', // 客户名称
        'caEmpName': '蒙小小', // 销售顾问
        'vin': 'GHI789', // vin
        'invoiceStatus': '1', // 发票状态
        'factReceivedAmount': '5000', // 已收金额   实收金额
        'gatheringAmount': '6000', // 应退金额
        'disposalAmount': '500', // 罚金
        'createDate': '2019-9-23', // 销退申请时间
        'phone': '1376632225', // 电话
        'webChatPayAmount': '5000', // 微信支付额
        'alipayAmount': '5000', // 支付宝支付额
        'gatheringEmpName': '', // 退款人
        'remark': '' // 退款备注
      }]
    }
  }
})

// 退款
const veCarSalesRefund = Mock.mock({
  'result': '1',
  'msg': '退款成功'
})

export default [
  {
    url: veApis.veCarSalesRefundFindAll.APIUrl + cH + 'v=' + veApis.veCarSalesRefundFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veCarSalesRefundFindAll
    }
  },
  {
    url: veApis.veCarSalesRefund.APIUrl + cH + 'v=' + veApis.veCarSalesRefund.ServiceCode,
    type: 'post',
    response: config => {
      return veCarSalesRefund
    }
  }
]
