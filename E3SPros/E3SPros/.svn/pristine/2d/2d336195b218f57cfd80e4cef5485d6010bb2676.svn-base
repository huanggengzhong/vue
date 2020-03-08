import { resetRouter } from '@/router'

const state = {
  orgName: '主机厂',
  dlrName: '专营店'
}

const mutations = {
  SET_ORGNAME: (state, orgName) => {
    state.orgName = orgName
  },
  SET_DLRNAME: (state, dlrName) => {
    state.dlrName = dlrName
  }
}

const actions = {
  setOrgName({ commit },data) {
    return new Promise(resolve => {
      commit('SET_ORGNAME', data)
    })
  },
  setDlrName({ commit },data) {
    return new Promise(resolve => {
      commit('SET_DLRNAME', data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

