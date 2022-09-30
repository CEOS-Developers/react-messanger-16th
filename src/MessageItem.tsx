import React from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo.json'

type StyledProps = {
    background: string;
}

type PositionProps = {
    position?: string;
}

const StyledPosition = styled.div<PositionProps>`
    ${(props) => 
        props.position === "right" ?
        `
        margin-left: auto;
        `
        :
        `
        margin-right: auto;
        `
    }
`

const StyledMsg = styled.div<StyledProps>`
    background: ${(props) => props.background};
    display:inline-block;
    margin: 3px;
    padding: 3px;
    border: 25px;
    max-width: 220px;

`
const StyledImage = styled.img`
    margin: 5px;
    height: 30px;
    width: 30px;
    border-radius: 5px;
`;

const StyledText = styled.div`
    margin: 2px;
    display:inline;
    font-size: 5px;
`

type MessageItemProps = {
    id: number;
    user: number;
    msg: string;
    nowUser: number;
};

function MessageItem({id,user,msg,nowUser}:MessageItemProps){

    let otherUser = 2;
    if(Number(nowUser) === 2){
        otherUser = 1;
    }

    let today = new Date(); 
    let hours = today.getHours(); // 시
    let minutes = today.getMinutes();  // 분

    let time = hours + ':' + minutes;

    return(
        <>
        {
            id !==0 ?  
                user === Number(nowUser) ? 
                <StyledPosition position='right'>
                    <StyledText>{time}</StyledText>
                    <StyledMsg background="#EEE33C">{msg}</StyledMsg>
                    <StyledImage src={UserInfo[Number(nowUser)-1].src}/>
                </StyledPosition>
                :
                <StyledPosition>
                    <StyledImage src={UserInfo[otherUser-1].src}/>
                    <StyledMsg background="white">{msg}</StyledMsg>
                    <StyledText>{time}</StyledText>
                </StyledPosition>
            : null
        }
        </>
    )
}

export default MessageItem;