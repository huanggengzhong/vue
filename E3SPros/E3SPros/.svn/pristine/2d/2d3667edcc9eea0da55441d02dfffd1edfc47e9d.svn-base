/**
* description: 滚动需求误差率系数设置
* author: zhhx
* createdDate: 2019-9-20
* logs:
*/
import Mock from 'mockjs'
import { veApis } from '../../src/api/graphQLApiList/ve'

const cH = '/'
// 左边查询
const veErrorRateSetQuery = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    veErrorRateSetQuery: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      'rows|10': [{
        'carBrandCode': '1',
        'carBrandCn': '东风日产',
        'appliMonth': '201910',
        'NMinusThreeMonth': '0.3',
        'NMinusTwoMonth': '0.3',
        'NMinusOneMonth': '0.4',
        'updateControlId': '1'
      }]
    }
  }
})

// 左边保存
const veErrorRateSetMutationSave = Mock.mock({
  'result': '1',
  'data': {
    'veErrorRateSetMutationSave': {
      'result': '1',
      'records': 1,
      'msg': '1',
      'rows': []
    }
  }
})

// 右边查询
const veErrorRateSettingQuery = Mock.mock({
  'result': '1',
  'data': {
    'veErrorRateSettingQuery': {
      'result': '1',
      'records': 1,
      'msg': '1',
      'rows|33': [{
        'carBrandCode': '1',
        'carBrandCn': '东风日产',
        'carSeriesId': '1',
        'carSeriesCn': '西玛',
        'weightcoefficient': '0.7', // 权重系数
        'updateControlId': '1'
      }]
    }
  }
})

// 右边保存
const veErrorRateSettingMutationSave = Mock.mock({
  'result': '1',
  'data': {
    'veErrorRateSettingMutationSave': {
      'result': '1',
      'records': 1,
      'msg': '1',
      'rows': []
    }
  }
})

export default [
  {
    url: veApis.veErrorRateSetQuery.APIUrl + cH + 'v=' + veApis.veErrorRateSetQuery.ServiceCode,
    type: 'post',
    response: config => {
      return veErrorRateSetQuery
    }
  },
  {
    url: veApis.veErrorRateSetMutationSave.APIUrl + cH + 'v=' + veApis.veErrorRateSetMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return veErrorRateSetMutationSave
    }
  },
  {
    url: veApis.veErrorRateSettingQuery.APIUrl + cH + 'v=' + veApis.veErrorRateSettingQuery.ServiceCode,
    type: 'post',
    response: config => {
      return veErrorRateSettingQuery
    }
  },
  {
    url: veApis.veErrorRateSettingMutationSave.APIUrl + cH + 'v=' + veApis.veErrorRateSettingMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return veErrorRateSettingMutationSave
    }
  }
]
