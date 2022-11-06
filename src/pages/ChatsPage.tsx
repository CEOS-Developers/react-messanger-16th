import styled from 'styled-components';
import ChatUsers from '../components/Chats/ChatUsers';
import ChatInput from '../components/Chats/ChatInput';
import ChatBoard from '../components/Chats/ChatBoard';
import { useParams } from 'react-router-dom';

function ChatsPage() {
  const roomParams = useParams();
  const roomid = roomParams.roomid;
  
  return (
    <ChatsPageContainer>
      <ChatUsers roomid={roomid} />
      <ChatBoard roomid={roomid} />
      <ChatInput roomid={roomid} />
    </ChatsPageContainer>
  );
}

const ChatsPageContainer = styled.div`
  display: grid;
  grid-template-rows: 90px 400px ;
`;

export default ChatsPage;
