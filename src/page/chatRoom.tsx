import styled from 'styled-components';
import Header from '../components/header/header';
import ChatBubbleList from '../components/chatList/chatBubbleList';
import ChatInput from '../components/chatInput';

const ChatRoom = () => {
  return (
    <Background>
      <Container>
        <ColumnContainer> 
          <Header />
          <ChatBubbleList />
          <ChatInput />
        </ColumnContainer>
      </Container>
    </Background>
  );
}

export default ChatRoom;

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
