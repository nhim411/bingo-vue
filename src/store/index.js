import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storeData = {
  state: {
    loading: false,
    isAuthenticated: false,
    userInfo: { name: "Nam", isAdmin: false, id: 10 },
  },
  getters: {
    isLoading(state) {
      return state.loading;
    },
    userInfo(state) {
      return state.userInfo;
    },
  },
  mutations: {},
  actions: {},
};

const store = new Vuex.Store(storeData);

export default store;
