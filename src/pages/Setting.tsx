import styled from "styled-components";
import Navigation from "../components/Navi";
import { Container, ListDiv, ListWrap } from "../components/style";

const Setting = () => {
  return (
    <Container>
      <Navigation />
      <ListWrap>
        <ListDiv>더보기</ListDiv>
        <Div size={0.7}>아래 링크로 이동해보세요</Div>
        <Div onClick={() => window.open("https://github.com/chaeyeonan")}>
          GitHub
        </Div>
        <Div onClick={() => window.open("https://12yeonii.tistory.com/")}>
          Tistory
        </Div>
      </ListWrap>
    </Container>
  );
};

const Div = styled.div<{ size?: number }>`
  font-size: ${(props) => props.size || 1.3}rem;
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  color: #1c1c1c;
  border-bottom: 1px solid #bdbdbd;
`;

export default Setting;
