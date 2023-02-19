import './App.css';
import RepositoryList from './components/RepositoryList';
import FavoriteRepositories from './components/FavoriteRepositories';

function App() {
  return (
    <div className="App">
      <FavoriteRepositories />
      <RepositoryList />
    </div>
  );
}

export default App;
