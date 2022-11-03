import styled from 'styled-components';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { ChatInfo, UserListInfo } from '../../interfaces/interface';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chatSelector, nowUserState } from '../../state/state';

const UserInfo = styled.div`
  display: flex;

  .icon {
    align-self: center;
    margin-left: 25px;
  }
  .user {
    flex-direction: column;
    margin-left: 20px;
  }

  .userName {
    font-size: 17px;
    margin-bottom: 0;
  }

  .stateMsg {
    font-size: 12px;
    color: #006666;
    margin-top: 3px;
  }

  :hover {
    cursor: grab;
    background-color: grey;
  }
`;

const Icon = styled.button`
  position: relative;
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #eee;
  margin: 0;
  padding: 0;
  border: none;
`;

const ChatBox = ({ chat }: { chat: ChatInfo }) => {
  const [nowUser, setNowUser] = useRecoilState<number>(nowUserState);
  const chatMsg = useRecoilValue(chatSelector);
  const [num, setNum] = useState(chat.chat.length - 1);

  const onClick = () => {
    setNowUser(userId);
  };

  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    setUserId(chat.userId);
  }, [userId]);

  return (
    <Link
      style={{ textDecoration: 'none', color: 'black' }}
      to={`../chat/${userId}`}
    >
      <UserInfo onClick={onClick}>
        <Icon className="icon">
          <IoPersonCircleSharp size="100%" />
        </Icon>
        <div className="user">
          <p className="userName">{chat.userName}</p>
          <p className="stateMsg">{chat.chat[num].addText}</p>
        </div>
      </UserInfo>
    </Link>
  );
};

export default ChatBox;
