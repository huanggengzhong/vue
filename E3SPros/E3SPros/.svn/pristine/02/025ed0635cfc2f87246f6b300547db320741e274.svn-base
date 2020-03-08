import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const CH = '/'
const alldata = Mock.mock({// 结算列表查询数据
  fiBuGatheringOrderQueryBalanceList: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 2,
    msg: '',
    rows: [{
      carBrandCode: '3',	// 品牌编码
      carBrandCn: '东风日产-尼桑', // 车辆品牌
      gatheringOrdeCode: 'JPSH29011909120002',	// 收款单号
      acceOrderCode: 'JPRH2901201909120001',	// 销售单号
      balanceDate: '2019-09-13',	// 结算时间
      custName: '滑板鞋',	// 客户姓名
      carLicense: '粤AXM122',	// 车牌号
      vin: 'LGBG2NE02BY006295', // VIN码
      linkManTel: '13516786543',	// 客户电话
      balanceName: '小亮',	// 结算人
      gatheringAmount: '140',	// 应收金额
      factReceivedAmount: '140',	// 实收金额
      pvPoint: '0',	// 厂家积分
      dlrPoint: '0', // 经销商积分
      cardAmount: '0', // 卡余额
      custCardNo: '0',	// 会员卡号
      discountAmount: '0',	// 折扣金额
      discountReason: '0',	// 折扣原因
      payType: '2',	// 付款方式
      acceOrderId: 'JPSH29011909120002',	// 精品销售单id
      gatheringOrdeId: 'JPSH29011909120004',	// 精品收款单id
      updateControlId: 'dasdaftyudgfgdgSDFFGFHGSA',	// 并发id
      oemCode: '12',	// 厂商标识
      groupCode: '11',	// 集团标识
      oemId: '22',	// 厂商标识ID
      groupId: '33'// 集团标识ID
    },
    {
      carBrandCode: '3',	// 品牌编码
      carBrandCn: '东风日产-尼桑', // 车辆品牌
      gatheringOrdeCode: 'JPSH29011909120002',	// 收款单号
      acceOrderCode: 'JPRH2901201909120002',	// 销售单号
      balanceDate: '2019-09-13',	// 结算时间
      custName: '滑板鞋',	// 客户姓名
      carLicense: '粤AXM122',	// 车牌号
      vin: 'LGBG2NE02BY006295', // VIN码
      linkManTel: '13516786543',	// 客户电话
      balanceName: '小亮',	// 结算人
      gatheringAmount: '140',	// 应收金额
      factReceivedAmount: '140',	// 实收金额
      pvPoint: '0',	// 厂家积分
      dlrPoint: '0', // 经销商积分
      cardAmount: '0', // 卡余额
      custCardNo: '0',	// 会员卡号
      discountAmount: '0',	// 折扣金额
      discountReason: '0',	// 折扣原因
      payType: '2',	// 付款方式
      acceOrderId: 'JPSH29011909120002',	// 精品销售单id
      gatheringOrdeId: 'JPSH29011909120004',	// 精品收款单id
      updateControlId: 'dasdaftyudgfgdgSDFFGFHGSA',	// 并发id
      oemCode: '12',	// 厂商标识
      groupCode: '11',	// 集团标识
      oemId: '22',	// 厂商标识ID
      groupId: '33'// 集团标识ID
    }
    ]
  }
})
const detaildata = Mock.mock({// 反结算列表查询数据
  fiBuGatheringOrderQueryCancelBalanceList: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 2,
    msg: '',
    rows: [{
      carBrandCode: '3',	// 品牌编码
      carBrandCn: '东风日产-尼桑', // 车辆品牌
      gatheringOrdeCode: 'JPSH29011909120002',	// 收款单号
      acceOrderCode: 'JPRH2901201909120001',	// 销售单号
      cancelBalanceDate: '2019-09-13',	// 反结算时间
      custName: '滑板鞋',	// 客户姓名
      carLicense: '粤AXM122',	// 车牌号
      vin: 'LGBG2NE02BY006295', // VIN码
      linkManTel: '13516786543',	// 客户电话
      cancelEmpName: '小亮',	// 反结算人
      gatheringAmount: '140',	// 应收金额
      factReceivedAmount: '140',	// 实收金额
      pvPoint: '0',	// 厂家积分
      dlrPoint: '0', // 经销商积分
      cardAmount: '0', // 卡余额
      discountAmount: '0', // 折扣金额
      discountReason: '0',	// 折扣原因
      paymentCancelReason: '0', // 反结算原因
      payType: '2',	// 付款方式
      oemCode: '12',	// 厂商标识
      groupCode: '11',	// 集团标识
      oemId: '22',	// 厂商标识ID
      groupId: '33'// 集团标识ID
    },
    {
      carBrandCode: '1',	// 品牌编码
      carBrandCn: '东风日产-日产', // 车辆品牌
      gatheringOrdeCode: 'JPSH29011909120002',	// 收款单号
      acceOrderCode: 'JPRH2901201909120001',	// 销售单号
      cancelBalanceDate: '2019-09-13',	// 反结算时间
      custName: '溜溜球',	// 客户姓名
      carLicense: '粤BXM122',	// 车牌号
      vin: 'LGBG2NE02BY006295', // VIN码
      linkManTel: '13516786543',	// 客户电话
      cancelEmpName: '小明',	// 反结算人
      gatheringAmount: '150',	// 应收金额
      factReceivedAmount: '150',	// 实收金额
      pvPoint: '0',	// 厂家积分
      dlrPoint: '0', // 经销商积分
      cardAmount: '0', // 卡余额
      discountAmount: '0', // 折扣金额
      discountReason: '0',	// 折扣原因
      paymentCancelReason: '0', // 反结算原因
      payType: '2',	// 付款方式
      oemCode: '12',	// 厂商标识
      groupCode: '11',	// 集团标识
      oemId: '22',	// 厂商标识ID
      groupId: '33'// 集团标识ID
    }
    ]
  }
})
const js = Mock.mock({// 反结算请求
  fiBuGatheringOrderMutationCancelBalance: {
    result: '1',
    msg: 'success'
  }
})
export default [
  {
    url: seApis.fiBuGatheringOrderQueryBalanceList.APIUrl + CH + 'v=' + seApis.fiBuGatheringOrderQueryBalanceList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        code: 2000,
        data: alldata
      }
    }
  },
  {
    url: seApis.fiBuGatheringOrderQueryCancelBalanceList.APIUrl + CH + 'v=' + seApis.fiBuGatheringOrderQueryCancelBalanceList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        code: 2000,
        data: detaildata
      }
    }

  },
  {
    url: seApis.fiBuGatheringOrderMutationCancelBalance.APIUrl + CH + 'v=' + seApis.fiBuGatheringOrderMutationCancelBalance.ServiceCode,

    type: 'post',
    response: config => {
      return {
        result: '1',
        code: 2000,
        data: js
      }
    }

  }
]
