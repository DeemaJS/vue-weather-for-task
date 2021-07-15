<template>
  <main class="main-container p-4">
    <section class="main-header">
      <WeatherFormSearchCity />
    </section>
    <section class="main-body">
      <div class="weather-box">
        <ul
          v-if="hasWeather"
          class="weather-list"
        >
          <WeatherCard
            v-for="(weather, idx) in currentWeather"
            :key="weather"
            :card-value="weather"
            :index="idx"
          />
        </ul>

        <p
          v-else
          class="weather-group-message"
        >
          Добавьте свой первый отслеживаемый город
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import WeatherFormSearchCity from '@/components/WeatherFormSearchCity';
import WeatherCard from '@/components/WeatherCards/WeatherCard';

export default {
  components: { WeatherFormSearchCity, WeatherCard },
  data() {
    return {};
  },
  computed: {
    currentWeather() {
      return this.$store.getters['weather/getCurrentWeather'];
    },
    hasWeather() {
      return this.currentWeather.length > 0;
    },
  },
};
</script>

<style>
</style>
