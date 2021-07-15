<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    const cities = this.$store.getters['location/getCitiesGroup'];
    // eslint-disable-next-line no-restricted-syntax
    for (const city of cities) {
      this.$store.dispatch('weather/getWeather', {
        location: city,
        mode: 'add',
      });
    }
  },
};
</script>

<style>
</style>
