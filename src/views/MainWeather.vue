<template>
    <section class="main-header">
      <UiFormSearchCity />
    </section>
    <section class="main-body">
      <div class="weather-box">
        <ul class="weather-list" v-if="hasCities">
          <WeatherCard
            v-for="(city, idx) in citiesWeatherGroup"
            :key="city"
            :weatherCity="city"
            :cityNumber="idx"
          />
        </ul>

        <p class="weather-group-message" v-else>
          Добавьте свой первый отслеживаемый город
        </p>
      </div>
    </section>
</template>

<script>
import UiFormSearchCity from "@/components/UiFormSearchCity";
import WeatherCard from "@/components/WeatherCard.vue";
export default {
  data() {
    return {};
  },
  computed: {
    citiesWeatherGroup() {
      return this.$store.getters["location/getCitiesGroup"];
    },
    hasCities() {
      return this.citiesWeatherGroup.length > 0;
    },
  },
  components: { UiFormSearchCity, WeatherCard },
};
</script>

<style>
</style>