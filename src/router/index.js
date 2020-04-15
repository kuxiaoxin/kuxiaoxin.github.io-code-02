import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routerHome from '@/router/router-home/router-home'
import routerHero from '@/router/router-hero/router-hero'
import routerThink from '@/router/router-think/router-think'
import routerTrickery from '@/router/router-trickery/router-trickery'
import routerBook from '@/router/router-book/router-book'
import routerAbout from '@/router/router-about/router-about'

const routes = [
  ...routerHome,
  ...routerHero,
  ...routerThink,
  ...routerTrickery,
  ...routerBook,
  ...routerAbout
]

const router = new VueRouter({
  routes
})

export default router
