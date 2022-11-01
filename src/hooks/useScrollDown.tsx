import { useEffect, useRef } from 'react';

const useScrollDown = (dep: any) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  const goToBottom = () => {
    if (bodyRef.current) {
      bodyRef.current.scrollTo(0, bodyRef.current.scrollHeight);
    }
  };

  useEffect(() => {
    goToBottom();
  }, [dep]);

  return { bodyRef };
};

export default useScrollDown;
