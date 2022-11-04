import { throttle } from 'lodash';
import { useEffect, useRef } from 'react';

const useScrollDown = (dep: any) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  const onScroll = throttle(() => {}, 100);

  const goToBottom = () => {
    if (bodyRef.current) {
      bodyRef.current.scrollTo(0, bodyRef.current.scrollHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    goToBottom();
  }, [dep]);

  return { bodyRef };
};

export default useScrollDown;
