<template>
  <!-- <p>The {{ services.color }} service is at position {{ services.position }}</p> -->
  <div class="navbar">
    <div class="container">
      <a href="Home.vue">Walkman</a>

      <img
        id="mobile-cta"
        class="mobile-menu"
        src="assets/menu.svg"
        alt="Open navigation menu"
      />

      <nav>
        <img
          id="mobile-exit"
          class="mobile-menu-exit"
          src="assets/exit.svg"
          alt="Close navigation"
        />
        <ul class="Primary-nav">
          <li><a href="Home.vue">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="About.vue">About</a></li>
        </ul>

        <ul class="secondary-nav">
          <li><a href="Sign up.vue">Sign up</a></li>
          <li class="log-in"><a href="Log in.vue">Log in</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service-item',
  props: ['service']
}
</script>
