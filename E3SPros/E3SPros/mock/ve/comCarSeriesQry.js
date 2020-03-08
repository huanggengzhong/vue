/**
 * description: 竞争车系
 * author: zhhx
 * createdDate: 2019-09-21
 * logs:
 */
import Mock from 'mockjs'
import { orgApis } from '../../src/api/graphQLApiList/org'

const cH = '/'
// 查询
const mdmCcompCarseriesQueryFindAll = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    mdmCcompCarseriesQueryFindAll: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      'rows|33': [{
        'compBrandCode': '1',
        'compBrandCn': '东风日产',
        'compBrandEn': 'N',
        'compCarseriesID': '1',
        'compCarseriesCode': '1',
        'compCarseriesName': '新逍客',
        'isEnable': '1',
        'isEnableName': '是',
        'updateControlId': '1'
      }]
    }
  }
})

// 保存
const mdmCcompCarseriesMutationSave = Mock.mock({
  'result': '1',
  'data': {
    'mdmCcompCarseriesMutationSave': {
      'result': '1',
      'records': 1,
      'msg': '1',
      'rows': []
    }
  }
})

export default [
  {
    url: orgApis.mdmCcompCarseriesQueryFindAll.APIUrl + cH + 'v=' + orgApis.mdmCcompCarseriesQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCcompCarseriesQueryFindAll
    }
  },
  {
    url: orgApis.mdmCcompCarseriesMutationSave.APIUrl + cH + 'v=' + orgApis.mdmCcompCarseriesMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCcompCarseriesMutationSave
    }
  }
]
