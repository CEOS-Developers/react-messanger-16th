import styled from 'styled-components';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  leftChild: string;
  rightChild: boolean;
}

const Header = ({ leftChild, rightChild }: Props) => {
  return (
    <Wrapper>
      <Title>{leftChild}</Title>
      {rightChild ? (
        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
`;

export default Header;
