import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const CH = '/'
const alldata = Mock.mock({
  boutiqueSalesReQueryFindAll: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 4,
    msg: '',
    rows: [{
      carBrandCn: '东风日产-日产',
      carBrandCode: '1',
      salesNo: 'JPSH29011909120001',
      retreatNo: 'JPRH2901201909120001',
      carNo: '湘H5P162',
      applyStartTime: '2019-09-12 09:33',
      applyName: '许智炜',
      applyNameNo: '8',
      VIN: 'LGBH52E01GY152687',
      boutiqueNo: 'FPX0V17001-V066',
      boutiqueName: '陶瓷刀具套装',
      applyNumber: '1',
      retreatNumber: '1',
      retreatStatus: '已入库',
      chuku: '1',
      shengqingtuihuo: '0',
      yishengqingtuihuo: '1'
    },
    {
      carBrandCn: '东风日产-启辰',
      carBrandCode: '2',
      salesNo: 'JPSH29011909120002',
      retreatNo: 'JPRH2901201909120001',
      carNo: '粤YXM122',
      applyStartTime: '2019-09-13 09:33',
      applyName: '许晓晓',
      applyNameNo: '1',
      VIN: 'LGBG2NE02BY006295',
      boutiqueNo: 'JPLN111605-Z863',
      boutiqueName: '骊威整车延1年2万-3年10万(16年3-4)',
      applyNumber: '1',
      retreatNumber: '1',
      retreatStatus: '退料申请',
      chuku: '1',
      shengqingtuihuo: '0',
      yishengqingtuihuo: '0'
    }
    ]
  }
})
const Delete = Mock.mock({
  boutiqueSalesReDelete: {
    result: '1',
    msg: 'success'
  }
})

const Printf = Mock.mock({
  boutiqueSalesRePrintf: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 4,
    msg: '',
    rows: {
      carBrandCn: '东风日产-日产',
      carBrandCode: '1',
      salesNo: 'JPSH29011909120001',
      retreatNo: 'JPRH2901201909120001',
      carNo: '湘H5P162',
      applyStartTime: '2019-09-12 09:33',
      applyName: '许智炜',
      applyNameNo: '8',
      VIN: 'LGBH52E01GY152687',
      boutiqueNo: 'FPX0V17001-V066',
      boutiqueName: '陶瓷刀具套装',
      applyNumber: '1',
      retreatNumber: '1',
      retreatStatus: '已入库',
      phone: '13456782365',
      discount: '0.2',
      actualMoney: '200',
      discountMoney: '40',
      discountReason: '折扣',
      inteDiscount: '0.3',
      balancePay: '1',
      amountMoney: '300',
      settleTime: '30s',
      payWay: '现金',
      payPerson: '许徐徐',
      partdataInfo: [{
        partNo: '023',
        partName: '挡风板',
        partUnit: '个',
        partPrice: '100',
        partNumber: '2',
        partAmount: '200',
        remark: '备件备注'
      },
      {
        partNo: '023',
        partName: '挡风板',
        partUnit: '个',
        partPrice: '100',
        partNumber: '2',
        partAmount: '200',
        remark: '备件备注'
      }

      ]
    }

  }
})

export default [
  {
    url: seApis.boutiqueSalesReQueryFindAll.APIUrl + CH + 'v=' + seApis.boutiqueSalesReQueryFindAll.ServiceCode,

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
    url: seApis.boutiqueSalesReDelete.APIUrl + CH + 'v=' + seApis.boutiqueSalesReDelete.ServiceCode,

    type: 'post',
    response: config => {
      return {
        result: '1',
        code: 2000,
        data: Delete
      }
    }
  },
  {
    url: seApis.boutiqueSalesRePrintf.APIUrl + CH + 'v=' + seApis.boutiqueSalesRePrintf.ServiceCode,

    type: 'post',
    response: config => {
      return {
        result: '1',
        code: 2000,
        data: Printf
      }
    }
  }

]
