/**
 * description: 经销商库存度导入
 * author: zhhx
 * createdDate: 2019-09-21
 * logs:
 */
import Mock from 'mockjs'
import { veApis } from '../../src/api/graphQLApiList/ve'

const cH = '/'
// 查询
const veDlrInventoryQuery = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    veDlrInventoryQuery: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      'rows|33': [{
        'carBrandCode': '1',
        'carBrandCn': '东风日产',
        'area': '中国南部',
        'region': '华南区',
        'village': '华南区A小区',
        'province': '广东',
        'cityName': '广州',
        'dlrShortName': '广州丰日',
        'carSeriesCn': '新逍客',
        'inventory': '0',
        'relativeNaAverage': '0',
        'dlrNaAverageInventory': '0',
        'dataGenerationTime': '2019-9-21',
        'updateControlId': '1'
      }]
    }
  }
})

// 导入
const veDlrInventoryImport = Mock.mock({
  'result': '1',
  'data': {
    'veDlrInventoryImport': {
      'result': '1',
      'records': 1,
      'msg': '1',
      'rows': []
    }
  }
})

export default [
  {
    url: veApis.veDlrInventoryQuery.APIUrl + cH + 'v=' + veApis.veDlrInventoryQuery.ServiceCode,
    type: 'post',
    response: config => {
      return veDlrInventoryQuery
    }
  },
  {
    url: veApis.veDlrInventoryImport.APIUrl + cH + 'v=' + veApis.veDlrInventoryImport.ServiceCode,
    type: 'post',
    response: config => {
      return veDlrInventoryImport
    }
  }
]
