import React, {useState, useEffect} from 'react';
import {useRecoilState,useRecoilValue,} from 'recoil';
import { IUser,userState } from '../../recoil/atom';
import Header from '../../components/Header';
import FriendItem from './FriendItem';
import styled from "styled-components"

const Friends = () => {
    const [user, setUser] = useRecoilState<Object[]>(userState);

    return (
        <StyledBlock>
            <Header/>
            <StyledContent>
                친구
                {
                    user.map((u)=>(
                        <FriendItem
                            key={Object.values(u)[0]}
                            id={Object.values(u)[0]}
                            name={Object.values(u)[1]}
                            src={Object.values(u)[2]}
                            number={Object.values(user).length}
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

export default Friends;