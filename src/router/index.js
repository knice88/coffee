import { createRouter, createWebHistory } from 'vue-router'
import Coffee from '@/components/coffee/Main.vue'
import Home from '@/components/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/views',
      children: [
        {
          path: 'coffee',
          component: Coffee
        }
      ]
    }
  ]
})

export default router
