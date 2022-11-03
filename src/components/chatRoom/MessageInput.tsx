import moment from "moment";
import { FormEvent } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { Chat, ChatRoom } from "../../interfaces/interface";
import {
  chatState,
  accountState,
  chatRoomSelector,
  SortState,
} from "../../store/atom";

const MessageInput = () => {
  const message = useInput("");

  const setChat = useSetRecoilState(chatState);
  const userAccount = useRecoilValue(accountState);
  const filteredChatRoom = useRecoilValue(chatRoomSelector);
  const isOn = useRecoilValue(SortState);

  const newMessage: Chat = {
    userid: userAccount ? 0 : filteredChatRoom!.user,
    chatid: Date.now(),
    myAccount: userAccount ? true : false,
    chat: message.value,
    time: moment(new Date()).format("HH:mm"),
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMessage.chat.trim()) {
      setChat((chatRooms: ChatRoom[]) => {
        const remainList = chatRooms.filter(
          (item: ChatRoom) => item.roomid !== filteredChatRoom!.roomid
        );
        const targetItem = chatRooms.find(
          (item: ChatRoom) => item.roomid === filteredChatRoom!.roomid
        );
        const toggledItem = [
          {
            ...targetItem!,
            chats: [...targetItem!.chats, newMessage],
          },
        ];
        return isOn
          ? [...remainList, ...toggledItem]
          : [...toggledItem, ...remainList];
      });
      message.setValue("");
    }
  };

  return (
    <InputForm onSubmit={onSubmit}>
      <InputText {...message} />
      <InputButton>전송</InputButton>
    </InputForm>
  );
};

const InputForm = styled.form`
  display: flex;
  position: absoulte;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 2rem;
`;

// 시간 되면 textarea로 바꾸기...

const InputText = styled.input`
  width: 85%;
  margin-left: 1rem;
  font-size: 1rem;
  border: 0;
  border-radius: 28px;
  background: #ffffff;
  border: 1px solid #000000;
`;

const InputButton = styled.button`
  width: 17%;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: #323232;
  border-radius: 28px;
  border: 1px solid #000000;
  background: linear-gradient(180deg, #ffffff 0%, #97e545 100%);
  cursor: pointer;
`;

export default MessageInput;
