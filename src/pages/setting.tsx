import MainBox from '../components/box/mainbox';
import styled from 'styled-components';

const SettingBox = styled.div`
  margin-top: 40px;
  text-align: center;

  a {
    color: black;
  }
`;

const Setting = () => {
  return (
    <MainBox>
      <SettingBox>
        <a href="https://github.com/YooSeonHo" target="_blank">
          github
        </a>
      </SettingBox>
    </MainBox>
  );
};

export default Setting;
