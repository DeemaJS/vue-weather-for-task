<template>
  <router-view></router-view>
</template>

<script>
export default {
  mounted() {
    const cities = this.$store.getters["location/getCitiesGroup"];
    for (let city of cities) {
      this.$store.dispatch("weather/getWeather", {
        location: city,
        mode: "add",
      });
    }
  },
};
</script>

<style>
</style>