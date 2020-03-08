/**
* description: 已分配采购单查询
* author: linsy
* createdDate: 2019-08-01
*/
import Mock from 'mockjs'
import { veApis } from '../../src/api/graphQLApiList/ve'
// 查询
const cH = '/'
const vePurOrderAssignQuery = Mock.mock({
  result: '1',
  msg: '',
  data: {
    vePurOrderAssignQuery: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 30,
      'rows|5': [
        {
          carBrandCn:'东风日产-日产',
          carBrandCode:'1',
          dlrShortName:'广州风日店',
          drlId:'1',
          purcashTypeName:'东风信用证',
          deductCashTypeName:'现金（自筹）',
          dlrAccountName:'日产账户',
          dlrAccountId:'1',
          purOrderCode:'H2901BU201906130004',
          purOrderDCode:'H2901BU20190613004001',
          PurPrice:'212000',
          bail:'212000',
          vin:'LGB2019ABCDE03811',
          carConfigName:'B2BJ36EXA-----',
          carColorName:'珠光白/QAB',
          carColorCode:'1',
          carColorId:'1',
          carIncolorName:'深内饰G/G',
          carIncolorCode:'1',
          carIncolorId:'1',
          carSeriseName:'西玛',
          carSeriseCode:'1',
          configcode:'DFL72AL2-LNC1',
          carColorPrice:'232312',
          carIncolorPrice:'333333',
          countrySubsidy:'444444',
          carProductPrice:'555555',
          curShName:'花都中心库',
          deliverMode:'送货',
          receiveShId:'广州风日主搬',
          creator:'陈扶风'
        }
      ]
    }
  }
})
// 保存   vePurConfirmOut 采购单出货确认
const veCarRelease = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veCarRelease: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 2,
      rows: [
        {
          carBrandCn: '东风日产-日产',
          dlrShortName: '广州风日店',
          purcashTypeName: '东风信用证',
          deductCashTypeName: '现金（自筹）',
          cashCount: 'null',
          purOrderCode: 'H2901BU201906130004',
          purOrderDCode: 'H2901BU20190610004001',
          purPrice: '100000',
          bail: '212000',
          vin: 'LGB2019ABCDE03811',
          carConfigName: 'B2BJ36EXA----',
          carColorName: '珠光白/QAB',
          carIncolorName: '深内饰G/G',
          carSeriesName: '1233344',
          carSeriseName: '3222',
          configcode: 'DFL72AL2-LNC1',
          carColorPrice: '0',
          carIncolorPrice: '0',
          butiePrice: 'null',
          carProductPrice: '212000',
          configCode: '111',
          suoshuchangku: 'null',
          curShName: '233',
          deliverMode: '送货',
          deliverModeName: '23434',
          receiveShId: '广州风日主搬',
          creator: 'Tom',
          xiadanren: 'null',
          updateControlId: 'asdasdasdasdas'
        }
      ]
    }
  }
})
// vePurConfirmOut 采购单出货确认
const vePurConfirmOut = Mock.mock({
  result: '1',
  msg: '',
  data: {
    vePurConfirmOut: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 2,
      rows: [
        {
          carBrandCn: '东风日产-日产',
          dlrShortName: '广州风日店',
          purcashTypeName: '东风信用证',
          deductCashTypeName: '现金（自筹）',
          cashCount: 'null',
          purOrderCode: 'H2901BU201906130004',
          purOrderDCode: 'H2901BU20190610004001',
          purPrice: '100000',
          bail: '212000',
          vin: 'LGB2019ABCDE03811',
          carConfigName: 'B2BJ36EXA----',
          carColorName: '珠光白/QAB',
          carIncolorName: '深内饰G/G',
          carSeriesName: '1233344',
          carSeriseName: '3222',
          configcode: 'DFL72AL2-LNC1',
          carColorPrice: '0',
          carIncolorPrice: '0',
          butiePrice: 'null',
          carProductPrice: '212000',
          configCode: '111',
          suoshuchangku: 'null',
          curShName: '233',
          deliverMode: '送货',
          deliverModeName: '23434',
          receiveShId: '广州风日主搬',
          creator: 'Tom',
          xiadanren: 'null',
          updateControlId: 'asdasdasdasdas'
        }
      ]
    }
  }
})

export default [
  { // 查询
    url: veApis.vePurOrderAssignQuery.APIUrl + cH + 'v=' + veApis.vePurOrderAssignQuery.ServiceCode,
    type: 'post',
    response: config => {
      return vePurOrderAssignQuery
    }
  },
  { // 保存
    url: veApis.veCarRelease.APIUrl + cH + 'v=' + veApis.veCarRelease.ServiceCode,
    type: 'post',
    response: config => {
      return veCarRelease
    }
  },
  { // 采购单出货确认
    url: veApis.vePurConfirmOut.APIUrl + cH + 'v=' + veApis.vePurConfirmOut.ServiceCode,
    type: 'post',
    response: config => {
      return vePurConfirmOut
    }
  }
]

