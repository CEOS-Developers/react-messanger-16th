import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"

const StyledBlock = styled.div`
    height: 700px;
    width: 80px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #EAEAEA;
    border-radius:30px 0px 0px 30px;
`

const StyledList = styled.ul`
    display: flex;
    font-size: 30px;
    // background: black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const StyledLink = styled(Link)`
    text-decoration: none;
    // background: white;
    text-align: center;
    width: 100%;
`;

const Header = () => {
    return (
        <StyledBlock>
            <StyledList>
                <StyledLink to="/">👥</StyledLink>
            </StyledList>
            <StyledList>
                <StyledLink to="/chat">💬​</StyledLink>
            </StyledList>
            <StyledList>
                <StyledLink to="/setting">⚙️​</StyledLink>
            </StyledList>
        </StyledBlock>
    );
};

export default Header;