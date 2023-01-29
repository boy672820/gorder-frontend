import { AuthUser } from '../@types/auth';
import getAxios from '../utils/axios';

const axios = getAxios('auth');

export default class AuthApi {
  static async signin() {
    const { data } = await axios.get<AuthUser>('');

    return data;
  }
}
