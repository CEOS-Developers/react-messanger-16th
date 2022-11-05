import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { chatList } from '../../recoil/store';
import { activeId } from '../../recoil/store';
import userInfo from '../../assets/userInfo.json';

const ChatBubble = ({ roomId , chatId }) => {
  const chatting = useRecoilValue(chatList);
  const active = useRecoilValue(activeId);
  return (
    <>
      {active == chatting[roomId].chat[chatId].talker ? (
        // 오른쪽 정렬
        <BubbleBox style={{ justifyContent: 'flex-end' }}>
          <Bubble style={{ marginRight: '1rem', marginLeft: '1rem' }}>
            <ChatText> {chatting[roomId].chat[chatId].chat} </ChatText>
          </Bubble>
        </BubbleBox>
      ) : (
        // 왼쪽 정렬
        <BubbleBox>
          <ProfileImg src={`img/${userInfo[chatting[roomId].chat[chatId].talker].userImage}.jpeg`} />
          <ColumnBox>
            <NameText> {userInfo[chatting[roomId].chat[chatId].talker].userName} </NameText>
            <Bubble style={{ marginRight: '1rem' }}>
              <ChatText> {chatting[roomId].chat[chatId].chat} </ChatText>
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
  word-break: break-all;
`;

const ChatText = styled.div`
  padding: 0.6rem;
  font-size: 0.9rem;
`;

export default ChatBubble;
