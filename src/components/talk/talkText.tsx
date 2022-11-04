import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { TalkBoxInfo } from '../../interfaces/interface';
import { chatSelector, userState } from '../../state/state';

const Text = styled.div<{
  IsUser: boolean;
  nowUser: boolean;
}>`
  position: relative;
  display: inline-block;
  max-width: 70%;
  padding: 10px;

  margin-top: 7px;
  font-size: 15px;
  border-radius: 13px;
  background-color: yellow;
  display: flex;
  background-color: ${({ IsUser, nowUser }) =>
    IsUser === nowUser ? 'yellow' : 'grey'};
  margin-left: ${({ IsUser, nowUser }) => (IsUser === nowUser ? 'auto' : '0')};
`;

const TalkText = ({
  IsUser,
  addText,
  nowUser,
}: {
  IsUser: boolean;
  addText: string;
  nowUser: boolean;
}) => {
  return (
    <Text IsUser={IsUser} nowUser={nowUser}>
      {addText}
    </Text>
  );
};

export default TalkText;
