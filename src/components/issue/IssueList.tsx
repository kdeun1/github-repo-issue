import { Typography } from 'antd';
import { useEffect, useState } from 'react';
import CommonArticle from '../common/CommonArticle';
import { fetchSearchIssues } from '../../api/search';
import IssueListItem from './IssueListItem';
import CommonPagination from '../common/CommonPagination';

interface SelectedRow {
  id: number | null;
  owner: string;
  repo: string;
}
interface SelectedIssue {
  id: number;
  number: number;
  title: string;
  updated_at: string;
  url: string;
  userLogin: string;
}
interface Props {
  selectedRow: SelectedRow
}
const IssueList = ({ selectedRow }: Props) => {
  const { Title } = Typography;
  const PER_PAGE = 4;

  const ownerRepo = selectedRow.repo ? `${selectedRow.owner}/${selectedRow.repo}` : '';
  const [issues, setIssues] = useState<SelectedIssue[]>();
  const [totalCount, setTotalCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getSearchRepositories = async (owner: string, repo: string) => {
    try {
      const q = `repo:${owner}/${repo}`;
      const { data } = await fetchSearchIssues(q, 'issue', PER_PAGE, currentPage);
      const { items, total_count } = data;
      setTotalCount(total_count);
      setIssues([...items.map((v) => ({
        id: v.id,
        number: v.number,
        title: v.title,
        updated_at: v.updated_at,
        url: v.html_url,
        userLogin: v.user?.login || '',
      }))]);
    } catch (e) {
      setTotalCount(0);
      setCurrentPage(1);
      setIssues([]);
      // TODO 오류 알람
    }
  };

  useEffect(() => {
    setTotalCount(0);
    setCurrentPage(1);
    if (selectedRow.owner && selectedRow.repo && currentPage) {
      getSearchRepositories(selectedRow.owner, selectedRow.repo);
    }
  }, [selectedRow]);

  useEffect(() => {
    if (selectedRow.owner && selectedRow.repo && currentPage) {
      getSearchRepositories(selectedRow.owner, selectedRow.repo);
    }
  }, [currentPage]);

  return (
    <CommonArticle>
      <Title level={4}>
        {ownerRepo ? `${ownerRepo} > Issue` : 'Select a Repository!'}
      </Title>
      <div>
        {issues && issues.map((v) => (
          <IssueListItem
            key={v.id}
            number={v.number}
            title={v.title}
            updated_at={v.updated_at}
            url={v.url}
            userLogin={v.userLogin}
          />
        ))}
      </div>
      <CommonPagination
        total={totalCount}
        limit={PER_PAGE}
        page={currentPage}
        setPage={setCurrentPage}
      />
    </CommonArticle>
  );
};

export default IssueList;
