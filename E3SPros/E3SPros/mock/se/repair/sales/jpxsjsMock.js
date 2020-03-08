import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const CH = '/'
const alldata = Mock.mock({// 列表查询数据
  seBuAcceOrderQueryFindAll: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 2,
    msg: '',
    rows: [{
      carBrandCode: '2',	// 车辆品牌
      carBrandCn: '东风日产-启辰',	// 车辆品牌中文
      acceOrderCode: 'JPSH29011909120002',	// 销售单号
      carLicense: '粤YXM122',	// 车牌号
      custName: '潇潇夜雨',	// 客户名称
      buyDate: '2019-09-13 09:33',	// 销售时间
      vin: 'LGBG2NE02BY006295',	// VIN码
      jsdh: 'JPRH2901201909120001',	// 结算单号
      saleEmp: '夜雨黑瞳',	// 销售人员
      acceOrderStateName: '已结算',	// 销售单状态
      acceOrderId: '334466',	// 精品销售单id
      dlrCustNo: 'drt',	// 经销商客户编码
      updateControlId: 'dasdafsdfdfdgfgdgSDFFGFHGSA',	// 并发id
      gatheringAmount: '160', // 应收金额
      factReceivedAmount: '160', // 实收金额
      billAmount: '160', // 开票金额
      payType: '2', // 付款方式
      billNo: 'kg4567780'// 发票号
      // 本次收款总额
    },
    {
      carBrandCode: '3',	// 车辆品牌
      carBrandCn: '东风日产-尼桑',	// 车辆品牌中文
      acceOrderCode: 'JPSH29011909120002',	// 销售单号
      carLicense: '粤AXM122',	// 车牌号
      custName: '淅淅沥沥',	// 客户名称
      buyDate: '2019-09-13 09:33',	// 销售时间
      vin: 'LGBG2NE02BY006295',	// VIN码
      jsdh: 'JPRH2901201909120001',	// 结算单号
      saleEmp: '伍旭',	// 销售人员
      acceOrderStateName: '未结算',	// 销售单状态
      acceOrderId: '334477',	// 精品销售单id
      dlrCustNo: 'drt',	// 经销商客户编码
      updateControlId: 'dasdaftyudgfgdgSDFFGFHGSA',	// 并发id
      gatheringAmount: '140', // 应收金额
      factReceivedAmount: '140', // 实收金额
      billAmount: '140', // 开票金额
      payType: '5', // 付款方式
      billNo: ''// 发票号
      // 本次收款总额
    }
    ]
  }
})
const detaildata = Mock.mock({// 明细查询数据
  seBuAccePartQueryFindAll: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 2,
    msg: '',
    rows: [{
      partNo: '231',	// 备件编码
      partName: '杠',	// 备件名称
      partPrice: '23',	// 单价
      outQty: '1',	// 出库数量
      returnQty: '1',	// 退货数量
      partAmount: '200',	// 备件费用
      partDiscount: '0.2',	// 折扣率
      preAmount: '160'	// 预估费用
    },
    {
      partNo: '231',	// 备件编码
      partName: '杠',	// 备件名称
      partPrice: '23',	// 单价
      outQty: '1',	// 出库数量
      returnQty: '1',	// 退货数量
      partAmount: '200',	// 备件费用
      partDiscount: '0.2',	// 折扣率
      preAmount: '160'	// 预估费用
    }
    ]
  }
})
const js = Mock.mock({// 结算请求
  fiBuGatheringOrderMutationSave: {
    result: '1',
    msg: 'success'
  }
})
export default [
  {
    url: seApis.seBuAcceOrderQueryFindAll.APIUrl + CH + 'v=' + seApis.seBuAcceOrderQueryFindAll.ServiceCode,
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
    url: seApis.seBuAccePartQueryFindAll.APIUrl + CH + 'v=' + seApis.seBuAccePartQueryFindAll.ServiceCode,
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
    url: seApis.fiBuGatheringOrderMutationSave.APIUrl + CH + 'v=' + seApis.fiBuGatheringOrderMutationSave.ServiceCode,

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
