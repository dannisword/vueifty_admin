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
  {
    path: "/components",
    component: Layout,
    redirect: "/components/form",
    name: "form",
    meta: { title: "form", icon: "el-icon-s-help" },
    children: [
      {
        path: "/components/form",
        name: "form",
        component: () => import("@/views/components/Form"),
        meta: { title: "form" },
      },
      {
        path: "/components/table",
        name: "form",
        component: () => import("@/views/components/Table"),
        meta: { title: "form" },
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
