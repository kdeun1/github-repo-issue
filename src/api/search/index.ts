import { apiInstance } from '../index';
import { Demo as SearchIssuesModel } from './search-issues-model';
import { Demo as SearchRepositoriesModel } from './search-repositories-model';
import { PromiseAxiosResponse } from '../common/model';

const fetchSearchRepositories = (q: string)
  : PromiseAxiosResponse<SearchRepositoriesModel> => apiInstance.get(
  '/search/repositories',
  { params: { q } },
);

const fetchSearchIssues = (
  q: string,
  type: string,
  per_page: number,
  page: number,
): PromiseAxiosResponse<SearchIssuesModel> => apiInstance.get(
  '/search/issues',
  {
    params: {
      q, type, per_page, page,
    },
  },
);

export {
  fetchSearchRepositories,
  fetchSearchIssues,
};
