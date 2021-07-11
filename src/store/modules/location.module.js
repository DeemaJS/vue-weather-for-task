export default {
    namespaced: true,
    state() {
        return {
            citiesGroup: [],
            serverError: false
        }
    },
    getters: {
        getCitiesGroup(state) {
            return state.citiesGroup
        },
        getServerError(state) {
            return state.serverError
        }
    },
    mutations: {
        addNewCity(state, city) {
            state.citiesGroup.push(city)
        },
        setServerError(state, err) {
            state.serverError = err
        },
        clearServerError(state) {
            state.serverError = false
        }
    },
    actions: {
        async getNewCity({ commit }, newCity) {
            try {
                const config = {
                    key: process.env.VUE_APP_WEATHER_API_KEY,
                    limit: 1,
                    city: newCity,
                    lang: 'ru'
                };
                const baseUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${config.city}&limit=${config.limit}&lang=${config.lang}&appid=${config.key}`;
                const data = await fetch(baseUrl).then((quetion) => quetion.json());
                const dataIsValid = await data.length !== 0
                if (dataIsValid) {
                    console.log(data)
                    commit('addNewCity', newCity)
                    commit('setServerError', false)
                    return;
                }
                const textError = `Города с ${newCity} не найденно!!!`
                commit('setServerError', textError)
            } catch (err) {
                commit('setServerError', err)
            }
        }
    }
}