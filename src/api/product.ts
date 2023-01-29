import { Product } from '../@types/product';
import axios from '../utils/axios';

export default class ProductApi {
  static async getAll() {
    const { data } = await axios.get<Product>('/product');

    return data;
  }
}
