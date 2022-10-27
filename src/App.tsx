import styled from 'style-components';
import { GlobalStyle } from './styles/global-style';
import Chatting from './pages/chatting';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Chatting />
    </RecoilRoot>
  );
}

export default App;
