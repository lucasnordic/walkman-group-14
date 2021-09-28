import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PetLover from './views/PetLoverProfile.vue'
import PetOwner from './views/PetOwnerProfile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile/petlovers/:id',
      name: 'pet lover profile',
      component: PetLover
    },
    {
      path: '/profile/petowners/:id',
      name: 'pet owner profile',
      component: PetOwner
    }
  ]
})
