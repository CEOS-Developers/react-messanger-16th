import styled from 'styled-components';

import Navigator from '../components/layout/Navigator';
import Header from '../components/layout/Header';

const Setting = () => {
  return (
    <Container>
      <Navigator />
      <Contents>
        <Header title={'더보기'} />
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
`;

export default Setting;
