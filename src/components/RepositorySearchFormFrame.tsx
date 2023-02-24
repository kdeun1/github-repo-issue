import { useState } from 'react';
import { message } from 'antd';
import type { RepoSearchResultItem } from '../api/search/search-repositories-model';
import RepositorySearchForm from './repository/RepositorySearchForm';
import { fetchSearchRepositories } from '../api/search';
import RepositoryList from './repository/RepositoryList';
import { NOTI } from '../common/utils';

interface RepositoryGridInfo {
  id: number;
  name: string;
  ownerLogin: string;
}

const RepositorySearchFormFrame = () => {
  const [repositories, setRepositories] = useState<RepositoryGridInfo[]>();
  const [messageApi, contextHolder] = message.useMessage();

  const errorSearchRepoMsg = (content: string) => {
    messageApi.open({
      type: 'error',
      content,
    });
  };

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
    } catch (e: any) {
      errorSearchRepoMsg(e?.response?.data?.message ?? NOTI.EXCEPTION);
      setRepositories([]);
    }
  };
  const initSearchRepositories = () => {
    setRepositories([]);
  };

  return (
    <>
      {contextHolder}
      <section className="common-frame">
        <RepositorySearchForm
          onSearchForm={getSearchRepositories}
          onResetForm={initSearchRepositories}
        />
        <RepositoryList
          items={repositories}
        />
      </section>
    </>
  );
};

export default RepositorySearchFormFrame;
