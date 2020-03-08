/**
* description: 经销商订单预测 理论库存周期设置
* author: 林泽文
* createdDate: 2019-8-3
*/
import Mock from 'mockjs'
// import { veApis } from '../../src/api/graphQLApiList/ve'

const cH = '/'

const veBaseCycleStockQry = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veBaseCycleStockQry: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 4,
      rows: [{
        carBrandName: '东风日产-日产',
        carBrandCode: '1',
        dlrShortName: '广州风日店',
        dlrId: '1',
        baseCycleStock: '2',
        bigAreaName: '华南二区',
        smallAreaName: '广清韶区'
      },
      {
        carBrandName: '东风日产-日产',
        carBrandCode: '1',
        dlrShortName: '广州风日店',
        dlrId: '1',
        baseCycleStock: '2',
        bigAreaName: '华南二区',
        smallAreaName: '广清韶区'
      },
      {
        carBrandName: '东风日产-日产',
        carBrandCode: '1',
        dlrShortName: '广州风日店',
        dlrId: '1',
        baseCycleStock: '2',
        bigAreaName: '华南二区',
        smallAreaName: '广清韶区'
      },
      {
        carBrandName: '东风日产-日产',
        carBrandCode: '1',
        dlrShortName: '广州风日店',
        dlrId: '1',
        baseCycleStock: '2',
        bigAreaName: '华南二区',
        smallAreaName: '广清韶区'
      }
      ]
    }
  }
})

export default [
  // 品牌查询
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veBaseCycleStockQry',
    type: 'post',
    response: config => {
      return veBaseCycleStockQry
    }
  }
  // 品牌保存
  // {
  //   url: veApis.mdmCarBrandBizSave.APIUrl + cH + 'v=' + veApis.mdmCarBrandBizSave.ServiceCode,
  //   type: 'post',
  //   response: config => {
  //     return mdmCarBrandBizSave
  //   }
  // }

]
