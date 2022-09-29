import React from 'react';
import styled from 'styled-components';
import MessageItem from './MessageItem';

const StyledBlock = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width: 300px;
    height: 400px;
    border-bottom-style: dashed;
    overflow-y: scroll;
`

type MessageProps = {
    msgList: {id:number, user:number, msg: string;}[];
    nowUser: number;
};

function MessageBox({msgList, nowUser}:MessageProps){
    return(
        <StyledBlock>
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