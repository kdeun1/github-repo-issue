import { useEffect, useState } from 'react';
import { Button } from 'antd';

interface Props {
  total: number;
  limit: number; // 한 페이지에서 볼 개수
  page: number; // 현재 페이지
  setPage: (page: number) => void;
}

const CommonPagination = ({
  total, limit, page, setPage,
}: Props) => {
  const numPages = Math.ceil(total / limit); // 페이지 버튼 개수
  const [pageNums, setPageNums] = useState<number[]>([]);

  const firstPage = (Math.floor((page - 1) / limit) * limit) + 1;

  useEffect(() => {
    const result = [];
    for (let i = 0; i < limit; i++) {
      if (firstPage + i <= numPages) {
        result.push(firstPage + i);
      }
    }
    setPageNums(result);
  }, [total, page]);

  const getFirstPage = () => {
    setPage(1);
  };
  const getPrevPage = () => {
    if (firstPage <= 1) {
      return;
    }
    setPage(firstPage - 1);
  };
  const getNextPage = () => {
    if (page >= numPages) {
      return;
    }
    setPage(firstPage + limit);
  };
  const getLastPage = () => {
    setPage(numPages);
  };

  return (
    <nav>
      <Button
        htmlType="button"
        size="small"
        onClick={getFirstPage}
      >
        {'<<'}
      </Button>
      <Button
        htmlType="button"
        size="small"
        onClick={getPrevPage}
      >
        {'<'}
      </Button>
      {
        pageNums
          ? pageNums.map((v) => (
            <Button
              htmlType="button"
              type={page === v ? 'primary' : 'default'}
              size="small"
              key={`${v}`}
              onClick={() => setPage(v)}
            >
              { v }
            </Button>
          ))
          : (
            <Button
              htmlType="button"
              type="primary"
              size="small"
            >
              1
            </Button>
          )
      }
      <Button
        htmlType="button"
        size="small"
        onClick={getNextPage}
      >
        {'>'}
      </Button>
      <Button
        htmlType="button"
        size="small"
        onClick={getLastPage}
      >
        {'>>'}
      </Button>
    </nav>
  );
};

export default CommonPagination;
