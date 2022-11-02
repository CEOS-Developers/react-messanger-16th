import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { contentState} from '../../recoil/atom';
import {useRecoilState,useRecoilValue,} from 'recoil';

type ChatItemProps = {
    id: number;
    name: string;
    src: string;
    number: number;
};

function ChatItem({id,name,src,number}:ChatItemProps){
    const chatLink = '/room/' + id;

    const [content, setContent] = useRecoilState(contentState);
    const result = content.filter(c=>(c.to === id || c.from === id));
    const lastContent = result[result.length-1];

    return (
        <StyledItem to={chatLink}>
            <StyledBox>
                <StyledImage width={"45px"} height={"45px"} src={src}/>&nbsp;
                <StyledFontBox>
                    {name}
                    <StyledFont>
                        {lastContent.content}
                    </StyledFont>
                </StyledFontBox>
                <StyledDate>
                    {lastContent.date}
                </StyledDate>
            </StyledBox>
        </StyledItem>
    );
};

type StyledProps = {
    width: string;
    height: string;
}

const StyledDate = styled.div`
    float: right;
    object-align: top;
    color: gray;
    font-size: small;
`

const StyledFontBox = styled.div`
    display: flex;
    flex-direction: column;
    width:200px;
`
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
    height: auto;
    width: 280px;
`


export default ChatItem;