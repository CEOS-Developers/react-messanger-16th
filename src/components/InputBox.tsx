import { useState, useRef } from 'react';

import styled from 'styled-components';

const InputBox = (props: any) => {
  type Chat = {
    user_id: number;
    chat_id: number;
    chat_content: string;
  };

  const chatId = useRef<number>(0);
  const [chat, setChat] = useState<string>('');
  const [chats, setChats] = useState<Chat[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (chat.trim()) {
      const newChat: Chat = {
        user_id: 1,
        chat_id: chatId.current,
        chat_content: chat,
      };

      chatId.current += 1;

      setChats((prevChats) => [...prevChats, newChat]);
    }

    setChat('');
  };

  const handleChangeInput = (e: any) => {
    setChat(e.target.value);
  };

  props.propFunc(chats);

  return (
    <InputWrapper onSubmit={handleSubmit}>
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
