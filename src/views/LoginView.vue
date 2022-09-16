<template>
  <section class="section hero is-fullheight background">
    <div class="hero-body is-justify-content-center">
      <div class="columns is-centered">
        <div class="column">
          <card-component title="Bingo" icon="gamepad-square">
            <form method="POST" @submit.prevent="submit">
              <b-field label="username" icon="email-outline">
                <b-input
                  v-model="form.username"
                  name="username"
                  type="text"
                  required
                />
              </b-field>

              <b-field label="password">
                <b-input
                  v-model="form.password"
                  type="password"
                  name="password"
                  required
                />
              </b-field>

              <b-field>
                <b-checkbox
                  v-model="form.remember"
                  type="is-info"
                  class="is-thin"
                >
                  remember
                </b-checkbox>
              </b-field>

              <hr />

              <div>
                <b-field grouped>
                  <div class="control">
                    <b-button
                      native-type="submit"
                      type="is-info"
                      :loading="isLoading"
                    >
                      Login
                    </b-button>
                  </div>
                  <div class="control">
                    <b-button
                      to="/register"
                      class="button is-outlined is-info"
                      @click="isComponentModalActive = true"
                    >
                      register
                    </b-button>
                  </div>
                </b-field>
              </div>
            </form>
            <b-modal
              v-model="isComponentModalActive"
              has-modal-card
              trap-focus
              :destroy-on-hide="false"
              aria-role="dialog"
              aria-label="Example Modal"
              close-button-aria-label="Close"
              aria-modal
            >
              <template #default="props">
                <ModalRegisterForm @close="props.close" />
              </template>
            </b-modal>
          </card-component>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";
import ModalRegisterForm from "./ModalRegisterForm.vue";

export default {
  name: "LoginView",
  components: { CardComponent, ModalRegisterForm },
  data() {
    return {
      isLoading: false,
      isComponentModalActive: false,
      form: {
        username: "admin@admin",
        password: "111111",
        remember: true,
      },
    };
  },
  computed: {},
};
</script>
<style scoped>
.background {
  background: #fff url("/src/assets/background.jpg") center center/cover
    no-repeat;
  opacity: 0.9;
}
</style>
