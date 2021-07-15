<template>
  <li class="widjet-weather-icon-item">
    <img
      :src="`http://openweathermap.org/img/wn/${icon}.png`"
      :alt="`weather icon ${icon}`"
    >
  </li>
</template>

<script>
export default {
  props: ['icon'],
};
</script>

<style>
</style>
