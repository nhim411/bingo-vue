<template>
  <nav class="bd-navbar navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <img :src="logo" width="100" />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start" style="width: 100%">
        <a class="navbar-item has-text-centered is-flex-grow-1">
          <marquee behavior="scroll" direction="right" class="header__crolltext"
            >Demo scroll text...</marquee
          >
        </a>
      </div>

      <div class="navbar-end is-flex-shrink-1">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light" @click="logout"> Logout </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "@/assets/logomenu2.png";
export default {
  data() {
    return {
      logo,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scroped>
.navbar-item img {
  max-height: none;
}
.header__crolltext {
  color: rgb(25, 28, 226);
}
</style>
