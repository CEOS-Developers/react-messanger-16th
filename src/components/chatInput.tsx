import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { activeId, chatList } from '../recoil/store';
import styled from 'styled-components';

const ChatInput = (userId: any) => {
  const [value, setValue] = useState('');
  const active = useRecoilValue(activeId);
  const [chat, setChat] = useRecoilState(chatList);

  const plusList = (value: any) => {
    if (value.trim()) {
      const lastId = chat.length;
      let newChat;
      if (active === 1) {
        newChat = {
          chatId: lastId + 1,
          talkerId: 1,
          listenerId: 2,
          text: value,
        };
      } else {
        newChat = {
          chatId: lastId + 1,
          talkerId: 2,
          listenerId: 1,
          text: value,
        };
      }
      setChat(chat.concat(newChat));
      setValue('');
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    plusList(value);
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Input onChange={(e: any) => setValue(e.target.value)} value={value} />
        <Button disabled={!value} />
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  width: 25rem;
  height: 7rem;
`;

const Input = styled.input`
  overflow-y: auto;
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;

  height: 6rem;
  width: 16.2rem;
  font-size: 1rem;
  border: 1px solid #e8e8e8;
`;

const Button = styled.button`
  position: absolute;
  right: 0.8rem;
  top: 1rem;

  height: 6rem;
  width: 6rem;
  background-color: #96c894;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  &: disabled {
    background-color: #e8e8e8;
  }
`;

export default ChatInput;
