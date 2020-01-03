<template>
  <div id="app">
    <navbar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
export default {
  components: { Navbar }
}
</script>
