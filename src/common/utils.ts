const NOTI = {
  EXCEPTION: '일시적인 서버 문제가 발생했습니다. 다시 시도해 주세요.',
};
const CONFIRM = {
  COMMON: {
    OK: '예',
    CANCEL: '아니오',
  },
  FAVORITE: {
    DELETE_TITLE: '즐겨찾기 목록 삭제',
    DELETE_DESC: '즐겨찾기 목록을 지우시겠습니까?',
  },
};
const MSG = {
  COMMON: {
    DELETE_SUCCESS: '정상적으로 삭제되었습니다.',
    REGI_SUCCESS: '정상적으로 등록되었습니다.',
  },
  REPO: {
    REGI_OVER_FAIL: '등록 개수는 최대 4개입니다.',
  },
};

const openNewTab = (targetUrl: string) => {
  window.open(targetUrl, '_blank');
};

const formatDate = (date: string) => (date ? new Date(date).toLocaleString() : '');

export {
  NOTI,
  CONFIRM,
  MSG,
  openNewTab,
  formatDate,
};
