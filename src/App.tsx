import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

import Header from './components/Header';
import InputBox from './components/InputBox';
import ChatBoxList from './components/ChatBoxList';

function App() {
  const MyChat = (chats: any) => {
    return chats;
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <ChatBoxList chats={MyChat} />
        <InputBox propFunc={MyChat} />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 25rem;
  height: 40rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 20px;
  box-shadow: 1px 1px 10px lightgray;
`;

export default App;
