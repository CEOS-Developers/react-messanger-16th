import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Profile from './profile';

// import kurby1 from '../../img/flyKurby.jpeg';
// import kurby2 from'../../img/starKurby.jpeg';

const Container = styled.div`
  display : flex;
  flex-direction : row;
  justify-items : center;
  align-items : center;
  width: 25rem;
  height: 7rem;
  border : 1px solid #E8E8E8 ;
`

const Header = ()=>{
  return(
    <Container>
      <Profile name = {"나는커비"}/>
      <Profile name = {"별커비"}/>
    </Container>

  )
}

export default Header;
