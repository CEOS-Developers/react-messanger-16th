import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { Chat } from "../../interfaces/interface";
import { accountState, userSelector } from "../../store/atom";

const SingleMessage = (chat: Chat) => {
  const userAccount = useRecoilValue(accountState);
  const filteredUser = useRecoilValue(userSelector);

  return (
    <UserWrapper myAccount={chat.myAccount} userAccount={userAccount}>
      <ProfileImage
        src={`${process.env.PUBLIC_URL}/images/${chat.userid}.jpg`}
      />
      <div>
        <NameWrapper myAccount={chat.myAccount} userAccount={userAccount}>
          <UserName>
            {chat.myAccount ? "NaYeon 💭" : filteredUser!.name}
          </UserName>
        </NameWrapper>
        <BubbleWrapper myAccount={chat.myAccount} userAccount={userAccount}>
          <Bubble myAccount={chat.myAccount} userAccount={userAccount}>
            {chat.chat}
          </Bubble>
          <Time>{chat.time}</Time>
        </BubbleWrapper>
      </div>
    </UserWrapper>
  );
};

const UserWrapper = styled.div<{
  myAccount: boolean;
  userAccount: boolean;
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.myAccount === props.userAccount ? "row-reverse" : "row"};
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 25px;
  padding: 0.5rem;
`;

const NameWrapper = styled.div<{
  myAccount: boolean;
  userAccount: boolean;
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.myAccount === props.userAccount ? "row-reverse" : "row"};
`;

const UserName = styled.div`
  font-size: 0.7rem;
  padding: 0.5rem 0 0.5rem 0;
`;

const BubbleWrapper = styled.div<{
  myAccount: boolean;
  userAccount: boolean;
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.myAccount === props.userAccount ? "row-reverse" : "row"};
`;

const Bubble = styled.span<{
  myAccount: boolean;
  userAccount: boolean;
}>`
  font-size: 0.8rem;
  padding: 0.5rem;
  word-break: break-all;

  background: ${(props) =>
    props.myAccount === props.userAccount
      ? "linear-gradient(180deg, #ffffff 0%, #aed1fc 100%)"
      : "linear-gradient(180deg, #ffffff 0%, #9de74f 100%)"};
  border-radius: ${(props) =>
    props.myAccount === props.userAccount
      ? " 25px 0px 25px 25px"
      : "0px 25px 25px 25px"};
  border: 1px solid #000000;
`;

const Time = styled.div`
  font-size: 0.5rem;
  color: #323232;
  margin: 0.2rem;
  padding-top: 1.2rem;
`;

export default React.memo(SingleMessage);
