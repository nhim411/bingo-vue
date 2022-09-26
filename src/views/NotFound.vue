<template>
  <section class="hero is-medium is-light" style="height: 100vh">
    <div class="hero-body">
      <div class="container has-text-centered">
        <span class="icon has-text-primary is-large"
          ><i class="mdi mdi-emoticon-sad mdi-48px"></i
        ></span>
        <h1 class="title">Page not found</h1>
        <h2 class="subtitle">
          Sorry, we couldn’t find the page you were looking for
        </h2>
        <router-link to="/dashboard" class="button is-active is-primary"
          >Go to Homepage</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style></style>
