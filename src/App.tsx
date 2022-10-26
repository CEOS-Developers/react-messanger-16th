import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import KakaoTemplate from './components/common/KakaoTemplate';
import Router from './pages/Router';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RecoilRoot>
        <KakaoTemplate>
          <Router />
        </KakaoTemplate>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
