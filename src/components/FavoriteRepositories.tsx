import { useEffect, useState } from 'react';
import { List } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

function FavoriteRepositories() {
  const [repositories, setRepositories] = useState<any[]>();

  const onDeleteRepo = (id: number) => {
    console.log(`delete repo id : ${id}`);
  };

  useEffect(() => {
    const tempArr = [
      { id: 1, full_name: 'FULL_NAME1' },
      { id: 2, full_name: 'FULL_NAME2' },
      { id: 3, full_name: 'FULL_NAME3' },
      { id: 4, full_name: 'FULL_NAME4' },
      { id: 5, full_name: 'FULL_NAME5' },
    ];
    const repoList = localStorage.getItem('FavoriteRepositories') || JSON.stringify(tempArr);
    const parsedRepoList = JSON.parse(repoList);
    setRepositories(parsedRepoList);
  }, []);

  return (
    <>
      Favorite Repositories.
      <List
        className="favorite-repositories"
        dataSource={repositories}
        renderItem={(item) => (
          <List.Item
            key={item.id}
          >
            <div>{item.id}</div>
            <div>{item.full_name}</div>
            <CloseOutlined onClick={() => onDeleteRepo(item.id)} />
          </List.Item>
        )}
      />
    </>
  );
}

export default FavoriteRepositories;
