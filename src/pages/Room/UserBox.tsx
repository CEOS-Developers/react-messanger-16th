import React from 'react';
import { msgState, userState } from '../../recoil/atom';
import {useRecoilState} from 'recoil';
import styled from "styled-components"

const UserBox = () => {
    const [msg, setMsg] = useRecoilState(msgState);
    const [user, setUser] = useRecoilState(userState);

    const fromUser = user[msg.from];
    const toUser = user[msg.to];

    const handleClick = (e:React.MouseEvent<HTMLElement>) =>{
        setMsg({
            from: msg.to,
            to: msg.from
        })
    }

    return (
        <StyledBox>
            <StyledButton onClick={handleClick}>
                {Object.values(fromUser)[0]}
            </StyledButton>
            <StyledButton onClick={handleClick}>
                {Object.values(toUser)[0]}
            </StyledButton>
        </StyledBox>
    );
};

const StyledBox = styled.div`
    background: #B2B2B2;
    width: 360px;
    height: 100px;
`

const StyledButton = styled.button`

`

export default UserBox;