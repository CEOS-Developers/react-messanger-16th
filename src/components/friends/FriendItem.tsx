import styled from 'styled-components';
import { User } from '../../interfaces/interfaces';

const FriendItem = (user: User) => {
  return (
    <UserItemWrapper>
      <UserImgWrapper isSelected={user.user_id === 1}>
        <UserImg src={user.user_img} />
      </UserImgWrapper>
      <UserContentWrapper>
        <UserName>{user.user_name}</UserName>
        <UserMsg>{user.user_msg}</UserMsg>
      </UserContentWrapper>
    </UserItemWrapper>
  );
};

const UserItemWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 0.7rem;
`;

const UserImgWrapper = styled.div<{ isSelected: boolean }>`
  width: ${(props) => (props.isSelected ? '3.5rem' : '3rem')};
  height: ${(props) => (props.isSelected ? '3.5rem' : '3rem')};

  border-radius: 40%;
  overflow: hidden;
`;

const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.4rem;
`;

const UserName = styled.div`
  padding-top: 0.3rem;
  font-size: 0.9rem;
  font-weight: 600;
`;

const UserMsg = styled.div`
  font-size: 0.7rem;
  color: gray;
`;

export default FriendItem;
