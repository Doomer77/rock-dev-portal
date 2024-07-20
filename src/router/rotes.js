import Home from "@/pages/index.vue";
import Register from "@/pages/register.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];

export default routes;
