import useInput from '../hooks/useInput';
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { IInputForm } from '../interface';

const InputForm = ({ sendMsg }: IInputForm) => {
  const { chat, handleChange, resetChat } = useInput('');
  const addInput = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!chat.trim()) {
      resetChat();
    } else {
      sendMsg(chat);
      resetChat();
    }
  };

  return (
    <StyledAddList onSubmit={addInput}>
      <StyledInput placeholder="입력" value={chat} onChange={handleChange} />
      <StyledButton>전송</StyledButton>
    </StyledAddList>
  );
};

const StyledAddList = styled.form`
  display: flex;
  text-align: center;
  font-weight: bolder;
  font-family: 'Jua', sans-serif;
  padding-bottom: 10px;
`;

const StyledInput = styled.input`
  border: 1px solid lightgrey;
  border-radius: 10px;
  font-family: 'Jua', sans-serif;
  padding: 15px;
  width: 235px;
  height: 70px;
  margin-left: 5px;
  margin-top: 3px;
`;
const StyledButton = styled.button`
  border: 1px solid lightgrey;
  border-radius: 10px;
  font-family: 'Jua', sans-serif;
  font-size: 25px;
  color: white;
  background-color: #337de4;
  margin-left: 5px;
  margin-top: 3px;
`;

export default InputForm;
