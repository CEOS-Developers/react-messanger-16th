import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import useUser from '../../hooks/useUser';
import { currentState } from '../../states/atoms/current';
import { IChat } from '../../states/interface';
import Squircle from '../common/Squircle';
import { timeForToday } from './getTimeForToday';

interface ChatItemProps {
  chat: IChat;
  isContinual: boolean;
}

const ChatItem = ({ chat, isContinual }: ChatItemProps) => {
  const { getUserById } = useUser();
  const user = getUserById(chat.userId);
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

export default ChatItem;

const getBubbleTailStyle = (isMyChat: boolean, isContinual: boolean) => {
  if (!isContinual) {
    if (isMyChat) {
      return css`
        ::before {
          content: '';
          width: 0px;
          height: 0px;
          position: absolute;
          border-left: 5px solid #fbe64d;
          border-right: 5px solid transparent;
          border-top: 5px solid #fbe64d;
          border-bottom: 5px solid transparent;
          border-radius: 1px;
          right: -6px;
          top: 6px;
        }
      `;
    } else {
      return css`
        ::before {
          content: '';
          width: 0px;
          height: 0px;
          position: absolute;
          border-left: 5px solid transparent;
          border-right: 5px solid #fff;
          border-top: 5px solid #fff;
          border-bottom: 5px solid transparent;
          left: -6px;
          top: 6px;
        }
      `;
    }
  }
};

const Container = styled.div`
  display: flex;
  margin-top: 8px;

  & > div:first-child {
    min-width: 40px;
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
    padding: 10px;
    white-space: pre-wrap;
    border-radius: 5px;
    position: relative;
    order: ${({ isMyChat }) => isMyChat && 2};

    font-size: 13px;
    background-color: ${({ isMyChat }) => (isMyChat ? '#fbe64d' : '#fff')};
    ${({ isMyChat, isContinual }) => getBubbleTailStyle(isMyChat, isContinual)}
  }

  .date {
    font-size: 8px;
    color: #333;
    display: flex;
    align-items: flex-end;
    min-width: 50px;
    order: ${({ isMyChat }) => isMyChat && 1};
    justify-content: ${({ isMyChat }) => (isMyChat ? 'end' : 'start')};
    padding: 0 8px;
  }
`;
