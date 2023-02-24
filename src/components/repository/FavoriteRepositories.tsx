import { List, message, Typography } from 'antd';
import useLocalStorage from '../../hooks/useLocalStorage';
import CommonArticle from '../common/CommonArticle';
import RepositoryListItem from './RepositoryListItem';

interface RepositoryGridInfo {
  id: number;
  name: string;
  ownerLogin: string;
}
interface Props {
  onClickRow?: (item: RepositoryGridInfo) => void;
}

const FavoriteRepositories = ({ onClickRow }: Props) => {
  const { Title } = Typography;
  const [favoriteList, setFavoriteList] = useLocalStorage(
    'FavoriteRepositories',
    '[]',
  );
  const parsedFavoriteList: RepositoryGridInfo[] = JSON.parse(favoriteList) || [];
  const [messageApi, contextHolder] = message.useMessage();

  const successDeleteMsg = () => {
    messageApi.open({
      type: 'success',
      content: '정상적으로 삭제되었습니다.',
    });
  };

  const onDeleteRow = (deletedId: number) => {
    const infoIndex = parsedFavoriteList
      .map((v) => v.id)
      .indexOf(deletedId);
    if (infoIndex !== -1) {
      parsedFavoriteList.splice(infoIndex, 1);
      successDeleteMsg();
      setFavoriteList(JSON.stringify(parsedFavoriteList));
    }
  };

  return (
    <CommonArticle>
      {contextHolder}
      <Title level={4}>Favorite Repository</Title>
      <List
        className="favorite-repositories__body"
        dataSource={parsedFavoriteList}
        renderItem={(item) => (
          <RepositoryListItem
            key={item.id}
            id={item.id}
            ownerLogin={item.ownerLogin}
            name={item.name}
            onClick={() => onClickRow?.(item)}
            onDelete={() => onDeleteRow(item.id)}
          />
        )}
      />
    </CommonArticle>
  );
};

export default FavoriteRepositories;
