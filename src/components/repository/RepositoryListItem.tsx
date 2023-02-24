import { List, Popconfirm } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { MouseEvent } from 'react';
import FavoriteHeartIcon from '../common/FavoriteHeartIcon';

interface Props {
  id: number;
  name: string;
  ownerLogin: string;
  isFavorite?: boolean;
  onClick?: () => void;
  onClickIcon?: () => void;
  onDelete?: () => void;
}

const RepositoryListItem = (props: Props) => {
  const {
    id, ownerLogin, name, isFavorite, onClick, onClickIcon, onDelete,
  } = props;

  const onConfirm = (e?: MouseEvent<HTMLElement>) => {
    e?.stopPropagation();
    onDelete?.();
  };

  return (
    <List.Item
      key={id}
      onClick={onClick}
    >
      <div className="repository-list-item">
        {(isFavorite !== undefined && onClickIcon) && (
          <span
            className="repository-list-item__prefix"
          >
            <FavoriteHeartIcon
              isFavorite={isFavorite}
              onClick={onClickIcon}
            />
          </span>
        )}
        <span className="repository-list-item__content">
          {ownerLogin}
          /
          {name}
        </span>
        {onDelete && (
          <span className="repository-list-item__suffix">
            <Popconfirm
              title="즐겨찾기 목록 삭제"
              description="즐겨찾기 목록을 지우시겠습니까?"
              onConfirm={onConfirm}
              onCancel={(e) => e?.stopPropagation()}
              okText="Yes"
              cancelText="No"
            >
              <CloseOutlined onClick={(e) => e.stopPropagation()} />
            </Popconfirm>
          </span>
        )}
      </div>
    </List.Item>
  );
};

export default RepositoryListItem;
