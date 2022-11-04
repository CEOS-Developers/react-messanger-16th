import { throttle } from 'lodash';
import { useEffect, useRef, useState } from 'react';

const useScrollDown = (dep: any) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [bodyScrollY, setBodyScrollY] = useState<number>(0);

  const handleScroll = throttle(() => {
    setBodyScrollY(
      bodyRef.current
        ? bodyRef.current.scrollHeight - bodyRef.current.scrollTop
        : 0,
    );
  }, 100);

  const handleToBottom = () => {
    if (bodyRef.current) {
      bodyRef.current.scrollTo(0, bodyRef.current.scrollHeight);
    }
  };

  useEffect(() => {
    handleToBottom();
  }, [dep]);

  return { bodyRef, handleToBottom, handleScroll, bodyScrollY };
};

export default useScrollDown;
