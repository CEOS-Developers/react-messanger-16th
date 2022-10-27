import styled from 'styled-components';
import React from 'react';

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
  width: 380px;
  height: 600px;
  border: 10px black;
  border-radius: 7%;
  background-color: powderblue;
  line-height: 1;
  margin: auto;
`;

type BoxProps = {
  children: React.ReactNode | React.ReactNode;
};

const Box: React.FC<BoxProps> = ({ children }: BoxProps) => {
  return <ChatBox>{children}</ChatBox>;
};

export default Box;
