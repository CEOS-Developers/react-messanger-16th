import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { activeId } from '../../recoil/store';
import { User } from '../../interface/user';

const Profile = ({ userId, userName, userImage }: User) => {
  const [active, setActive] = useRecoilState(activeId);
  const isSelected = active === userId;
  return (
    <Container>
      {active == userId ? (
        <>
          <ProfileImg src={`img/${userImage}.jpeg`} isSelected={isSelected} />
          <Name> {userName} </Name>
        </>
      ) : (
        <>
          <ProfileImg
            src={`img/${userImage}.jpeg`}
            onClick={() => setActive(userId)}
            isSelected={isSelected}
          />
          <Name> {userName} </Name>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-left: 1rem;
`;

const ProfileImg = styled.img<{ isSelected: boolean }>`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 1rem;
  cursor: pointer;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
`;

const Name = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;

export default Profile;
