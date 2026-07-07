import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import SuccessView from "../views/SuccessView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/checkout',
      component: CheckoutView,
    },
    {
      path: '/success',
      component: SuccessView,
    }
  ],
})

export default router
