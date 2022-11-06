import React, { useState } from 'react';
import styled from 'styled-components';
import { IUser, IChatBoard } from '../../interface';
import { listAtom, userAtom } from '../../atoms';
import { useRecoilState } from 'recoil';
import user from '../../data/user.json';

const ChatInput = ({ roomid }: any) => {
  const [chatList, setChatList] = useRecoilState<IChatBoard[]>(listAtom);
  const [currentUser] = useRecoilState<IUser>(userAtom);
  const [inputText, setInputText] = useState('');
  const [newMsgList, setNewMsgList] = useState(chatList[roomid].msg);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newChatList: any = chatList[roomid].msg.concat({
      msgid: Date.now(),
      text: inputText,
      name: currentUser.name,
      userid: currentUser.userid,
    });
    const newObj = {
      roomid: parseInt(roomid),
      userid: user[roomid].userid,
      name: currentUser.name,
      msg: newChatList,
    };
    setNewMsgList(newChatList);
    setChatList(() => {
      return { ...chatList, [roomid]: newObj };
    });
    setInputText('');
  };

  return (
    <ChatInputContainer onSubmit={onSubmit}>
      <Input
        value={inputText}
        onChange={onChange}
        type="text"
        placeholder="메세지 입력창"
      />
      <SubmitBtn>📤</SubmitBtn>
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.form`
  display: grid;
  grid-template-columns: 4fr 1fr;
  padding: 10px;
`;

const Input = styled.input.attrs({ required: true })`
  border: none;
`;

const SubmitBtn = styled.button`
  padding: 10px;
  font-size: 30px;
  cursor: pointer;
  &:active {
    box-shadow: 1px 1px 1px 1px rgb(0, 0, 0, 0.5);
    border-radius: 10px;
  }
`;

export default ChatInput;
