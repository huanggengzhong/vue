/**
 * 全局配置
 */
// mp2 主机地址
// export const mp2HostUrl = 'mpplatform'/'http://172.26.153.150'
const mp2HostUrl = 'mpplatform'
// 固定url（设定时将会替换默认url前缀，本地调试用）
const localUrl = ''
// /标识使用Mock,?标识使用服务器   url径统一字符
const cH = process.env.NODE_ENV === 'development' ? '/' : '?'
// 是否使用水印
const useWaterMark = false
// MP菜单黑名单（不显示在VUE界面中的菜单）
const blackMenuCodes = [
  'orgMgr'/* 组织管理*/,
  'right'/* 权限管理*/,
  'wf'/* 工作流*/,
  'logReport001'/* 日志报表*/,
  'sysMgr001'/* 系统管理*/
]

export default {
  mp2HostUrl,
  cH,
  useWaterMark,
  blackMenuCodes,
  localUrl
}
