import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { User } from '../../interfaces/interfaces';
import { curUserState } from '../../recoil/recoil';

const HeaderItem = (user: User) => {
  const [curUser, setCurUser] = useRecoilState(curUserState);

  const handleClickChangeUser = (e: React.MouseEvent<HTMLDivElement>) => {
    setCurUser(user.user_id);
  };

  return (
    <UserItemWrapper>
      <UserImgWrapper onClick={handleClickChangeUser}>
        <UserImg src={user.user_img} isSelected={user.user_id === curUser} />
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
