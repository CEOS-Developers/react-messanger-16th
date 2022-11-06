import styled from 'styled-components';
import FriendList from '../components/Friends/FriendList';
import { useState } from 'react';
import SearchInput from '../components/Friends/SearchInput';
import { BsSearch } from 'react-icons/bs';

const FriendsPage = () => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <FriendPageContainer>
      <Head>
        <h3>친구</h3>
        <BsSearch
          onClick={() => setIsSearch(!isSearch)}
          style={{ fontSize: '20px', cursor: 'pointer', padding: '10px' }}
        />
      </Head>
      {isSearch ? <SearchInput /> : <FriendList />}
    </FriendPageContainer>
  );
};

const FriendPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default FriendsPage;
