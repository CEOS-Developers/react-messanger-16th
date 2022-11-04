import styled from 'styled-components';
import React from 'react';
import { FaRegSmile } from 'react-icons/fa';
import { BsFillChatFill } from 'react-icons/bs';
import { AiTwotoneSetting } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ChatBox = styled.main`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 380px;
  height: 600px;
  border: 10px black;
  border-radius: 10px;
  background-color: powderblue;
  line-height: 1;
  margin: auto;
`;

const SideBar = styled.div`
  width: 75px;
  height: 600px;
  background-color: #ffffff;
  float: left;
  border: 0;
  position: fixed;
  text-align: center;
  border-radius: 10px 0 0 10px;
  z-index: 100;

  div {
    margin-top: 30px;
  }
`;

const Children = styled.div`
  z-index: 99;
  width: 305px;
  height: 100%;
  margin-left: 75px;
`;

type BoxProps = {
  children: React.ReactNode | React.ReactNode[];
};

const MainBox: React.FC<BoxProps> = ({ children }: BoxProps) => {
  return (
    <ChatBox>
      <SideBar>
        <Link to="/">
          <div className="FriendList">
            <FaRegSmile size={30} />
          </div>
        </Link>
        <Link to="/chatlist">
          <div className="ChattingList">
            <BsFillChatFill size={30} />
          </div>
        </Link>
        <Link to="/setting">
          <div className="Setting">
            <AiTwotoneSetting size={30} />
          </div>
        </Link>
      </SideBar>
      <Children>{children}</Children>
    </ChatBox>
  );
};

export default MainBox;
