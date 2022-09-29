import React from 'react';
import styled from 'styled-components';

const InputBox = styled.form`
  background-color: white;
  width: 100%;
  height: 20%;
  border: 10px black;
  border-radius: 0% 0% 7% 7%;
  display: flex;
`;

const InputForm = styled.textarea`
  height: 100%;
  width: 90%;
  box-sizing: border-box;
  border-width: 0.5px;
  border-radius: 0% 0% 0% 7%;
`;
const InputBtn = styled.button`
  width: 15%;
  height: 60%;
  box-sizing: border-box;
  margin: auto;

  :hover {
    cursor: grab;
  }
`;

const Input = () => {
  return (
    <InputBox>
      <InputForm />
      <InputBtn>전송</InputBtn>
    </InputBox>
  );
};

export default Input;
