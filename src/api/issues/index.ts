import { apiInstance } from '../index';
import { Issue } from './model';
import { PromiseAxiosResponse } from '../common/model';

const fetchReposIssues = (owner: string, repo: string)
  : PromiseAxiosResponse<Issue[]> => apiInstance.get(
  `/repos/${owner}/${repo}/issues`,
);

export {
  fetchReposIssues,
};
