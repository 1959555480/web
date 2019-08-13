import * as types from '../types'

const state = {
  showCode: false
}

const mutations = {
  [types.COM_SHOW_CODE] (state, status) {
    state.showCode = status
  }
}

const actions = { //根据提交过来的status 判断state中的showCode的boolan值 action里提交commit更改mutation->更改status->更改state
  setShowCode ({commit}, status) {
    commit(types.COM_SHOW_CODE, status)
  }
}

const getters = {
  showCode: state => state.showCode
}

export default {
  state,
  mutations,
  actions,
  getters
}