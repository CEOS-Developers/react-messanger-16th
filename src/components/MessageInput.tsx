import styled from "styled-components";

const MessageInput = () => {
  return (
    <InputForm>
      <InputText />
      <InputButton>전송</InputButton>
    </InputForm>
  );
};

const InputForm = styled.form`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 2rem;
`;

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
