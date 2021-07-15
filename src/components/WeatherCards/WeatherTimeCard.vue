<template>
  <li class="widjet-time-item">
    {{ converterUnix(time , 'getHours') }}:00
  </li>
</template>

<script>
import { converterUnix } from '@/utils/converter';

export default {
  props: ['time'],
  methods: {
    converterUnix,
  },
};
</script>

<style>
</style>
