import './styles/App.css';

function App() {
  return (
    <div className="container">
      <header>
        <div className="header__wrapper">
          <div className="header__item">
            <div className="header__cover">
              <img
                src={process.env.PUBLIC_URL + `/assets/default.png`}
                alt=""
                className="header__img"
              />
            </div>
            <div className="header__name">이현영</div>
          </div>
        </div>
      </header>
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
      <form className="input-box">
        <textarea className="input-box__input" />
        <button className="input-box__btn--default">전송</button>
      </form>
    </div>
  );
}

export default App;
