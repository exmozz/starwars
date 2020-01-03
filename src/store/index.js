import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftPlayer: {
      people: 0,
      ships: 0
    },
    rightPlayer: {
      people: 0,
      ships: 0
    }
  },
  mutations: {
    addPeopleWin (state, player) {
      (player === 'Left') ? state.leftPlayer.people++ : state.rightPlayer.people++
    },
    addShipsWin (state, player) {
      (player === 'Left') ? state.leftPlayer.ships++ : state.rightPlayer.ships++
    }
  },
  actions: {
  },
  modules: {
  }
})
