import { createStore } from 'vuex';
import api from '@/services/apiCallService';
import { IItemPayload } from '@/DTOS/ItemPayload.dto';

export default createStore({
  state: {
    pizzasList: {} as IItemPayload,
    cart: [] as IItemPayload[],
  },
  mutations: {
    ADD_TO_CART({ cart }, payload: IItemPayload) {
      cart.push(payload);
    },
    SET_ITEMS_LIST(state, payload: IItemPayload) {
      state.pizzasList = payload;
    },
  },
  actions: {
    fetchPizzasList({ commit }) {
      api.getPizzasList()
        .then((response: any) => commit('SET_ITEMS_LIST', response.data))
        .catch((err: Error) => {
          console.log(err);
        });
    },
  },
  modules: {
  },
});
