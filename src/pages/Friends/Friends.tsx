import React, {useState, useEffect} from 'react';
import {useRecoilState,useRecoilValue,} from 'recoil';
import { userState } from '../../recoil/atom';
import Header from '../../components/Header';
import FriendItem from './FriendItem';
import Search from './Search';
import styled from "styled-components"

const Friends = () => {
    const [user, setUser] = useRecoilState<Object[]>(userState);
    const [search, setSearch] = useState(0);

    const onClick = () => {
        if(search === 0){
            setSearch(1);
        }else{
            setSearch(0);
        }
    }

    return (
        <StyledBlock>
            <Header/>
            <StyledContent>
                친구
                <StyledButton onClick={onClick}>🔍</StyledButton>
                {
                    search === 0 ?
                    <Search/>
                    :
                    user.map((u)=>(
                        <FriendItem
                            key={Object.values(u)[0]}
                            id={Object.values(u)[0]}
                            name={Object.values(u)[1]}
                            src={Object.values(u)[2]}
                            number={Object.values(user).length}
                        />
                    ))
                }
            </StyledContent>
        </StyledBlock>
    );
};

const StyledButton = styled.button`
    float: right;
    border: none;
    outline:none;
    background: white;
    font-size: medium;
`

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

export default Friends;