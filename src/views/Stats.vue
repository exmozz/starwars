<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1>Stats</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h2>Best in People</h2>
        <hr />
        <h4>Left Player: {{ leftPlayer.people }}</h4>
        <h4>Right Player: {{ rightPlayer.people }}</h4>
      </div>
      <div class="col-md-6">
        <h2>Best in Startships</h2>
        <hr />
        <h4>Left Player: {{ leftPlayer.ships }}</h4>
        <h4>Right Player: {{ rightPlayer.ships }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stats',
  computed: {
    leftPlayer () {
      return this.$store.state.leftPlayer
    },
    rightPlayer () {
      return this.$store.state.rightPlayer
    }
  }
}
</script>
