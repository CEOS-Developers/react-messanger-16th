import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display : flex;
    flex-direction: column;
    justify-items : center;
    align-items : center;
    margin-left: 1rem;
`

const ProfileImg = styled.img`
    height : 3.5rem;
    width : 3.5rem;
    border-radius : 1rem;
`

const Name = styled.div`
    margin-top: 0.5rem;
    font-size : 0.8rem;
`

const Profile = ({name}:{name:string})=>{
    // const Profile = (img?:any, name?:String)=>{
  return(
    <Container>
        {/* <ProfileImg src={img}/> */}
        <ProfileImg/>
        <Name> {name} </Name>
    </Container>

  )
}

export default Profile;
