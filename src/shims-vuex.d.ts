import { Store } from 'vuex';
import { IItemPayload } from '@/DTOS/ItemPayload.dto';

declare module '@vue/runtime-core' {
  interface State {
    pizzasList: IItemPayload[],
    cart: IItemPayload[],
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
