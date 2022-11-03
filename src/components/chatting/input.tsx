import React, { useState } from 'react';
import { Params } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { ListInfo } from '../../interfaces/interface';
import { listState, userState } from '../../state/state';

const InputBox = styled.form`
  background-color: white;
  width: 100%;
  height: 10%;
  border: 10px black;
  border-radius: 0% 0% 10px 10px;
  display: flex;
`;

const InputForm = styled.input`
  height: 100%;
  width: 90%;
  box-sizing: border-box;
  border-width: 0.5px;
  border-radius: 0% 0% 0% 10px;
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
//인풋 창에따라서 전송 색 다르게

const Input = () => {
  const [text, setText] = useState<string>('');
  const [list, setList] = useRecoilState<ListInfo[]>(listState);
  const [isUser, setIsUser] = useRecoilState(userState);

  const writeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      const addText = {
        IsUser: isUser,
        addText: text,
      };
      setList([...list, { IsUser: addText.IsUser, addText: addText.addText }]);
      setText('');
    }
  };

  return (
    <InputBox onSubmit={onSubmit}>
      <InputForm onChange={writeText} value={text} />
      <InputBtn>전송</InputBtn>
    </InputBox>
  );
};

export default Input;
