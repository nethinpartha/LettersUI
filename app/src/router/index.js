import { createRouter, createWebHistory } from 'vue-router'
import List from "../views/List.vue"
import Read from "../views/Read.vue"
import AboutUs from "../views/AboutUs.vue"

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/view/:id',
    name: 'View',
    component: Read
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
