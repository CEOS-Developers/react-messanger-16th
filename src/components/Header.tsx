import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { HeaderProps } from "../interfaces/interface";
import { accountState, userSelector } from "../store/atom";

const Header = ({ leftChild, rightChild }: HeaderProps) => {
  const [userAccount, setUserAccount] = useRecoilState(accountState);
  const filteredUser = useRecoilValue(userSelector);

  const headText = userAccount ? filteredUser!.name : "NaYeon 💭";

  const handleHeadTextClick = () => {
    setUserAccount(!userAccount);
  };

  return (
    <HeaderWrapper>
      <HeaderButton>{leftChild}</HeaderButton>
      <HeadText onClick={handleHeadTextClick}>{headText}</HeadText>
      <HeaderButton>{rightChild}</HeaderButton>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
`;

const HeaderButton = styled.button`
  width: 10%;
  background: #fff;
  border-radius: 100%;
  border: 1px solid #000000;
  font-size: 25px;
  cursor: pointer;
`;

const HeadText = styled.span`
  width: 80%;
  font-size: 1.2rem;
  font-weight: bold;
  padding-left: 1rem;
`;

export default Header;