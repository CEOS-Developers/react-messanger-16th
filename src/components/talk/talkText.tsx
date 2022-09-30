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
  background-color: ${({ IsUser, nowIsUser }) =>
    IsUser === nowIsUser ? 'yellow' : 'grey'};
  margin-left: ${({ IsUser, nowIsUser }) =>
    IsUser === nowIsUser ? 'auto' : '0'};
`;

const TalkText = ({
  IsUser,
  addText,
  nowIsUser,
}: {
  IsUser: boolean;
  addText: string;
  nowIsUser: boolean;
}) => {
  return (
    <Text IsUser={IsUser} nowIsUser={nowIsUser}>
      {addText}
    </Text>
  );
};

export default TalkText;
