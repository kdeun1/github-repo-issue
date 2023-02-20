import { useEffect, useState } from 'react';
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
      console.log(e);
    }
  };
  const initSearchRepositories = () => {
    setRepositories([]);
  };

  useEffect(() => {
    console.log('로컬스토리지에서 데이터 가져옴');
  }, []);

  return (
    <section className="repository-list">
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
