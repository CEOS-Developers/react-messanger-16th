import styled from 'styled-components';
import Navigator from '../components/navigator';

const MainPage = () => {
  return (
    <Background>
      <Container>
        <Navigator/>
        <div> 메인 페이지 입니다. </div>
      </Container>
    </Background>
  );
}

export default MainPage;

const Background = styled.div`
  display: relative;
`;

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: row;
  justify-items: center;
  align-items: center;
  width: 25rem;
  height: 44rem;
  border: 1px solid #e8e8e8;
  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #e8e8e8;
  border-radius: 1rem;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction : column;
`;
