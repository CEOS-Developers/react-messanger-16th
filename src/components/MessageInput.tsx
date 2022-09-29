import { FormEvent } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { Chat, ChatMessage } from "../interfaces/interface";
import { chatStore } from "../store/atom";

const MessageInput = () => {
  const message = useInput("");
  const [chatRoom, setChatRoom] = useRecoilState(chatStore);
  // const [chatId, setChatId] =

  const newMessage: Chat = {
    userid: 0,
    chatid: "dddd",
    chat: message.value,
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChatRoom((rooms: any) => {
      const remainList = rooms.filter((item: any) => item.roomid !== 0);
      const targetItem = rooms.find((item: any) => item.roomid === 0);
      const toggledItem = [
        {
          ...targetItem,
          chats: [...targetItem.chats, newMessage],
        },
      ];
      message.setValue("");
      return [...remainList, ...toggledItem];
    });
  };

  const handleInputButtonClick = () => {
    if (newMessage.chat.trim()) {
      console.log(newMessage.chat);
      // ChatData store로 보내기
      //message.setValue("");
    }
  };

  return (
    <InputForm onSubmit={onSubmit}>
      <InputText {...message} />
      <InputButton onClick={handleInputButtonClick}>전송</InputButton>
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
  width: 15%;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1rem;
  border-radius: 28px;
  border: 1px solid #000000;
  background: linear-gradient(180deg, #ffffff 0%, #97e545 100%);
  cursor: pointer;
`;

export default MessageInput;
