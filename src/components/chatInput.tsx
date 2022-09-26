import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  position: relative;
  width: 25rem;
  height: 8rem;
  border : 1px solid #E8E8E8 ;
`

const Input = styled.input`
    position: absolute;
    top: 0.8rem;
    left: 0.8rem;

    height : 6rem;
    width : 16.2rem;
    font-size: 1rem;
    border : 1px solid #E8E8E8 ;
`

const Button = styled.button`
    position: absolute;
    right: 0.8rem;
    top: 1rem;

    height : 6rem;
    width: 6rem;
    background-color: #96C894;
    border: none;
    border-radius : 0.5rem;
    &: disabled {
        background-color: #E8E8E8;
    }
`

const ChatInput = ()=>{
    const [value, setValue] = useState("");

    const onSubmit = (e : any) => {
        e.preventDefault();

        if (value.trim()) {
            setValue("");
        }
    }
    return(
        <Container>
            <form onSubmit={onSubmit}>
                <Input
                    onChange={(e:any) => setValue(e.target.value)}
                    value={value}
                />
                <Button disabled={!value}/>
            </form>

        </Container>

  )
}

export default ChatInput;
