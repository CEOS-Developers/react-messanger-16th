import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { currentState } from '../../states/atoms/current';
import { userStateByUserId } from '../../states/atoms/user';
import { IChat } from '../../states/interface';
import Squircle from '../common/Squircle';
import getBubbleTailStyle from './getBubbleTailStyle';
import { timeForToday } from './getTimeForToday';

interface ChatItemProps {
  chat: IChat;
  isContinual: boolean;
}

const ChatItem = ({ chat, isContinual }: ChatItemProps) => {
  const user = useRecoilValue(userStateByUserId(chat.userId));
  const current = useRecoilValue(currentState);
  const isMyChat = user.userId === current;

  return (
    <Container>
      {!isMyChat && !isContinual && (
        <Squircle imageUrl={user.profileImage} size={40} />
      )}
      {!isMyChat && isContinual && <div />}
      <Wrapper isMyChat={isMyChat} isContinual={isContinual}>
        {!isMyChat && !isContinual && <span>{user.userName}</span>}
        <div>
          <div className="bubble">{chat.content}</div>
          <div className="date">{timeForToday(chat.date)}</div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default React.memo(ChatItem);

const Container = styled.div`
  display: flex;
  margin-top: 10px;

  & > div:first-child {
    min-width: 40px;
  }

  &:last-child {
    margin-bottom: 10px;
  }
`;

const Wrapper = styled.div<{ isMyChat: boolean; isContinual: boolean }>`
  margin-left: 16px;
  width: 100%;
  & > span {
    display: inline-block;
    font-size: 13px;
    margin-bottom: 8px;
  }

  & > div:last-child {
    display: flex;
    justify-content: ${({ isMyChat }) =>
      isMyChat ? `flex-end` : `flex-start`};
  }

  .bubble {
    padding: 10px 12px;
    white-space: pre-wrap;
    border-radius: 5px;
    position: relative;
    order: ${({ isMyChat }) => isMyChat && 2};

    font-size: 13px;
    background-color: ${({ isMyChat }) => (isMyChat ? '#fbe64d' : '#fff')};
    ${({ isMyChat, isContinual }) => getBubbleTailStyle(isMyChat, isContinual)}
  }

  .date {
    font-size: 10px;
    color: #333;
    display: flex;
    align-items: flex-end;
    min-width: 50px;
    order: ${({ isMyChat }) => isMyChat && 1};
    justify-content: ${({ isMyChat }) => (isMyChat ? 'end' : 'start')};
    padding: 0 4px;
  }
`;
