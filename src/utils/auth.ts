import axios from './axios';

type Token = { accessToken: string; refreshToken: string };

export function setSession(token: Token | null) {
  if (token) {
    localStorage.setItem('accessToken', token.accessToken);
    localStorage.setItem('refreshToken', token.refreshToken);

    axios.defaults.headers.common.Authorization = `Bearer ${token.accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    delete axios.defaults.headers.common.Authorization;
  }
}

export function getSession(): Token | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!accessToken || !refreshToken) {
    return null;
  }

  return { accessToken, refreshToken };
}
