//Aquino, Neo
//index.js
//replacing "Hello World" with "Home"

import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

// Import all components into index.js file using import method.
import blog from '@/components/blog'
import gallery from '@/components/gallery'
import about from '@/components/about'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },

    // Specify the following path, name and component.
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },

    {
      path: '/gallery',
      name: 'gallery',
      component: gallery
    },

    {
      path: '/about',
      name: 'about',
      component: about
    },

    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
