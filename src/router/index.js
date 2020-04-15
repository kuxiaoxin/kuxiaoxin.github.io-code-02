import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/hero',
    name: 'Hero',
    component: () => import('../views/hero/Hero.vue')
  },
  {
    path: '/think',
    name: 'Think',
    component: () => import('../views/think/Think.vue')
  },
  {
    path: '/trickery',
    name: 'Trickery',
    component: () => import('../views/trickery/Trickery.vue')
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('../views/book/Book.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
