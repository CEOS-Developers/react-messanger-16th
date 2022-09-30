import styled from 'style-components';
import { GlobalStyle } from './styles/global-style';
import Box from './components/box';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Box />
    </RecoilRoot>
  );
}

export default App;
