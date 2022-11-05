import React  from 'react';
import styled from 'styled-components';
import chatting from '../assets/chatting.png'
import profile from '../assets/profile.png'
import setting from '../assets/setting.png'
import { useNavigate } from "react-router-dom";
 


const Navigator = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <NavImg src={profile} onClick={() => navigate("/")}/>
      <NavImg src={chatting} onClick={() => navigate("/chatting")}/>
      <NavImg src={setting} onClick={() => navigate("/setting")}/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 5rem;
  height: 100%;
  color: grey;
  background-color: #f3f3f3;
`;

const NavImg = styled.img`
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  height: 1.5rem;
  width: 1.5rem;
`

export default Navigator;
