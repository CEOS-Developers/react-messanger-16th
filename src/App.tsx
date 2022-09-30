import styled from "styled-components";
import ChatRoom from "./pages/ChatRoom";
import GlobalStyle from "./styles/GlobalStyle";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Container>
        <ChatRoom />
      </Container>
    </RecoilRoot>
  );
}

// ㄱ-
// const PhoneImage = styled.img`
//   width: 26rem;
//   z-index: 1;
//   position: absolute;
//   top: 7%;
//   left: 37%;
// `;

const Container = styled.div`
  width: 23rem;
  height: 45rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgb(125, 123, 125);
  display: flex;
  flex-direction: column;
`;

export default App;
