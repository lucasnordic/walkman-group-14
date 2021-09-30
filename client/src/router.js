import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import PetLover from './views/PetLoverProfile.vue'
import PetOwner from './views/PetOwnerProfile.vue'
import Pets from './views/Pets.vue'
import Service from './views/Service.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
