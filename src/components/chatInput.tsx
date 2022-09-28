import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { activeId } from '../recoil/store';
import styled from 'styled-components';

const ChatInput = (userId: any) => {
  const [value, setValue] = useState('');
  const [active, setActive] = useRecoilState(activeId);

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (value.trim()) {
      setValue('');
    }
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Input onChange={(e: any) => setValue(e.target.value)} value={value} />
        <Button disabled={!value} />
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  width: 25rem;
  height: 7rem;
`;

const Input = styled.input`
  overflow-y: auto;
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;

  height: 6rem;
  width: 16.2rem;
  font-size: 1rem;
  border: 1px solid #e8e8e8;
`;

const Button = styled.button`
  position: absolute;
  right: 0.8rem;
  top: 1rem;

  height: 6rem;
  width: 6rem;
  background-color: #96c894;
  border: none;
  border-radius: 0.5rem;
  &: disabled {
    background-color: #e8e8e8;
  }
`;

export default ChatInput;
