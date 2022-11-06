import React from 'react';
import styled from 'styled-components';
import { IUser, IChatRoomList } from '../../interface';
import { userAtom } from '../../atoms';
import { useRecoilState } from 'recoil';

const Chat = ({ name, text }: IChatRoomList) => {
  const [currentUser] = useRecoilState<IUser>(userAtom);

  return (
    <>
      {name === currentUser.name ? (
        <Li1>
          <UserImg src={`../img/${name}.png`} />
          <div>
            <UserName1>{name}</UserName1>
            <Text>{text}</Text>
          </div>
        </Li1>
      ) : (
        <Li2>
          <UserImg src={`../img/${name}.png`} />
          <div>
            <UserName2>{name}</UserName2>
            <Text>{text}</Text>
          </div>
        </Li2>
      )}
    </>
  );
};

const Li1 = styled.li`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 20px;
  margin-bottom: 10px;
`;

const Li2 = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const UserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const UserName1 = styled.span`
  display: flex;
  flex-direction: row-reverse;
  padding: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
`;

const UserName2 = styled.span`
  display: flex;
  flex-direction: row;
  padding: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
`;

const Text = styled.div`
  background-color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 13px;
  margin-top: 10px;
  max-width: 100px;
  word-wrap: break-word;
`;

export default Chat;
