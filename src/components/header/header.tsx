import React, { useState, createContext, useContext } from 'react';
import styled from 'styled-components';
import Profile from './profile';
import userInfo from '../../assets/userInfo';

import kurby1 from '../../img/flyKurby.jpeg';
import kurby2 from '../../img/starKurby.jpeg';

const Header = (userId: any) => {
  const [user, setUser] = useState(1); // 나의 유저 아이디
  const [other, setOther] = useState(2); // 상대방 유저 아이디

  return (
    <Container>
      {userInfo.map((user) => (
        <Profile
          key={userId}
          userId={userId}
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
