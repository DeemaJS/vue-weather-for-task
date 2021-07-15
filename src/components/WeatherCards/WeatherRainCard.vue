<template>
  <li class="widjet-precipitation-item">
    {{ rain ? rain["1h"] : 0 }} мм
  </li>
</template>

<script>
export default {
  props: ['rain'],
};
</script>

<style>
</style>
