import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import About from './views/About.vue'
import PetLover from './views/PetLoverProfile.vue'
import PetOwner from './views/PetOwnerProfile.vue'
import Pets from './views/Pets.vue'
import CreateServices from './views/CreateServices.vue'
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
    path: '/about',
    name: 'about',
    component: About
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
  },
  {
    path: '/profile/petlovers/:id',
    name: 'petLover profile',
    component: PetLover
  },
  {
    path: '/profile/petowners/:id',
    name: 'petOwner profile',
    component: PetOwner
  },
  {
    path: '/profile/petowners/:id/pets',
    name: 'pets',
    component: Pets
  },
  {
    path: '/profile/petlovers/:id/services',
    name: 'services',
    component: CreateServices
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
