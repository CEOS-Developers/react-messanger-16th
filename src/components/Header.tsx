import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  chatUserStore,
  nowUserStore,
  userInformationStore,
} from "../store/atom";

export type HeaderPropsType = {
  leftChild: string;
  rightChild: string;
};

const Header = ({ leftChild, rightChild }: HeaderPropsType) => {
  const [nowUser, setNowUser] = useRecoilState(nowUserStore);
  const [nowChatUser, setNowChatUser] = useRecoilState(chatUserStore);
  const [userInformation, setUserInformation] =
    useRecoilState(userInformationStore);

  const headText = nowUser ? "kongnayeon" : "NewJeans 👖";
  const handleHeadTextClick = () => {
    setNowUser(!nowUser);
    console.log("nowUser", nowUser);
    setNowChatUser(nowUser ? 0 : nowChatUser);
  };

  return (
    <header>
      <HeaderButton>{leftChild}</HeaderButton>
      <HeadText onClick={handleHeadTextClick}>{headText}</HeadText>
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
