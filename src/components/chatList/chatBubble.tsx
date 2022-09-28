import React from 'react';
import styled from 'styled-components';
import { chatting } from '../../interface/chatting';
import { useRecoilValue } from 'recoil';
import { activeId } from '../../recoil/store';

const ChatBubble = ({ chatId, talkerId, listenerId, text }: chatting) => {
  const active = useRecoilValue(activeId);
  return (
    <BubbleBox>
      {active == talkerId ? (
        <>
          <BubbleRight>
            <Text> {text} </Text>
          </BubbleRight>
        </>
      ) : (
        <BubbleLeft>
          <Text> {text} </Text>
        </BubbleLeft>
      )}
    </BubbleBox>
  );
};

const BubbleBox = styled.div`
  display: flex;
  position: relative;
  width: 25rem;
  height: 3rem;
  background-color: #8bc097;
`;

const BubbleLeft = styled.div`
  display: flex;
  position: absolute;
  left: 1rem;
  top: 0.5rem;

  width: auto;
  height: 2rem;
  text-size: 0.8rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
`;

const BubbleRight = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  top: 0.5rem;

  width: auto;
  height: 2rem;
  text-size: 0.8rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
`;

const Text = styled.text`
  padding: 0.5rem;
  text-size: 1rem;
`;

export default ChatBubble;
