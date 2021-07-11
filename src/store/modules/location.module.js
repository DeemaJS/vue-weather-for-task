export default {
    namespaced: true,
    state() {
        return {
            citiesWeatherGroup: [],
            serverError: false
        }
    },
    getters: {
        getCitiesGroup(state) {
            return state.citiesWeatherGroup
        },
        getServerError(state) {
            return state.serverError
        }
    },
    mutations: {
        addNewCity(state, city) {
            state.citiesWeatherGroup.push(city)
        },
        setServerError(state, err) {
            state.serverError = err
        },
        clearServerError(state) {
            state.serverError = false
        },
        deleteWeatherCity(state , cityNumber) {
            state.citiesWeatherGroup.splice(cityNumber , 1)
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
                const minimalAnswerLength = 1
                const dataIsValid = await data.length >= minimalAnswerLength
                if (dataIsValid) {
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