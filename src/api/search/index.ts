import { apiInstance } from "../index";
import { Demo } from "./model";
import { PromiseAxiosResponse } from "../common/model";

const fetchSearchRepositories = (q: string)
  : PromiseAxiosResponse<Demo> => apiInstance.get(
  '/search/repositories',
  { params: { q } }
);

export {
  fetchSearchRepositories,
}