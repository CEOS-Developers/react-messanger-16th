import React,{useEffect, useRef, useState} from 'react';
import styled from "styled-components"
import { msgState, userState, contentSelector } from '../../recoil/atom';
import { Imsg } from '../../recoil/type';
import { useRecoilState, useRecoilValue } from 'recoil';
import MsgItem from './MsgItem';

// 중간 채팅 부분
const MsgBox = () => {
    const [msg, setMsg] = useRecoilState<Imsg>(msgState);
    const contentList = useRecoilValue(contentSelector);

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if(scrollRef.current){
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
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