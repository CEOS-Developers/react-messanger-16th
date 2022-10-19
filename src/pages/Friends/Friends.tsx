import React, {useState, useEffect} from 'react';
import {useRecoilState,useRecoilValue,} from 'recoil';
import { IUser,user } from '../../recoil/atom';
import Header from '../../components/Header';
import FriendItem from './FriendItem';
import styled from "styled-components"

const Friends = () => {
    const [LoginUser, setLoginUser] = useRecoilState<Object[]>(user);

    const guestInfo : Object = Object.values(LoginUser[0]);
    // console.log(guestInfo[0])
    console.log(Object.values(LoginUser).length)

    return (
        <StyledBlock>
            <Header/>
            <StyledContent>
                친구
                {
                    LoginUser.map((user)=>(
                        <FriendItem
                            key={Object.values(user)[0]}
                            id={Object.values(user)[0]}
                            name={Object.values(user)[1]}
                            src={Object.values(user)[2]}
                            number={Object.values(LoginUser).length}
                        />
                    ))
                }
            </StyledContent>
        </StyledBlock>
    );
};

const StyledBlock = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #000;
    height: 700px;
`
const StyledContent = styled.div`
    height: 650px;
    width: 280px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius:0px 30px 30px 0px;
    margin: 20px;
`

const StyledImage = styled.img`
    margin: 5px;
    height: 45px;
    width: 45px;
    border-radius: 15px;
`;



export default Friends;