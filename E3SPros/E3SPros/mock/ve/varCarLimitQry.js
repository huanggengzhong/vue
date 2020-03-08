/**
* description: 车辆限制查询数据
* author: linwm
* createdDate: 2019-07-24
*/
import Mock from 'mockjs'
const cH = '/'

const varCarLimitQry = Mock.mock({
  result: '1',
  msg: '',
  data: {
    varCarLimitQry: {
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
            carBrandCn:"东风日产-日产",
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
            purOrderDId:'asdasadasdq',
            updateControlId: '12caee2daceb40e7bd2601cb34893864'
        },
        {
            remark:"无",
            hostLimitState:"限制车辆",
            limitId:"52",
            limitReason:"大客户预留",
            hostLimitReasonId:"59",
            isDisplay:"是",
            carBrandCn:"东风日产-日产",
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
            purOrderDId:'asdasadasdq',
           updateControlId: '22caee2daceb40e7bd2601cb34893864'
        }
      ]
    }
  }
})

// veReplaceCar
const veReplaceCar = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veReplaceCar: {
          result: '1',
          msg: ''
      }
  }
})


export default [
  {
    url: '/ly/mp/busicen/scc/graphql.do' + cH + 'v=varCarLimitQry',
    type: 'post',
    response: config => {
      return varCarLimitQry
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veReplaceCar',
    type: 'post',
    response: config => {
      return veReplaceCar
    }
  }
]