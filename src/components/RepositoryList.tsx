import { List } from 'antd';
import RepositoryListItem from './RepositoryListItem';
import type { RepositoryGridInfo } from './RepositorySearchFormFrame';

interface Props {
  items: RepositoryGridInfo[] | undefined;
}

const RepositoryList = ({ items }: Props) => (
  <List
    itemLayout="vertical"
    size="small"
    pagination={{
      pageSize: 5,
    }}
    dataSource={items}
    renderItem={(item) => (
      <RepositoryListItem
        key={item.id}
        id={item.id}
        ownerLogin={item.ownerLogin}
        name={item.name}
      />
    )}
  />
);

export default RepositoryList;
