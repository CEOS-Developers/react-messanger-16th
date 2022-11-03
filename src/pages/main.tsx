import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import MainBox from '../components/box/mainbox';
import UserBox from '../components/users/userbox';
import { UserListInfo } from '../interfaces/interface';
import { userListState } from '../state/state';

const Container = styled.div`
  .text {
    margin-top: 25px;
    margin-left: 25px;
  }

  .friends {
    margin-top: 40px;
  }
`;

const Main = () => {
  const [userList, setUserList] = useRecoilState<UserListInfo[]>(userListState);

  const onClick = (e: React.MouseEvent<HTMLElement>) => {};

  return (
    <MainBox>
      <Container>
        <p className="text">친구</p>
        <UserBox user={userList[0]} />
        <div className="friends">
          {userList.map((user, index) =>
            index ? <UserBox user={user} key={index} /> : ''
          )}
        </div>
      </Container>
    </MainBox>
  );
};

export default Main;
