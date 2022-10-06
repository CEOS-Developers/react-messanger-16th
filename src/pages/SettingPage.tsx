import styled from "styled-components";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const SettingPage = () => {
  return (
    <SettingPageContainer>
      <Header leftChild="<" rightChild="⋮" />
      <p>환경 설정 페이지 </p>
      <Navigation />
    </SettingPageContainer>
  );
};
const SettingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(#aeff9c, white 30%, white 90%, #aeff9c);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default SettingPage;
