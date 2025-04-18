import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Coffee from '@/components/coffee/Main.vue'
import Translate from '@/components/translate/Main.vue'
import Country from '@/components/country/Main.vue'
import CountryList from '@/components/country/List.vue'
import CountryInfo from '@/components/country/Info.vue'
import Quiz from '@/components/quiz/Main.vue'
import Answer from '@/components/quiz/Answer.vue'
import QuizResult from '@/components/quiz/Result.vue'
import Github from '@/components/github/Main.vue'

const router = createRouter({
  history: createWebHashHistory(),
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
        },
        {
          path: 'translate',
          component: Translate
        },
        {
          path: 'country',
          component: Country,
          children: [
            {
              path: '',
              component: CountryList,
            },
            {
              path: 'info/:code',
              component: CountryInfo
            }
          ]
        },
        {
          path: 'quiz',
          component: Quiz,
          children: [
            {
              path: '',
              component: Answer,
            },
            {
              path: 'result/:points',
              component: QuizResult
            }
          ]
        },
        {
          path: 'github',
          component: Github
        }
      ]
    }
  ]
})

export default router
