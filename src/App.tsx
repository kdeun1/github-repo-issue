import 'normalize.css';
import './App.css';
import { Layout } from 'antd';
import {
  BrowserRouter,
} from 'react-router-dom';
import CommonSider from './components/CommonSider';
import CommonContent from './components/CommonContent';

function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <CommonSider />
        <CommonContent />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
