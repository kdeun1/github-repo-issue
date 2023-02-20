import { useState } from 'react';
import { List } from 'antd';
import type { RepoSearchResultItem } from '../api/search/model';
import RepositorySearchForm from './RepositorySearchForm';
import RepositoryListItem from './RepositoryListItem';
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
      console.log(e);
    }
  };

  return (
    <section className="repository-list">
      <RepositorySearchForm
        onSearchForm={getSearchRepositories}
      />
      <RepositoryList
        items={repositories}
      />
    </section>
  );
};

export default RepositorySearchFormFrame;
