import React from 'react';
import styled from "styled-components"
import { msgState, contentState, contentSelector } from '../../recoil/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import MsgItem from './MsgItem';

const MsgBox = () => {
    const [msg, setMsg] = useRecoilState(msgState);
    const contentList = useRecoilValue(contentSelector);

    return (
        <StyledBox>
            {
                contentList.map((c)=>(
                    <MsgItem
                        user = {msg.from}
                        to = {c.to}
                        from = {c.from}
                        date = {c.date}
                        content = {c.content}
                        key = {c.id}
                    />
                ))
            }
        </StyledBox>
    );
};

const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    background: #EEEEEE;
    width: 360px;
    height: 450px;
`

export default MsgBox;