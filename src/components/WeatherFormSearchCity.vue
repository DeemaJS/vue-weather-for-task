<template>
  <form
    class="header-form"
    @submit.prevent="addCityCard"
  >
    <span class="search-places">
      <input
        v-model="searchСity"
        type="text"
        class="form-control"
        placeholder="Введите город..."
        @keydown.enter="addCityCard"
      >
      <div
        v-if="isInputting"
        class="btn-form-group"
      >
        <button
          class="delete"
          @click="deleteInputText"
        >
          <img
            src="@/assets/svg-icons/delete-fill.svg"
            alt="delete-button"
          >
        </button>

        <button
          class="search"
          type="submit"
        >
          <img
            src="@/assets/svg-icons/cursor-fill.svg"
            alt="search-button"
          >
        </button>
      </div>

      <button
        v-else
        class="get-location"
        type="button"
        @click="getUserLocation"
      >
        <img
          src="@/assets/svg-icons/ticker-fill.svg"
          alt="get-location-button"
        >
      </button>
    </span>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchСity: '',
    };
  },
  computed: {
    validatingInput() {
      return (
        this.searchСity.length >= 3 && !Number(this.searchСity.charAt(0))
      );
    },
    isInputting() {
      return this.searchСity.length >= 1;
    },
  },
  methods: {
    addCityCard() {
      if (this.validatingInput) {
        this.$store.dispatch('location/addNewCity', {
          selectedCity: this.searchСity,
        });
        this.searchСity = '';
      }
    },
    deleteInputText() {
      this.searchСity = '';
    },
    getUserLocation() {
      const error = (err) => {
        console.log(err);
      };
      const position = (currentPosition) => {
        const { coords } = currentPosition;
        this.$store.dispatch('location/addNewCity', {
          lat: coords.latitude,
          lon: coords.longitude,
        });
      };
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position, error);
      }
    },
  },
};
</script>

<style>
</style>
