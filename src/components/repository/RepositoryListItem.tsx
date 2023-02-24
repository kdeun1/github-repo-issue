import { List, Popconfirm } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { MouseEvent } from 'react';
import FavoriteHeartIcon from '../common/FavoriteHeartIcon';
import { CONFIRM } from '../../common/utils';

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
              title={CONFIRM.FAVORITE.DELETE_TITLE}
              description={CONFIRM.FAVORITE.DELETE_DESC}
              onConfirm={onConfirm}
              onCancel={(e) => e?.stopPropagation()}
              okText={CONFIRM.COMMON.OK}
              cancelText={CONFIRM.COMMON.CANCEL}
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
