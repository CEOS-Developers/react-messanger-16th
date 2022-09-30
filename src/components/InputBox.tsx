import { useContext, useState, useRef } from 'react';
import { Context } from '../App';

import styled from 'styled-components';

type User = {
  user_id: number;
  user_img: string;
  user_name: string;
  isSelected: boolean;
};

const InputBox = ({ userList }: { userList: User[] }) => {
  const { setChats } = useContext(Context);

  type Chat = {
    user_id: number;
    chat_id: number;
    chat_content: string;
  };
  const chatId = useRef<number>(0);
  const [chat, setChat] = useState<string>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (chat.trim()) {
      const curUser = userList.find((user) => user.isSelected === true)!;

      const newChat: Chat = {
        user_id: curUser.user_id,
        chat_id: chatId.current,
        chat_content: chat,
      };

      chatId.current += 1;

      setChats((prevChats) => [...prevChats, newChat]);
    }

    setChat('');
  };

  const handleEnter = (e: any) => {
    if (e.keyCode === 13) {
      if (!e.shiftKey) handleSubmit(e);
    }
  };

  const handleChangeInput = (e: any) => {
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
  flex-grow: 1;

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
