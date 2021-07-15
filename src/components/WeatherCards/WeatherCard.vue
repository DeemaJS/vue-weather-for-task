<template>
  <li class="weather-item">
    <div class="weather-item-header">
      <div class="weather-header-temp">
        <h2 class="weather-current-temp">
          {{ converterKelvin(cardValue.main.temp) }}°C
        </h2>
        <p class="weather-temp-fells-like">
          Ощущается {{ converterKelvin(cardValue.main.feels_like) }} °C
        </p>
      </div>

      <div class="weather-current">
        <div class="weather-current-weather-content">
          <h3 class="weather-current-state">
            {{ cardValue.weather[0].description }}
          </h3>
          <p class="weather-current-weather-city">
            {{ cardValue.city }}
          </p>
        </div>
        <div class="weather-current-img">
          <img
            :src="`http://openweathermap.org/img/wn/${cardValue.weather[0].icon}.png`"
            alt="weatherIcon"
          >
        </div>
      </div>
    </div>
    <div class="weather-item-footer">
      <div class="flex-row">
        <div class="weather-footer-details">
          <router-link
            :to="`/detail-weather?city=${cardValue.city}`"
            class="weather-footer-link"
          >
            Подробнее
          </router-link>
        </div>
        <div class="weather-footer-deletes">
          <a
            class="weather-footer-link"
            @click.prevent="deleteCard"
          > Удалить </a>
        </div>
      </div>
      <div class="update-weather">
        <a
          class="btn-update"
          @click.prevent="updateWeather"
        > Обновить </a>
      </div>
    </div>
  </li>
</template>

<script>
// eslint-disable-next-line import/extensions
import { converterKelvin } from '@/utils/converter.js';

export default {
  props: {
    cardValue: Object,
    index: Number,
  },
  methods: {
    converterKelvin,
    updateWeather() {
      this.$store.dispatch('weather/getWeather', {
        location: this.$props.cardValue.city,
        mode: 'Update',
        indexForUpdate: this.$props.index,
      });
    },
    deleteCard() {
      const { index } = this.$props;
      this.$store.commit('location/deleteWeatherCity', index);
      this.$store.commit('weather/deleteWeather', index);
    },
  },
};
</script>

<style>
</style>
