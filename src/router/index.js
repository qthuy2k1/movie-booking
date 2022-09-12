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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
