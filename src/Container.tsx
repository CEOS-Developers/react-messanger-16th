import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components"
import UserBox from './UserBox';
import MessageBox from './MessageBox';
import InputBox from './InputBox';
import MessageInfo from './MessageInfo.json';
import { type } from '@testing-library/user-event/dist/type';

const StyledBlock = styled.div`
    display: flex;
    height: 650px;
    width: 350px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 3px 3px 3px 3px gray;
    border-radius: 15px;
`

const Container = () => {

    const id = useRef(2);

    const [msgList,setMsgList] = useState(MessageInfo);

    const [user,setUser] = useState<number>(1);

    // user 바꾸기 - useState 바로 반영이 안됨...
    const onSubmitUser = (form:number) => {
        setUser(form);
    }

    // msg 추가
    const onSubmitMsg = (form: {user:number, msg:string}) => {
        setMsgList([...msgList,{id:id.current, user:Number(form.user), msg:form.msg}]);
        id.current++;
    }

    return (
        <StyledBlock>
            <UserBox onSubmit={onSubmitUser}/>
            <MessageBox msgList={msgList} nowUser = {user}/>
            <InputBox onSubmit={onSubmitMsg} user={user}/>
        </StyledBlock>
    );
};

export default Container;