import styled from "styled-components";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const FriendsPage = () => {
  return (
    <FriendsPageContainer>
      <Header leftChild="<" rightChild="🔍" />
      <p>친구 목록 페이지 </p>
      <Navigation />
    </FriendsPageContainer>
  );
};
const FriendsPageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(#bed7f9, white 30%, white 90%, #bed7f9);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default FriendsPage;
