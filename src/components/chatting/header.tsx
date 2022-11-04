import styled from 'styled-components';
import User from './../talk/user';
import { useNavigate } from 'react-router-dom';

const Head = styled.header`
  background-color: white;
  width: 100%;
  height: 15%;
  border: 10px black;
  border-radius: 10px 10px 0% 0%;
  display: flex;

  .back {
    margin-top: 10px;
    margin-left: 10px;
    width: 30px;
    height: 30px;
    margin-right: 0;
    border: none;
    border-radius: 10px;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <Head>
      <button className="back " onClick={() => navigate(-1)}>
        🔙
      </button>
      <User />
    </Head>
  );
};

export default Header;
