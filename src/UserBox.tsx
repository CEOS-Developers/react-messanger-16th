import React from 'react';
import styled from 'styled-components';

const StyledBlock = styled.div`
    background: white;
    width: 300px;
    height: 90px;
    border-bottom-style: dashed;
`
type UserProps = {
    onSubmit: (form:number) => void;
};

function UserBox({onSubmit}:UserProps){

    const handleClick = (e:any) => {
        const {value} = e.target;
        onSubmit(value);
    }

    return(
        <StyledBlock>
            <button onClick={handleClick} value="1">1</button>
            <button onClick={handleClick} value="2">2</button>
        </StyledBlock>
    );
}


export default UserBox;