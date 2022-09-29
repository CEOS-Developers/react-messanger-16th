import React from 'react';
import styled from 'styled-components';

const StyledMsg = styled.div`
    background: grey;
    width: 200px;
    height: 40px;
    margin: 3px;
`

const StyledMsg2 = styled.div`
    background: red;
    width: 200px;
    height: 40px;
    margin: 3px;
`

type MessageItemProps = {
    key: number;
    user: number;
    msg: string;
    nowUser: number;
};

function MessageItem({key,user,msg,nowUser}:MessageItemProps){
    console.log(user,nowUser);
    return(
        <>
        {
            user === nowUser ? 
            <StyledMsg>{msg}{user}</StyledMsg>
            :
            <StyledMsg2>{msg}{user}</StyledMsg2>
        }
        </>
    )
}

export default MessageItem;