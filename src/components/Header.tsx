import { useRecoilState } from "recoil";
import styled from "styled-components";
import { nowUserStore, userInformationStore } from "../store/atom";

export type HeaderPropsType = {
  leftChild: string;
  rightChild: string;
};

const Header = ({ leftChild, rightChild }: HeaderPropsType) => {
  const [nowUser, setNowUser] = useRecoilState(nowUserStore);
  const [userInformation, setUserInformation] =
    useRecoilState(userInformationStore);

  // const headText = userInformation.map((user) => (nowUser ? "" : user.name));

  const handleHeadTextClick = () => {
    setNowUser(!nowUser);
  };

  return (
    <header>
      <HeaderButton>{leftChild}</HeaderButton>
      <HeadText onClick={handleHeadTextClick}>NewJeans 👖</HeadText>
      <HeaderButton>{rightChild}</HeaderButton>
    </header>
  );
};

// css가 뭔가 안 되는데... 나중에 하자!

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
  font-size: 25px;
  padding-left: 1rem;
`;

export default Header;
