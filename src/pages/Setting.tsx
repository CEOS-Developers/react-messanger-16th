import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { chatRoomState, messageState, userState } from '../atom';
import { useRecoilValue, useRecoilState, useResetRecoilState } from 'recoil';
import useChatRoom from '../hooks/useChatRoom';

function Setting() {
  const goToGit = () => {};
  return (
    <div>
      <RealAll>
        <SideTemplate>
          <Link to="/">
            <MainImg src={`/img/user2.png`} />
          </Link>

          <Link to="/list">
            <MainImg src={`/img/chat.png`} />
          </Link>
          <Link to="/setting">
            <MainImg src={`/img/setting2.png`} />
          </Link>
        </SideTemplate>
        <BodyTemplate>
          <h4>Setting</h4>
          <PageOut href="https://github.com/AlmondBreez3">
            <ComImg src={`/img/heart.png`}></ComImg>
            Github
          </PageOut>

          <PageOut href="https://hanbxx.tistory.com/">
            <ComImg src={`/img/heart.png`}></ComImg>
            tistory
          </PageOut>
        </BodyTemplate>
      </RealAll>
    </div>
  );
}
const PageOut = styled.a`
  text-decoration-line: none;
  padding-right: 50px;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  font-weight: bolder;
  color: black;
`;
const ComImg = styled.img`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //margin-left: 100px;
`;

const MainImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-size: cover;
  margin: 15px;
  margin-top: 15px;
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

export default Setting;
