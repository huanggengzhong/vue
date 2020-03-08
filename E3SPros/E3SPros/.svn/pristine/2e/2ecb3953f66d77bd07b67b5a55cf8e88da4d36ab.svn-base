/**
 * description: 员工信息
 * author: mjq
 * createdDate: 2019-07-24
 */
import Mock from 'mockjs'
import { orgApis } from '../../src/api/graphQLApiList/org'

const cH = '/'
// 厂商员工查询
const mdmOrgEmployeeQueryFindAll = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    mdmOrgEmployeeQueryFindAll: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      'rows|33': [{
        'empCode|1': [
          '1011141',
          '1012081',
          'CSR20006 '
        ],
        'deptName|1': [
          '车辆业务科',
          '深圳联友科技有限公司测试',
          '客户服务中心'
        ],
        'dlrId|1': [
          '123',
          '234',
          '345'
        ],
        'dlrName|1': [
          '乘用车公司',
          '乘用车公司',
          '乘用车公司'
        ],
        'empId|1': [
          '123',
          '2345',
          '451ss'
        ],
        'orgTreeId|+1': 1,
        'dlrCode|1': [
          'aaa',
          'bbb',
          '45cccc1ss'
        ],
        'empName|1': [
          '郝晓强',
          '张晓红'
        ],
        'genderName|1': [
          '男',
          '女'
        ],
        'genderCode|1': [
          '男',
          '女'
        ],
        'stationName|1': [
          '营销支援',
          '开发人员'
        ],
        'orgName|1': [
          'IS部门',
          '市场部'
        ],
        'userName|1': [
          '8哥',
          'CIP运维管理员',
          'CWS备用'
        ],
        'epstatus|1': [
          '在职',
          '离职'
        ],
        'class|1': [
          '系统管理',
          '业务顾问'
        ],
        'status|1': [
          '0',
          '1'
        ],
        'birthDate': '1',
        'workTel': '1',
        'mobile': '1',
        'degreeCode': '1',
        'personAddr': '1',
        'zip': '1',
        'email': '1',
        'fax': '1',
        'naitionalityCode': '1',
        'marriageCode': '1',
        'nativePlace': '1',
        'school': 1,
        'degreepro': 1,
        'secondMan': 1,
        'secondManTel': 1,
        'skillSpecial': 1,
        'familyPhone': 1,
        'driverDate': 1,
        'nationCode': 1,
        'businessDate': 1,
        'employDate': 1,
        'employType': 1,
        'politicsCode': 1,
        'credTypeCode': 1,
        'credNo': 1,
        'stationId': 1,
        'userId': 1,
        'isEnable': 1,
        'companyid': 1,
        'leaveDate': 1,
        'isFrozen': 1

      }]
    }
  }
})
const mdmOrgEmployeeMutationSaveById = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    mdmOrgEmployeeMutationSaveById: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      rows: []
    }}
})

// 菜单角色查询
const sysRoleQueryCommonByPage = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    sysRoleQueryCommonByPage: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      'rows|22': [{
        'roleId|+1': 1,
        'roleName|1': [
          '郝晓强',
          '张晓红'
        ],
        'roleCode|1': [
          'A002-RA0020101',
          'B002-KW0020188'
        ],
        'roleType|1': [
          '0',
          '1'
        ],
        'orgName|1': [
          '市场部',
          '营销部'
        ],
        'roleDesc|1': [
          '网络开发科-科长',
          '研发部-部长'
        ]
      }]
    }
  }
})

// 角色保存
const sysRoleMutationCommonSave = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    sysRoleMutationCommonSave: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      rows: []
    }}
})

// 角色删除
const sysRoleMutationCommonDel = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    sysRoleMutationCommonDel: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '删除成功',
      rows: []
    }}
})
//

export default [
  // 批次分配时机查询
  {
    url: orgApis.mdmOrgEmployeeQueryFindAll.APIUrl + cH + 'v=' + orgApis.mdmOrgEmployeeQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return mdmOrgEmployeeQueryFindAll
    }
  },
  {
    url: orgApis.mdmOrgEmployeeMutationSaveById.APIUrl + cH + 'v=' + orgApis.mdmOrgEmployeeMutationSaveById.ServiceCode,
    type: 'post',
    response: config => {
      return mdmOrgEmployeeMutationSaveById
    }
  },
  {
    url: orgApis.sysRoleQueryCommonByPage.APIUrl + cH + 'v=' + orgApis.sysRoleQueryCommonByPage.ServiceCode,
    type: 'post',
    response: config => {
      return sysRoleQueryCommonByPage
    }
  },

  {
    url: orgApis.sysRoleMutationCommonSave.APIUrl + cH + 'v=' + orgApis.sysRoleMutationCommonSave.ServiceCode,
    type: 'post',
    response: config => {
      return sysRoleMutationCommonSave
    }
  },
  {
    url: orgApis.sysRoleMutationCommonDel.APIUrl + cH + 'v=' + orgApis.sysRoleMutationCommonDel.ServiceCode,
    type: 'post',
    response: config => {
      return sysRoleMutationCommonDel
    }
  }
]
