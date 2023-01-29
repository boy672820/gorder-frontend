import axios from '../utils/axios';
//
import type { AuthResult, AuthUser } from '../@types/auth';

export default class AuthApi {
  static async signin(code: string) {
    const { data } = await axios.get<AuthResult>('/auth', { params: { code } });

    return data;
  }

  static async me() {
    const { data } = await axios.get<AuthUser>('/auth/me');

    return data;
  }
}
