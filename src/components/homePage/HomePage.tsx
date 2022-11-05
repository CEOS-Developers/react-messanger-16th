import { Container, Wrapper, NavigationBar, FriendContainer } from './HomePage.styled';
import ProfileIcon from '../../image/emoji/ProfileIcon';
import MessageIcon from '../../image/emoji/MessageIcon';
import SettingIcon from '../../image/emoji/SettingIcon';
import React from 'react';
import { useRecoilState } from 'recoil';
import { Outlet, useNavigate } from 'react-router';
import { selectedContentState } from '../../state/userState';

const HomePage = () => {
  const [selectedContent, setSelectedContent] = useRecoilState<string>(selectedContentState);
  const navigate = useNavigate();

  const onClickIcon = (event: React.MouseEvent<HTMLButtonElement>) => {
    const pathName = event.currentTarget.name;
    setSelectedContent(pathName);
    if (pathName === 'profile') {
      navigate('/');
    } else navigate(`/${pathName}`);
  };

  return (
    <Container>
      <Wrapper>
        <NavigationBar>
          <ProfileIcon name="profile" isSelected={selectedContent === 'profile'} onClickIcon={onClickIcon} />
          <MessageIcon name="chattingList" isSelected={selectedContent === 'chattingList'} onClickIcon={onClickIcon} />
          <SettingIcon name="setting" isSelected={selectedContent === 'setting'} onClickIcon={onClickIcon} />
        </NavigationBar>
        <FriendContainer>
          <Outlet />
        </FriendContainer>
      </Wrapper>
    </Container>
  );
};

export default HomePage;
