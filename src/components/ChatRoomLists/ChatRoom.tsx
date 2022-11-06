import React from 'react';
import styled from 'styled-components';
import { IChatRoomList } from '../../interface';

const ChatRoom = ({ text, name }: IChatRoomList) => {
  return (
    <ChatRoomContainer>
      <ChatRoomImg src={`./img/${name}.png`} />
      <div>
        <ChatRoomName>{name}</ChatRoomName>
        <ChatRoomText>{text}</ChatRoomText>
      </div>
    </ChatRoomContainer>
  );
};

const ChatRoomContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 50px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const ChatRoomImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ChatRoomName = styled.div`
  font-size: 17px;
  font-weight: 500;
`;

const ChatRoomText = styled.div`
  color: gray;
  font-size: 13px;
  margin-top: 2px;
`;

export default ChatRoom;
