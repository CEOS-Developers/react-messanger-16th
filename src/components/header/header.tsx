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
  height: 6.5rem;
`;

export default Header;
