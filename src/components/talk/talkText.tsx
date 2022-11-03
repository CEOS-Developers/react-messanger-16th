import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { TalkBoxInfo } from '../../interfaces/interface';
import { chatSelector } from '../../state/state';

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
  background-color: ${({ IsUser }) => (IsUser ? 'yellow' : 'grey')};
  margin-left: ${({ IsUser }) => (IsUser ? 'auto' : '0')};
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
