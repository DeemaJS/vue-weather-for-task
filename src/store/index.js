import { createStore } from 'vuex'
import location from './modules/location.module.js'

export default createStore({
   modules: {
      location
   }
})
