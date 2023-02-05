import { CreateOrderRequest, CreateOrderResponse } from '../@types/order';
import axios from '../utils/axios';

export default class OrderApi {
  static async create(data: CreateOrderRequest) {
    const response = await axios.post<CreateOrderResponse>('/order', data);

    return response.data;
  }
}
