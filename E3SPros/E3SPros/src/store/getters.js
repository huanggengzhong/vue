const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  maxCacheCount: state => state.tagsView.maxCacheCount,
  userId: state => state.user.orgInfo.userId,
  dlrCode: state => state.user.orgInfo.DLR_CODE,
  userName: state => state.user.orgInfo.userName,
  menu: state => state.user.menu,
  orgInfo: state => state.user.orgInfo,
  name: state => state.user.orgInfo.empName,
  language: state => state.app.language
}
export default getters
