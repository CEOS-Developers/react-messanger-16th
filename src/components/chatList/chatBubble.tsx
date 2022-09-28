import React from 'react';
import styled from 'styled-components';
import { chatting } from '../../interface/chatting';
import { useRecoilValue } from 'recoil';
import { activeId } from '../../recoil/store';

const ChatBubble = ({ chatId, talkerId, listenerId, text }: chatting) => {
  const active = useRecoilValue(activeId);
  return (
    <>
      {active == talkerId ? (
        // 오른쪽 정렬
        <BubbleBox style={{ justifyContent: 'flex-end' }}>
          <Bubble style={{ marginRight: '1rem' }}>
            <ChatText> {text} </ChatText>
          </Bubble>
        </BubbleBox>
      ) : (
        // 왼쪽 정렬
        <BubbleBox>
          <Bubble style={{ marginLeft: '1rem' }}>
            <ChatText> {text} </ChatText>
          </Bubble>
        </BubbleBox>
      )}
    </>
  );
};

const BubbleBox = styled.div`
  display: flex;
  width: 25rem;
  height: 2rem;
  margin-top: 1rem;
  background-color: #8bc097;
`;

const Bubble = styled.div`
  display: flex;
  width: auto;
  height: 2rem;
  text-size: 0.8rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
`;

const ChatText = styled.text`
  padding: 0.5rem;
  text-size: 1rem;
`;

const DayText = styled.text`
  text-size: 0.5rem;
  left: 1rem;
  top: 0.5rem;
`;

export default ChatBubble;
