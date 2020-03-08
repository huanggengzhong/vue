/**
* description: 车辆限制设置查询数据
* author: linsy
* createdDate: 2019-08-13
*/
import Mock from 'mockjs'
const cH = '/'

// 保存
const varCarLimitSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    varCarLimitSave: {
          result: '1',
          msg: ''
      }
  }
})

//储区查询
const veCarLimit = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veCarLimit: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [
        {
            remark:"无",
            hostLimitState:"限制车辆",
            limitId:"52",
            limitReason:"大客户预留",
            hostLimitReasonId:"59",
            isDisplay:"是",
            carBrandCode:"东风日产-日产",
            carSeriesCode:"西玛",
            carConfigCode:"FDRALWZJ11EXA-----",
            carColorCode:"珠光白/QAB",
            carIncolorCode:"深内饰G/G",
            vin:"LGB2019ABCDE03811",
            engineNo:"56AB55",
            carHouseCode:"花都中心库",
            carHouseTypeName:"在库",
            inStockDate:"2019-07-16",
            firstPreInStockDate:"2019-07-16",
            moveStateName:"库存车",
            pdiLimit:"否",
            isWaterCarname:"非水浸车",
            quatityName:"正常车",
            isEtPt:"是",
            carId:"DFL7160MAK-TFB",
          updateControlId: '12caee2daceb40e7bd2601cb34893864'
        },
        {
            remark:"无",
            hostLimitState:"限制车辆",
            limitId:"52",
            limitReason:"大客户预留",
            hostLimitReasonId:"59",
            isDisplay:"是",
            carBrandCode:"东风日产-日产",
            carSeriesCode:"西玛",
            carConfigCode:"FDRALWZJ11EXA-----",
            carColorCode:"珠光白/QAB",
            carIncolorCode:"深内饰G/G",
            vin:"LGB2019ABCDE03811",
            engineNo:"56AB55",
            carHouseCode:"花都中心库",
            carHouseTypeName:"在库",
            inStockDate:"2019-07-16",
            firstPreInStockDate:"2019-07-16",
            moveStateName:"库存车",
            pdiLimit:"否",
            isWaterCarname:"非水浸车",
            quatityName:"正常车",
            isEtPt:"是",
            carId:"DFL7160MAK-TFB",
          updateControlId: '22caee2daceb40e7bd2601cb34893864'
        }
      ]
    }
  }
})


export default [
  {
    url: '/ly/mp/busicen/scc/graphql.do' + cH + 'v=veCarLimit',
    type: 'post',
    response: config => {
      return veCarLimit
    }
  },
  {
    url: '/ly/mp/busicen/scc/graphql.do' + cH + 'v=varCarLimitSave',
    type: 'post',
    response: config => {
      return varCarLimitSave
    }
  }
]