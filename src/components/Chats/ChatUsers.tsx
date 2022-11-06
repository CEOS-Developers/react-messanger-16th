import React from 'react';
import styled from 'styled-components';
import user from '../../data/user.json';
import { IUser, IChatBoard } from '../../interface';
import { userAtom, listAtom } from '../../atoms';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

function ChatUsers({ roomid }: any) {
  const [currentUser, setCurrentUser] = useRecoilState<IUser>(userAtom);
  const [chatList] = useRecoilState<IChatBoard[]>(listAtom);
  const opponentId: any = chatList[roomid].userid;

  useEffect(() => {
    console.log(currentUser);
  });

  const onToggleUser = () => {
    currentUser === user[0]
      ? setCurrentUser(user[opponentId])
      : setCurrentUser(user[0]);
  };

  return (
    <>
      <UserBtn onClick={onToggleUser}>
        <UserImg src={`../img/${currentUser.name}.png`} />
        <UserName>{currentUser.name}</UserName>
      </UserBtn>
    </>
  );
}

const UserBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid gray;
  display: flex;
  margin: 5px;

  &:hover {
    opacity: 0.5;
  }
`;

const UserName = styled.span`
  font-size: 15px;
  margin-top: 5px;
`;

export default ChatUsers;
