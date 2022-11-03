import styled from 'styled-components';

interface Props {
  leftChild: string;
  rightChild: string;
}

const Header = ({ leftChild, rightChild }: Props) => {
  return (
    <Wrapper>
      <Title>{leftChild}</Title>
      <div>{rightChild}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  padding: 1.5rem;

  font-size: 1.2rem;
  font-weight: bold;
`;

export default Header;
