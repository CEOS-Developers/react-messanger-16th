import styled from 'styled-components';
import userInfo from '../../assets/userInfo.json';
import { chatting } from '../../interface/chatting';
import { useRecoilValue } from 'recoil';
import { activeId } from '../../recoil/store';

const ChatBubble = ({ chatId, talkerId, listenerId, text }: chatting) => {
  const active = useRecoilValue(activeId);
  return (
    <>
      {active == talkerId ? (
        // 오른쪽 정렬
        <BubbleBox style={{ justifyContent: 'flex-end' }}>
          <Bubble style={{ marginRight: '1rem', marginLeft: '1rem' }}>
            <ChatText> {text} </ChatText>
          </Bubble>
        </BubbleBox>
      ) : (
        // 왼쪽 정렬
        <BubbleBox>
          <ProfileImg src={`img/${userInfo[talkerId].userImage}.png`} />
          <ColumnBox>
            <NameText> {userInfo[talkerId].userName} </NameText>
            <Bubble style={{ marginRight: '1rem' }}>
              <ChatText> {text} </ChatText>
            </Bubble>
          </ColumnBox>
        </BubbleBox>
      )}
    </>
  );
};

const BubbleBox = styled.div`
  display: flex;
  width: 25rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ProfileImg = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
`;

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameText = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
`;

const Bubble = styled.div`
  display: flex;
  width: auto;
  background-color: #ffffff;
  border-radius: 0.3rem;
`;

const ChatText = styled.div`
  padding: 0.6rem;
  font-size: 0.9rem;
`;

const DayText = styled.div`
  font-size: 0.5rem;
  left: 1rem;
  top: 0.5rem;
`;

export default ChatBubble;
