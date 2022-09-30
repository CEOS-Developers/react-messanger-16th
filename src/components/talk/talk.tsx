import React from 'react';
import styled from 'styled-components';
import TalkText from './talkText';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { listState } from '../../state/state';
import { ListInfo } from '../../interfaces/interface';

const TalkBox = styled.div``;

const Talk = () => {
  const [list, setList] = useRecoilState<ListInfo[]>(listState);

  return (
    <TalkBox>
      {list.map((li) => (
        <TalkText key={Date.now()} userId={li.userId} addText={li.addText} />
      ))}
    </TalkBox>
  );
};

export default Talk;
