import styled from 'styled-components';

import Navigator from '../components/Navigator';
import Header from '../components/Header';

const FriendList = () => {
  return (
    <Container>
      <Navigator />
      <Header leftChild={'친구'} rightChild={''} />
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

export default FriendList;
