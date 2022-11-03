import styled from 'styled-components';
import TalkText from './talkText';
import { useRecoilState, useRecoilValue } from 'recoil';
import { chatSelector, listState, userState } from '../../state/state';
import { ListInfo } from '../../interfaces/interface';
import { useEffect } from 'react';

const TalkBox = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Talk = () => {
  const [list, setList] = useRecoilState<ListInfo[]>(listState);
  const nowChat = useRecoilValue(chatSelector);

  useEffect(() => {
    setList(nowChat);
  }, [nowChat]);

  return (
    <TextBox>
      {list.map((li, index) => (
        <TalkBox key={index}>
          <TalkText IsUser={true} addText={li.addText} nowIsUser={li.IsUser} />
        </TalkBox>
      ))}
    </TextBox>
  );
};

export default Talk;
