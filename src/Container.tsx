import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components"
import UserBox from './UserBox';
import MessageBox from './MessageBox';
import InputBox from './InputBox';

const StyledBlock = styled.div`
    display: flex;
    height: 650px;
    width: 350px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 5px 5px 5px 5px gray;
`

const Container = () => {

    const id = useRef(1);

    const [msgList,setMsgList] = useState([{
        id: 0,
        user: 1,
        msg: ''
    }]);

    const [user,setUser] = useState<number>(1);

    // const user = useRef<number>(1);

    const onSubmitUser = (form:number) => {
        setUser(form);
        // user.current=form;
        console.log('onSubmit=>',form,user);
    }


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