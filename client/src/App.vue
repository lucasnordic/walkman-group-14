<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/services" >Services</router-link> |
      <router-link to="/servi" v-b-toggle.collapse-2 >Servi</router-link> |
      <router-link to="/about" tag="b-button"></router-link>
      <b-button variant= "outline-primary" @click="$router.push('about')">About</b-button>
    </div>
    <!-- Render the content of the current page view -->
    <router-view />
    <my-footer />
    <my-cool-footer />
  </div>
</template>

<script>
import MyFooter from '@/components/MyFooter.vue'

export default {
  components: {
    MyFooter,
    'my-cool-footer': MyFooter
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
</style>
