import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { HeaderProps } from "../interfaces/interface";
import { accountState, SearchState, userSelector } from "../store/atom";
import { useNavigate } from "react-router-dom";

const Header = ({
  leftChild,
  rightChild,
  textChild,
  isFriendsPage,
}: HeaderProps) => {
  const navigate = useNavigate();
  const [userAccount, setUserAccount] = useRecoilState(accountState);
  const filteredUser = useRecoilValue(userSelector);
  const [isSearching, setIsSearching] = useRecoilState(SearchState);

  const headText = textChild
    ? textChild
    : userAccount
    ? filteredUser!.name
    : "NaYeon 💭";

  const handleHeadTextClick = () => {
    setUserAccount(!userAccount);
  };

  const handleRightChildClick = () => {
    const toggledSearch = !isSearching;
    isFriendsPage ? setIsSearching(toggledSearch) : setIsSearching(false);
  };

  return (
    <HeaderWrapper>
      <HeaderButton onClick={() => navigate(-1)}>{leftChild}</HeaderButton>
      <HeadText onClick={handleHeadTextClick}>{headText}</HeadText>
      <HeaderButton onClick={handleRightChildClick}>{rightChild}</HeaderButton>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
`;

const HeaderButton = styled.button`
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 100%;
  border: 1px solid #000000;
  text-decoration: none;
  color: #000;
  font-size: 1.5rem;
  padding: 0.5rem;
  line-height: 15px;
  text-align: center;
  cursor: pointer;
  transition: 0.5s;
`;

const HeadText = styled.span`
  width: 80%;
  font-size: 1.3rem;
  font-weight: bold;
  padding-left: 1rem;
  cursor: pointer;
  transition: 0.5s;
`;

export default Header;
