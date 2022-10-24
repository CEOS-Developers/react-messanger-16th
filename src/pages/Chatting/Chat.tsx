import React from 'react';
import Header from '../../components/Header';
import { userState } from '../../recoil/atom';
import {useRecoilState,useRecoilValue,} from 'recoil';
import styled from "styled-components"
import ChatItem from './ChatItem';

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

    const [user, setUser] = useRecoilState<Object[]>(userState);

    return (
        <StyledBlock>
            <Header/>
            <StyledContent>
                채팅
                {
                    user.map((u)=>(
                        Object.values(u)[0] === 0 ?
                        null
                        :
                        <ChatItem
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

export default Chat;