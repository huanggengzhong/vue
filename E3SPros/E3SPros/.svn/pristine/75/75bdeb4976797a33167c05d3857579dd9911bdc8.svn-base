/**
 * description: 系统管理
 * author: mjq
 * createdDate: 2019-07-24
 */
import Mock from 'mockjs'
import { orgApis } from '../../src/api/graphQLApiList/org'

const cH = '/'
// 厂商信息查询
const mdmOrgInfoQueryFactoryByPage = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    mdmOrgInfoQueryFactoryByPage: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      'rows|33': [{
        'orgId|+1': 1,
        'orgName|1': [
          '东风乘用车',
          '上海汽车',
          '长安汽车'
        ],
        'orgCode|1': [
          'HOST',
          'SAVA',
          'PA'
        ],
        'roleName|1': [
          '服务科科长',
          '销售科科长',
          'admin'
        ],
        'userName|1': [
          'userName1',
          'userName2',
          'admin1'
        ],
        'password|1': [
          '123456',
          'abcedf',
          'xwsmqAAx'
        ],
        'isEnable|1': [
          '0',
          '1'
        ]
      }]
    }
  }
})
// 厂商信息保存
const mdmOrgInfoFactoryMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmOrgInfoFactoryMutationSave: {
      result: '1',
      msg: ''
    }
  }
})

// 菜单角色查询
const sysRolePrivQueryByPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    sysRolePrivQueryByPage: {
      result: '1',
      msg: '',
      'rows|10': [
        {
          roleId: '234',
          roleCode: 'AHHUT66',
          roleName: '二手车专员',
          roleDesc: '描述',
          updateControlId: '1234'
        }
      ]
    }
  }
})
// 用户区域查询
const userAreaQueryByPage = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    userAreaQueryByPage: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      'rows|33': [{
        'orgName|1': [
          '东风乘用车',
          '上海汽车',
          '长安汽车'
        ],
        'userName|1': [
          '邓悄然',
          '张雁',
          '代颂娥',
          '张茂华'
        ],
        'colnm1|1': [
          '123456',
          'abcedf',
          'xwsmqAAx'
        ],
        'colnm2|1': [
          'PV用户',
          'DLR用户'
        ],
        'areaName|1': [
          '区域1',
          '区域2'
        ],
        'smallAreaName|1': [
          '上海区', '华北区',
          '深圳区', '广州区'
        ],
        'smallAreaId|+1': 1
      }]
    }
  }
})
// 用户区域保存
const userAreaMutation = Mock.mock({
  result: '1',
  msg: '',
  data: {
    userAreaMutation: {
      result: '1',
      msg: '保存成功'
    }
  }
})
// 集团信息查询
const mdmOrgRelationRealGroupQueryByPage = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    mdmOrgRelationRealGroupQueryByPage: {
      result: '1',
      records: 4,
      pageindex: 1,
      pages: 1,
      msg: '查询成功',
      rows: [
        {
          orgName: '根节点',
          orgCode: '001',
          orgBelongType: '组织1',
          orgTreeId: '1',
          linkId: '2',
          parentOrgTreeId: '1'
        },
        {
          orgName: '根节点',
          orgCode: '001',
          orgBelongType: '组织1',
          orgTreeId: '1',
          linkId: '2',
          parentOrgTreeId: '1'
        },
        {
          orgName: '根节点',
          orgCode: '001',
          orgBelongType: '组织1',
          orgTreeId: '1',
          linkId: '2',
          parentOrgTreeId: '1'
        }
      ]
    }
  }
})
export default [
  {
    url: '/ly/mp/busicen/usc/graphql.do/v=userAreaQueryByPage',
    type: 'post',
    response: config => {
      return userAreaQueryByPage
    }
  },
  {
    url: orgApis.mdmOrgInfoQueryFactoryByPage.APIUrl + cH + 'v=' + orgApis.mdmOrgInfoQueryFactoryByPage.ServiceCode,
    type: 'post',
    response: config => {
      return mdmOrgInfoQueryFactoryByPage
    }
  },
  {
    url: orgApis.mdmOrgInfoFactoryMutationSave.APIUrl + cH + 'v=' + orgApis.mdmOrgInfoFactoryMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return mdmOrgInfoFactoryMutationSave
    }
  },
  {
    url: orgApis.sysRolePrivQueryByPage.APIUrl + cH + 'v=' + orgApis.sysRolePrivQueryByPage.ServiceCode,
    type: 'post',
    response: config => {
      return sysRolePrivQueryByPage
    }
  },

  {
    url: orgApis.userAreaMutation.APIUrl + cH + 'v=' + orgApis.userAreaMutation.ServiceCode,
    type: 'post',
    response: config => {
      return userAreaMutation
    }
  },
  {
    url: orgApis.mdmOrgRelationRealGroupQueryByPage.APIUrl + cH + 'v=' + orgApis.mdmOrgRelationRealGroupQueryByPage.ServiceCode,
    type: 'post',
    response: config => {
      return mdmOrgRelationRealGroupQueryByPage
    }
  }
]
