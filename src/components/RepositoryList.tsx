import { List, message } from 'antd';
import RepositoryListItem from './RepositoryListItem';
import type { RepositoryGridInfo } from './RepositorySearchFormFrame';
import useLocalStorage from '../hooks/useLocalStorage';

interface Props {
  items: RepositoryGridInfo[] | undefined;
}

const RepositoryList = ({ items }: Props) => {
  const [favoriteList, setFavoriteList] = useLocalStorage(
    'FavoriteRepositories',
    '[]',
  );
  let parsedFavoriteList: RepositoryGridInfo[] = JSON.parse(favoriteList) || [];

  const [messageApi, contextHolder] = message.useMessage();

  const overRegistrationWarning = () => {
    messageApi.open({
      type: 'warning',
      content: '등록 개수는 최대 4개입니다.',
    });
  };

  const isFavorite = (id: number) => parsedFavoriteList.findIndex((v) => v.id === id) !== -1;

  const onClickItem = (item: RepositoryGridInfo) => {
    if (parsedFavoriteList.findIndex((info) => info.id === item.id) === -1) {
      if (parsedFavoriteList.length >= 4) {
        overRegistrationWarning();
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

  return (
    <article className="repository-list">
      {contextHolder}
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
            isFavorite={isFavorite(item.id)}
            onClick={() => onClickItem(item)}
          />
        )}
      />
    </article>
  );
};

export default RepositoryList;
