import styled from 'styled-components';

const SettingsPage = () => {
  return (
    <SettingsPageContainer>
      <h3>더보기</h3>
      <LinkBox>
        <LinkText href="https://github.com/ch9eri/react-messanger-16th/tree/ch9eri">
          GitHub
        </LinkText>
      </LinkBox>
      <LinkBox>
        <LinkText href="https://velog.io/@ch9eri">Velog</LinkText>
      </LinkBox>
    </SettingsPageContainer>
  );
};

const SettingsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const LinkBox = styled.div`
  padding: 10px;
`;

const LinkText = styled.a`
  text-decoration: none;
  color: black;
`;

export default SettingsPage;
