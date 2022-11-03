import MainBox from '../components/box/mainbox';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ChatInfo, UserListInfo } from '../interfaces/interface';
import { ChatBoxState, userListState } from '../state/state';
import styled from 'styled-components';
import ChatBox from '../components/users/chatbox';

const ChatList = () => {
  const [userList, setUserList] = useRecoilState<UserListInfo[]>(userListState);
  const chatList = useRecoilValue<ChatInfo[]>(ChatBoxState);

  const Container = styled.div`
    .friends {
      margin-top: 40px;
    }
  `;

  return (
    <MainBox>
      <Container>
        <div className="friends">
          {chatList.map((ch, index) =>
            index ? <ChatBox chat={ch} key={index} /> : ''
          )}
        </div>
      </Container>
    </MainBox>
  );
};

export default ChatList;
