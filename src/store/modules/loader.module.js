export default {
    namespaced: true,
    state() {
        return {
           loader: true
        }
    },
    getters: {
        getLoaderValue(state , mode) {
           state.loader = mode
        },
    },
    mutations: {
        changeLoader(state) {
            state.loader = !state.loader
        },
    }
}