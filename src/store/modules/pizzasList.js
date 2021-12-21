/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import api from '@/services/apiCallService';

export default {
  namespaced: true,
  state: {
    list: {},
  },
  mutations: {
    SET_ITEMS_LIST(state, payload) {
      state.list = payload;
    },
  },
  actions: {
    fetchPizzasList({ commit }) {
      api.getPizzasList()
        .then((response) => commit('SET_ITEMS_LIST', response.data))
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
