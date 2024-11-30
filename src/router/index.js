import { createRouter, createWebHashHistory } from 'vue-router'
import Coffee from '@/components/coffee/Main.vue'
import Home from '@/components/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Coffee
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
