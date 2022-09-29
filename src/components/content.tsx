import React from 'react';
import styled from 'styled-components';
import Talk from './talk/talk';

const ContentBox = styled.section`
  width: 100%;
  height: 63%;
`;

const Content = () => {
  return (
    <ContentBox>
      <Talk />
    </ContentBox>
  );
};

export default Content;
