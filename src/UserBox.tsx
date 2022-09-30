import React from 'react';
import styled from 'styled-components';
import UserItem from './UserItem';

const StyledBlock = styled.div`
    display: flex;
    justify-content: flex-start;
    background: white;
    width: 340px;
    height: 90px;
`
type UserProps = {
    onSubmit: (form:number) => void;
};

function UserBox({onSubmit}:UserProps){

    const UserInfo = [
        {
            id:1,
            name:"개",
            src:"img/c.jfif"
        },
        {
            id:2,
            name:"고양이",
            src:"img/b.jfif"
        }
    ]


    return(
        <StyledBlock>
            {
                UserInfo.map((user)=>(
                        <UserItem
                        onSubmit={onSubmit}
                        id={user.id}
                        name={user.name}
                        src={user.src}
                        />
                ))
            }
        </StyledBlock>
    );
}


export default UserBox;