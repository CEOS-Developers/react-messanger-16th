import { Link } from "react-router-dom";
import styled from "styled-components";

const SettingButtons = () => {
  return (
    <ButtonWrapper>
      <Button onClick={() => window.open("https://github.com/kongnayeon")}>
        GitHub
      </Button>
      <Button onClick={() => window.open("https://kongnayeon.tistory.com/")}>
        Tistory
      </Button>
      <Link to={`/`}>
        <Button>Logout</Button>
      </Link>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  display: flex;
  border-radius: 25px;

  font-size: 1.5rem;
  height: 3rem;
  align-items: center;
  padding: 0rem 2rem 0rem 2rem;
  margin: 2rem;
  cursor: pointer;
  background: linear-gradient(180deg, #ffffff 0%, #aed1fc 100%);
`;

export default SettingButtons;
