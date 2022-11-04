import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { curUserState } from '../recoil/recoil';

import ChatHeader from '../components/chatRoom/ChatHeader';
import ChatInput from '../components/chatRoom/ChatInput';
import ChatBoxList from '../components/chatRoom/ChatBoxList';

const ChatRoom = () => {
  const { id } = useParams();
  const roomId = Number(id);

  return (
    <Container>
      <ChatHeader />
      <ChatBoxList />
      <ChatInput />
    </Container>
  );
};

const Container = styled.div`
  width: 25rem;
  height: 40rem;

  display: flex;
  flex-direction: column;

  border-radius: 20px;
  box-shadow: 1px 1px 10px lightgray;
`;

export default ChatRoom;
