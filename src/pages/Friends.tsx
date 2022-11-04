import styled from 'styled-components';

import Navigator from '../components/layout/Navigator';
import Header from '../components/layout/Header';
import FriendsList from '../components/friends/FriendsList';
import Search from '../components/friends/Search';

const Friends = () => {
  return (
    <Container>
      <Navigator />
      <Contents>
        <Header leftChild={'친구'} rightChild={true} />
        <Search />
        <FriendsList />
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

export default Friends;
