/**
* description: 储位储位模拟数据
* author: linwm
* createdDate: 2019-07-24
*/
import Mock from 'mockjs'

const cH = '/'
//储位查询
const veCertificatQry = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veCertificatQry: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      'rows|3': [
        {
            carBrandName: '东风日产-日产',
            dlrShortName: '广州置业',
            purOrderCode: 'H2901BU20190613',
            purOrderDCode: 'H2901BU201906130004',
            vin:"LGB2019ABCDE03811",
            expressName:"顺丰快递",
            expressCode:"KS0103311122",
            expressDate:"2019-07-09",
            updateControlId:"42caee2daceb40e7bd2601cb34893822"
        },
        {
            carBrandName: '东风启辰-启辰',
            dlrShortName: '深圳裕朋',
            purOrderCode: 'H2901BU5433243',
            purOrderDCode: 'H2901BU20143244334',
            vin:"LGBDSSCDE03811",
            expressName:"中通快递",
            expressCode:"KS0103311122",
            expressDate:"2019-07-09",
            updateControlId:"52caee2daceb40e7bd2601cb34893822"
        }
      ]
    }
  }
})



export default [
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veCertificatQry',
    type: 'post',
    response: config => {
      return veCertificatQry
    }
  }
]

