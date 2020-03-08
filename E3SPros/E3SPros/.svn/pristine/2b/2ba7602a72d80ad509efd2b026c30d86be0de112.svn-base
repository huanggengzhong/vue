/**
 * description: 用户相关信息（登陆、退出登陆、获取用户权限菜单等）
 * author: luojx
 * createdDate: 2019-07-16
*/
import { orgApis } from '../src/api/graphQLApiList/org'
import ve from './ve/menuListMock'
import se from './se/menuListMock'
import pa from './pa/menuListMock'
import org from './org/menuListMock'
import crm from './crm/menuListMock'
export default [
  // 登陆
  {
    url: '/mp/login/validlogin\.*',
    type: 'post',
    data: {},
    response: config => {
      return {
        'result': '1',
        'msg': 'Success',
        'token': 'addabcd2449440ec9de7b6abac649d26',
        'username': '8663990',
        'userid': '8663990',
        'usertype': '9',
        'empname': '管理员',
        'errnums': null,
        'timeout': '18000',
        'expires': 10,
        'initstatus': '0',
        'clientid': null,
        'vcode': null,
        'wxbind': '0'
      }
    }
  },

  // 获取用户组织架构信息
  {
    url: orgApis.getUserLoginInfo.APIUrl + '/v=' + orgApis.getUserLoginInfo.ServiceCode,
    type: 'post',
    data: {},
    response: config => {
      return {
        'result': '1',
        'msg': 'Success',
        'data': {
          [orgApis.getUserLoginInfo.ServiceCode]: {
            BRAND_CODE: '1',
            DLR_CODE: 'H2902',
            DLR_ID: '202',
            DLR_NAME: '东风南方中大',
            DLR_ORG_TYPE: '1',
            DLR_STATUS: '1',
            GROUP_CODE: '1',
            GROUP_ID: '1',
            OEM_CODE: '1',
            OEM_ID: '1',
            ORG_CODE: '1',
            ORG_ID: '1',
            ORG_NAME: '东风南方',
            ORG_TYPE: '1',
            PARENT_DLR_CODE: 'H2902',
            PARENT_DLR_ID: '202',
            PARENT_DLR_NAME: '东风南方中大',
            POS_CODE: '',
            POS_ID: ''
          }
        }
      }
    }
  },

  // 获取用户菜单
  {
    url: '/mp/framework/getMyMenuTree\.*',
    type: 'get',
    response: config => {
      const allMenuList = ve.menuList.concat(pa.menuList).concat(se.menuList).concat(crm.menuList).concat(org.menuList)
      return {
        result: '1',
        msg: '',
        rows: allMenuList
      }
    }
  },

  // 退出登陆
  {
    url: '/mp/login/logout\.*',
    type: 'post',
    data: {},
    response: _ => {
      return {
        result: '1',
        msg: 'success'
      }
    }
  }
]
