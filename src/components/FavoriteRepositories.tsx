import { useState } from 'react';
import { List } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

interface FavoriteRepoInfo {
  id: number;
  name: string;
  ownerLogin: string;
}

const FavoriteRepositories = () => {
  const [repositories, setRepositories] = useState<FavoriteRepoInfo[]>();

  const onDeleteRepo = (id: number) => {
    console.log(`delete repo id : ${id}`);
  };

  return (
    <section className="favorite-repositories">
      <h4>
        Favorite Repositories.
      </h4>
      <List
        className="favorite-repositories__body"
        dataSource={repositories}
        renderItem={(item) => (
          <List.Item
            key={item.id}
          >
            <div>
              {item.ownerLogin}
              /
              {item.name}
            </div>
            <CloseOutlined onClick={() => onDeleteRepo(item.id)} />
          </List.Item>
        )}
      />
    </section>
  );
};

export default FavoriteRepositories;
