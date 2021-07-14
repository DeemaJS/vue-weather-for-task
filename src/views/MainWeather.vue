<template>
  <main class="main-container p-4">
    <section class="main-header">
      <WeatherFormSearchCity />
    </section>
    <section class="main-body">
      <div class="weather-box">
        <ul class="weather-list" v-if="hasWeather">
          <WeatherCard
            v-for="(weather, idx) in currentWeather"
            :key="weather"
            :cardValue="weather"
            :index="idx"
          />
        </ul>

        <p class="weather-group-message" v-else>
          Добавьте свой первый отслеживаемый город
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import WeatherFormSearchCity from "@/components/WeatherFormSearchCity";
import WeatherCard from "@/components/WeatherCards/WeatherCard.vue";

export default {
  data() {
    return {};
  },
  computed: {
    currentWeather() {
      return this.$store.getters["weather/getCurrentWeather"];
    },
    hasWeather() {
      return this.currentWeather.length > 0;
    },
  },
  components: { WeatherFormSearchCity, WeatherCard },
};
</script>

<style>
</style>