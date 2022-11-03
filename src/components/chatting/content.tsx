import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Talk from '../talk/talk';
import { useRecoilState, useRecoilValue } from 'recoil';
import { listState } from '../../state/state';
import { Params } from 'react-router-dom';

const ContentBox = styled.section`
  width: 100%;
  height: 75%;
  overflow: auto;
`;

const Content = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const talk = useRecoilValue(listState);
  const scrollToBottom = () => {
    if (boxRef.current) {
      boxRef.current!.scrollTop = boxRef.current!.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [talk]);

  return (
    <ContentBox ref={boxRef}>
      <Talk />
    </ContentBox>
  );
};

export default Content;
