import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuestsView from '../views/GuestsView.vue'
import GuestDetailsView from '../views/GuestDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/guests',
      name: 'guests',
      component: GuestsView
    },
    {
      path: '/guest/:id',
      name: 'guest-details',
      component: GuestDetailsView
    }

  ]
})

export default router
