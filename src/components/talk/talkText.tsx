import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { talkState } from '../../state/state';
import { TalkBoxInfo } from '../../interfaces/interface';
const Text = styled.div<TalkBoxInfo>`
  position: relative;
  display: inline-block;
  max-width: 70%;
  padding: 10px;

  margin-top: 7px;
  font-size: 15px;
  border-radius: 13px;
  background-color: yellow;
  display: flex;
  background-color: ${({ IsUser }) => (IsUser === true ? 'yellow' : 'grey')};
  margin-left: ${({ IsUser }) => (IsUser === true ? 'auto' : '0')};
`;

const TalkText = ({
  IsUser,
  addText,
}: {
  IsUser: boolean;
  addText: string;
}) => {
  return <Text IsUser={IsUser}>{addText}</Text>;
};

export default TalkText;
