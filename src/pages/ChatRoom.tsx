import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import ChatHeader from '../components/chatRoom/ChatHeader';
import InputBox from '../components/InputBox';
import ChatBoxList from '../components/chatRoom/ChatBoxList';

const ChatRoom = () => {
  const { id } = useParams();

  return (
    <Container>
      <ChatHeader />
      <ChatBoxList />
      <InputBox id={2} />
    </Container>
  );
};

const Container = styled.div`
  width: 25rem;
  height: 40rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 20px;
  box-shadow: 1px 1px 10px lightgray;
`;

export default ChatRoom;
