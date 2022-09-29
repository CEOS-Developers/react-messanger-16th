import { useRecoilState } from "recoil";
import styled from "styled-components";
import { chatUserState, accountState } from "../store/atom";

export type HeaderPropsType = {
  leftChild: string;
  rightChild: string;
};

const Header = ({ leftChild, rightChild }: HeaderPropsType) => {
  const [account, setAccount] = useRecoilState(accountState);
  const [nowChatUser, setNowChatUser] = useRecoilState(chatUserState);

  const headText = account ? "NewJeans 👖" : "NaYeon 💭";
  const handleHeadTextClick = () => {
    setAccount(!account);
    setNowChatUser(account ? 0 : nowChatUser);
  };

  return (
    <header>
      <HeaderButton>{leftChild}</HeaderButton>
      <HeadText onClick={handleHeadTextClick}>{headText}</HeadText>
      <HeaderButton>{rightChild}</HeaderButton>
    </header>
  );
};

const HeaderButton = styled.button`
  width: 10%;
  background: #fff;
  border-radius: 100%;
  border: 1px solid #000000;
  font-size: 25px;
  cursor: pointer;
`;

// 프로필 사진

const HeadText = styled.span`
  width: 80%;
  font-size: 25px;
  padding-left: 1rem;
`;

export default Header;
