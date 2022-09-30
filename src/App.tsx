import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import './styles/App.css';

import Header from './components/Header';
import InputBox from './components/InputBox';

function App() {
  const highFunc = (chats: any) => {
    console.log(chats);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <div className="main-box">
          <div className="main-box__item">
            <div className="main-box__cover">
              <img
                src={process.env.PUBLIC_URL + `/assets/보통이.jpeg`}
                alt=""
                className="header__img"
              />
            </div>
            <div className="main-box__content">
              <div className="main-box__name">보통이</div>
              <div className="main-box__msg">
                <div className="main-box__text">안녕하세요!</div>
                <div className="main-box__time">PM 5:27</div>
              </div>
            </div>
          </div>
        </div>
        <InputBox propFunc={highFunc} />
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
