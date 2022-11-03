import { UserInformation } from "../interfaces/interface";
import styled from "styled-components";
import React from "react";

const SingleUser = ({
  user,
  isFriendPage,
  lastChat,
  lastTime,
}: {
  isFriendPage: boolean;
  user: UserInformation;
  lastChat?: string;
  lastTime?: string;
}) => {
  const detailMessage = isFriendPage ? user.statusMessage : lastChat;
  const sendTime = isFriendPage ? "" : lastTime;

  return (
    <>
      <UserWrapper>
        <ProfileImage
          src={`${process.env.PUBLIC_URL}/images/${user.userid}.jpg`}
        />
        <ChatWrapper>
          <MessageWrapper>
            <UserName>{user.name}</UserName>
            <Time>{sendTime}</Time>
          </MessageWrapper>
          <DetailMessage>{detailMessage}</DetailMessage>
        </ChatWrapper>
      </UserWrapper>
    </>
  );
};

export default React.memo(SingleUser);

const UserWrapper = styled.div`
  display: flex;
  flex-direction: "row";
  align-items: center;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #b7b7b7;
    color: #fff;
  }
`;

const ProfileImage = styled.img`
  width: 3rem;
  height: 3rem;
  margin: 0.2rem 0.5rem 0.5rem 0.8rem;
  border-radius: 100%;
  border: 1px solid #323232;
  background: #fff;
  padding: 0.3rem;
`;

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const UserName = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  padding-bottom: 0.3rem;
`;

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DetailMessage = styled.div`
  font-size: 0.8rem;
  color: #323232;
`;

const Time = styled.div`
  font-size: 0.7rem;
  color: #323232;
  padding: 0.3rem;
`;
