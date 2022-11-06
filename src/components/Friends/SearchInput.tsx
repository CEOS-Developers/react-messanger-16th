import { useState } from 'react';
import user from '../../data/user.json';
import styled from 'styled-components';
import Friend from './Friend';
import { Link } from 'react-router-dom';

const SearchInput = () => {
  const [searchFriend, setSearchFriend] = useState('');
  const filterFriend = user.filter((searched) => {
    return searched.name.toLowerCase().includes(searchFriend.toLowerCase());
  });

  return (
    <div>
      <InputBox
        placeholder="검색"
        onChange={(e) => {
          setSearchFriend(e.target.value);
        }}
      />
      <SearchList>
        {filterFriend.map((filtered) => (
          <Link
            to={`/chatroom/${filtered.userid}`}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <Friend status={filtered.status} name={filtered.name} />
          </Link>
        ))}
      </SearchList>
    </div>
  );
};

const InputBox = styled.input`
  width: 300px;
  height: 25px;
  font-size: 15px;
  display: flex;
  justify-content: center;
`;

const SearchList = styled.div`
  margin-top: 20px;
`;

export default SearchInput;
