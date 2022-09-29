import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  position: relative;
  display: inline-block;
  max-width: calc(100% - 100px);
  padding: 10px;
  margin-top: 7px;
  font-size: 15px;
  border-radius: 13px;
  background-color: yellow;
`;

const TalkText = () => {
  return <Text>안녕하세요 저는 유선호 입니다 ㅎㅎ 방가방가 방가루</Text>;
};

export default TalkText;
