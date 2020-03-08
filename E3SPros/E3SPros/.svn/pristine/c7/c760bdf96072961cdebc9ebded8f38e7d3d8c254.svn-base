/**
 * description: 经销商目标量反馈时机设置
 * author: zhhx
 * createdDate: 2019-09-21
 * logs:
 */
import Mock from 'mockjs'
import { veApis } from '../../src/api/graphQLApiList/ve'

const cH = '/'
// 查询
const veDbMtargettimeSetQueryFindAll = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    veDbMtargettimeSetQueryFindAll: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      'rows|33': [{
        'carBrandCode': '1',
        'carBrandCn': '东风日产',
        'areaName': '中国南部',
        'bigAreaName': '华南区',
        'smallAreaName': '华南区A小区',
        'provinceName': '广东',
        'cityName': '广州',
        'dlrShortName': '广州丰日',
        'targetTypeName': '交车目标',
        'targetMonth': '201909',
        'targetTimeSetId': '1',
        'beginDate': '2019-8-9',
        'endDate': '2019-8-10A',
        'updateControlId': '1',
        'dlrId': '1',
        'targetTypeId': '1',
        'targetDistinStageId': '1',
        'targetYear': '2019'

      }]
    }
  }
})

// 保存
const veDbMtargettimeSetMutationSave = Mock.mock({
  'result': '1',
  'data': {
    'veDbMtargettimeSetMutationSave': {
      'result': '1',
      'records': 1,
      'msg': '1',
      'rows': []
    }
  }
})

export default [
  {
    url: veApis.veDbMtargettimeSetQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbMtargettimeSetQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veDbMtargettimeSetQueryFindAll
    }
  },
  {
    url: veApis.veDbMtargettimeSetMutationSave.APIUrl + cH + 'v=' + veApis.veDbMtargettimeSetMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return veDbMtargettimeSetMutationSave
    }
  }
]
