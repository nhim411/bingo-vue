import Vue from "vue";
import Vuex from "vuex";
import localStorage from "@/utils/localStorage";
import User from "@/api/user";
import router from "@/router";

Vue.use(Vuex);

const getDefaultState = () => {
  return {
    userId: 1,
    email: "tam@gmail.com",
    username: "TamHT",
    role: 0,
    amount: 900000.0,
    loading: false,
  };
};

const storeData = {
  state: getDefaultState(),
  getters: {
    isLoading(state) {
      return state.loading;
    },
    token(state) {
      return state.token;
    },
    userInfo(state) {
      return state.user;
    },
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    RESET_STATE(state) {
      Object.assign(state, getDefaultState());
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    // user login
    login({ commit }, userInfo) {
      const { email, password } = userInfo;
      return new Promise((resolve, reject) => {
        User.login({ email: email.trim(), password: password })
          .then((response) => {
            console.log(response);
            const { token, userResponseJwt } = response;
            localStorage.set("jwt", token);
            commit("SET_TOKEN", localStorage.get("jwt"));
            commit("SET_USER", userResponseJwt);
            router.push("/user");
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    // user logout
    logout({ commit }) {
      console.log("logout");
      localStorage.delete("jwt"); // must remove  token  first
      commit("RESET_STATE");
      router.push("/login");
    },
    // get user info
    getInfo({ commit }) {
      return new Promise((resolve, reject) => {
        User.getInfo()
          .then((response) => {
            console.log("get info:", response);

            if (!response) {
              console.log("getInfo failed, remove token");
              localStorage.delete("jwt"); // must remove  token  first
              commit("RESET_STATE");
              router.push("/login");
              return reject("Verification failed, please Login again.");
            }

            // const { name, avatar } = data;

            commit("SET_USER", response);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};

const store = new Vuex.Store(storeData);

export default store;
