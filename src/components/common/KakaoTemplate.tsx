import styled from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';

const KakaoTemplate = ({ children }: { children: JSX.Element }) => {
  //toggle
  return (
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
  );
};

export default KakaoTemplate;

const Wrapper = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  @media screen and (min-width: 600px) {
    width: 400px;
    height: 700px;
    min-height: 500px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 20px;
    border: 1px solid #cecece;
  }

  & > div {
    display: flex;
    height: 100%;
  }
`;
