<template>
  <div id="app">
    <navigation-component id="test" />
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    'navigation-component': Navigation
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

#test {
  padding: 100px;
}
</style>
