import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2px;
    text-align: center;
`
const StyledImage = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 5px;
`;

const StyledButton = styled.button`
    border: none;
    background: none;
`

type UserItemProps = {
    onSubmit: (form:number) => void;
    id: number;
    name: string;
    src: string;
};

function UserItem({onSubmit,id,name,src}:UserItemProps){
    
    // user 바꾸기
    const handleClick = (e:any) => {
        onSubmit(e.target.value);
    }

    return(
        <Container>
            <StyledImage src={src}/>
            <StyledButton onClick={handleClick} value={id}>
                {name}
            </StyledButton>
        </Container>
    );
}

export default UserItem;