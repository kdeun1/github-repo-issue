import { formatDate, openNewTab } from '../../common/utils';

interface Props {
  number: number;
  title: string;
  updated_at: string;
  url: string;
  userLogin: string;
}
const IssueListItem = ({
  number, title, updated_at, url, userLogin,
}: Props) => (
  <div className="issue-list-item">
    <div
      className="issue-list-item__title"
      onClick={() => openNewTab?.(url)}
      aria-hidden="true"
    >
      {`#${number} ${title}`}
    </div>
    <div className="issue-list-item__subtitle">
      {` Created At ${userLogin}`}
    </div>
    <div className="issue-list-item__subtitle">
      {formatDate(updated_at)}
    </div>
  </div>
);

export default IssueListItem;
