<template>
  <form class="header-form" @submit.prevent="addCityCard">
    <span class="search-places">
      <input
        type="text"
        class="form-control"
        placeholder="Введите город..."
        v-model="searchСity"
        @keydown.enter="addCityCard"
      />
      <div class="btn-form-group" v-if="isInputting">
        <button class="delete" @click="deleteInputText">
          <img src="@/assets/svg-icons/delete-fill.svg" alt="delete-button" />
        </button>

        <button class="search" type="submit">
          <img src="@/assets/svg-icons/cursor-fill.svg" alt="search-button" />
        </button>
      </div>

      <button class="get-location" v-else @click.left="getUserLocation">
        <img
          src="@/assets/svg-icons/ticker-fill.svg"
          alt="get-location-button"
        />
      </button>
    </span>

    <small class="form-alert" v-if="serverError">
      {{ serverError }}
    </small>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchСity: "",
    };
  },
  methods: {
    addCityCard() {
      if (this.validatingInput) {
        this.$store.dispatch("location/getNewCity", this.searchСity);
        this.searchСity = "";
      }
    },
    deleteInputText() {
      this.searchСity = "";
    },
    getUserLocation() {
      console.log("getting...");
    },
  },
  computed: {
    validatingInput() {
      return this.searchСity.length >= 3;
    },
    serverError() {
      return this.$store.getters["location/getServerError"];
    },
    isInputting() {
      return this.searchСity.length >= 1;
    }
  },
  watch: {
    serverError() {
      if (this.serverError.length > 0) {
        setTimeout(() => {
          this.$store.commit("location/clearServerError");
        }, 2000);
      }
    },
  },
};
</script>

<style>
</style>