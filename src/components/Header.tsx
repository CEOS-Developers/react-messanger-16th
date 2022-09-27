import styled from "styled-components";

export type HeaderPropsType = {
  headText?: string;
  leftChild: string;
  rightChild: string;
};

const Header = ({ headText, leftChild, rightChild }: HeaderPropsType) => {
  return (
    <header>
      <HeaderButton>{leftChild}</HeaderButton>
      <HeadText>{headText}</HeadText>
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
