<template>
  <form @submit.prevent="register">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Register</p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
        <b-field label="Username">
          <b-input
            v-model="username"
            type="text"
            placeholder="Your email"
            required
          />
        </b-field>
        <b-field label="Email">
          <b-input
            v-model="email"
            type="email"
            placeholder="Your email"
            required
          />
        </b-field>

        <b-field
          label="Password"
          :type="{ 'is-danger': isDiffPassword }"
          :message="{ 'Password is not match': isDiffPassword }"
        >
          <b-input
            v-model="password"
            type="password"
            password-reveal
            placeholder="Your password"
            @change="isDiffPassword"
            required
          />
        </b-field>
        <b-field
          label="Confirm Password"
          :type="{ 'is-danger': isDiffPassword }"
          :message="{ 'Password is not match': isDiffPassword }"
        >
          <b-input
            v-model="confirmPassword"
            type="password"
            password-reveal
            placeholder="Confirm password"
            required
          />
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <b-button label="Close" @click="$emit('close')" />
        <b-button label="Register" type="is-primary" native-type="submit" />
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  name: "ModalRegisterForm",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  computed: {
    isDiffPassword() {
      return this.password !== this.confirmPassword;
    },
  },
  methods: {
    register() {
      this.$store.dispatch("signin", {
        email: this.email,
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
