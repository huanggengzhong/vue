/**
 * description: 参与批次分配采购单时间范围设置
 * author: zhhx
 * createdDate: 2019-09-19
 * logs:
 */
import Mock from 'mockjs'
import { veApis } from '../../src/api/graphQLApiList/ve'

const cH = '/'
// 查询
const veDbBatchordScheduleQueryFindAll = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    veDbBatchordScheduleQueryFindAll: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      'rows|33': [{
        'carBrandCode': '1',
        'carBrandCn': '东风日产',
        'carSeriesId': '1',
        'carSeriesCn': '西玛',
        'setTypeCode': '1',
        'setTypeCn': '排除',
        'orderBeginTime': '2019-8-9',
        'orderEndTime': '2019-9-9',
        'isEnable': '1',
        'isEnableName': '启用',
        'updateControlId': '1'
      }]
    }
  }
})

// 保存
const veDbBatchordScheduleMutationSave = Mock.mock({
  'result': '1',
  'data': {
    'veDbBatchordScheduleMutationSave': {
      'result': '1',
      'records': 1,
      'msg': '1',
      'rows': []
    }
  }
})

// 删除
const veDbBatchordScheduleMutationDelete = Mock.mock({
  'result': '1',
  'data': {
    'veDbBatchordScheduleMutationDelete': {
      'result': '1',
      'records': 1,
      'msg': '1',
      'rows': []
    }
  }
})

export default [
  {
    url: veApis.veDbBatchordScheduleQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbBatchordScheduleQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veDbBatchordScheduleQueryFindAll
    }
  },
  {
    url: veApis.veDbBatchordScheduleMutationSave.APIUrl + cH + 'v=' + veApis.veDbBatchordScheduleMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return veDbBatchordScheduleMutationSave
    }
  },
  {
    url: veApis.veDbBatchordScheduleMutationDelete.APIUrl + cH + 'v=' + veApis.veDbBatchordScheduleMutationDelete.ServiceCode,
    type: 'post',
    response: config => {
      return veDbBatchordScheduleMutationDelete
    }
  }
]
