export default {
	state: {
		loading: false,
	},
	getters: {
		loading: (state) => state.loading,
	},
	mutations: {
		setLoading(state, data) {
			state.loading = data
		},
	},
	actions: {
		setLoading({ commit }, data) {
			commit("setLoading", data)
		},
	},
}
