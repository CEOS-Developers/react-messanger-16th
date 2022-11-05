import React, { useState, createContext, useContext } from 'react';
import styled from 'styled-components';
import Profile from './profile';
import userInfo from '../../assets/userInfo.json';

const Header = ({id}) => {
  return (
    <Container>
      <Profile
          userId={userInfo[5].userId}
          userImage={userInfo[5].userImage}
          userName={userInfo[5].userName}
        />
        <Profile
          userId={userInfo[id].userId}
          userImage={userInfo[id].userImage}
          userName={userInfo[id].userName}
        />
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
