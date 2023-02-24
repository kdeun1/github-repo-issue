import { List, message } from 'antd';
import RepositoryListItem from './RepositoryListItem';
import useLocalStorage from '../../hooks/useLocalStorage';
import CommonArticle from '../common/CommonArticle';
import { MSG } from '../../common/utils';

interface RepositoryGridInfo {
  id: number;
  name: string;
  ownerLogin: string;
}
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

  const successRegistMsg = () => {
    messageApi.open({
      type: 'success',
      content: MSG.COMMON.REGI_SUCCESS,
    });
  };
  const successDeleteMsg = () => {
    messageApi.open({
      type: 'success',
      content: MSG.COMMON.DELETE_SUCCESS,
    });
  };
  const warningOverRegistMsg = () => {
    messageApi.open({
      type: 'warning',
      content: MSG.REPO.REGI_OVER_FAIL,
    });
  };

  const isFavorite = (id: number) => parsedFavoriteList.findIndex((v) => v.id === id) !== -1;

  const onClickItem = (item: RepositoryGridInfo) => {
    if (parsedFavoriteList.findIndex((info) => info.id === item.id) === -1) {
      if (parsedFavoriteList.length >= 4) {
        warningOverRegistMsg();
      } else {
        parsedFavoriteList = [...parsedFavoriteList, item];
        successRegistMsg();
      }
    } else {
      const infoIndex = parsedFavoriteList
        .map((v) => v.id)
        .indexOf(item.id);
      if (infoIndex !== -1) {
        parsedFavoriteList.splice(infoIndex, 1);
        successDeleteMsg();
      }
    }
    setFavoriteList(JSON.stringify(parsedFavoriteList));
  };

  return (
    <CommonArticle>
      {contextHolder}
      <List
        itemLayout="vertical"
        size="small"
        pagination={{
          simple: true,
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
            onClickIcon={() => onClickItem(item)}
          />
        )}
      />
    </CommonArticle>
  );
};

export default RepositoryList;
