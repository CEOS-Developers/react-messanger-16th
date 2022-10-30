import styled from 'styled-components';
import Navigator from '../components/navigator';
import jerry from '../assets/jerry.gif';

const SettingPage = () => {
  return (
    <Background>
      <Container>
        <Navigator/>
        <ColumnContainer>
          <Title> Setting </Title>
          <a href="https://github.com/0909oje/react-messanger-16th" style={{ textDecoration: "none", color: "black" }}> 
            <Text> github </Text>
          </a>
          <a href="https://55wldms.tistory.com/19" style={{ textDecoration: "none", color: "black" }}> 
            <Text> tistory </Text>
          </a>
          <GIF src={jerry}/>
        </ColumnContainer>
      </Container>
    </Background>
  );
}

export default SettingPage;

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
  height: 100%;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  margin-bottom: 2rem;
`

const Text = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  margin-left: 1.5rem;
  cursor: pointer;
`;

const GIF = styled.img`
  margin-top: 5rem;
  width: 20rem;
  margin-left: 0.3rem;
`;