import { useState } from 'react';
import { List } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import type { RepoSearchResultItem } from '../api/search/model';
import SearchForm from './SearchForm';
import { fetchSearchRepositories } from '../api/search';

function RepositoryList() {
  const [repositories, setRepositories] = useState<RepoSearchResultItem[]>();

  const getSearchRepositories = async (searchText: string) => {
    try {
      const { data } = await fetchSearchRepositories(searchText);
      console.log(`data.items : ${data.items}`);
      setRepositories(data.items);
    } catch (e) {
      console.log(e);
    }
  };

  const onRegister = (info: RepoSearchResultItem) => {
    console.log(`info : ${info}`);
    console.log(`repo id : ${info.id}, name: ${info.name}, owner: ${info.owner?.login}`);
  };

  return (
    <>
      <SearchForm onSearchForm={getSearchRepositories} />
      <List
        itemLayout="vertical"
        size="small"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={repositories}
        footer={(
          <div>
            Search
            {' '}
            <b>Public</b>
            {' '}
            Repositories
          </div>
        )}
        renderItem={(item) => (
          <List.Item
            key={item.id}
          >
            <HeartOutlined
              onClick={() => onRegister(item)}
            />
            &nbsp;
            {item.full_name}
          </List.Item>
        )}
      />
    </>
  );
}

export default RepositoryList;
