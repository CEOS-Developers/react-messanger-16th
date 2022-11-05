import styled from 'styled-components';
import ListHeader from '../components/list/ListHeader';

const Setting = () => {
  return (
    <Wrapper>
      <ListHeader title={'더보기'} />
      <ListContainer>
        <a
          href="https://github.com/9yujin/react-messenger-16th"
          target="_blank"
          rel="noreferrer"
        >
          <SettingButton>GitHub</SettingButton>
        </a>
        <a
          href="https://9yujin.tistory.com/84"
          target="_blank"
          rel="noreferrer"
        >
          <SettingButton>Blog</SettingButton>
        </a>
      </ListContainer>
    </Wrapper>
  );
};

export default Setting;

const Wrapper = styled.div`
  width: 100%;
`;

const ListContainer = styled.div`
  box-sizing: border-box;
`;

const SettingButton = styled.div`
  border: 8px;
  padding: 18px 0px;
  width: 100%;
  color: black;
  text-align: center;
  border-bottom: 1px solid #f4f4f4;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: #f7f8f8;
  }
`;
