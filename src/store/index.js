import { createStore } from 'vuex';

import pizzasList from './modules/pizzasList';

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    ADD_TO_CART({ cart }, payload) {
      cart.push(payload);
    },
  },
  modules: {
    pizzasList,
  },
});
