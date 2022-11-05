import styled from 'styled-components';

const Header = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1.5rem;
`;

const Title = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
`;

export default Header;
