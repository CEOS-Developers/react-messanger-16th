import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { userState } from '../state/state';
import User from './talk/user';

const Head = styled.header`
  background-color: white;
  width: 100%;
  height: 15%;
  border: 10px black;
  border-radius: 7% 7% 0% 0%;
  display: flex;
`;

const Header = () => {
  return (
    <Head>
      <User />
    </Head>
  );
};

export default Header;