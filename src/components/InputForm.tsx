import React, { useState, useCallback } from "react";
import styled from "styled-components";

interface InputFormProps {
  onConcat: (text: string) => void;
}

const InputForm = ({ onConcat }: InputFormProps) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      onConcat(value);
      setValue("");
      e.preventDefault();
    },
    [onConcat, value]
  );

  return (
    <Wrapper onSubmit={onSubmit}>
      <InputField
        value={value}
        onChange={onChange}
        placeholder="메세지를 입력하세요"
      />
      <SendButton>전송</SendButton>
    </Wrapper>
  );
};

const Wrapper = styled.form``;
const InputField = styled.input``;
const SendButton = styled.button``;

export default InputForm;
