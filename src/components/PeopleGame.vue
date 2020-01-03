<template>
  <div>
    <div class="row mt-5">
      <div class="col-md-6">
        <h3 class="title">
          Left Player
        </h3>
        <people-card :playerData.sync="leftPlayer" />
      </div>
      <div class="col-md-6">
        <h3 class="title">
          Right Player
        </h3>
        <people-card :playerData.sync="rightPlayer" />
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
import PeopleCard from '../components/PeopleCard'

export default {
  name: 'PeopleGame',
  components: { PeopleCard },
  data () {
    return {
      people: {},
      leftPlayer: 0,
      rightPlayer: 0,
      units: null,
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
      this.$store.commit('addPeopleWin', newVal)
      console.log(newVal)
    }
  }
}
</script>
