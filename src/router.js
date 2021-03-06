import { createWebHistory, createRouter } from "vue-router";
import TheMainPage from "./pages/TheMainPage.vue";
import NotFound from "./pages/NotFound.vue";
import TheCatDetails from "./components/TheCatDetails.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      redirect: "/cats",
    },
    { path: "/cats", component: TheMainPage },
    { path: "/cats/:id", component: TheCatDetails, props: true },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});
export default router;
