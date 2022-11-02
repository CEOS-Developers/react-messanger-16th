import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userState } from '../atom';

function MainPage() {
  const navigate = useNavigate();
  const UserList = useRecoilValue(userState);

  const goToChat = () => {
    navigate('/');
  };
  //css공통된 요소 많은것 props로 넘기는걸로 바꾸기!
  const TempList = ({ userList, realId }: any) => {
    if (userList.id !== 0) {
      return (
        <div>
          <OneId to={`/room/${userList.id}`}>
            <ShowImg src={`/img/${userList.id}.png`}></ShowImg>
            {userList.name}
          </OneId>
        </div>
      );
    } else {
      return (
        <div>
          <MainId to={`/room/${userList.id}`}>
            <ShowImg src={`/img/${userList.id}.png`}></ShowImg>
            {userList.name}
          </MainId>
          <h6>친구</h6>
        </div>
      );
    }
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
          <h4>
            친구 <button>find</button>
          </h4>

          {UserList.users.map((userList) => (
            <TempList userList={userList} key={userList.id} />
          ))}
        </BodyTemplate>
      </RealAll>
    </div>
  );
}
const ShowImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-size: cover;
  margin: 0 15px;
`;
const MainId = styled(Link)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 30px 25px;
  text-decoration: none;
  border-bottom: 1px solid grey;
  box-sizing: border-box;
  color: black;

  /*margin: 0px 10px;*/
`;
const OneId = styled(Link)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px 18px;
  text-decoration: none;
  font-size: small;
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
