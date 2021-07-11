<template>
  <main class="main-container p-4">
    <section class="main-header">
      <UiFormSearchCity />
    </section>
    <section class="main-body">
      <div class="weather-box">
        <ul class="weather-list" v-if="hasCities">
           <WeatherCard v-for="city in citiesWeatherGroup" :key="city" :weatherCity="city"/>
        </ul>

        <p class="weather-group-message" v-else>
          Добавьте свой первый отслеживаемый город
        </p>

      </div>

      <div class="pages" v-if="false">
        <ul class="pagination modal-1">
          <li>
            <a href="#" class="prev"> a </a>
          </li>
          <li>
            <a href="#" class="prev"> 1 </a>
          </li>
          <li>
            <a href="#" class="prev"> 2 </a>
          </li>
          <li>
            <a href="#" class="nex"> >> </a>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import UiFormSearchCity from "@/components/UiFormSearchCity";
import WeatherCard from '@/components/WeatherCard.vue'
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
  components: { UiFormSearchCity , WeatherCard },
};
</script>

<style>
</style>