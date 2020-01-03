<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="#">StarWars Cards</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <router-link :to="{ name: 'home' }" tag="b-nav-item">
          Home
        </router-link>
        <router-link :to="{ name: 'stats' }" tag="b-nav-item">
          Stats
        </router-link>
        <router-link :to="{ name: 'about' }" tag="b-nav-item">
          About
        </router-link>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
