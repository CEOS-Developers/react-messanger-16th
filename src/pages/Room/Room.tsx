import React, {useState, useEffect} from 'react';
import styled from "styled-components"
import InputBox from './InputBox';
import UserBox from './UserBox';
import MsgBox from './MsgBox';
import { msgState } from '../../recoil/atom';
import {useRecoilState} from 'recoil';
import { useParams } from "react-router-dom";

const Room = () => {
    const [msg, setMsg] = useRecoilState(msgState);

    let { id } : any= useParams();

    useEffect(()=>{
        setMsg({
            from: 0,
            to: parseInt(id)
        })
    },[])

    return (
        <StyledBlock>
            <StyledContent>
                <UserBox/>
                <MsgBox/>
                <InputBox/>
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
    width: 360px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius:0px 30px 30px 0px;
    margin: 10px;
`

export default Room;