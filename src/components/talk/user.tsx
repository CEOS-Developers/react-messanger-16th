import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../state/state';
import { userSelector, chatSelector } from '../../state/state';

const Icon = styled.button`
  position: relative;
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #eee;
  margin-top: 18px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  :hover {
    cursor: grab;
  }
`;

const User = () => {
  const [isUser, setIsUser] = useRecoilState(userState);
  const [name, setName] = useState('');

  const nowUser = useRecoilValue(userSelector);

  const changeUser = () => {
    setIsUser(!isUser);
    if (isUser) {
      setName('유선호');
    } else {
      if (nowUser) setName(nowUser.userName);
    }
  };

  useEffect(changeUser, []);
  return (
    <>
      {nowUser.userName === '유선호' ? (
        <Icon>{name}</Icon>
      ) : (
        <Icon onClick={changeUser}>{name}</Icon>
      )}
    </>
  );
};

export default User;
