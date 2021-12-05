import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  interface State {
    cart: number
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
