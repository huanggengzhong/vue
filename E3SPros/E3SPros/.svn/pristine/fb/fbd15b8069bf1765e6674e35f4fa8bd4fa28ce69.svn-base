/**
 * description: 资金模拟数据
 * author: liyanm
 * createdDate: 2019-07-23
 */
import Mock from 'mockjs'
import { veApis } from '../../src/api/graphQLApiList/ve'

const cH = '/'
// 资金类型查询
const veDbPurcashTypeQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbPurcashTypeQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        purcashTypeId: '1',
        purcashTypeName: '现金',
        cancelDay: '3',
        orderNo: '1',
        carOurPriortiy: '1',
        isOnlineStatus: '1',
        isBatchStatus: '1',
        fundGroup: '4',
        isEnable: '1',
        purcashTypeId: '1'
      },
      {
        purcashTypeId: '2',
        purcashTypeName: '现金（工商融资）',
        cancelDay: '4',
        orderNo: '1',
        carOurPriortiy: '2',
        isOnlineStatus: '1',
        isBatchStatus: '1',
        fundGroup: '3',
        isEnable: '1',
        purcashTypeId: '4'
      },
      {
        purcashTypeId: '3',
        purcashTypeName: '现金（自筹）',
        cancelDay: 'Nissian',
        orderNo: '1',
        carOurPriortiy: '3',
        isOnlineStatus: '1',
        isBatchStatus: '1',
        fundGroup: '2',
        isEnable: '1',
        purcashTypeId: '3'
      },
      {
        purcashTypeId: '4',
        purcashTypeName: '保证金',
        cancelDay: '23',
        orderNo: '1',
        carOurPriortiy: '4',
        isOnlineStatus: '1',
        isBatchStatus: '1',
        fundGroup: '1',
        isEnable: '1',
        purcashTypeId: '2'
      }
      ]
    }
  }
})
// 经销商资金类型查询
const veDbOrgPurcashTypeQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbOrgPurcashTypeQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 5,
      records: 3,
      rows: [{
        carBrandCn: '东风日产-日产',
        carBrandCode: '222222',
        purcashTypeName: '现金(自筹)',
        purcashTypeId: '4',
        dlrId: '1',
        dlrShortName: '上海宝钢、上海冠松、广州丰日、广州恒源',
        statu: '1',
        isEnable: '0'
      },
      {
        carBrandCn: '东风日产-日产',
        carBrandCode: '222222',
        purcashTypeName: '现金(自筹)',
        purcashTypeId: '4',
        dlrId: '1',
        dlrShortName: '上海宝钢、上海冠松、广州丰日、广州恒源',
        statu: '1',
        isEnable: '0'
      },
      {
        carBrandCn: '东风日产-日产',
        carBrandCode: '222222',
        purcashTypeName: '现金(DNAF融资)',
        purcashTypeId: '4',
        dlrId: '1',
        dlrShortName: '上海宝钢、上海冠松、广州丰日、广州恒源',
        statu: '1',
        isEnable: '0'
      },
      {
        carBrandCn: '东风日产-日产',
        carBrandCode: '222222',
        purcashTypeName: '现金(DNAF融资)',
        purcashTypeId: '4',
        dlrId: '1',
        dlrShortName: '上海宝钢、上海冠松、广州丰日、广州恒源',
        statu: '1',
        isEnable: '0'
      }
      ]
    }
  }
})
export default [{
  url: veApis.veDbPurcashTypeQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbPurcashTypeQueryFindAll.ServiceCode,
  type: 'post',
  response: config => {
    return veDbPurcashTypeQueryFindAll
  } // 资金类型查询
},
{
  url: veApis.veDbOrgPurcashTypeQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbOrgPurcashTypeQueryFindAll.ServiceCode,
  type: 'post',
  response: config => {
    return veDbOrgPurcashTypeQueryFindAll
  } // 资金类型查询
}
]
