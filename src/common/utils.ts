const isExistArray = (arr: unknown): boolean => Array.isArray(arr) && arr?.length > 0;

const isExistObject = (obj: unknown): boolean => !!obj && typeof obj === 'object'
  && Object.keys(obj)?.length > 0;

export {
  isExistArray,
  isExistObject,
};
