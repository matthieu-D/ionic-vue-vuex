import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  strict: true,
  mutations: {
    increment(state, payload) {
      state.count += payload;
    },
    decrement(state, payload) {
      state.count -= payload;
    }
  }
});

var app = new Vue({
  el: "#app",
  store,
  methods: {
    incrementCounter: function() {
      this.$store.commit("increment", 1);
    },
    decrementCounter: function() {
      this.$store.commit("decrement", 1);
    }
  }
});
