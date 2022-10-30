import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { activeId, chatList } from '../recoil/store';
import styled from 'styled-components';
import {chat} from '../interface/chat';
import {chatRoom} from '../interface/chatRoom';

const ChatInput = ({roomId}) => {
  const active = useRecoilValue(activeId);
  const [chats, setChats] = useRecoilState(chatList);
  const [newChatList, setChat] = useState(chats[roomId].chat);

  let newChatInfo = [
    {"roomId":0, "chat": []},
    {"roomId":1, "chat": []},
    {"roomId":2, "chat": []},
    {"roomId":3, "chat": []},
    {"roomId":4, "chat": []},
  ] as chatRoom[];

  const [value, setValue] = useState('');
  let talker, listener;

  if(active===roomId){
    talker=roomId;
    listener=5;
  } else {
    talker=5;
    listener=roomId;
  }

  const plusList = (value: string) => {
    if (value.trim()) {
      let newChat: chat;
      
      newChat = {
        talker: talker,
        listener: listener,
        chat: value,
      };

      setChat(newChatList.concat(newChat));

      for(let i=0 ; i<5 ; i++){
        if(i!=roomId){
          newChatInfo[i].chat=chats[i].chat;
        } else {
          newChatInfo[i].chat = newChatList.concat(newChat);
        }
      }

      setChats(newChatInfo);
      setValue('');
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    plusList(value);
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          value={value}
        />
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
  background-color: #9bbbd4;
  opacity: 0.5;
  border-color: #9bbbd4;
  border-radius: 0.5rem;
  cursor: pointer;
  &: disabled {
    background-color: #e8e8e8;
  }
`;

export default ChatInput;
