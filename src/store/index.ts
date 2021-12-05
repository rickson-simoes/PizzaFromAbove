import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: 0,
  },
  mutations: {
    increment(state) {
      state.cart++;
    },
  },
  actions: {
  },
  modules: {
  },
});
