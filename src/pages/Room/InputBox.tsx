import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import { msgState, contentState, contentSelector } from '../../recoil/atom';
import { useRecoilState, useRecoilValue } from 'recoil';

// 아래 메세지 전송 부분
const InputBox = () => {
    const [msg, setMsg] = useRecoilState(msgState);
    const [content, setContent] = useRecoilState(contentState);
    const [input, setInput] = useState({
        toUser: msg.to,
        fromUser: msg.from,
        message: ''
    });

    useEffect(()=>{
        setInput({
            ...input,
            toUser: msg.to,
            fromUser: msg.from,
            message: ''
        });
    },[msg]);

    const {message} = input;

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setInput({
            ...input,
            message:value
        });
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        if(!message.trim()){
            return;
        }
        let today = new Date(); 
        let hours = today.getHours(); // 시
        let minutes = today.getMinutes();  // 분

        let time = hours + ':' + minutes;
        setContent([
            ...content,
            {
                id:content.length,
                from:msg.from,
                to:msg.to,
                content:message,
                date:time
            }
        ])
        setInput({
            toUser: msg.to,
            fromUser: msg.from,
            message: ''
        });
    };

    return (
        <StyledBox>
            <form onSubmit={handleSubmit}>
                <StyledInput value={message} onChange={onChange}/>
                <StyledButton type="submit">전송</StyledButton>
            </form>
        </StyledBox>
    );
};

const StyledBox = styled.div`
    width: 360px;
    height: 130px;
`

const StyledInput = styled.input`
    width: 240px;
    height: 125px;
    border: none;
`

const StyledButton = styled.button`
    width: 115px;
    height: 129px;
    align-items: center;
    border: none;
`

export default InputBox;