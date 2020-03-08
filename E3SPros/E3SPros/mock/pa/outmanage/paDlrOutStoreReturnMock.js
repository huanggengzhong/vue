import Mock from 'mockjs'
import { paApis } from '../../../src/api/graphQLApiList/pa'
const cH = '/'

const data = Mock.mock({
  paBuDlrOutStoreReturnQueryFindAll: {
    result: '1',
    pageindex: '1',
    pages: '1',
    records: '4',
    msg: '查找成功',
    'rows|10': [
      {
        outStoreCode: 'EAA1006190001',
        billNo: 'WOH1006190001',
        outStoreDate: '2019-06-19',
        billType: '经销商间调拨',
        custName: '李汉群',
        a1: '售后服务',
        a2: '李小小',
        a3: 'DHBC01',
        a4: '1',
        a5: '10',
        a6: '1020.00',
        a7: 'WWS121100',
        a8: '桂B4811',
        a9: 'AVE21342523123258261',
        a10: '王洲',
        a11: '2018-12-28',
        remark: '无',
        c1: 'WA0000012AS',
        c2: '实物退货'
      }
    ]

  }
})
const data1 = Mock.mock({
  paBuDlrOutStoreReturnDQueryFindAll: {
    result: '1',
    pageindex: '1',
    pages: '1',
    records: '4',
    msg: '查找成功',
    'rows|10': [
      {
        partNo: 'QS006190001',
        partBrandCode: 'WQS0909122211',
        partName: '冷却器-机油',
        outStoreQty: '10',
        hasReturnQty: '0',
        minstoreQty: '1',
        returnQty: '10',
        unit: '件',
        b1: '1020.00',
        b2: '13%',
        b3: '1326.00',
        b4: '10200.00',
        b5: '',
        a6: '',
        remarks: ''
      }
    ]

  }
})

export default [
  {
    url: paApis.paBuDlrOutStoreReturnQueryFindAll.APIUrl + cH + 'v=' + paApis.paBuDlrOutStoreReturnQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        data: data
      }
    }

  },
  {
    url: paApis.paBuDlrOutStoreReturnDQueryFindAll.APIUrl + cH + 'v=' + paApis.paBuDlrOutStoreReturnDQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        data: data1
      }
    }

  },
  {
    url: paApis.paBuDlrOutStoreReturnMutationSave.APIUrl + cH + 'v=' + paApis.paBuDlrOutStoreReturnMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: '退货成功'
      }
    }

  }
]
