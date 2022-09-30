import { useState, useCallback } from "react";
import styled from "styled-components";

const Wrapper = styled.form``;
const InputField = styled.input``;
const SendButton = styled.button``;

const InputForm = ({ onConcat }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
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

export default InputForm;
