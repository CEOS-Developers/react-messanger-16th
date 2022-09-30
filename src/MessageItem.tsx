import React from 'react';
import styled from 'styled-components';

type StyledProps = {
    background: string;
    position?: string;
}

const StyledMsg = styled.div<StyledProps>`
    background: ${(props) => props.background};
    display:inline-block;
    margin: 3px;
    padding: 3px;
    border: 25px;
    max-width: 220px;

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

type MessageItemProps = {
    id: number;
    user: number;
    msg: string;
    nowUser: number;
};

function MessageItem({id,user,msg,nowUser}:MessageItemProps){
    return(
        <>
        {
            id !==0 ?  
                user === Number(nowUser) ? 
                <StyledMsg background="#EEE33C" position="right">{msg}</StyledMsg>
                :
                <StyledMsg background="white">{msg}</StyledMsg>
            : null
        }
        </>
    )
}

export default MessageItem;