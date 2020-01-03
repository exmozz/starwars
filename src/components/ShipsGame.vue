<template>
  <div>
    <div class="row mt-5">
      <div class="col-md-6">
        <h3 class="title">
          Left Player
        </h3>
        <ships-card :playerData.sync="leftPlayer" />
      </div>
      <div class="col-md-6">
        <h3 class="title">
          Right Player
        </h3>
        <ships-card :playerData.sync="rightPlayer" />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-12 text-center" v-if="winner">
        <h2>Winner is {{ winner }} player</h2>
      </div>
    </div>
  </div>
</template>

<script>
import ShipsCard from '../components/ShipsCard'

export default {
  name: 'ShipsGame',
  components: { ShipsCard },
  data () {
    return {
      leftPlayer: 0,
      rightPlayer: 0,
      move: 1
    }
  },
  computed: {
    winner () {
      if ((this.leftPlayer && this.rightPlayer) > 0) {
        if (this.leftPlayer === this.rightPlayer) {
          return 'None'
        } else {
          return (Number(this.leftPlayer) > Number(this.rightPlayer)) ? 'Left' : 'Right'
        }
      } else {
        return false
      }
    }
  },
  watch: {
    winner (newVal, oldVal) {
      this.$store.commit('addShipsWin', newVal)
    }
  }
}
</script>
