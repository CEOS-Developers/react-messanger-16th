import React, { useEffect } from 'react';
import { Route, Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { chatRoomState, idFilterState, messageState, userState } from '../atom';
import { useRecoilValue, useRecoilState, useResetRecoilState } from 'recoil';
import MessageChat from '../components/MessageChat';
import useChatRoom from '../hooks/useChatRoom';
import userEvent from '@testing-library/user-event';

function List() {
  const chatRoomList = useRecoilValue(messageState);
  const navigate = useNavigate();
  const UserList = useRecoilValue(userState);
  const { toggleAccount } = useChatRoom();
  const [id, setId] = useRecoilState(chatRoomState);

  /* const goToChat = ({ userList }: any) => {
    navigate(`/room/${chatRoomList.id}`);
  };
  */
  const ResetData = useResetRecoilState(chatRoomState);

  const goToMain = () => {
    navigate('/');
  };
  const onClickMe = (): void => {
    toggleAccount(0);
    ResetData();
  };

  //recoil로 전체 가져오기!! [chatRoom,setChatROom]useRecoilState, 이한비 값은 안받는걸로 해주기
  const TempList = ({ userList, realId }: any) => {
    const [chatRoom, setChatRoom] = useRecoilState(messageState);
    const testRoom = useRecoilValue(chatRoomState);

    const newData = chatRoom.filter((txt) => txt.id === Number(userList.id))[0];
    const newData2 = chatRoom.filter(
      (txt) => txt.id === Number(userList.id)
    )[0];

    console.log(newData);
    const realNum = newData.messages.length - 1;
    const realNum2 = newData.message.length - 1;
    console.log(userList.id);

    if (newData.message.length === 0) {
      return (
        <AllTemp>
          <ShowImg src={`/img/${userList.id}.png`}></ShowImg>
          <ChatLink to={`/room/${userList.id}`} onClick={onClickMe}>
            {userList.name}
            <CurrentText>{newData.messages[realNum].text}</CurrentText>
            <CurrentTime>{newData.messages[realNum].time}</CurrentTime>
          </ChatLink>
        </AllTemp>
      );
    } else {
      return (
        <AllTemp>
          <ShowImg src={`/img/${userList.id}.png`}></ShowImg>
          <ChatLink to={`/room/${userList.id}`} onClick={onClickMe}>
            {userList.name}
            <CurrentText>{newData.message[realNum2].text}</CurrentText>
            <CurrentTime>{newData.messages[realNum].time}</CurrentTime>
          </ChatLink>

          <ul></ul>
        </AllTemp>
      );
    }
  };
  const newUserList = UserList.users.slice(1, 4);

  return (
    <div>
      <RealAll>
        <SideTemplate>
          <Link to="/">
            <MainImg src={`/img/user2.png`} />
          </Link>

          <Link to="/list">
            <MainImg src={`/img/chat2.png`} />
          </Link>
        </SideTemplate>
        <BodyTemplate>
          <h4>채팅</h4>
          {newUserList.map((userList) => (
            <TempList userList={userList} key={userList.id} />
          ))}
        </BodyTemplate>
      </RealAll>
    </div>
  );
}
const CurrentTime = styled.div`
  font-size: 12px;
  font-weight: lighter;
  margin-left: 125px;
`;
const AllTemp = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid grey;
  margin-bottom: 3px;
`;
const ChatLink = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 30px 3px;
  align-items: left;
  text-decoration: none;
  font-size: 18px;
  color: black;
`;

const MainImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-size: cover;
  margin: 15px;
  margin-top: 15px;
`;

const CurrentText = styled.div`
  color: grey;
  font-size: small;
`;
const BodyTemplate = styled.div`
  box-sizing: border-box;
  padding: 0 3px;
`;

const RealAll = styled.div`
  width: 350px;
  height: 680px;
  background-color: white;
  border-radius: 25px;
  box-shadow: 1px 1px 30px grey;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 38%;
  display: grid;
  grid-template-columns: 68px auto;
`;
const SideTemplate = styled.div`
  background-color: rgb(230, 230, 230);
  border-right: 1px solid rgb(223, 223, 223);
  display: block;
`;
const ShowImg = styled.img`
  width: 58px;
  height: 58px;
  padding: 30px 25px;
  border-radius: 50%;
  background-size: cover;
`;

const AllTemplate = styled.div`
  width: 350px;
  height: 660px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 30px grey;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 38%;
  justify-content: center;
  align-items: center;
`;

export default List;
