import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { ListInfo, ChatInfo } from '../../interfaces/interface';
import {
  listState,
  userState,
  chatSelector,
  userSelector,
  nowListState,
  ChatBoxState,
  nowUserState,
} from '../../state/state';

const InputBox = styled.form`
  background-color: white;
  width: 100%;
  height: 10%;
  border: 10px black;
  border-radius: 0% 0% 10px 10px;
  display: flex;
`;

const InputForm = styled.input`
  height: 100%;
  width: 90%;
  box-sizing: border-box;
  border-width: 0.5px;
  border-radius: 0% 0% 0% 10px;
`;
const InputBtn = styled.button`
  width: 15%;
  height: 60%;
  box-sizing: border-box;
  margin: auto;

  :hover {
    cursor: grab;
  }
`;
//인풋 창에따라서 전송 색 다르게

const Input = () => {
  const [text, setText] = useState<string>('');
  const [list, setList] = useRecoilState<ListInfo[]>(listState);
  const [isUser, setIsUser] = useRecoilState(userState);
  const [chatList, setChatList] = useRecoilState<ChatInfo[]>(ChatBoxState); //chatting update할라고......
  const userNum = useRecoilValue<number>(nowUserState); //userId 쓸라고....

  const writeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const newChat = {
    userId: chatList[userNum].userId,
    userName: chatList[userNum].userName,
    chat: [...chatList[userNum].chat, { IsUser: isUser, addText: text }],
  };

  useEffect(() => {
    setList(chatList[userNum].chat);
  }, [chatList]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      const addText = {
        IsUser: isUser,
        addText: text,
      };
      setText('');
      setChatList(
        chatList.map((chat) => (chat.userId === userNum ? newChat : chat))
      );
    }
  };

  return (
    <InputBox onSubmit={onSubmit}>
      <InputForm onChange={writeText} value={text} />
      <InputBtn>전송</InputBtn>
    </InputBox>
  );
};

export default Input;
