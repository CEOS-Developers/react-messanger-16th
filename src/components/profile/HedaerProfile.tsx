import { useRecoilState } from "recoil";
import styled from "styled-components";
import { currentId } from "../../store/recoil/recoil";
import { UserProfileImage } from "../style";

function UserProfile({
  userImage,
  userName,
  userId,
}: {
  userImage: any;
  userName?: string;
  userId: number;
}) {
  const [sender, setSender] = useRecoilState(currentId);

  function onClick() {
    setSender(userId);
  }

  return (
    <UserContainer>
      {userId === sender ? (
        <UserProfileImage
          src={`img/${userImage}.png`}
          brightness="brightness(50%)"
        />
      ) : (
        <UserProfileImage src={`img/${userImage}.png`} onClick={onClick} />
      )}
      <UserName>{userName}</UserName>
    </UserContainer>
  );
}

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const UserName = styled.div`
  font-size: 0.7rem;
  padding-top: 0.2rem;
`;

export default UserProfile;
