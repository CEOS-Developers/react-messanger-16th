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
    <form onSubmit={addInput}>
      <input placeholder="입력" value={chat} onChange={handleChange} />
      <button>+</button>
    </form>
  );
};

export default InputForm;
