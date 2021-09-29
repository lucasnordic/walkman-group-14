<template>
  <div id="app">
    <div id="nav">
      <a href="linking to someewhere"></a>
      <router-link to="/">Home</router-link> |
      <router-link to="/profile/petlovers/6154a9587472715755f55d27">Pet Lover Profile</router-link> | <!--this is here temporarily-->
      <router-link to="/profile/petowners/6154e2431d79f121d32a8470">Pet Owner Profile</router-link>
    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
