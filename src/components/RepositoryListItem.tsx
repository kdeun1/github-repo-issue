import { List } from 'antd';
import FavoriteHeartIcon from './FavoriteHeartIcon';

interface Props {
  id: number;
  name: string;
  ownerLogin: string;
  isFavorite: boolean;
  onClick: () => void;
}

const RepositoryListItem = (props: Props) => {
  const {
    id, ownerLogin, name, isFavorite, onClick,
  } = props;
  return (
    <List.Item
      key={id}
      onClick={onClick}
    >
      <FavoriteHeartIcon
        isFavorite={isFavorite}
      />
      {ownerLogin}
      /
      {name}
    </List.Item>
  );
};

export default RepositoryListItem;
