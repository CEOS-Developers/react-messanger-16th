import styled from 'styled-components';

const ChatBox = () => {
  return (
    <ChatBoxWrapper>
      <ChatBoxItem>
        <UserImgWrapper>
          <UserImg src={process.env.PUBLIC_URL + `/assets/보통이.jpeg`} />
        </UserImgWrapper>
        <ChatWrapper>
          <ChatUserName />
          <Chat>
            <ChatText />
            <ChatTime />
          </Chat>
        </ChatWrapper>
      </ChatBoxItem>
    </ChatBoxWrapper>
  );
};

const ChatBoxWrapper = styled.div`
  flex-grow: 8.5;

  background-color: rgb(180, 213, 226);
`;

const ChatBoxItem = styled.div`
  padding: 1.5rem;

  display: flex;
  gap: 0.8rem;
`;

const UserImgWrapper = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 40%;
  overflow: hidden;
`;

const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ChatWrapper = styled.div``;

const ChatUserName = styled.div`
  padding-bottom: 0.4rem;

  font-size: 0.75rem;
`;

const Chat = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ChatText = styled.div`
  padding: 0.6rem 0.8rem 0.5rem;

  border-radius: 5px;

  font-size: 0.9rem;
  font-weight: 500;

  background-color: white;
`;

const ChatTime = styled.div`
  align-self: flex-end;

  font-size: 0.5rem;
  font-weight: 500;
`;

export default ChatBox;
