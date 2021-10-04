<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-brand href="#">Walkman</b-navbar-brand>

    <b-navbar-nav>
      <b-nav-item href="/">Home</b-nav-item>
      <b-nav-item to="/services" >Services</b-nav-item>
      <b-nav-item to="/about" >About</b-nav-item>
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
export default {
  name: 'testComponent',
  methods: {
    logout() {
      localStorage.clear()
      this.loggedIn = false
      this.$router.push('/login')
    }
  },
  data() {
    return {
      name: '',
      email: '',
      loggedIn: false,
      userType: ''
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
}
</script>
