import React, {useState, useEffect} from 'react';
import {useRecoilState,useRecoilValue,} from 'recoil';
import { userState } from '../../recoil/atom';
import FriendItem from './FriendItem';
import styled from "styled-components"

const Search = () => {
    const [user, setUser] = useRecoilState<Object[]>(userState);

    const [search, setSearch] = useState("");
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const filterUser= user.filter((p) => {
        let result = Object.values(p)[1].replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase());
        console.log(Object.values(p)[1],result);
        return result;
    })

    return (
        <div>
            <br/>
            <StyledInput type="text" value={search} onChange={onChange}/>
            {
                filterUser.map((u)=>(
                    <FriendItem
                        key={Object.values(u)[0]}
                        id={Object.values(u)[0]}
                        name={Object.values(u)[1]}
                        src={Object.values(u)[2]}
                        number={Object.values(user).length}
                    />
                ))
            }
        </div>
    );
};

const StyledInput = styled.input`
    width: 250px;
    height: 20px;
`

export default Search;