import { List, Typography } from 'antd';
import useLocalStorage from '../hooks/useLocalStorage';
import CommonArticle from './CommonArticle';
import RepositoryListItem from './RepositoryListItem';

interface RepositoryGridInfo {
  id: number;
  name: string;
  ownerLogin: string;
}
interface Props {
  onClick: () => void;
}

const FavoriteRepositories = ({ onClick }: Props) => {
  const { Title } = Typography;
  const [favoriteList] = useLocalStorage(
    'FavoriteRepositories',
    '[]',
  );
  const parsedFavoriteList: RepositoryGridInfo[] = JSON.parse(favoriteList) || [];

  return (
    <CommonArticle>
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
            onClick={onClick}
          />
        )}
      />
    </CommonArticle>
  );
};

export default FavoriteRepositories;
