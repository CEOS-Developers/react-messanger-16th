import React from 'react';
import styled from 'styled-components';
import userInfo from '../../assets/userInfo';
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
          <ProfileImg src={`img/${userInfo[listenerId].userImage}.jpeg`} />
          <ColumnBox>
            <NameText> {userInfo[listenerId].userName} </NameText>
            <Bubble>
              <ChatText> {text} </ChatText>
            </Bubble>
          </ColumnBox>
        </BubbleBox>
      )}
    </>
  );
};

const BubbleBox = styled.div`
  display: flex;
  width: 25rem;
  height: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ProfileImg = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
`;

const Bubble = styled.div`
  display: flex;
  width: auto;
  height: 2.1rem;
  background-color: #ffffff;
  border-radius: 0.3rem;
`;

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameText = styled.text`
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
`;

const ChatText = styled.text`
  padding: 0.6rem;
  font-size: 0.9rem;
`;

const DayText = styled.text`
  font-size: 0.5rem;
  left: 1rem;
  top: 0.5rem;
`;

export default ChatBubble;
