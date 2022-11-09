import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomePage.vue"),
  },
  {
    path: "/showing",
    name: "NowShowing",
    component: () =>
      import(/* webpackChunkName: "NowShowing" */ "../views/NowShowing.vue"),
  },
  {
    path: "/coming",
    name: "UpComing",
    component: () =>
      import(/* webpackChunkName: "UpComing" */ "../views/UpComing.vue"),
  },
  {
    path: "/about",
    name: "AboutUs",
    component: () =>
      import(/* webpackChunkName: "AboutUs" */ "../views/AboutUs.vue"),
  },
  {
    path: "/movies/:id",
    name: "MovieDetail",
    component: () =>
      import(/* webpackChunkName: "MovieDetail" */ "../views/MovieDetail.vue"),
  },
  {
    path: "/movies/:id/booking",
    name: "BookingTicket",
    component: () =>
      import(
        /* webpackChunkName: "BookingTicket" */ "../views/BookingTicket.vue"
      ),
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "SignIn" */ "../views/SignIn.vue"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "SignUp" */ "../views/SignUp.vue"),
  },
  {
    path: "/user-profile",
    name: "UserProfile",
    component: () =>
      import(
        /* webpackChunkName: "UserDashboard" */ "../views/UserProfile.vue"
      ),
  },
  {
    path: "/user-orders",
    name: "UserOrders",
    component: () =>
      import(/* webpackChunkName: "UserDashboard" */ "../views/UserOrders.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
