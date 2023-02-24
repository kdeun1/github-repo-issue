import axios from 'axios';
import { setCommonInterceptors, setReqHeaders } from './interceptors';

const createApiInstance = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER,
  });
  setCommonInterceptors(instance);
  setReqHeaders(instance, import.meta.env.VITE_APP_TOKEN);
  return instance;
};

const apiInstance = createApiInstance();

export {
  apiInstance,
};
