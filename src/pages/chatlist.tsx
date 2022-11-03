import MainBox from '../components/box/mainbox';
import { useRecoilState } from 'recoil';
import { UserListInfo } from '../interfaces/interface';
import { userListState } from '../state/state';
import styled from 'styled-components';
import UserBox from '../components/users/userbox';

const ChatList = () => {
  const [userList, setUserList] = useRecoilState<UserListInfo[]>(userListState);

  const Container = styled.div`
    .text {
      margin-top: 25px;
      margin-left: 25px;
    }

    .friends {
      margin-top: 40px;
    }
  `;

  return (
    <MainBox>
      <Container>
        <div className="friends">
          {userList.map((user, index) =>
            index ? <UserBox user={user} key={index} /> : ''
          )}
        </div>
      </Container>
    </MainBox>
  );
};

export default ChatList;
