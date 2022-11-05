import { Column } from '../elements/Wrapper.style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SettingPage = () => {
  return (
    <Column>
      <span style={{ fontWeight: '800', fontSize: '18px', marginBottom: '20px', padding: '24px 20px 0px 20px' }}>
        정보
      </span>
      <InfoBar href="https://github.com/CEOS-Developers/react-messenger-16th/pull/23">GITHUB</InfoBar>
    </Column>
  );
};

export default SettingPage;

const InfoBar = styled.a`
  width: 100%;
  height: 70px;
  /* background-color: aqua; */
  display: flex;
  justify-content: center;
  padding: 0px 20px 0px 20px;
  font-size: 20px;
  align-items: center;
  color: black;
  text-decoration: none;

  &:hover {
    background-color: #f4f3f3;
  }
`;
