<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-brand href="#">Walkman</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item href="/">Home</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item v-if="!loggedIn" href="/login">Login</b-nav-item>
      <b-nav-item v-if="loggedIn" v-on:click="logout">Logout</b-nav-item>
      <b-nav-item v-if="!loggedIn" href="/register">Register</b-nav-item>
      <b-nav-item v-if="loggedIn" href="/profile">Profile</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
// import { Api } from '@/Api'

export default {
  name: 'testComponent',
  methods: {
    logout() {
      localStorage.clear()
      this.loggedIn = false
      this.$router.push('/')
    }
  },
  data() {
    return {
      name: '',
      email: '',
      loggedIn: false
    }
  },
  created() {
    // user is not authorized
    if (!(localStorage.getItem('token') === null)) {
      this.loggedIn = true
    } else {
      this.loggedIn = false
    }
  }
  // mounted() {
  //   Api.get('/petlovers/:id', {
  //     headers: { token: localStorage.getItem('token') }
  //   }).then((res) => {
  //     this.name = res.data.user.name
  //     this.email = res.data.user.email
  //   })
  // }
}
</script>
