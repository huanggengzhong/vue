/**
 * description: 竞争品牌维护
 * author: zhhx
 * createdDate: 2019-09-21
 * logs:
 */
import Mock from 'mockjs'
import { orgApis } from '../../src/api/graphQLApiList/org'

const cH = '/'
// 查询
const mdmCompBrandQueryFindAll = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    mdmCompBrandQueryFindAll: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      'rows|33': [{
        'compBrandCode': '1',
        'compBrandCn': '东风日产',
        'compBrandEn': 'Niss',
        'isEnable': '1',
        'isEnableName': '启用',
        'updateControlId': '1'
      }]
    }
  }
})

// 保存
const mdmCompBrandMutationSave = Mock.mock({
  'result': '1',
  'data': {
    'mdmCompBrandMutationSave': {
      'result': '1',
      'records': 1,
      'msg': '1',
      'rows': []
    }
  }
})

export default [
  {
    url: orgApis.mdmCompBrandQueryFindAll.APIUrl + cH + 'v=' + orgApis.mdmCompBrandQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCompBrandQueryFindAll
    }
  },
  {
    url: orgApis.mdmCompBrandMutationSave.APIUrl + cH + 'v=' + orgApis.mdmCompBrandMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCompBrandMutationSave
    }
  }
]
