import React from 'react';
import styled from 'styled-components';

const Head = styled.header`
  background-color: white;
  width: 100%;
  height: 17%;
  border: 10px black;
  border-radius: 7% 7% 0% 0%;
`;

const Header = () => {
  return <Head />;
};

export default Header;
