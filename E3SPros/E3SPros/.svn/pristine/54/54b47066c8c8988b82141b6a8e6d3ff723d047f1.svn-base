
/**
 * description: 组织架构
 * author: mjq
 * createdDate: 2019-07-24
 */
import Mock from 'mockjs'
import { orgApis } from '../../src/api/graphQLApiList/org'

const cH = '/'
// 组织架构
const mdmOrgRelationRealQueryByPage = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    mdmOrgRelationRealQueryByPage: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      rows: [
        {
          orgName: '管理部',
          orgCode: 'orgCode3',
          orgBelongType: '0',
          orgTreeId: '3',
          linkId: 'linkId3',
          parentOrgTreeId: '2'
        },
        {
          orgName: '商业企划部',
          orgCode: 'orgCode3',
          orgBelongType: '0',
          orgTreeId: '5',
          linkId: 'linkI43',
          parentOrgTreeId: '2'
        },
        {
          orgName: '营销企划部',
          orgCode: 'orgCode3',
          orgBelongType: '0',
          orgTreeId: '33',
          linkId: 'linkI43',
          parentOrgTreeId: '2'
        },
        {
          orgName: '市场部',
          orgCode: 'orgCode3',
          orgBelongType: '0',
          orgTreeId: '4',
          linkId: 'linkI43',
          parentOrgTreeId: '33'
        },
        {
          orgName: '根节点',
          orgCode: 'orgCode1',
          orgBelongType: '0',
          orgTreeId: '1',
          linkId: 'linkId1',
          parentOrgTreeId: '-1'
        },
        {
          orgName: '小鹏骑车销售有限公司',
          orgCode: 'orgCode2',
          orgBelongType: '0',
          orgTreeId: '2',
          linkId: 'linkId2',
          parentOrgTreeId: '-1'
        }
      ]
    }
  }
})
// 用户权限查询
const sysUserPrivQueryByPage = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    sysUserPrivQueryByPage: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      'rows': [
        {
          'isSelected': '0',
          'menuId': 'ef222a2c771b48ab9ca439e104ada0d8',
          'menuName': '根节点',
          'objectId': null,
          'objectType': null,
          'parentMenuId': 'ef222a2c771b48ab9ca439e104ada0d8',
          'readonly': null,
          'tableId': null,
          'userId': null
        },
        {
          'isSelected': '1',
          'menuId': '09a3f1968855447ab15eebb3a12bbe69',
          'menuName': '在线用户管理(用户授权)',
          'objectId': null,
          'objectType': null,
          'parentMenuId': 'ef222a2c771b48ab9ca439e104ada0d8',
          'readonly': null,
          'tableId': null,
          'userId': null
        },
        {
          'isSelected': '0',
          'menuId': '0878e074ccdb405bb1a2a3c90c2a7955',
          'menuName': '岗位管理(用户授权)',
          'objectId': null,
          'objectType': null,
          'parentMenuId': 'ef222a2c771b48ab9ca439e104ada0d8',
          'readonly': null,
          'tableId': null,
          'userId': null
        },
        {
          'isSelected': '1',
          'menuId': '0878e074ccdb405bb1a2a3c90c2a79522',
          'menuName': '岗位管理(用户授权)',
          'objectId': null,
          'objectType': null,
          'parentMenuId': '0878e074ccdb405bb1a2a3c90c2a7955',
          'readonly': null,
          'tableId': null,
          'userId': null
        }
      ]
    }
  }
})
// 用户权限保存
const sysUserPrivMutationSave = Mock.mock({
  'result': '1',
  'data': {
    'mdsSysSceneSettingQueryByPage': {
      'result': '1',
      'records': 1,
      'msg': '1',
      'rows': []
    }
  }
})
export default [
  {
    url: orgApis.mdmOrgRelationRealQueryByPage.APIUrl + cH + 'v=' + orgApis.mdmOrgRelationRealQueryByPage.ServiceCode,
    type: 'post',
    response: config => {
      return mdmOrgRelationRealQueryByPage
    }
  },
  {
    url: orgApis.sysUserPrivQueryByPage.APIUrl + cH + 'v=' + orgApis.sysUserPrivQueryByPage.ServiceCode,
    type: 'post',
    response: config => {
      return sysUserPrivQueryByPage
    }
  },
  {
    url: orgApis.sysUserPrivMutationSave.APIUrl + cH + 'v=' + orgApis.sysUserPrivMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return sysUserPrivMutationSave
    }
  }

]
