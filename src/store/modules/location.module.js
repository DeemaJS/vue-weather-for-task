export default {
  namespaced: true,
  state() {
    return {
      citiesWeatherGroup: document.cookie.match(/cities=(.+?)(;|$)/) ? document.cookie.match(/cities=(.+?)(;|$)/)[1].split(',') : [],
    };
  },
  getters: {
    getCitiesGroup(state) {
      return state.citiesWeatherGroup;
    },
  },
  mutations: {
    addNewCity(state, city) {
      state.citiesWeatherGroup.push(city);
      document.cookie = `cities=${state.citiesWeatherGroup}`;
    },
    deleteWeatherCity(state, cityNumber) {
      state.citiesWeatherGroup.splice(cityNumber, 1);
      document.cookie = `cities=${state.citiesWeatherGroup}`;
    },
  },
  actions: {
    async addNewCity({ commit, state, dispatch }, cityValue) {
      try {
        const config = {
          key: process.env.VUE_APP_WEATHER_API_KEY,
          limit: 1,
          searchСity: cityValue,
          lang: 'ru',
        };
        let baseUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${config.searchСity.selectedCity}&limit=${config.limit}&appid=${config.key}`;
        if (config.searchСity.selectedCity === undefined) {
          baseUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${config.searchСity.lat}&lon=${config.searchСity.lon}&limit=${config.limit}&appid=${config.key}`;
        }
        const data = await fetch(baseUrl).then((quetion) => quetion.json());
        const minimalAnswerLength = 1;
        const dataIsValid = data.length >= minimalAnswerLength && state.citiesWeatherGroup.filter((el) => el.toLowerCase() === data[0].local_names[config.lang].toLowerCase()).length <= 0;
        if (dataIsValid) {
          const city = data[0].local_names[config.lang];
          commit('addNewCity', city);
          dispatch('weather/getWeather', { location: city, mode: 'add' }, { root: true });
          return;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
