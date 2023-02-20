import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const tempArr = [
      { id: 1, name: 'FULL_NAME1', ownerLogin: 'kdeun1' },
      { id: 2, name: 'FULL_NAME2', ownerLogin: 'kdeun1' },
      { id: 3, name: 'FULL_NAME3', ownerLogin: 'kdeun1' },
      { id: 4, name: 'FULL_NAME4', ownerLogin: 'kdeun1' },
      { id: 5, name: 'FULL_NAME5', ownerLogin: 'kdeun1' },
    ];
    const repoList = localStorage.getItem('FavoriteRepositories') || JSON.stringify(tempArr);
    const parsedRepoList = JSON.parse(repoList);
    setRepositories(parsedRepoList);
  }, []);

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
