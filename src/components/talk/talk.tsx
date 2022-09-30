import React from 'react';
import styled from 'styled-components';
import TalkText from './talkText';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { listState, userState } from '../../state/state';
import { ListInfo } from '../../interfaces/interface';

const TalkBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Talk = () => {
  const [list, setList] = useRecoilState<ListInfo[]>(listState);
  const [isUser, setIsUser] = useRecoilState(userState);

  return (
    <TalkBox>
      {list.map((li, index) => (
        <TalkText
          key={index}
          IsUser={isUser}
          addText={li.addText}
          nowIsUser={li.IsUser}
        />
      ))}
    </TalkBox>
  );
};

export default Talk;
