import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import useInput from '../../hooks/useInput';

import FriendsList from './FriendsList';

import { userState } from '../../recoil/recoil';

const Search = () => {
  const [text, handleChangeInput] = useInput('');

  const users = useRecoilValue(userState);
  const filterName = users.filter((user) => {
    return (
      user.user_name !== users[0].user_name &&
      user.user_name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
  });

  return (
    <>
      <SearchInput
        placeholder="이름을 입력하세요"
        onChange={handleChangeInput}
        value={text}
      />
      <FriendsList users={filterName} />
    </>
  );
};

const SearchInput = styled.input`
  width: 90%;
  padding: 0.3rem;

  align-self: center;

  border: 0;
  border-radius: 3px;

  font-size: 0.75rem;

  background: rgb(240, 240, 240);
`;

export default Search;
