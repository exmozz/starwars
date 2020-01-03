<template>
  <div>
    <div class="card-flip" :class="{ 'animated': isLoading }">
      <div class="flip">
        <div class="front">
          <b-card :title="card.name" style="height: 200px">
            <b-card-text>
              <span v-if="card.crew">
                Crew: {{ card.crew }} units
              </span>
              <span v-else>
                Click the button...
              </span>
            </b-card-text>
          </b-card>
        </div>
        <div class="back">
          <b-card style="height: 200px">
            <b-card-text class="text-center">
              <h2>StarWars</h2>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
    <p class="error" v-if="error">
      Ooops, something is wrong, try again.
    </p>
    <b-button variant="primary"
              :disabled="isLoading"
              class="mt-4"
              @click="getData">
      <b-spinner small v-if="isLoading"></b-spinner>
      Find your Starship
    </b-button>
  </div>
</template>

<script>
import { getStarship } from '@/api'

export default {
  name: 'ShipsCard',
  data () {
    return {
      card: {},
      isLoading: false,
      error: false
    }
  },
  methods: {
    getData () {
      this.$emit('update:playerData', null)
      this.isLoading = true
      this.error = false
      getStarship().then((response) => {
        this.card = response.data
        this.isLoading = false
      }).then(() => {
        this.$emit('update:playerData', this.card.crew)
      }).catch((err) => {
        this.card = {}
        this.isLoading = false
        this.error = true
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss">
.card-flip {
  perspective: 1000px;
  &.animated .flip {
    animation: 0.8s 0s infinite ease rotate;
  }
  .card {
    color: #000000;
  }
}

.card-flip,
.front,
.back {
  width: 100%;
  height: 200px;
}

.flip {
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.front,
.back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

.front {
  z-index: 2;
  transform: rotateY(0deg);
}

.back {
  transform: rotateY(180deg);
  .card {
    background: #1c1e22;
    h2 {
      color: #ffe300;
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotateY(90deg);
  } 50% {
    transform: rotateY(180deg);
  } 100% {
    transform: rotateY(360deg);
  }
}
</style>
