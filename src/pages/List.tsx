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

    const newData = chatRoom.filter(
      (txt) => txt.id === Number(userList.id) + 1
    )[0];
    console.log(newData);
    const realNum = newData.messages.length - 1;

    return (
      <div>
        <Link to={`/room/${userList.id}`} onClick={onClickMe}>
          <ShowImg src={`/img/${userList.id}.png`}></ShowImg>
          {userList.name}
        </Link>
        <CurrentText>{newData.messages[realNum].text}</CurrentText>

        <ul></ul>
      </div>
    );
  };

  return (
    <div>
      <RealAll>
        <SideTemplate>
          <Link to="/">메인페이지</Link>
          <ul></ul>
          <Link to="/list">리스트</Link>
        </SideTemplate>
        <BodyTemplate>
          <h4>채팅</h4>
          {UserList.users.map((userList) => (
            <TempList userList={userList} key={userList.id} />
          ))}
        </BodyTemplate>
      </RealAll>
    </div>
  );
}
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
  width: 38px;
  height: 38px;
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
