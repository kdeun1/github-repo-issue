import FavoriteRepositories from './FavoriteRepositories';
import IssueList from './IssueList';

const FavoriteRepositoriesFrame = () => {
  const onClickRow = () => {
    console.log('Favorite Row Click! Fetch Data!');
  };

  return (
    <section className="common-frame">
      <FavoriteRepositories
        onClick={onClickRow}
      />
      <IssueList />
    </section>
  );
};

export default FavoriteRepositoriesFrame;
