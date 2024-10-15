import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout.vue";
// 定义路由数组
const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/cart",
        name: "Cart",
        component: () => import("../views/Cart.vue"),
        children: [
          {
            path: "order",
            name: "Order",
            component: () => import("../views/OrderInfo.vue"), // 订单信息组件
          },
        ],
      },
      {
        path: "/book",
        name: "BookList",
        component: () => import("../views/BookList.vue"),
      }, // 动态路由配置
      {
        path: "/book/:id",
        name: "BookDetail",
        component: () => import("../views/BookDetail.vue"),
      },
      {
        path: "/user",
        name: "UserDashboard",
        component: () => import("../views/UserDashboard.vue"),
        redirect: "/user/profile",
        children: [
          {
            path: "profile",
            name: "UserProfile",
            component: () => import("../views/UserProfile.vue"),
          },
          {
            path: "setting",
            name: "UserSetting",
            component: () => import("../views/UserSetting.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];

// 定义路由对象
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 如果没有保存的位置，或者从其他页面跳转而来，滚动到顶部
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (
    (to.path.startsWith("/user") || to.path === "/cart") &&
    !localStorage.getItem("token")
  ) {
    alert("请先登录");
    next({ path: "/login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});
// 导出路由对象
export default router;
