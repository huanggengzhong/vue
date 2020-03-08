import request from '@/utils/request'
import qs from 'qs'
import config from '@/utils/config'
import { orgApis } from './graphQLApiList/org'

export function login(data) {
  return request({
    url: '/mp/login/validlogin.do',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    // 解决本地mock错误问题
    data: (process.env.NODE_ENV === 'production' && config.cH === '/') ? {} : qs.stringify(data)
  })
}

// 组织架构信息
export function getOrgInfo(data) {
  return request({
    url: orgApis.getUserLoginInfo.APIUrl + config.cH + 'v=' + orgApis.getUserLoginInfo.ServiceCode,
    method: 'post',
    data: data
  })
}

// import axios from 'axios'
export function getMenu(token) {
  // return axios.get('http://mp221-nginx2-pvoadev.openshift.szlanyou.local/mp/framework/getMyMenuTree.do?token=' + token, {})
  return request({
    url: '/mp/framework/getMyMenuTree.do?token=' + token,
    method: 'get'
  })
}

export function logout(data) {
  return request({
    url: '/mp/login/logout.do',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    // 解决本地mock错误问题
    data: (process.env.NODE_ENV === 'production' && config.cH === '/') ? {} : qs.stringify(data)
  })
}


//密码修改
export function modifyPassword(data) {
  return request({
    url: '/mp/framework/modifyPassword.do',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    // 解决本地mock错误问题
    data: (process.env.NODE_ENV === 'production' && config.cH === '/') ? {} : qs.stringify(data)
  })
}


//系统设置查询
export function systemSetLoad(data) {    
  return request({
    url: 'mp/framework/sysetload.do?token=' + data.token+'&datatype='+data.datatype,
    
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    // 解决本地mock错误问题
    data: (process.env.NODE_ENV === 'production' && config.cH === '/') ? {} : qs.stringify(data)
  })
}

//系统设置保存
export function systemSetSave(data) {
  return request({
    url: 'mp/framework/sysetsave.do',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    // 解决本地mock错误问题
    data: (process.env.NODE_ENV === 'production' && config.cH === '/') ? {} : qs.stringify(data)
  })
}
