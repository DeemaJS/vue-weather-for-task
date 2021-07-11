<template>
  <li class="weather-item">
    <div class="weather-item-header">
      <div class="weather-header-temp">
        <h2 class="weather-current-temp">{{ converterKelvin(temp) }}°C</h2>
        <p class="weather-temp-fells-like">
          Ощущается {{ converterKelvin(feelsLike) }} °C
        </p>
      </div>

      <div class="weather-current">
        <div class="weather-current-weather-content">
          <h3 class="weather-current-state">{{ weatherState }}</h3>
          <p class="weather-current-weather-city">{{ weatherCity }}</p>
        </div>
        <div class="weather-current-img">
          <img
            :src="`http://openweathermap.org/img/wn/${weatherIcon}.png`"
            alt="weatherIcon"
          />
        </div>
      </div>
    </div>
    <div class="weather-item-footer">
      <div class="flex-row">
        <div class="weather-footer-details">
          <router-link to="/detail-weather" class="weather-footer-link">
            Подробнее
          </router-link>
        </div>
        <div class="weather-footer-deletes">
          <a  class="weather-footer-link" @click.prevent="deleteWeatherCard"> Удалить </a>
        </div>
      </div>
      <div class="update-weather">
        <a  class="btn-update" @click.prevent="updateWeather"> Обновить </a>
      </div>
    </div>
  </li>
</template>

<script>
import converterKelvin from "@/utils/converter.js";
export default {
  props: {
    weatherCity: String,
    cityNumber: Number
  },
  mounted() {
    this.setWeatherValue();
  },
  data() {
    return {
      temp: "-",
      feelsLike: "-",
      weatherState: "ясно",
      weatherIcon: "10d",
    };
  },
  methods: {
    converterKelvin,
    async setWeatherValue() {
      const config = {
        key: process.env.VUE_APP_WEATHER_API_KEY,
        city: this.$props.weatherCity,
        lang: "ru",
      };
      const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${config.city}&lang=${config.lang}&appid=${config.key}`;
      const weatherData = await fetch(baseUrl).then((data) => data.json());
      const { main, weather } = weatherData;
      this.temp = main.temp;
      this.feelsLike = main.feels_like;
      this.weatherState = weather[0].description;
      this.weatherIcon = weather[0].icon;
    },
    updateWeather() {
        this.setWeatherValue()
    },
    deleteWeatherCard() {
        this.$store.commit('location/deleteWeatherCity' , this.cityNumber)
    }
  },
};
</script>

<style>
</style>