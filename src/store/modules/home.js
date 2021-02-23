import { reqIndexData } from '@/api'

const state = {
  indexData:{}
}
const mutations = {
  RECEIVE_INDEXDATA(state, indexData) {
    state.indexData = indexData
    }  
  }
  
const actions = {
  async getIndexData({ commit }) {
    const result = await reqIndexData()
    console.log(result)
    if (result.code === 200) {
      const indexData = result.data
      commit ('RECEIVE_INDEXDATA',indexData)
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}