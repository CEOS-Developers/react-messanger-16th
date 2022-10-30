import styled from 'styled-components';
import Navigator from '../components/navigator';
import userInfo from '../assets/userInfo.json';
import ChatProfile from '../components/chatProfile';

const ChatPage = () => {
  return (
    <Background>
      <Container>
        <Navigator/>
        <ColumnContainer> 
          <Title> Messages </Title>
          {userInfo.map((user, idx) => (
            <ChatProfile
              key={idx}
              img={user.userImage}
              name={user.userName}
              message={user.status}/>
          ))}
       </ColumnContainer>
      </Container>
    </Background>
  );
}

export default ChatPage;

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

const Title = styled.div`
  font-size: 2rem;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  margin-bottom: 0.5rem;
`

const ColumnContainer = styled.div`
  display: flex;
  flex-direction : column;
  height: 100%;
  width: 100%;
`;