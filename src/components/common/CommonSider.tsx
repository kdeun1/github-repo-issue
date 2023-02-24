import { HddFilled } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

interface Route {
  key: string;
  text: string;
}
interface Props {
  router: Route[];
}

const CommonSider = ({ router }: Props) => {
  const pathName = useLocation().pathname;
  return (
    <Sider>
      <div className="sider-header" />
      <Menu theme="dark" defaultSelectedKeys={[pathName]}>
        {router.map((route: Route) => (
          <Menu.Item key={route.key}>
            <Link to={route.key}>
              <HddFilled />
              <span>{route.text}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default CommonSider;
