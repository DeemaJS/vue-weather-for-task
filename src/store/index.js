import { createStore } from 'vuex'
import location from './modules/location.module.js'
import weather from './modules/weather.module.js'

export default createStore({
   modules: {
      location,
      weather,
   }
})
