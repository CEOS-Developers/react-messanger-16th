import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { chatRoomState, messageState, userState } from '../atom';
import { useRecoilValue, useRecoilState, useResetRecoilState } from 'recoil';
import useChatRoom from '../hooks/useChatRoom';
import userEvent from '@testing-library/user-event';

function List() {
  const messageWrapperRef = useRef<HTMLUListElement>(null);
  const chatRoomList = useRecoilValue(messageState);

  const UserList = useRecoilValue(userState);
  const { toggleAccount } = useChatRoom();

  /* const goToChat = ({ userList }: any) => {
    navigate(`/room/${chatRoomList.id}`);
  };
  */
  const scrollToBottom = () => {
    if (messageWrapperRef.current) {
      messageWrapperRef.current.scrollTop =
        messageWrapperRef.current.scrollHeight;
    }
  };
  useEffect(() => {}, [chatRoomList]);
  const ResetData = useResetRecoilState(chatRoomState);

  const onClickMe = (): void => {
    toggleAccount(0);
    ResetData();
  };

  //recoil로 전체 가져오기!! [chatRoom,setChatROom]useRecoilState, 이한비 값은 안받는걸로 해주기
  const TempList = ({ userList, realId }: any) => {
    const [chatRoom, setChatRoom] = useRecoilState(messageState);
    const testRoom = useRecoilValue(chatRoomState);

    const newData = chatRoom.filter((txt) => txt.id === Number(userList.id))[0];

    const realNum = newData.messages.length - 1;
    const realNum2 = newData.message.length - 1;

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
            <CurrentTime>{newData.message[realNum2].time}</CurrentTime>
          </ChatLink>
        </AllTemp>
      );
    }
  };
  const newUserList = UserList.users.slice(0, 6);

  return (
    <RealAll>
      <SideTemplate>
        <Link to="/">
          <MainImg src={`/img/user2.png`} />
        </Link>

        <Link to="/list">
          <MainImg src={`/img/chat2.png`} />
        </Link>
        <Link to="/Setting">
          <MainImg src={`/img/setting.png`} />
        </Link>
      </SideTemplate>

      <BodyTemplate>
        <h4>채팅</h4>
        <Wrapper ref={messageWrapperRef}>
          {newUserList.map((userList) => (
            <TempList userList={userList} key={userList.id} />
          ))}
        </Wrapper>
      </BodyTemplate>
    </RealAll>
  );
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 584px;

  overflow: auto;
  padding: 0.5rem 0.8rem 0 0.2rem;
  ::-webkit-scrollbar {
    width: 0.9rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 1rem;
    background-clip: padding-box;
    border: 0.3rem solid transparent;
  }
`;

const CurrentTime = styled.div`
  font-size: 12px;
  font-weight: light;
  margin-left: 125px;
  color: #d8d0d0;
`;
const AllTemp = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid lightgray;
  margin-bottom: 1px;
  padding-top: 0.05px;
`;
const ChatLink = styled(Link)`
  display: flex;
  flex-direction: column;

  padding: 28px 3px;
  align-items: left;

  text-decoration: none;
  font-size: 18px;
  color: black;
  font-weight: bold;
  margin-bottom: 3px;
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
  color: #1c191976;
  font-size: small;
  font-weight: 650;
`;
const BodyTemplate = styled.div`
  box-sizing: border-box;
  padding: 0 3px;
  margin-top: 1px;
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
  border-radius: 25px 0px 0px 25px;
  display: block;
`;
const ShowImg = styled.img`
  width: 58px;
  height: 58px;
  padding: 28px 15px;
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
