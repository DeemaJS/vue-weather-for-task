export default {
  namespaced: true,
  state() {
    return {
      currentWeather: [],
    };
  },
  getters: {
    getCurrentWeather(state) {
      return state.currentWeather;
    },
  },
  mutations: {
    addWeather(state, newWeather) {
      state.currentWeather.push(newWeather);
    },
    updateWeather(state, { index, weatherValue }) {
      state.currentWeather[index] = weatherValue;
    },
    deleteWeather(state, weatherId) {
      state.currentWeather.splice(weatherId, 1);
    },
  },
  actions: {
    async getWeather({ commit }, { location, mode, indexForUpdate }) {
      const config = {
        key: process.env.VUE_APP_WEATHER_API_KEY,
        city: location,
        lang: 'ru',
      };
      const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${config.city}&lang=${config.lang}&appid=${config.key}`;
      const weatherData = await fetch(baseUrl).then((data) => data.json());
      const { main, weather } = weatherData;
      if (mode === 'add') {
        commit('addWeather', {
          main,
          weather,
          city: location,
        });
      } else {
        commit('updateWeather', {
          index: indexForUpdate,
          weatherValue: {
            main,
            weather,
            city: location,
          },
        });
      }
    },
  },
};
