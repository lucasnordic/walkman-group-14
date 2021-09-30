<template>
  <div id="app">
    <test-component />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/profile">Profile</router-link>
    </div> -->
    <!-- Render the content of the current page view -->
    <router-view />
  </div>
</template>

<script>
import TestComponent from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    TestComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#navigation {
  padding: 30px;
}
</style>
