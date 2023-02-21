import { List } from 'antd';
import { useEffect, useState } from 'react';
import RepositoryListItem from './RepositoryListItem';
import type { RepositoryGridInfo } from './RepositorySearchFormFrame';
import useLocalStorage from '../hooks/useLocalStorage';

interface Props {
  items: RepositoryGridInfo[] | undefined;
}

const RepositoryList = ({ items }: Props) => {
  const [filteredList, setFilteredList] = useState(items);
  const [favoriteList, setFavoriteList] = useLocalStorage(
    'FavoriteRepositories',
    '[]',
  );

  const onClickItem = (item: RepositoryGridInfo) => {
    let parsedFavoriteList: RepositoryGridInfo[] = JSON.parse(favoriteList) || [];
    if (parsedFavoriteList.findIndex((info) => info.id === item.id) === -1) {
      if (parsedFavoriteList.length >= 4) {
        // TODO 최대 4개임
        console.log('4개가 맥스임!');
      } else {
        parsedFavoriteList = [...parsedFavoriteList, item];
      }
    } else {
      const infoIndex = parsedFavoriteList
        .map((v) => v.id)
        .indexOf(item.id);
      if (infoIndex !== -1) {
        parsedFavoriteList.splice(infoIndex, 1);
      }
    }
    setFavoriteList(JSON.stringify(parsedFavoriteList));
  };
  useEffect(() => {
    console.log('데이터가 있냐?');
  }, [items]);

  return (
    <List
      itemLayout="vertical"
      size="small"
      pagination={{
        pageSize: 5,
      }}
      dataSource={items}
      renderItem={(item) => (
        <RepositoryListItem
          key={item.id}
          id={item.id}
          ownerLogin={item.ownerLogin}
          name={item.name}
          onClick={() => onClickItem(item)}
        />
      )}
    />
  );
};

export default RepositoryList;
