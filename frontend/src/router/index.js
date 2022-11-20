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
    component: () => import("../views/HomePage.vue"),
    meta: {
      title: "Trang chủ",
      isFullLayout: true,
    },
  },
  {
    path: "/showing",
    name: "NowShowing",
    component: () => import("../views/NowShowing.vue"),
    meta: {
      title: "Phim đang chiếu",
      isFullLayout: true,
    },
  },
  {
    path: "/coming",
    name: "UpComing",
    component: () => import("../views/UpComing.vue"),
    meta: {
      title: "Phim sắp chiếu",
      isFullLayout: true,
    },
  },
  {
    path: "/about",
    name: "AboutUs",
    component: () => import("../views/AboutUs.vue"),
    meta: {
      title: "Về chúng tôi",
      isFullLayout: true,
    },
  },
  {
    path: "/movies/:id",
    name: "MovieDetail",
    component: () => import("../views/MovieDetail.vue"),
    meta: {
      title: "Chi tiết phim",
      isFullLayout: true,
    },
  },
  {
    path: "/movies/:id/booking",
    name: "BookingTicket",
    component: () => import("../views/BookingTicket.vue"),
    props: true,
    meta: {
      title: "Đặt vé",
      isFullLayout: true,
    },
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("../views/SignIn.vue"),
    meta: {
      title: "Đăng nhập",
      isFullLayout: true,
    },
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
    meta: {
      title: "Đăng ký",
      isFullLayout: true,
    },
  },
  {
    path: "/user-profile",
    name: "UserProfile",
    component: () => import("../views/UserProfile.vue"),
    beforeEnter: requireAuth,
    meta: {
      title: "Thông tin tài khoản",
      isFullLayout: true,
    },
  },
  {
    path: "/user-orders",
    name: "UserOrders",
    component: () => import("../views/UserOrders.vue"),
    props: true,
    beforeEnter: requireAuth,
    meta: {
      title: "Hóa đơn của bạn",
      isFullLayout: true,
    },
  },
  {
    path: "/admin/movie-management",
    name: "MovieManagement",
    component: () => import("../views/MovieManagement.vue"),
    meta: {
      title: "Quản lý phim",
    },
  },
  {
    path: "/admin/cinema-management",
    name: "CinemaManagement",
    component: () => import("../views/CinemaManagement.vue"),
    meta: {
      title: "Quản lý rạp chiếu phim",
    },
  },
  {
    path: "/admin/employee-management",
    name: "EmployeeManagement",
    component: () => import("../views/EmployeeManagement.vue"),
    meta: {
      title: "Quản lý nhân viên",
    },
  },
  {
    path: "/admin/ticket-statistic",
    name: "TicketStatistic",
    component: () => import("../views/TicketStatistic.vue"),
    meta: {
      title: "Thống kê",
    },
  },
  {
    path: "/admin/movie-management/:id/edit",
    name: "MovieManagementEdit",
    component: () => import("../views/MovieManagementEdit.vue"),
    meta: {
      title: "Chỉnh sửa thông tin phim",
    },
  },
  {
    path: "/admin/movie-management/create",
    name: "CreateMovieForm",
    component: () => import("../views/CreateMovieForm.vue"),
    meta: {
      title: "Thêm phim mới",
    },
  },
  {
    path: "/admin/cinema-management/:id/edit",
    name: "CinemaManagementEdit",
    component: () => import("../views/CinemaManagementEdit.vue"),
    meta: {
      title: "Chỉnh sửa thông tin rạp chiếu phim",
    },
  },
  {
    path: "/admin/cinema-management/create",
    name: "CreateCinemaForm",
    component: () => import("../views/CreateCinemaForm.vue"),
    meta: {
      title: "Thêm rạp chiếu phim mới",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
