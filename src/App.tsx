import styled from "styled-components";
import ChatRoom from "./pages/ChatRoom";
import GlobalStyle from "./styles/GlobalStyle";


function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
          <ChatRoom />
      </Container>
    </>
  );
}

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
