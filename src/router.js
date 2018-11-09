import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import CreateVendorService from '@/components/Vendor/CreateVendorService'
import VendorService from '@/components/Vendor/VendorService'
import Vendor from '@/components/Vendor/Vendor'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/vendor-services',
      name: 'Vendors',
      component: VendorService
    },
    {
      path: '/vendor-service/new',
      name: 'CreateVendorService',
      component: CreateVendorService
    },
    {
      path: '/vendor/:id',
      name: 'Vendor',
      component: Vendor
    }
  ]
})
