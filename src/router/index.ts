import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PizzaList from '../views/PizzaList.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'PizzaList',
    component: PizzaList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
