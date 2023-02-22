import { HddFilled, HeartFilled } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const CommonSider = () => (
  <Sider>
    <div className="sider-header" />
    <Menu theme="dark" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Link to="/">
          <HddFilled />
          <span>Search Repository</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/favoriteRepository">
          <HeartFilled />
          <span>Favorite Repository</span>
        </Link>
      </Menu.Item>
    </Menu>
  </Sider>
);

export default CommonSider;
