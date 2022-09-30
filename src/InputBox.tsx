import React, { useState } from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
    background: white;
    width: 340px;
    height: 90px;
    margin-top: 5px;
`

const StyledInput = styled.input`
    width: 240px;
    height: 90px;
    border: none;
`

const StyledButton = styled.button`
    width: 92px;
    height: 90px;
    align-items: center;
    border: none;
`

type InputProps = {
    onSubmit: (form: {user:number, msg: string;}) => void;
    user: number;
};

function InputBox({onSubmit,user}:InputProps) {
    console.log('Input-user->',user);
    const [input, setInput] = useState({
        user: user,
        msg: ''
    });

    const {msg} = input;

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setInput({
            ...input,
            [name]:value
        });
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('input=>',user);
        onSubmit(input);
        setInput({
            user: user,
            msg:''
        });
    };

    return (
        <StyledBlock>
            <form onSubmit={handleSubmit}>
                <StyledInput name="msg" value={msg} onChange={onChange}/>
                <StyledButton type="submit">전송</StyledButton>
            </form>
        </StyledBlock>
    )
}

export default InputBox;