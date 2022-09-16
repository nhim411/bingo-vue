<template>
  <div id="app">
    <router-view />
    <b-loading v-model="isLoading" :is-full-page="false" :can-cancel="true" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      isFullPage: false,
      canCancel: true,
    };
  },
  computed: mapGetters(["isLoading"]),
};
</script>

<style scoped></style>
