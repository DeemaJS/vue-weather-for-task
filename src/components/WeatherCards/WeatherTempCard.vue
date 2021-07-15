<template>
  <li class="widjet-temp-item">
    {{ converterKelvin(temp) }}°
  </li>
</template>

<script>
import { converterKelvin } from '@/utils/converter';

export default {
  props: ['temp'],
  methods: {
    converterKelvin,
  },
};
</script>

<style>
</style>
