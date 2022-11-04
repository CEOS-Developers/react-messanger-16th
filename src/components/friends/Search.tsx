import styled from 'styled-components';

import useInput from '../../hooks/useInput';
import FriendsList from './FriendsList';

const Search = () => {
  const [text, handleChangeInput, reset] = useInput('');

  reset();

  return (
    <>
      <SearchInput
        placeholder="이름을 입력하세요"
        onChange={handleChangeInput}
        value={text}
      />
      <FriendsList />
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
