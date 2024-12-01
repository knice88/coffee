import { createRouter, createWebHashHistory } from 'vue-router'
import Coffee from '@/components/coffee/Main.vue'
import Translate from '@/components/translate/Main.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/views/translate'
    },
    {
      path: '/views',
      children: [
        {
          path: 'coffee',
          component: Coffee
        },
        {
          path: 'translate',
          component: Translate
        }
      ]
    }
  ]
})

export default router
