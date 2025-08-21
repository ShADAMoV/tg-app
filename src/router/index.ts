import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../pages/main/index.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../pages/profile/index.vue')
    },
    {
      path: '/leader-board',
      name: 'leader-board',
      component: () => import('../pages/leader-board/index.vue')
    },
    {
      path: '/rewards',
      name: 'rewards',
      component: () => import('../pages/rewards/index.vue')
    }
  ]
})

export default router
