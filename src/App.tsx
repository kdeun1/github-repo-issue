import 'normalize.css';
import './App.css';
import { Layout } from 'antd';
import {
  BrowserRouter,
} from 'react-router-dom';
import CommonSider from './components/CommonSider';
import CommonContent from './components/CommonContent';

function App() {
  const router = [
    {
      key: '/',
      text: 'Search Repository',
    },
    {
      key: '/favoriteRepository',
      text: 'Favorite Repository',
    },
  ];
  return (
    <BrowserRouter>
      <Layout className="layout">
        <CommonSider
          router={router}
        />
        <CommonContent />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
