import React from 'react';
import styled from 'styled-components';
import { msgState, userState, contentSelector } from '../../recoil/atom';
import { useRecoilState, useRecoilValue } from 'recoil';

type MsgItemProps = {
    user:number,
    to:number,
    from:number,
    date:string,
    content:string,
}

function MsgItem({user,to,from,date,content}:MsgItemProps){
    const [userInfo, setUserInfo] = useRecoilState(userState);

    const fromUser = userInfo[from];

    return (
        <div>
            {
                user === from ?
                <StyledParent>
                    <StyledPosition position="right">
                        <StyledText>
                            {date}
                        </StyledText>
                        <StyledMsg background="#EEE33C">
                            {content} 
                        </StyledMsg>
                        <StyledImage src={'/'+Object.values(fromUser)[2]}/>
                    </StyledPosition>
                </StyledParent>
                :
                <StyledPosition>
                    <StyledImage src={'/'+Object.values(fromUser)[2]}/>
                    <StyledMsg background="white">
                        {content} 
                    </StyledMsg>
                    <StyledText>
                        {date}
                    </StyledText>
                </StyledPosition>
            }
            
        </div>
    );
}

type StyledProps = {
    background: string;
}

type PositionProps = {
    position?: string;
}

const StyledParent = styled.div`
    display: flex;
`
const StyledPosition = styled.div<PositionProps>`
    ${(props) => 
        props.position === "right" ?
        `
        margin-left: auto;
        `
        :
        `
        margin-right: auto;
        `
    }
`

const StyledMsg = styled.div<StyledProps>`
    background: ${(props) => props.background};
    display:inline-block;
    margin: 3px;
    padding: 3px;
    border: 25px;
    max-width: 220px;
`
const StyledImage = styled.img`
    margin: 5px;
    height: 30px;
    width: 30px;
    border-radius: 5px;
`;

const StyledText = styled.div`
    margin: 2px;
    display:inline;
    font-size: 5px;
`

export default MsgItem;