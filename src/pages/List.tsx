import React from 'react';
import { Route, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { chatRoomState, userState } from '../atom';
import { useRecoilValue } from 'recoil';
import MessageChat from '../components/MessageChat';

function List() {
  const chatRoomList = useRecoilValue(chatRoomState);
  const navigate = useNavigate();
  const UserList = useRecoilValue(userState);

  /* const goToChat = ({ userList }: any) => {
    navigate(`/room/${chatRoomList.id}`);
  };
  */

  const goToMain = () => {
    navigate('/');
  };

  const TempList = ({ userList, realId }: any) => {
    return (
      <div>
        <Link to={`/room/${userList.id}`}>{userList.name}</Link>
      </div>
    );
  };

  return (
    <div>
      <button className="goToMain" onClick={goToMain}>
        메인페이지
      </button>
      <AllTemplate>
        {UserList.users.map((userList) => (
          <TempList userList={userList} key={userList.id} />
        ))}
      </AllTemplate>
    </div>
  );
}

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
