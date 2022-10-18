import React, {useState, useEffect} from 'react';
import {useRecoilState,useRecoilValue,} from 'recoil';
import { IUser,user } from '../../recoil/atom';
import Header from '../../components/Header';
import styled from "styled-components"

const StyledBlock = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #000;
`
const StyledContent = styled.div`
    height: 700px;
    width: 280px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius:0px 30px 30px 0px
`
const Friends = () => {
    const [LoginUser, setLoginUser] = useRecoilState<IUser>(user);

    return (
        <StyledBlock>
            <Header/>
            <StyledContent>
                친구
                {LoginUser.id}
            </StyledContent>
        </StyledBlock>
    );
};

export default Friends;