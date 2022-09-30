import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Talk from './talk/talk';
import Input from './input';
import { useRecoilState, useRecoilValue } from 'recoil';
import { listState } from '../state/state';
import TalkText from './talk/talkText';

const ContentBox = styled.section`
  width: 100%;
  height: 75%;
  overflow: auto;
`;

const Content = () => {
  const boxRef = useRef<HTMLUListElement>();
  const [box, setBox] = useState();
  const scrollToBottom = () => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [box]);

  return (
    <div ref={boxRef}>
      <ContentBox>
        <Talk />
      </ContentBox>
    </div>
  );
};

export default Content;
