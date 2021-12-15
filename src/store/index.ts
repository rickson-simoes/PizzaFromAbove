import { createStore } from 'vuex';

interface IItemPayload {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  url: string;
}

export default createStore({
  state: {
    pizzaFlavorsList: [],
    cart: [] as IItemPayload[],
  },
  mutations: {
    ADD_TO_CART({ cart }, payload: IItemPayload) {
      cart.push(payload);
    },
  },
  actions: {
  },
  modules: {
  },
});
