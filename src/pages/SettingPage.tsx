import styled from "styled-components";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import SettingButtons from "../components/SettingButtons";

const SettingPage = () => {
  return (
    <SettingPageContainer>
      <Header leftChild="<" textChild="Settings" rightChild="⋮" />
      <SettingButtons />
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
