import axios from 'axios';
import { setCommonInterceptors } from './interceptors';

const createApiInstance = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER,
  });
  setCommonInterceptors(instance);
  return instance;
};

const apiInstance = createApiInstance();

export {
  apiInstance,
};
