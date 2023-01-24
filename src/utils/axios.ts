import axios from 'axios';
import qs from 'qs';
// config
import { HOST_API } from '../config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: HOST_API,
  paramsSerializer: { serialize: (params) => qs.stringify(params, { arrayFormat: 'repeat' }) },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default function getAxios(apiTag?: string) {
  if (apiTag) {
    axios.defaults.baseURL = axios.defaults.baseURL + apiTag;
  }

  return axiosInstance;
}
