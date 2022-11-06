import styled from 'styled-components';
import ChatRoomList from '../components/ChatRoomLists/ChatRoomList';

const ChatRoomListPage = () => {
  return (
    <ChatListPageContainer>
      <h3>채팅</h3>
      <ChatRoomList />
    </ChatListPageContainer>
  );
};

const ChatListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export default ChatRoomListPage;
