import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Talk from './talk/talk';
import Input from './input';
import { useRecoilState, useRecoilValue } from 'recoil';
import { listState } from '../state/state';
import TalkText from './talk/talkText';

const ContentBox = styled.section`
  width: 100%;
  height: 75%;
`;

const Content = () => {
  return (
    <ContentBox>
      <Talk />
    </ContentBox>
  );
};

export default Content;
