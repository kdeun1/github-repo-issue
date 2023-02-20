import './App.css';
import { CaretRightOutlined } from '@ant-design/icons';
import RepositorySearchFormFrame from './components/RepositorySearchFormFrame';
import FavoriteRepositories from './components/FavoriteRepositories';

function App() {
  return (
    <div className="App">
      <main className="app-main">
        <RepositorySearchFormFrame />
        <CaretRightOutlined />
        <FavoriteRepositories />
      </main>
    </div>
  );
}

export default App;
