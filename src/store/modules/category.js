import { reqCategory1List } from '../../api'

const state = {
    category1List: []
}
const mutations = {
    RECEIVE_CATEGORY1LIST(state, category1List) {
        state.category1List = category1List
    }
}
const actions = {
    async getCategory1List({ commit }) {
        const result = await reqCategory1List()
        if (result.code === "200") {
            const category1List = result.data.category1List
            commit('RECEIVECATEGORYLIST', category1List)
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