/**
 * 嵌套页面IFrame模块
 */
/**
 * 嵌套页面URL地址
 * @param {*} url
 */
export function getIFramePath(url) {
  let iframeUrl = ''
  if (/^iframe:.*/.test(url)) {
    iframeUrl = url.replace('iframe:', '')
  } else if (/^http[s]?:\/\/.*/.test(url)) {
    iframeUrl = url.replace('http://', '')
    if (iframeUrl.indexOf(':') !== -1) {
      iframeUrl = iframeUrl.substring(iframeUrl.lastIndexOf(':') + 1)
    }
  }
  return iframeUrl
}

/**
 * 嵌套页面路由路径
 * @param {*} url
 */
export function getIFrameUrl(url) {
  let iframeUrl = ''
  if (/^iframe:.*/.test(url)) {
    iframeUrl = process.env.VUE_APP_BASE_API + url.replace('iframe:', '')
  } else if (/^http[s]?:\/\/.*/.test(url)) {
    iframeUrl = url
  }
  return iframeUrl
}

