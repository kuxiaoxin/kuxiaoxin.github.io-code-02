import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      breadcrumbItems: [
        // {
        //   text: '首页',
        //   to: { name: 'Home' }
        // },
        {
          text: '首页',
          active: true
        }
      ]
    },
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/hero',
    name: 'Hero',
    meta: {
      breadcrumbItems: [
        // {
        //   text: '论英雄',
        //   to: { name: 'Hero' }
        // },
        {
          text: '论英雄',
          active: true
        }
      ]
    },
    component: () => import('../views/hero/Hero.vue')
  },
  {
    path: '/think',
    name: 'Think',
    meta: {
      breadcrumbItems: [
        // {
        //   text: '锦囊',
        //   to: { name: 'Think' }
        // },
        {
          text: '锦囊',
          active: true
        }
      ]
    },
    component: () => import('../views/think/Think.vue')
  },
  {
    path: '/trickery',
    name: 'Trickery',
    meta: {
      breadcrumbItems: [
        // {
        //   text: '权谋',
        //   to: { name: 'Trickery' }
        // },
        {
          text: '权谋',
          active: true
        }
      ]
    },
    component: () => import('../views/trickery/Trickery.vue')
  },
  {
    path: '/book',
    name: 'Book',
    meta: {
      breadcrumbItems: [
        // {
        //   text: '图书',
        //   to: { name: 'Book' }
        // },
        {
          text: '图书',
          active: true
        }
      ]
    },
    component: () => import('../views/book/Book.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      breadcrumbItems: [
        // {
        //   text: '关于',
        //   to: { name: 'About' }
        // },
        {
          text: '关于',
          active: true
        }
      ]
    },
    component: () => import('../views/about/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
