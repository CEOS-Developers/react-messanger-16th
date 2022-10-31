import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function MainPage() {
  const navigate = useNavigate();

  const goToChat = () => {
    navigate('/');
  };
  return (
    <div>
      <Link to="/list">리스트</Link>
      <AllTemplate></AllTemplate>
    </div>
  );
}

const AllTemplate = styled.div`
  width: 350px;
  height: 660px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 30px grey;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 38%;
  justify-content: center;
  align-items: center;
`;

export default MainPage;
