import styled from 'styled-components';
import Header from '../components/header/header';
import ChatBubbleList from '../components/chatList/chatBubbleList';
import ChatInput from '../components/chatInput';
import { useLocation } from 'react-router-dom';

const ChatPage = () => {
  const location = useLocation();
  const roomId = Number(location.state.roomId);

  return (
    <Background>
      <Container>
        <ColumnContainer> 
            <Header id={roomId}/>
            <ChatBubbleList roomId={roomId}/>
            <ChatInput roomId={roomId}/> 
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

const ColumnContainer = styled.div`
  display: flex;
  flex-direction : column;
`;
