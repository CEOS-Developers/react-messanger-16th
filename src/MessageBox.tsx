import { AnyAaaaRecord } from 'dns';
import React,{useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import MessageItem from './MessageItem';

const StyledBlock = styled.div`
    display: flex;
    flex-direction: column;
    background: #ACE7FF;
    width: 340px;
    height: 400px;
    overflow-y: scroll;
    position: relative;
`

type MessageProps = {
    msgList: {id:number, user:number, msg: string;}[];
    nowUser: number;
};

function MessageBox({msgList, nowUser}:MessageProps){

    const scrollRef = useRef<any>();

    const scrollToBottom = () => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }

    useEffect(()=>{
        scrollToBottom();
    },[msgList]);

    return(
        <StyledBlock ref={scrollRef}>
            {
                msgList.map((m) => (
                    <MessageItem
                    id={m.id}
                    user={m.user}
                    msg={m.msg}
                    nowUser={nowUser}
                    />
                ))
            }
        </StyledBlock>
    );
}


export default MessageBox;