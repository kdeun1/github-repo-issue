import 'normalize.css';
import './App.css';
import { CaretRightOutlined, HddFilled, HeartFilled } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import RepositorySearchFormFrame from './components/RepositorySearchFormFrame';
import FavoriteRepositories from './components/FavoriteRepositories';

const {
  Header, Content, Footer, Sider,
} = Layout;

function App() {
  return (
    <Layout className="layout">
      <Sider>
        <div className="sider-header" />
        <Menu theme="dark" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <HddFilled />
            <span>Search Repository</span>
          </Menu.Item>
          <Menu.Item key="2">
            <HeartFilled />
            <span>Favorite Repository</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header />
        <Content className="app-main">
          <RepositorySearchFormFrame />
          <CaretRightOutlined />
          <FavoriteRepositories />
        </Content>
        <Footer>
          Created by 김도은
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
