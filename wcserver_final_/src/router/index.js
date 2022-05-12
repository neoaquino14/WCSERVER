import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home')
  },
  {
    path: '/book',
    name: 'book',
    component: () => import('../components/CreateBook')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../components/gallery')
  },
  {
    path: '/About',
    name: 'about',
    component: () => import('../components/About')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ListBook')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditBook')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
