import { List } from 'antd';
import FavoriteHeartIcon from './FavoriteHeartIcon';

interface Props {
  id: number;
  name: string;
  ownerLogin: string;
  onClick: () => void;
}

const RepositoryListItem = (props: Props) => {
  const {
    id, ownerLogin, name, onClick,
  } = props;
  return (
    <List.Item
      key={id}
      onClick={onClick}
    >
      <FavoriteHeartIcon
        isFavorite={false}
      />
      {ownerLogin}
      /
      {name}
    </List.Item>
  );
};

export default RepositoryListItem;
