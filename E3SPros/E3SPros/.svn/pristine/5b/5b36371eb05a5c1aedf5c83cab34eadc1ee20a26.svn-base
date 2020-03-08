import Mock from 'mockjs'
import { apiSeReport } from '../../../../src/api/graphQLApiList/se'
const CH = '/'

const allData = Mock.mock({
  seRepairReportQueryRepairDailyFindAll:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 1,
    msg: '',
    'rows|50': [
      {
        repairOrderId: '估价单ID-mock',
        dlrShortName: '门店名称-mock',
        repairOrderCode: '估价单号-mock',
        saName: '维修工程师-mock',
        repairTime: '到店时间-mock',
        deliveryDate: '交车日期-mock',
        vin: 'VIN-mock',
        carLicense: '车牌号-mock',
        carTypeCode: '车型编码-mock',
        mileage: '行驶里程-mock',
        custName: '客户名称-mock',
        custTel: '客户电话-mock',
        workitemAmount: '工时费合计-mock',
        partAmount: '备件费合计-mock',
        otherAmount: '其它费合计-mock',
        feeAmount: '费用合计-mock',
        workitemFee: '工时预估费-mock',
        partFee: '备件预估费-mock',
        otherFee: '其它预估费-mock',
        shouldCost: '应收费-mock',
        realfear: '实收费-mock',
        realrebatefare: '优惠费用-mock',
        paymoney: '现金付款-mock',
        payinside: '内部付款-mock',
        hostaccount: '总部挂账-mock',
        mobilePay: '微信-mock',
        treasurePay: '支付宝-mock',
        payblack: '银行卡-mock',
        transfer: '转账金额-mock',
        dlraccount: '门店挂账-mock',
        sjsf: '合计-mock',
        couponAmount: '优惠券抵扣-mock',
        reserveAmount: '预约预支付-mock',
        pvPoint: '厂家积分-mock',
        pvRealPoint: '厂家真实积分-mock',
        pvVirtualPoint: '厂家会员优惠券-mock',
        dlrPoint: '专营店积分抵扣额-mock',
        cardAmount: '卡金额支付额-mock',
        priceAmount: '含税成本（合计)-mock',
        costAmount: '不含税成本（合计-mock',
        mlhj: '毛利合计-mock',
        remark: '维修单备注-mock',
        sWorkitemAmount: '工时总费用-mock',
        sPartAmount: '备件总费用-mock',
        sOtherAmount: '其他费用合计-mock',
        sFeeAmount: '费用合计-mock',
        sWorkitemFee: '工时预估合计-mock',
        sPartFee: '备件预估合计-mock',
        sOtherFee: '其他费用预估合计-mock',
        sShouldCost: '费用预估合计-mock',
        sRealrebatefare: '优惠总费用-mock',
        sRealfear: '实收费用合计-mock',
        oemCode: '厂商标识-mock',
        groupCode: '集团标识-mock',
        oemId: '厂商标识ID-mock',
        groupId: '集团标识ID-mock'
      }
    ]
  }
})

export default [
  {
    url: apiSeReport.seRepairReportQueryRepairDailyFindAll.APIUrl + CH + 'v=' + apiSeReport.seRepairReportQueryRepairDailyFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: allData
      }
    }
  }
]
