import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Chat } from '../../interfaces/interfaces';

import { chatState, userState, curUserState } from '../../recoil/recoil';

import styled from 'styled-components';

const InputBox = () => {
  const { id } = useParams();
  const roomId = Number(id);

  const userList = useRecoilValue(userState);
  const setChats = useSetRecoilState(chatState);

  const chatId = useRef<number>(0);
  const [chat, setChat] = useState<string>('');

  const curUser = useRecoilValue(curUserState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (chat.trim()) {
      const newChat: Chat = {
        user_id: curUser,
        chat_id: chatId.current,
        chat_room: roomId,
        chat_content: chat,
      };

      chatId.current += 1;

      setChats((prevChats) => [...prevChats, newChat]);
    }

    setChat('');
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.keyCode === 13) {
      if (!e.shiftKey) handleSubmit(e);
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChat(e.target.value);
  };

  return (
    <InputWrapper onSubmit={handleSubmit} onKeyDown={handleEnter}>
      <Input value={chat} onChange={handleChangeInput} />
      <Button>전송</Button>
    </InputWrapper>
  );
};

const InputWrapper = styled.form`
  height: 8rem;

  display: flex;
`;

const Input = styled.textarea`
  padding: 1rem;
  flex-grow: 8;

  border: none;
  resize: none;

  font-family: sans-serif;
`;

const Button = styled.button`
  padding: 0.5rem 1rem 0.5rem;
  margin: 0.5rem;
  height: 2rem;

  align-self: end;

  border-radius: 10px;

  background-color: rgb(237, 237, 237);
  font-weight: 500;
  color: rgb(144, 144, 144);
`;

/* 
  .input-box__btn--default:hover {
    background-color: rgb(255, 234, 0);
    color: black;
  } */

export default InputBox;
