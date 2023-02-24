import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import { MouseEvent } from 'react';

interface Props {
  isFavorite: boolean;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const FavoriteHeartIcon = (props: Props) => {
  const { isFavorite, onClick } = props;
  return (
    isFavorite
      ? <HeartTwoTone onClick={onClick} />
      : <HeartOutlined onClick={onClick} />
  );
};

export default FavoriteHeartIcon;
