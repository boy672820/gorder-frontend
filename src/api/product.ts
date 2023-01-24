import { Product } from '../@types/product';
import getAxios from '../utils/axios';

const axios = getAxios('product');

export default class ProductApi {
  static async getAll() {
    const { data } = await axios.get<Product>('');

    return data;
  }
}
