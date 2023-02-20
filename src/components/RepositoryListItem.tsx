import { List } from 'antd';
import FavoriteHeartIcon from './FavoriteHeartIcon';

interface Props {
  id: number;
  name: string;
  ownerLogin: string;
}

const RepositoryListItem = (props: Props) => {
  const { id, ownerLogin, name } = props;
  const onClickIcon = (iconId: number) => {
    console.log(`onClickIcon id : ${iconId}`);
  };
  return (
    <List.Item
      key={id}
      onClick={() => onClickIcon(id)}
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
