import { AxiosInstance } from 'axios';

const setReqHeaders = (instance: AxiosInstance, token: string) => {
  instance.interceptors.request.use(
    (c) => {
      const config = c;
      config.headers.Authorization = token ? `Bearer ${token}` : null;
      config.headers.Accept = 'application/vnd.github+json';
      config.headers['X-GitHub-Api-Version'] = '2022-11-28';
      return config;
    },
    (error) => Promise.reject(error),
  );
  return instance;
};

const setCommonInterceptors = (instance: AxiosInstance) => {
  // https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-repositories--status-codes
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response) {
        const { status } = error.response;
        if (status === 301) {
          console.log('Moved permanently');
        } else if (status === 304) {
          console.log('Not modified');
        } else if (status === 404) {
          console.log('Resource not found');
        } else if (status === 422) {
          console.log('Validation failed, or the endpoint has been spammed.');
        } else if (status === 503) {
          console.log('Service unavailable');
        }
      }
      return Promise.reject(error);
    },
  );
  return instance;
};

export {
  setReqHeaders,
  setCommonInterceptors,
};
