import React, { useState } from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
    background: white;
    width: 300px;
    height: 90px;
    border-bottom-style: dashed;
`

const StyledInput = styled.input`
    width: 250px;
    height: 40px;
    align-items: center;
`

type InputProps = {
    onSubmit: (form: {user:number, msg: string;}) => void;
    user: number;
};

function InputBox({onSubmit,user}:InputProps) {
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
                <input name="msg" value={msg} onChange={onChange}/>
                <button type="submit">+</button>
            </form>
        </StyledBlock>
    )
}

export default InputBox;