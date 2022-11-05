import styled from 'styled-components';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { Dispatch, SetStateAction } from 'react';

interface ListHeaderProps {
  title: string;
  setSearch?: Dispatch<SetStateAction<boolean>>;
}

const ListHeader = ({ title, setSearch }: ListHeaderProps) => {
  return (
    <ListHeaderContainer>
      <Title>{title}</Title>
      {setSearch && (
        <SearchButton onClick={() => setSearch((prev) => !prev)}>
          <Search />
        </SearchButton>
      )}
    </ListHeaderContainer>
  );
};

export default ListHeader;

const ListHeaderContainer = styled.div`
  padding: 18px;
  display: flex;
`;
const Title = styled.h2`
  margin: 0px;
  font-size: 16px;
`;
const SearchButton = styled.button`
  margin-left: auto;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
