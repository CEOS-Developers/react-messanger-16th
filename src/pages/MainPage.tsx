import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userState } from '../atom';

function MainPage() {
  const navigate = useNavigate();
  const UserList = useRecoilValue(userState);

  const goToList = () => {
    navigate('/Search');
  };
  //css공통된 요소 많은것 props로 넘기는걸로 바꾸기!
  const TempList = ({ userList, realId }: any) => {
    if (userList.id !== 0) {
      return (
        <div>
          <AllTemp>
            <ShowImg src={`/img/${userList.id}.png`}></ShowImg>
            <OneId to={`/room/${userList.id}`}>
              {userList.name}
              <CurrentText>{userList.currentText}</CurrentText>
            </OneId>
          </AllTemp>
        </div>
      );
    } else {
      return (
        <div>
          <AllTemp>
            <ShowImg2 src={`/img/${userList.id}.png`}></ShowImg2>
            <OneId to={`/`}>
              {userList.name}
              <CurrentText>{userList.currentText}</CurrentText>
            </OneId>
          </AllTemp>
          <FriendNum>친구{UserList.users.length - 1}</FriendNum>
        </div>
      );
    }
  };
  return (
    <div>
      <RealAll>
        <SideTemplate>
          <Link to="/">
            <MainImg src={`/img/user.png`} />
          </Link>

          <Link to="/list">
            <MainImg src={`/img/chat.png`} />
          </Link>
        </SideTemplate>
        <BodyTemplate>
          <HeaderTemplate>
            <h4>친구</h4>

            <FindButton src={`/img/find.png`} onClick={goToList}></FindButton>
          </HeaderTemplate>

          {UserList.users.map((userList) => (
            <TempList userList={userList} key={userList.id} />
          ))}
        </BodyTemplate>
      </RealAll>
    </div>
  );
}
const AllTemp = styled.div`
  display: flex;
  flex-direction: row;
`;
const CurrentText = styled.div`
  font-size: 11px;
  color: grey;
  font-weight: bold;
`;
const FriendNum = styled.h6`
  margin-top: 10px;
  color: grey;
  margin-bottom: 20px;
`;
const ShowImg2 = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: cover;
  margin: 0 15px;
  border-radius: 10px;
`;
const HeaderTemplate = styled.div`
  display: flex;
  flex-direction: row;
`;
const FindButton = styled.img`
  width: 28px;
  height: 28px;
  margin-left: 200px;
  margin-top: 18px;
`;

const MainImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-size: cover;
  margin: 15px;
  margin-top: 15px;
`;
const ShowImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-size: cover;
  margin: 0 15px;
  border-radius: 10px;
`;
const MainId = styled(Link)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 30px 25px;
  text-decoration: none;
  border-bottom: 1px solid grey;
  padding-bottom: 10px;
  padding-left: 1px;
  box-sizing: border-box;
  color: black;
  border-radius: 3px;
  border-bottom-color: #66616190;

  /*margin: 0px 10px;*/
`;
const OneId = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 6px;
  -webkit-box-align: center;
  align-items: left;
  padding-bottom: 20px;
  text-decoration: none;

  color: black;
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
  border-radius: 25px 0px 0px 25px;
  display: block;
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

export default MainPage;
