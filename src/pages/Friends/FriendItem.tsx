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
                        <StyledImage width={"50px"} height={"50px"} src={src}/>
                        {name}
                    </StyledItem>
                    <hr/>
                    <StyledFont>
                        친구 {number} 
                    </StyledFont>
                    <br/>
                </>
                :
                <StyledItem to={chatLink}>
                    <StyledImage width={"45px"} height={"45px"} src={src}/>
                    {name}
                </StyledItem>
            }
        </div>
    );
};

type StyledProps = {
    width: string;
    height: string;
}

const StyledImage = styled.img<StyledProps>`
    margin: 5px;
    border-radius: 15px;
    height: ${(props) => props.height}
    width: ${(props) => props.width}
`;

const StyledFont = styled.div`
    font-size: small;
    color: gray;
`
const StyledItem = styled(Link)`
    margin: 2px;
    height: auto;
    width: 280px;
    // background: yellow;
`

export default FriendItem;