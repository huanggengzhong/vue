/**
 * description: 经销商通用部门查询
 * author: zhhx
 * createdDate: 2019-10-25
 * logs:
 */
import Mock from 'mockjs'
import { orgApis } from '../../src/api/graphQLApiList/org'

const cH = '/'
// 查询
const mdmOrgDeptQueryFindAll = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    mdmOrgDeptQueryFindAll: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      'rows|33': [{
        'carBrandCode': '1',
        'carBrandName': '东风日产',
        'deptName': '售后服务部',
        'deptCode': 'L00104',
        'deptId': '1',
        'isEnableCn': '是',
        'isEnable': '1'
      }]
    }
  }
})

// 保存
const mdmOrgDeptMutationSaveById = Mock.mock({
  'result': '1',
  'data': {
    'mdmOrgDeptMutationSaveById': {
      'result': '1',
      'records': 1,
      'msg': '保存成功'
    }
  }
})

export default [
  {
    url: orgApis.mdmOrgDeptQueryFindAll.APIUrl + cH + 'v=' + orgApis.mdmOrgDeptQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return mdmOrgDeptQueryFindAll
    }
  },
  {
    url: orgApis.mdmOrgDeptMutationSaveById.APIUrl + cH + 'v=' + orgApis.mdmOrgDeptMutationSaveById.ServiceCode,
    type: 'post',
    response: config => {
      return mdmOrgDeptMutationSaveById
    }
  }
]
