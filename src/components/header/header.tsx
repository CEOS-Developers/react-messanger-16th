import React, { useState, createContext, useContext } from 'react';
import styled from 'styled-components';
import Profile from './profile';
import userInfo from '../../assets/userInfo';

const Header = () => {
  return (
    <Container>
      {userInfo.map((user) => (
        <Profile
          userId={user.userId}
          userImage={user.userImage}
          userName={user.userName}
          userActive={user.userActive}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  width: 25rem;
  height: 7rem;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-left: 1.5rem;
`;

const ProfileImg = styled.img`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 1rem;
  cursor: pointer;
`;

const Name = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;

export default Header;
