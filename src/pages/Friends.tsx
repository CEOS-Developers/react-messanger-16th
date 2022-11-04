import { useState } from 'react';

import styled from 'styled-components';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/recoil';

import Navigator from '../components/layout/Navigator';
import Header from '../components/layout/Header';
import FriendsList from '../components/friends/FriendsList';
import Search from '../components/friends/Search';

const Friends = () => {
  const users = useRecoilValue(userState);

  const [viewSearch, setViewSearch] = useState(false);

  const handleClickSearch = () => {
    setViewSearch(!viewSearch);
  };

  return (
    <Container>
      <Navigator />
      <Contents>
        <HeaderWrapper>
          <Header title={'친구'} />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={handleClickSearch}
          ></FontAwesomeIcon>
        </HeaderWrapper>
        {viewSearch ? <Search /> : <FriendsList users={users} />}
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  width: 25rem;
  height: 40rem;

  display: flex;

  border-radius: 20px;
  box-shadow: 1px 1px 10px lightgray;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  padding-right: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Friends;
