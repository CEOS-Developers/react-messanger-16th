import styled from "styled-components";
import useInput from "../hooks/useInput";
import { Chat } from "../interfaces/interface";

const MessageInput = () => {
  const message = useInput("");

  const newMessage: Chat = {
    userid: 0,
    chatid: "Aa",
    chat: message.value,
  };

  const handleInputButtonClick = () => {
    if (newMessage.chat.trim()) {
      console.log(newMessage.chat);
      // ChatData store로 보내기
      message.setValue("");
    }
  };

  return (
    <InputForm onSubmit={(e) => e.preventDefault()}>
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
