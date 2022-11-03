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
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding: 0;
`;

const Button = styled.button`
  display: flex;
  border-radius: 25px;
  border: 1px solid #000;
  text-decoration: none;
  color: #000;
  font-size: 1.5rem;
  height: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0rem 2rem 0rem 2rem;
  margin: 2rem;
  cursor: pointer;
  background: linear-gradient(180deg, #ffffff 0%, #aed1fc 100%);
`;

export default SettingButtons;
