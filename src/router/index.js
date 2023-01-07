import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/Layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("@/views/Login"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/Dashboard"),
        meta: { title: "Dashboard" },
      },
    ],
  },
  { path: "*", redirect: "/404", hidden: true },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.VUE_APP_PUBLISH_PATH,
  routes,
});

export default router;
