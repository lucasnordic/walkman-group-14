<template>
  <div id="navbar-bg">
    <b-navbar toggleable="sm" type="light" variant="light" id="navbar">
      <b-navbar-brand href="#">Walkman</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="!loggedIn" to="/login">Login</b-nav-item>
        <b-nav-item v-if="loggedIn" v-on:click="logout">Logout</b-nav-item>
        <b-nav-item v-if="!loggedIn" to="/register">Register</b-nav-item>
        <b-nav-item v-if="loggedIn" to="/profile">Profile</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <b-navbar toggleable type="light" variant="light" id="hamburger-navbar">
      <b-navbar-brand href="#">Walkman</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item v-if="!loggedIn" to="/login">Login</b-nav-item>
          <b-nav-item v-if="loggedIn" v-on:click="logout">Logout</b-nav-item>
          <b-nav-item v-if="!loggedIn" to="/register">Register</b-nav-item>
          <b-nav-item v-if="loggedIn" to="/profile">Profile</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navigation',
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
      userType: '',
      hamburger: '',
      hamburger2: ''
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

<style>
#navbar {
  padding: 20px;
  padding-left: 10%;
  padding-right: 10%;
}

#hamburger-navbar {
  padding: 20px;
  display: none;
  text-align: right;
  font-size: 200%;
}

#navbar-bg {
  padding-bottom: 5px;
  background-color: rgba(40, 81, 122, 0.2);
}

/* Overrides the css above, when page width is below x.px */
@media screen and (max-width: 768px) {
  #navbar {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  #hamburger-navbar {
    display: flex;
  }
}
</style>
