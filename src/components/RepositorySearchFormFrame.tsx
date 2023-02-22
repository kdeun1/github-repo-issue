import { useState } from 'react';
import type { RepoSearchResultItem } from '../api/search/model';
import RepositorySearchForm from './RepositorySearchForm';
import { fetchSearchRepositories } from '../api/search';
import RepositoryList from './RepositoryList';

export interface RepositoryGridInfo {
  id: number;
  name: string;
  ownerLogin: string;
}

const RepositorySearchFormFrame = () => {
  const [repositories, setRepositories] = useState<RepositoryGridInfo[]>();

  const getSearchRepositories = async (searchText: string) => {
    try {
      const { data } = await fetchSearchRepositories(searchText);
      setRepositories(data.items
        .reduce((acc: RepositoryGridInfo[], cur: RepoSearchResultItem) => {
          acc.push({
            id: cur.id,
            name: cur.name,
            ownerLogin: cur.owner?.login || '',
          });
          return acc;
        }, []));
    } catch (e) {
      setRepositories([]);
      // TODO 오류 알람
    }
  };
  const initSearchRepositories = () => {
    setRepositories([]);
  };

  return (
    <section className="repository-search-frame">
      <RepositorySearchForm
        onSearchForm={getSearchRepositories}
        onResetForm={initSearchRepositories}
      />
      <RepositoryList
        items={repositories}
      />
    </section>
  );
};

export default RepositorySearchFormFrame;
