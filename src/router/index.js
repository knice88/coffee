import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Coffee from '@/components/coffee/Main.vue'
import Translate from '@/components/translate/Main.vue'
import Country from '@/components/country/Main.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Country
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
        },
        {
          path: 'country',
          component: Country
        }
      ]
    }
  ]
})

export default router
