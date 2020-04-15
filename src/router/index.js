import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/hero',
    name: 'Hero',
    component: () => import('../views/Hero.vue')
  },
  {
    path: '/think',
    name: 'Think',
    component: () => import('../views/Think.vue')
  },
  {
    path: '/trickery',
    name: 'Trickery',
    component: () => import('../views/Trickery.vue')
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('../views/Book.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
