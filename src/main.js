/* Core */
import Vue from "vue";
import Buefy from "buefy";
// import * as Sentry from "@sentry/vue";
// import { BrowserTracing } from "@sentry/tracing";

/* Styles */
// import "./assets/main.css";
// import "buefy/dist/buefy.css";
import "@/scss/main.scss";

/* Router & Store */
import router from "@/router/";
import store from "./store/index.js";

/* Vue. Main component */
import App from "./App.vue";

/* FireBase */
// import firebase from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyARiZYLSLYjBYoIhDCzGUrSTzemvCfkCJ4",
//   authDomain: "bingo-vue-bff7b.firebaseapp.com",
//   projectId: "bingo-vue-bff7b",
//   storageBucket: "bingo-vue-bff7b.appspot.com",
//   messagingSenderId: "126106536433",
//   appId: "1:126106536433:web:24acf4ae813495e2af9c50",
//   measurementId: "G-8D25ZXX8DY",
// };
// firebase.initializeApp(firebaseConfig);

Vue.use(Buefy);

// Sentry.init({
//   Vue,
//   dsn: "https://41b887ea35a34a3cb583d441732dd4ea@o296442.ingest.sentry.io/6745692",
//   integrations: [
//     new BrowserTracing({
//       routingInstrumentation: Sentry.vueRouterInstrumentation(router),
//       tracingOrigins: ["localhost", /^\//],
//     }),
//   ],
//   debug: true,
//   tracingOptions: {
//     trackComponents: true,
//   },
//   // Vue specific
//   logErrors: true,
//   attachProps: true,
//   attachStacktrace: true,
//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
