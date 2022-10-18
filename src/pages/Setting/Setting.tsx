import React from 'react';
import styled from "styled-components"
import Header from '../../components/Header';

const StyledBlock = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #000;
`
const StyledContent = styled.div`
    height: 700px;
    width: 280px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius:0px 30px 30px 0px
`
const Setting = () => {
    return (
        <StyledBlock>
            <Header/>
            <StyledContent>
                설정    
            </StyledContent>
        </StyledBlock>
    );
};

export default Setting;