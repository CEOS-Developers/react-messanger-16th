import React from 'react';
import styled from 'styled-components';
import { User } from '../../interface/user';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-left: 1rem;
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

const Profile = ({ userId, userName, userImage, userActive }: User) => {
  return (
    <Container>
      {userActive ? (
        <>
          <ProfileImg src={`../../img/${userImage}.jpeg`} />
          <Name> {userName} </Name>
        </>
      ) : (
        <>
          <ProfileImg
            src={`../../img/${userImage}.jpeg`}
            style={{ opacity: 0.5 }}
          />
          <Name> {userName} </Name>
        </>
      )}
    </Container>
  );
};

export default Profile;
