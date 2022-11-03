import styled from 'styled-components';
import { User } from '../interfaces/interfaces';

const Friend = (user: User) => {
  return (
    <UserItemWrapper isSelected={user.isSelected}>
      <UserImgWrapper isSelected={user.isSelected}>
        <UserImg src={user.user_img} />
      </UserImgWrapper>
      <UserName>{user.user_name}</UserName>
    </UserItemWrapper>
  );
};

const UserItemWrapper = styled.div<{ isSelected: boolean }>`
  padding: 1rem 0 1rem;

  display: flex;
  align-items: center;

  gap: 0.7rem;
  border-bottom: ${(props) => (props.isSelected ? '1px solid lightgray' : '')};
`;

const UserImgWrapper = styled.div<{ isSelected: boolean }>`
  width: ${(props) => (props.isSelected ? '4rem' : '3rem')};
  height: ${(props) => (props.isSelected ? '4rem' : '3rem')};

  border-radius: 40%;
  overflow: hidden;
`;

const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserName = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
`;

export default Friend;
