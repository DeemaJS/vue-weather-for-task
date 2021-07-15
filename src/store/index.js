import { createStore } from 'vuex';
import location from './modules/location.module';
import weather from './modules/weather.module';

export default createStore({
  modules: {
    location,
    weather,
  },
});
