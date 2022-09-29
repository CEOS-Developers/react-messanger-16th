import { FormEvent } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { Chat, ChatRoom } from "../interfaces/interface";
import { chatState, accountState } from "../store/atom";

const MessageInput = () => {
  const message = useInput("");

  const [chat, setChat] = useRecoilState(chatState);
  const [account, setAccount] = useRecoilState(accountState);

  const newMessage: Chat = {
    userid: 0,
    chatid: Date.now(),
    myAccount: account ? true : false,
    chat: message.value,
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMessage.chat.trim()) {
      setChat((rooms: any) => {
        const remainList = rooms.filter((item: ChatRoom) => item.roomid !== 0);
        const targetItem = rooms.find((item: ChatRoom) => item.roomid === 0);
        const toggledItem = [
          {
            ...targetItem,
            chats: [...targetItem.chats, newMessage],
          },
        ];
        return [...remainList, ...toggledItem];
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
