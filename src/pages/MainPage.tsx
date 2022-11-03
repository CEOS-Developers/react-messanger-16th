import styled from "styled-components";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <MainPageContainer>
      <Link to={`/friends`}> hi </Link>
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
  justify-content: space-between;
`;
