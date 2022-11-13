import { createRouter, createWebHistory } from "vue-router";

import { projectAuth } from "@/configs/firebase";

// Auth Guards
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  if (!user) next({ name: "SignIn", params: {} });
  else next();
};

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomePage.vue"),
    meta: {
      title: "Trang chủ",
    },
  },
  {
    path: "/showing",
    name: "NowShowing",
    component: () =>
      import(/* webpackChunkName: "NowShowing" */ "../views/NowShowing.vue"),
    meta: {
      title: "Phim đang chiếu",
    },
  },
  {
    path: "/coming",
    name: "UpComing",
    component: () =>
      import(/* webpackChunkName: "UpComing" */ "../views/UpComing.vue"),
    meta: {
      title: "Phim sắp chiếu",
    },
  },
  {
    path: "/about",
    name: "AboutUs",
    component: () =>
      import(/* webpackChunkName: "AboutUs" */ "../views/AboutUs.vue"),
    meta: {
      title: "Về chúng tôi",
    },
  },
  {
    path: "/movies/:id",
    name: "MovieDetail",
    component: () =>
      import(/* webpackChunkName: "MovieDetail" */ "../views/MovieDetail.vue"),
    meta: {
      title: "Chi tiết phim",
    },
  },
  {
    path: "/movies/:id/booking",
    name: "BookingTicket",
    component: () =>
      import(
        /* webpackChunkName: "BookingTicket" */ "../views/BookingTicket.vue"
      ),
    beforeEnter: requireAuth,
    props: true,
    meta: {
      title: "Đặt vé",
    },
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "SignIn" */ "../views/SignIn.vue"),
    meta: {
      title: "Đăng nhập",
    },
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "SignUp" */ "../views/SignUp.vue"),
    meta: {
      title: "Đăng ký",
    },
  },
  {
    path: "/user-profile",
    name: "UserProfile",
    component: () =>
      import(
        /* webpackChunkName: "UserDashboard" */ "../views/UserProfile.vue"
      ),
    beforeEnter: requireAuth,
    meta: {
      title: "Thông tin tài khoản",
    },
  },
  {
    path: "/user-orders",
    name: "UserOrders",
    component: () =>
      import(/* webpackChunkName: "UserDashboard" */ "../views/UserOrders.vue"),
    props: true,
    beforeEnter: requireAuth,
    meta: {
      title: "Hóa đơn của bạn",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
