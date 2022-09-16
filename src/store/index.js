import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storeData = {
  state: { loading: false, isAuthenticated: false },
  getters: {
    isLoading(state) {
      return state.loading;
    },
  },
  mutations: {},
  actions: {},
};

const store = new Vuex.Store(storeData);

export default store;
