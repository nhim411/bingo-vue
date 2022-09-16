<template>
  <div class="user-view">
    <AppHeader />
    <InfoItem />
    <TheResult />
    <TheTickets />
    <ChatGroup />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import InfoItem from "../components/InfoItem.vue";
import TheTickets from "../components/TheTickets.vue";
import TheResult from "../components/TheResult.vue";
import ChatGroup from "../components/ChatGroup.vue";
export default {
  name: "UserView",
  components: { AppHeader, InfoItem, TheTickets, TheResult, ChatGroup },
};
</script>

<style>
.user-view {
  background: #2193b0; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #6dd5ed,
    #2193b0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #6dd5ed,
    #2193b0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
