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
import localStorage from "../utils/localStorage";
export default {
  name: "UserView",
  components: { AppHeader, InfoItem, TheTickets, TheResult, ChatGroup },
  data() {
    return {
      textSendMessage: "",
    };
  },
  sockets: {
    connect: function () {
      console.log("socket connected");
    },
    message: function (data) {
      console.log(`Received message: ${JSON.stringify(data)}`);
    },
    welcome: function (data) {
      console.log(`welcome message: ${JSON.stringify(data)}`);
    },
    room: function (data) {
      console.log(`room message: ${JSON.stringify(data)}`);
    },
  },
  created() {
    let joinRequest = {
      user: "Nam LH",
      room: this.$route.params.id,
    };
    console.log(`Join request ${JSON.stringify(joinRequest)}`);
    this.$socket.emit("join", joinRequest);
  },
  methods: {
    sendMessage() {
      this.$socket.emit("sendMessage", {
        user: "Nam LH",
        message: this.textSendMessage,
        token: localStorage.get("jwt"),
      });
    },
  },
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
