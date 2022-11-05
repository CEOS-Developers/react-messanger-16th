import { Row, Column } from '../elements/Wrapper.style';
import UserBar from '../elements/UserBar';
import { useRecoilValue } from 'recoil';
import { userState, chatState } from '../../state/userState';
import { useNavigate } from 'react-router';

const ChattingListPage = () => {
  const navigate = useNavigate();
  const userList = useRecoilValue(userState);
  const chatList = useRecoilValue(chatState);

  const onClickChattingRoom = (event: React.MouseEvent<HTMLButtonElement>) => {
    const userId = event.currentTarget.value;
    const selectedUserInfo = userList.filter((user) => user.userId === Number(userId));
    navigate(`/chattingRoom/:${userId}`, { state: selectedUserInfo });
  };

  return (
    <>
      <Row width="100%" justifyContent="space-between" alignItems="start">
        <span style={{ fontWeight: '800', fontSize: '18px', padding: '24px 20px 0px 20px' }}>채팅</span>
      </Row>
      <Column>
        <>
          {userList.map((user) => {
            const userChatList = chatList[user.userId];
            const chatListLength = userChatList.length;
            const lastChat = userChatList[chatListLength - 1];

            return (
              <UserBar
                key={user.userId}
                userId={user.userId}
                username={user.username}
                statusMessage={lastChat.content.length > 1000 ? '사진을 보냈습니다.' : lastChat.content}
                date={lastChat.messageTime}
                onClick={onClickChattingRoom}
              />
            );
          })}
        </>
      </Column>
    </>
  );
};

export default ChattingListPage;
