import React from 'react';
import styled from 'styled-components';

const StyledMsg = styled.div`
    background: grey;
    width: 200px;
    height: 40px;
    margin: 3px;
    margin-left: auto;
`

const StyledMsg2 = styled.div`
    background: red;
    width: 200px;
    height: 40px;
    margin: 3px;
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
                user == nowUser ? 
                <StyledMsg>{msg}{user}</StyledMsg>
                :
                <StyledMsg2>{msg}{user}</StyledMsg2>
            : null
        }
        </>
    )
}

export default MessageItem;