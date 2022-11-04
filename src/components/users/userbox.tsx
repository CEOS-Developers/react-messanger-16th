import styled from 'styled-components';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { UserListInfo } from '../../interfaces/interface';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { nowUserState } from '../../state/state';

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

const UserBox = ({ user }: { user: UserListInfo }) => {
  const [nowUser, setNowUser] = useRecoilState<number>(nowUserState);

  const onClick = () => {
    setNowUser(userId);
  };

  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    setUserId(user.userId);
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
          <p className="userName">{user.userName}</p>
          <p className="stateMsg">{user.stateMsg}</p>
        </div>
      </UserInfo>
    </Link>
  );
};

export default UserBox;
