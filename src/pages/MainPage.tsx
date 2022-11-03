import styled from "styled-components";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <MainPageContainer>
      <Link to={`/friends`}>
        <MainPageImage src={`${process.env.PUBLIC_URL}/images/mainPage.png`} />
        <ButtonWrapper>
          <Button>click to start</Button>
        </ButtonWrapper>
      </Link>
    </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(#bed7f9, white 30%, white 90%, #bed7f9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainPageImage = styled.img`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 0;
`;

const Button = styled.button`
  display: flex;
  border-radius: 50px;
  border: 1px solid #000;

  font-size: 2rem;
  height: 3.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 1.3rem;

  background: linear-gradient(180deg, #ffffff 0%, #aeff9c 100%);
`;
