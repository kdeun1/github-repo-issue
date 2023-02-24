import { useState } from 'react';
import FavoriteRepositories from './repository/FavoriteRepositories';
import IssueList from './issue/IssueList';

interface SelectedRow {
  id: number | null;
  owner: string;
  repo: string;
}
interface RepositoryGridInfo {
  id: number;
  name: string;
  ownerLogin: string;
}
const FavoriteRepositoriesFrame = () => {
  const [selectedRepo, setSelectedRepo] = useState<SelectedRow>({
    id: null,
    owner: '',
    repo: '',
  });

  const onClickRow = async (item: RepositoryGridInfo) => {
    await setSelectedRepo({
      id: item.id,
      owner: item.ownerLogin,
      repo: item.name,
    });
  };

  return (
    <section className="common-frame">
      <FavoriteRepositories
        onClickRow={onClickRow}
      />
      <IssueList
        selectedRow={selectedRepo}
      />
    </section>
  );
};

export default FavoriteRepositoriesFrame;
