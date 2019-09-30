import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
const NotFoundComponent = () => import('./views/404/NotFound.vue')
const Address = () => import('./views/Address/Address')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/discover',
      name: 'discover',
      component: () => import('./views/Discover/Discover.vue'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/Order/Order.vue'),
      meta: {
        showFooter: true,
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile/Profile.vue'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login/Login.vue'),
      meta: {
        showFooter: false
      }
    },
    {
      path: '/address',
      name: 'address',
      component: Address,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('./views/City/City.vue'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
