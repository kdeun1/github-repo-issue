import { useEffect, useState } from 'react';

const getStorageValue = (key: string, defaultValue: unknown) => {
  let initial;
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key);
    initial = saved !== null ? JSON.parse(saved) : defaultValue;
  } else {
    initial = defaultValue;
  }
  return initial;
};

const useLocalStorage = <T, >(key: string, initValue: T) => {
  const [state, setState] = useState(() => getStorageValue(key, initValue));

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
};

export default useLocalStorage;
