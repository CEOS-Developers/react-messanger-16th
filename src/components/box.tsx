import styled from 'styled-components';
import React from 'react';
import Header from './header';
import Content from './content';
import Input from './input';

const ChatBox = styled.main`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 350px;
  height: 450px;
  border: 10px black;
  border-radius: 7%;
  background-color: powderblue;
  line-height: 1;
  margin: auto;
`;

const Box = (props: any) => {
  return (
    <ChatBox>
      <Header />
      <Content />
      <Input />
    </ChatBox>
  );
};

export default Box;
