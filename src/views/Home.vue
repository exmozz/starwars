<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 text-center">
        <h3>Choose your destiny</h3>
        <b-button-group size="lg">
          <b-button @click="units='people'" :pressed="units==='people'">
            People
          </b-button>
          <b-button @click="units='ships'" :pressed="units==='ships'">
            Starships
          </b-button>
        </b-button-group>
      </div>
    </div>
    <people-game v-if="units==='people'" />
    <ships-game v-if="units==='ships'" />
  </div>
</template>

<script>

import PeopleGame from '../components/PeopleGame'
import ShipsGame from '../components/ShipsGame'

export default {
  name: 'home',
  components: { ShipsGame, PeopleGame },
  data () {
    return {
      units: null
    }
  }
}
</script>
