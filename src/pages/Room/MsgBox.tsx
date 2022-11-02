import React,{useEffect, useRef, useState} from 'react';
import styled from "styled-components"
import { msgState, userState, contentSelector } from '../../recoil/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import MsgItem from './MsgItem';

const MsgBox = () => {
    const [msg, setMsg] = useRecoilState(msgState);
    const contentList = useRecoilValue(contentSelector);

    const scrollRef = useRef<any>();

    const scrollToBottom = () => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }

    useEffect(()=>{
        scrollToBottom();
    },[contentList]);

    return (
        <StyledBox ref={scrollRef}>
            {
                contentList.map((c)=>(
                    <MsgItem
                        key = {c.id}
                        user = {msg.from}
                        to = {c.to}
                        from = {c.from}
                        date = {c.date}
                        content = {c.content}
                    />
                ))
            }
        </StyledBox>
    );
};

const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    background: #B2B2B2;
    width: 360px;
    height: 450px;
    padding: 2px;
    overflow: auto;
`

export default MsgBox;