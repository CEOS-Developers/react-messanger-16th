import React from 'react';
import styled from 'styled-components';
import TalkText from './talkText';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { listState, userState } from '../../state/state';
import { ListInfo } from '../../interfaces/interface';

const TalkBox = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Talk = () => {
  const [list, setList] = useRecoilState<ListInfo[]>(listState);
  const [isUser, setIsUser] = useRecoilState(userState);

  return (
    <TextBox>
      {list.map((li, index) => (
        <TalkBox>
          <TalkText
            key={index}
            IsUser={isUser}
            addText={li.addText}
            nowIsUser={li.IsUser}
          />
        </TalkBox>
      ))}
    </TextBox>
  );
};

export default Talk;
