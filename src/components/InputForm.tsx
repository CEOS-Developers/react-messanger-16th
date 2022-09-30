import React, { useState, useCallback } from "react";
import styled from "styled-components";

interface InputFormProps {
  onConcat: (text: string) => void;
}

const InputForm = ({ onConcat }: InputFormProps) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  // 엔터로 전송, shift+엔터로 줄바꿈
  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      onSubmit();
      e.preventDefault();
    }
  };

  const onSubmit = () => {
    if (value.length == 0) {
      return;
    }
    onConcat(value);
    setValue("");
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <InputField
        required
        value={value}
        onChange={onChange}
        onKeyDown={handleEnter}
        placeholder="메세지를 입력하세요"
      />
      <SendButton>전송</SendButton>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  height: 15%;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  background-color: white;
`;
const InputField = styled.textarea`
  flex: 1;
  border: none;
  padding: 10px;
  word-break: break-all;
`;
const SendButton = styled.button`
  width: 80px;
  background-color: yellow;
  border: none;
  border-radius: 5px;
`;

export default InputForm;
