import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';

interface Props {
  isFavorite: boolean;
}

const FavoriteHeartIcon = (props: Props) => {
  const { isFavorite } = props;
  return (
    <span className="favorite-heart-icon">
      {
        isFavorite
          ? <HeartTwoTone />
          : <HeartOutlined />
      }
    </span>
  );
};

export default FavoriteHeartIcon;
