import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type FriendItemProps = {
    id: number;
    name: string;
    src: string;
    number: number;
};

function FriendItem({id,name,src,number}:FriendItemProps){

    const chatLink = '/room/' + id;

    return (
        <div>
            {
                id === 0
                ?
                <>
                    <br/>
                    <StyledItem to='/'>
                        <StyledBox>
                            <StyledImage width={"50px"} height={"50px"} src={src}/>&nbsp;
                            {name}
                        </StyledBox>
                    </StyledItem>
                    <hr/>
                    <StyledFont>
                        친구 {number} 
                    </StyledFont>
                    <br/>
                </>
                :
                <StyledItem to={chatLink}>
                    <StyledBox>
                        <StyledImage width={"45px"} height={"45px"} src={src}/>&nbsp;
                        {name}
                    </StyledBox>
                </StyledItem>
            }
        </div>
    );
};

type StyledProps = {
    width: string;
    height: string;
}

const StyledFont = styled.div`
    font-size: small;
    color: gray;
`
const StyledBox = styled.div`
    display: flex;  
    margin: 2px;
    heigth: 16px;
    width: 280px;
    align-items: center;
    &:hover{  
        background-color : #EEEEEE;
    }
`

const StyledImage = styled.img<StyledProps>`
    margin: 5px;
    border-radius: 15px;
    height: ${(props) => props.height}
    width: ${(props) => props.width}
`;

const StyledItem = styled(Link)`
    text-decoration: none;
    color: black;
    height: auto;
    width: 280px;
`

export default FriendItem;