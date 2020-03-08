import Mock from 'mockjs'
import { paApis } from '../../../src/api/graphQLApiList/pa'
const cH = '/'

const data = Mock.mock({
  paBuOemStorageQueryFindAll: {

    'result': '1',
    'msg': '查询成功',
    'pageindex': '',
    'pages': '',
    'records': '10',
    'rows|10': [{
      partName: '螺钉',
      supplierShortName: '正常',
      partBrandName: 'NI',
      warehouseName: '中心库',
      partNo: '00914103-A034',
      isHaveQty: '有货',
      accountQty: '2',
      remainStorage: '10',
      dlrOrderSwitchName: '开放',
      dlrPrice: '50.18',
      carSeriesCode: 'N16+U13+P15',
      pubPartSeriesCode: 'N16Z+U13Z+P15Z',
      pubPartCarType: 'U13Z[Ⅰ+Ⅱ{A+B+C+D}]',
      updateControlId: 'QSQDWQ21S12',
      oemId: 'QS21FSD',
      groupId: 'AWD2221',
      oemCode: '1213SD',
      groupCode: '321DA'

    }]
  }
})

export default [
  {
    // url: '/ly/mp/busicen/prc/graphql.do' + '/v=' + 'paBuOemStorageQueryFindAll',
    url: '/ly/mp/busicen/prc/graphql.do' + '/v=' + paApis.paBuOemStorageQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data
      }
    }
  }
]
