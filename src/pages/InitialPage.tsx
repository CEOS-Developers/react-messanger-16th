import { Link } from "react-router-dom";
import styled from "styled-components";

const InitialPage = () => {
  return (
    <Container>
      <Div to="/FriendsList">들어가기</Div>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 1px 1px 2px 2px lightgrey;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 0.5rem;
  width: 24rem;
  height: 43rem;
  background: pink;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Div = styled(Link)`
  box-sizing: border-box;
  font-size: 0.8rem;
  padding: 1rem;
  border-radius: 1rem;
  background: #fff;
  width: 10rem;
  color: #585858;
  text-decoration: none;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 4px #bdbdbd;
`;

export default InitialPage;
