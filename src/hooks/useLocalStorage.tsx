import { useEffect, useState } from 'react';

const useLocalStorage = <T, >(key: string, initValue: T) => {
  const [state, setState] = useState(window?.localStorage?.getItem(key) ?? initValue);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
};

export default useLocalStorage;
