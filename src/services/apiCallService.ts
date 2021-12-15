import axios from 'axios';

import { IItemPayload } from '@/DTOS/ItemPayload.dto';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getPizzasList(): Promise<IItemPayload[]> {
    return api.get('pizzasList');
  },
};
