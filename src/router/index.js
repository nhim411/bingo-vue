import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import NotFound from "../views/NotFound.vue";
import store from "@/store";
import lodash from "lodash";
import localStorage from "@/utils/localStorage";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/user/:id",
      name: "user",
      meta: {
        requiresAuth: true,
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/UserView.vue"),
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/admin",
      name: "AdminView",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AdminView.vue"),
    },
    {
      // will match everything
      path: "*",
      component: NotFound,
    },
  ],
});

// Authenticated
// router.beforeEach(async (to, from, next) => {
//   const hasToken = localStorage.get("jwt");
//   const { userInfo } = store.getters;
//   // next-line: check if route ("to" object) needs authenticated
//   if (
//     to.matched.some((record) => record.meta.requiresAuth) &&
//     lodash.isEmpty(userInfo)
//   ) {
//     if (hasToken) {
//       try {
//         // get user info
//         await store.dispatch("getInfo");
//         next();
//       } catch (error) {
//         // remove token and go to login page to re-login
//         console.log(error || "Has Error");
//         next("/login");
//       }
//     } else {
//       next("/login");
//     }
//   } else if (!lodash.isEmpty(userInfo)) {
//     switch (to.name) {
//       case "login":
//         next({ path: "/user" });
//         break;
//       case "admin":
//         if (!userInfo.isAdmin) {
//           next({ path: "/user" });
//         } else {
//           next();
//         }

//         break;
//       default:
//         next();
//         break;
//     }
//   } else next();
// });

export default router;
