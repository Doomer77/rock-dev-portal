import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";

const router = createRouter({
  extendRoutes: (routes) => setupLayouts([...routes]),

  history: createWebHistory(import.meta.env.BASE_URL),
});

export default router;
