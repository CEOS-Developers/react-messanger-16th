import styled from 'styled-components';
import { User } from '../interfaces/interfaces';

const HeaderItem = (user: User) => {
  return (
    <UserItemWrapper>
      <UserImgWrapper>
        <UserImg src={user.user_img} isSelected={user.isSelected} />
      </UserImgWrapper>
      <UserName>{user.user_name}</UserName>
    </UserItemWrapper>
  );
};

const UserItemWrapper = styled.div`
  padding-top: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;
`;

const UserImgWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 40%;
  overflow: hidden;
`;

const UserImg = styled.img<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;

  filter: ${(props) => props.isSelected && 'brightness(50%)'};
`;

const UserName = styled.div`
  font-size: 0.75rem;
`;

export default HeaderItem;
