interface Props {
  number: number;
  title: string;
  updated_at: string;
  url: string;
  userLogin: string;
}
const IssueListItem = ({
  number, title, updated_at, url, userLogin,
}: Props) => {
  const formatUpdateAt = updated_at ? new Date(updated_at).toLocaleString() : '';
  const openNewTab = (targetUrl: string) => {
    window.open(targetUrl, '_blank');
  };

  return (
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
        {formatUpdateAt}
      </div>
    </div>
  );
};

export default IssueListItem;
