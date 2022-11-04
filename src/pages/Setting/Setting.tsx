import React from 'react';
import styled from "styled-components"
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

const Setting = () => {
    return (
        <StyledBlock>
            <Header/>
            <StyledContent>
                더보기  
                <hr/>
                <a href="https://github.com/heeeesoo/react-messanger-16th/tree/heeeesoo2">
                    <StyledSetting>
                        Github
                    </StyledSetting>
                </a>
            </StyledContent>
        </StyledBlock>
    );
};

const StyledBlock = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #000;
    height: 700px;
`
const StyledContent = styled.div`
    height: 650px;
    width: 280px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius:0px 30px 30px 0px;
    margin: 20px;
`

const StyledSetting = styled.div`
    text-decoration: none;
    margin: 10px;
    width: auto;
    height: auto;
    font-size: 15px;
    color: gray;
`

export default Setting;