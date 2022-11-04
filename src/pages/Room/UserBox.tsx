import React from 'react';
import { msgState, userState } from '../../recoil/atom';
import {useRecoilState} from 'recoil';
import styled from "styled-components"

// 최상단 어떤 user에서 어떤 user로 보낼건지 정하는 박스
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
                <StyledImage src={'/'+Object.values(fromUser)[2]}/>
                {Object.values(fromUser)[1]}
            </StyledButton>
            <StyledButton onClick={handleClick}>
                <StyledImage src={'/'+Object.values(toUser)[2]}/>
                {Object.values(toUser)[1]}
            </StyledButton>
        </StyledBox>
    );
};

const StyledBox = styled.div`
    display: flex;
    width: 360px;
    height: 100px;
    flex-direction: row-reverse;
`

const StyledImage = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 5px;
`;

const StyledButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items : center;
    padding: 5px;
`

export default UserBox;