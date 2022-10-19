import React from 'react';
import TextInput from './TextInput';
import Header from '../../components/Header';
import {useRecoilState,useRecoilValue,} from 'recoil';
import { textState } from '../../recoil/atom';
import styled from "styled-components"

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

const Chat = () => {
    const [text,setText] = useRecoilState(textState);
    return (
        <StyledBlock>
            <Header/>
            <StyledContent>
                채팅
                Chat부모:{text}
                <TextInput/>
            </StyledContent>
        </StyledBlock>
    );
};

export default Chat;