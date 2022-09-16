<template>
  <div class="admin-view">
    <AppHeader />
    <InfoItem />
    <TheResult />
    <TheTickets />
    <ChatGroup />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";

export default {
  name: "ADminView",
  components: { AppHeader },
};
</script>

<style>
.admin-view {
  background: #fc466b; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3f5efb,
    #fc466b
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #3f5efb,
    #fc466b
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
