import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userState } from '../../state/state';

const Icon = styled.button`
  position: relative;
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #eee;
  margin-top: 8px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  :hover {
    cursor: grab;
  }
`;

const User = (props: any) => {
  const [isUser, setIsUser] = useRecoilState(userState);
  const [name, setName] = useState('oli');
  const onClick = () => {
    setIsUser(!isUser);
    if (isUser) {
      setName('se0no');
    } else {
      setName('oli');
    }
  };

  useEffect(() => {
    setIsUser(!isUser);
    if (isUser) {
      setName('se0no');
    } else {
      setName('oli');
    }
  }, []);
  return <Icon onClick={onClick}>{name}</Icon>;
};

export default User;
