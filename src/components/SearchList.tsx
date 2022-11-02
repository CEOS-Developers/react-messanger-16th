import { useRecoilState } from "recoil";
import styled from "styled-components";
import { UserInformation } from "../interfaces/interface";
import { userSearchState } from "../store/atom";
import SearchInput from "./SearchInput";
import SingleUser from "./SingleUser";
const SearchList = () => {
  const searchData = useRecoilState(userSearchState);
  return (
    <ItemWrapper>
      <SearchInput />
      {searchData[0].map((user: UserInformation) => (
        <SingleUser key={user.userid} user={user} isFriendPage={true} />
      ))}
    </ItemWrapper>
  );
};

const ItemWrapper = styled.section`
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 25px;
    background: #ccc;
  }
`;

export default SearchList;
