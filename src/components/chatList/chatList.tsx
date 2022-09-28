import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { activeId, chatList } from '../../recoil/store';

const ChatList = (userId: any) => {
  const active = useRecoilValue(activeId);
  const chatting = useRecoilValue(chatList);

  return (
    <Container>
      {chatting.map((chat: { talkerId: any; text: any }) => (
        <>
          {active == chat.talkerId ? (
            <BubbleBox>
              <BubbleRight>
                <Text>{chat.text}</Text>
              </BubbleRight>
            </BubbleBox>
          ) : (
            <BubbleBox>
              <BubbleLeft>
                <Text>{chat.text}</Text>
              </BubbleLeft>
            </BubbleBox>
          )}

          {/* <ChatBubble key={chat.chatId} chat={chat} /> */}
        </>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 25rem;
  background-color: #8bc097;

  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: white;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const BubbleBox = styled.div`
  display: flex;
  position: relative;
  width: 25rem;
  height: 3rem;
  background-color: #8bc097;
`;

const BubbleLeft = styled.div`
  display: flex;
  position: absolute;
  left: 1rem;
  top: 0.5rem;

  width: auto;
  height: 2rem;
  text-size: 0.8rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
`;

const BubbleRight = styled.div`
  display: flex;
  position: absolute;
  right: 1rem;
  top: 0.5rem;

  width: auto;
  height: 2rem;
  text-size: 0.8rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
`;

const Text = styled.text`
  padding: 0.5rem;
  text-size: 1rem;
`;

export default ChatList;
