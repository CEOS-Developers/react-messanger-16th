import styled from 'styled-components';
import { TalkBoxInfo } from '../../interfaces/interface';
import { useRecoilValue } from 'recoil';
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
  background-color: ${({ IsUser, nowIsUser }) =>
    nowIsUser ? 'yellow' : 'grey'};
  margin-left: ${({ IsUser, nowIsUser }) => (nowIsUser ? 'auto' : '0')};
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
