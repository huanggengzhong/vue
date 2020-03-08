/**
 * description: 用户登陆信息
 * author: luojx
 * createdDate: 2019-07-23
 * logs:
 *   2019-08-16 加入用户组织架构信息 luojx
 *              API具体信息：
 *              所属品牌	BRAND_CODE
 *              经销商编码	DLR_CODE
 *              经销商ID	DLR_ID
 *              经销商名称	DLR_NAME
 *              经销商类型	DLR_ORG_TYPE
 *              经销商状态	DLR_STATUS
 *              集团编码	GROUP_CODE
 *              集团ID		GROUP_ID
 *              厂商编码	OEM_CODE
 *              厂商ID		OEM_ID
 *              组织编码	ORG_CODE
 *              组织ID		ORG_ID
 *              组织名称	ORG_NAME
 *              组织类型	ORG_TYPE
 *              一网经销商编码	PARENT_DLR_CODE
 *              一网经销商ID	PARENT_DLR_ID
 *              一网经销商名称	PARENT_DLR_NAME
 *              系统岗位编码	POS_CODE
 *              系统岗位ID	POS_ID
 *              员工姓名	empName
 *              用户ID	userId
 *              用户账户	userName
 */
import { login, logout,getMenu, getOrgInfo ,modifyPassword,systemSetSave,systemSetLoad} from '@/api/user'
import {
  getToken,
  setToken,
  removeToken,
  removeLang,
  setLang,
  removeCurToken,
  setCurToken,
  removeCurUser,
  setCurUser,
  getOrgInfoCookie,
  setOrgInfoCookie,
  removeOrgInfoCookie
} from '@/utils/auth'
import { resetRouter, constantRoutes } from '@/router'
import { getIFramePath, getIFrameUrl } from '@/utils/iframe'
import config from '@/utils/config'
import store from '@/store'
import md5 from 'js-md5'

