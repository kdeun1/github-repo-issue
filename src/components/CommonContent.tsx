import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import SearchRepository from '../pages/SearchRepository';
import FavoriteRepository from '../pages/FavoriteRepository';

const {
  Header, Content, Footer,
} = Layout;

const CommonContent = () => (
  <Layout>
    <Header />
    <Content className="app-main">
      <Routes>
        <Route path="/" element={<SearchRepository />} />
        <Route path="/favoriteRepository" element={<FavoriteRepository />} />
      </Routes>
    </Content>
    <Footer>
      Created by 김도은
    </Footer>
  </Layout>
);

export default CommonContent;
