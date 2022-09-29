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
    console.log(msgList);
    return(
        <StyledBlock>
            {
                msgList.map((m) => (
                    <MessageItem
                    msg={m.msg}
                    key={m.id}
                    user={m.user}
                    nowUser={nowUser}
                    />
                ))
            }
        </StyledBlock>
    );
}


export default MessageBox;