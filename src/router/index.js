import {createApp} from 'vue'
import {createWebHashHistory, createRouter} from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/write',
    name: 'Write',
    component: () => import(/* webpackChunkName: "write" */ '../views/Write.vue')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue')
  },
  {
    path: '/unstuck',
    name: 'Unstuck',
    component: () => import(/* webpackChunkName: "unstuck" */ '../views/Unstuck.vue')
  },
  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: () => import(/* webpackChunkName: "disclaimer" */ '../views/footer/Disclaimer.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy Policy',
    component: () => import(/* webpackChunkName: "privacy" */ '../views/footer/Privacy.vue')
  },
  {
    path: '/terms',
    name: 'Terms of Use',
    component: () => import(/* webpackChunkName: "terms" */ '../views/footer/Terms.vue')
  }
]

const router = new createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior () {
    return { x: 0, y: 0 }
  }

})

export default router