const state = {
  token: getToken(),
  avatar: '',
  menu: [],
  orgInfo: getOrgInfoCookie() !== '' ? JSON.parse(getOrgInfoCookie()) : {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_MENU: (state, menu) => {
    state.menu = menu
  },
  SET_ORG_INFO: (state, orgInfo) => {
    state.orgInfo = orgInfo || {}
  }
}

const actions = {
  // 用户登陆
  login({ commit }, userInfo) {
    const { username, password, clientid, vcode } = userInfo
    var randomCode = Math.random().toString().substring(2)
    var lang = 'zh-CN'
    var curUser = ''
    return new Promise((resolve, reject) => {
      login({
        user: username.trim(),
        pwd: md5Encript(password, username.trim(), randomCode),
        vcode: vcode,
        token: '',
        lang: lang,
        randomCode: randomCode,
        mode: '9',
        clientid: clientid
      }).then(response => {
        if (response.result === '1') {
          commit('SET_TOKEN', response.token)
          const empName = response.empname
          const userId = response.userid
          const userName = response.username
          response['errorCode'] = 'Success'
          response['message'] = 'Success'
          response['loginPage'] = { 'type': 'None' }
          var curUserObj = {
            'username': response.username,
            'remember': false,
            'vcode': vcode, // 加入验证码 20190816
            'randomCode': randomCode,
            'token': response.token,
            'usertype': response.usertype,
            '$data': response
          }
          curUser = JSON.stringify(curUserObj)
          setAllCookie(response.token, lang, response.token, curUser)

          // 读取用户组织架构信息
          var fields = 'BRAND_CODE DLR_CODE DLR_ID DLR_NAME DLR_ORG_TYPE DLR_STATUS GROUP_CODE GROUP_ID OEM_CODE OEM_ID ORG_CODE ORG_ID ORG_NAME ORG_TYPE PARENT_DLR_CODE PARENT_DLR_ID PARENT_DLR_NAME POS_CODE POS_ID'
          getOrgInfo({ query: 'query{getUserLoginInfo{' + fields + '}}' }).then(response => {
            if (response.result === '1' && response.data && response.data.getUserLoginInfo) {
              // 保存用户组织架构信息
              var orgInfo = response.data.getUserLoginInfo
              orgInfo['empName'] = empName
              orgInfo['userId'] = userId
              orgInfo['userName'] = userName
              setOrgInfoCookie(JSON.stringify(orgInfo))
              commit('SET_ORG_INFO', orgInfo)
            } else {
              reject('登陆成功，但获取用户组织架构信息失败')
              resolve()
            }
          })

          resolve()
        } else {
          reject(response)
          resolve()
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 获取当前用户菜单
  getMenu({ commit, state }) {
    return new Promise((resolve, reject) => {
      getMenu(state.token).then(response => {
        var menus = []
        if (response.result !== '1') {
          reject('验证失败，请重登陆.')
        } else {
          const { rows } = response
          var tmpRows = []
          var tmpBlackMenus = config.blackMenuCodes || []
          if (rows && rows.length > 0) {
            // 排除MP菜单
            for (var i = 0; i < rows.length; i++) {
              if (tmpBlackMenus.length > 0 && tmpBlackMenus.indexOf(rows[i].code) < 0) {
                tmpRows.push(rows[i])
              }
            }

            menus = mpJsonToRoute(null, tmpRows)
            for (var j = 0; j < menus.length; j++) {
              constantRoutes.push(menus[j])
            }
          }

          // 加入404（这段路由必须放到最后）
          constantRoutes.push({ path: '*', name: '404', redirect: '/404', hidden: true })
          commit('SET_MENU', constantRoutes)
          resetRouter()
        }
        resolve(menus)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 退出登陆
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout({ token: state.token }).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ORG_INFO', {})
        removeAllCookie()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 修改密码
  modifyPassword({ commit }, passwordInfo) {
    const { oldpassword, newpassword } = passwordInfo

    var randomCode = Math.random().toString().substring(2)
    var tmpOldpassword = ''
    var tmpNewpassword = ''
    encriptPwdFn(state.orgInfo.userName.trim(), newpassword, 0, function(encriptOldPwd) {
      tmpNewpassword = encriptOldPwd
      encriptPwdFn(state.orgInfo.userName.trim(), oldpassword, 0, function(encriptOldPwd) {
        tmpOldpassword = encriptOldPwd
      })
    })

    // var tmpOldpassword = md5Encript(oldpassword, state.orgInfo.userName.trim(), randomCode)
    return new Promise((resolve, reject) => {
      modifyPassword({
        token: state.token,
        oldpassword: tmpOldpassword,
        newpassword: tmpNewpassword,
        r: randomCode
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 系统设置查询
  systemSetLoad({commit,state},loadInfo) {
    const { datatype} = loadInfo
    return new Promise((resolve, reject) => {
      systemSetLoad({ 
        token: state.token,
        datatype:datatype
      
       
      
      }).then(response => {
        // commit('SET_TOKEN', '')
        // commit('SET_ORG_INFO', {})
        // removeAllCookie()
        // resetRouter()
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

   // 系统设置保存
   systemSetSave({commit,state}, saveInfo) {
    const { json,pwdexpress,expires,errnums,datatype} = saveInfo
    return new Promise((resolve, reject) => {
      systemSetSave({ 
        json: json,
        pwdexpress: pwdexpress,
       expires: expires,
       errnums: errnums,
       datatype:datatype
       
      }).then(response => {
        // commit('SET_TOKEN', '')
        // commit('SET_ORG_INFO', {})
        // removeAllCookie()
        // resetRouter()
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },


  // 移除token（从cookie中）
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ORG_INFO', {})
      removeAllCookie()
      resolve()
    })
  }
}

// 解析MP菜单JSON成路由格式
function mpJsonToRoute(parent, arrChildren) {
  var routeList = []
  for (var i = 0; i < arrChildren.length; i++) {
    var route = {}
    let dir = arrChildren[i].target
    route['name'] = arrChildren[i].code
    if (arrChildren[i].type !== 'P') {
      // 父节点
      if (parent === null) {
        route['path'] = '/' + arrChildren[i].code
        route['component'] = () => import('@/layout')
      } else {
        route['path'] = arrChildren[i].code
        route['component'] = () => import('@/layout/empty')
      }
      if (arrChildren[i].children && arrChildren[i].children.length > 1) {
        if (route.path === '/' || route.path === '') {
          route['redirect'] = arrChildren[i].target
        }
      }
      route['menuId'] = arrChildren[i].id
      route['meta'] = { title: arrChildren[i].name, icon: arrChildren[i].icon }
    } else {
      // 子节点
      // 处理Iframe
      var path = getIFramePath(dir)
      if (path && path !== '') {
        route['path'] = path
        route['component'] = () => import(`@/layout/iframe`)
        // 设置Iframe Path 和 Url
        var url = getIFrameUrl(dir)
        var iFrameUrl = { 'path': path, 'url': url }
        store.commit('addIFrameUrl', iFrameUrl)
      } else {
        if (dir.indexOf('/') > -1) {
          dir = dir.substring(1)
        }
        route['path'] = arrChildren[i].code
        route['component'] = () => import(`@/views/${dir}`)
      }
      route['menuId'] = arrChildren[i].id
      route['meta'] = { title: arrChildren[i].name, icon: arrChildren[i].icon, isChild: '1' }
    }

    if (arrChildren[i].children && arrChildren[i].children.length > 0) {
      route['children'] = mpJsonToRoute(arrChildren[i], arrChildren[i].children)
    }
    routeList.push(route)
  }

  return routeList
}

// 密码加密
function md5Encript(password, username, randomCode) {
  var pwd = md5(md5(md5(md5(md5(username + md5(md5(md5(password))))))) + randomCode)
  return pwd
}

// 修改密码加密
function encript(str, callback) {
  if (callback) {
    return callback(md5(str))
  }
}
function encriptPwdFn(un, pwd, encriptNum, callback) {
  if (encriptNum > 5) {
    return
  }
  encript(pwd, function(encriptPwd) {
    encriptNum += 1
    var encriptPwdToLow = encriptPwd.toLowerCase()
    if (encriptNum === 3) {
      encriptPwdToLow = un + encriptPwdToLow
      encriptPwdFn(un, encriptPwdToLow, encriptNum, callback)
    } else if (encriptNum === 5) {
      if (callback) {
        callback(encriptPwdToLow)
        return
      }
    } else {
      encriptPwdFn(un, encriptPwdToLow, encriptNum, callback)
    }
  })
}

// 清除Cookie
function removeAllCookie() {
  removeToken()
  removeLang()
  removeCurToken()
  removeCurUser()
  removeOrgInfoCookie()
}

// 清除Cookie
function setAllCookie(token, lang, curToken, curUser) {
  setToken(token)
  setLang(lang)
  setCurToken(curToken)
  setCurUser(curUser)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
