import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { talkState } from '../../state/state';
const Text = styled.div`
  padding: 10px;
  margin-top: 7px;
  font-size: 15px;
  border-radius: 13px;
  background-color: yellow;
  display: flex;
`;

const TalkText = ({ userId, addText }: { userId: number; addText: string }) => {
  return <Text>{addText}</Text>;
};

export default TalkText;
